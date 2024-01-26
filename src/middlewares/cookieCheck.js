module.exports = (req, res, next) => {
    if (req.cookies.cookieColor && !req.session.userData) {
        req.session.userData = req.cookies.cookieColor;
        res.locals.user = req.session.userData;
    }
    next();
}
