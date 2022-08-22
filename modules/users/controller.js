const model = require('./model');
const response = require('../../utils/response');
const auth = require('../../utils/auth');


class Employee {
    async create(req, res) {
        try {
            const body = req.body;
            const dataToSave = {}
            for (let key in body) {
                if (key == "password") {
                    dataToSave[key] = await auth.hashPassword(body[key]).then(hash => hash);
                }
                else if(key == "email"){
                    dataToSave[key] = body[key].toLowerCase();
                }
                else {
                    dataToSave[key] = body[key];
                }
            }
            const employee = await model.create(dataToSave);
            response.sendSuccess(res, employee);
        } catch (error) {
            response.sendSystemError(res, error);
        }
    }
    async get(req, res) {
        try {
            const meta = {};
            if (req.params.id) {
                const employee = await model.findById(req.params.id);
                response.sendSuccess(res, employee);
            }
            else {
                const page = req.query.page || 1;
                const limit = req.query.limit || 10;
                const skip = (page - 1) * limit;
                const query = req.query || {};
                delete query.page;
                delete query.limit;
                const employees = await model.find(query, {}, { skip, limit });
                const count = await model.count(query);
                meta.count = count;
                meta.page = page;
                meta.limit = limit;
                response.sendSuccess(res, employees, meta);
            }
        } catch (error) {
            response.sendSystemError(res, error);
        }
    }
    async update(req, res) {
        try {
            let id = req.params.id;
            if (!id) {
                response.sendError(res, "id is required");
            }
            const body = req.body;
            const dataToSave = {}
            for (let key in body) {
                if (key == "password") {
                    dataToSave[key] = await auth.hashPassword(body[key]).then(hash => hash);
                }
                else if(key == "email"){
                    dataToSave[key] = body[key].toLowerCase();
                }
                else {
                    dataToSave[key] = body[key];
                }
            }
            const employee = await model.findByIdAndUpdate(req.params.id, dataToSave);
            response.sendSuccess(res, employee);
        } catch (error) {
            response.sendSystemError(res, error);
        }
    }
    async delete(req, res) {
        try {
            const employee = await model.findByIdAndRemove(req.params.id);
            response.sendSuccess(res, employee);
        } catch (error) {
            response.sendSystemError(res, error);
        }
    }

    async login(req, res) {
        try {
            const body = req.body;
            if(body.email){
                body.email = body.email.toLowerCase()
            }
            const employee = await model.findOne({ email: body.email });
            if (!employee) {
                response.sendError(res, "Invalid email");
            }
            else {
                const isMatch = await auth.matchPassword(body.password, employee.password);
                if (isMatch) {
                    const token = await auth.generateAuthToken({
                        id: employee._id,
                        email: employee.email,
                        name: employee.name
                    });
                    res.header['Authorization'] = token;
                    response.sendSuccess(res,{token});
                }
                else {
                    response.sendError(res, "Invalid password");
                }
            }
        } catch (error) {
            response.sendSystemError(res, error);
        }
    }
    
}

module.exports = new Employee();