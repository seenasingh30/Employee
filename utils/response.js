const sendSuccess = (res, data,meta={}) => {
    res.status(200).json({
        success: true,
        data,
        meta
    });
}
const sendError = (res, error) => {
    res.status(400).json({
        success: false,
        error
    });
}
const sendSystemError = (res, error) => {
    res.status(500).json({
        success: false,
        error
    });
}
module.exports = {
    sendSuccess,
    sendError,
    sendSystemError
}