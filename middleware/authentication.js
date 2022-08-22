const auth = require('../utils/auth');
const response = require('../utils/response');
const model = require('../modules/users/model');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            response.sendError(res, "token is required");
        }
        const user = auth.verifyToken(token);
        if (!user) {
            response.sendError(res, "invalid token");
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error)
        response.sendSystemError(res, error);
    }
}