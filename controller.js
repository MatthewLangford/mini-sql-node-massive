let app = require('./index');

module.exports = {
    getPlanes: () =>{
        let db = app.get('db');
        db.get_planes([25],function (err, planes) {
            let p = planes;
            console.log(p)
        })
    }
};