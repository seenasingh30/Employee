const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'employee';
module.exports = {
  hashPassword: password =>
    new Promise(async (resolve, reject) => {
      try {
        await bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      } catch (e) {
        reject(e);
      }
    }),
  matchPassword: (plain, password) =>
    new Promise(async (resolve, reject) => {
      if (password && plain) {
        const isMatch = bcrypt.compare(plain,password)
        resolve(isMatch);
      } else {
        resolve(false);
      }
    }),
  generateAuthToken: criteriaForJwt => {
    return jwt.sign(criteriaForJwt, secret);
  },
  verifyToken: token => {
    return jwt.verify(token, secret);
  },
  findByToken: token => jwt.verify(token, secret)
};