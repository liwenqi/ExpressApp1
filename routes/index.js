function index(req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
}
exports.index = index;
;

function about(req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page.' });
}
exports.about = about;
;

function contact(req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page.' });
}
exports.contact = contact;
;

function helloworld(req, res) {
    var testModule = require('../public/javascripts/my/myj.js');
    testModule.test(req, res);
    //console.log(req.query.name);
    //console.log(req.query.email);
}
exports.helloworld = helloworld;
;
//# sourceMappingURL=index.js.map
