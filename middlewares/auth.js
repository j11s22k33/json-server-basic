module.exports = (req, res, next) => {
    if (/signin|signup|refresh-token/.test(req.originalUrl)) {
        return res.json({
            accessToken: 'accessToken',
            refreshToken: 'refreshToken'
        })
    } else {
        next()
    }
}