
exports.test = function (req, res) {
    var result;
    //res.send(strJson);
    var strJson;

    var mysql = require('mysql');  //调用MySQL模块
    
    //创建一个connection
    var connection = mysql.createConnection({
        host: '127.0.0.1',   //主机
        user: 'root',        //MySQL认证用户名
        password: 'root',    //MySQL认证用户密码
        port: '3306',        //端口号
        database: 'dcp', 
    });
    
    //创建一个connection
    connection.connect(function (err) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        console.log('[connection connect]  succeed!');
    });
    
    ////执行SQL语句
    //connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    //    if (err) {
    //        console.log('[query] - :' + err);
    //        return;
    //    }
    //    console.log('The solution is: ', rows[0].solution);
    //    result = rows[0].solution;
    //    var data = { dir: 'kunhony', param: '' + result + '' };
    //    strJson = JSON.stringify(data);
    //    //res.render('helloworld', { title: 'Hello, World!', message: strJson });
    //});
    
    ////增
    //var userAddSql = 'insert into bt_run_log (clazs, mothod, line_num) values(?, ?, ?)';
    //var userAddSql_Params = ['2', '2', '2'];
    //connection.query(userAddSql, userAddSql_Params, function (err, result) {
    //    if (err) {
    //        console.log('[INSERT ERROR] - ', err.message);
    //        return;
    //    }
        
    //    console.log('--------------------------INSERT----------------------------');
    //    //console.log('INSERT ID:',result.insertId);        
    //    console.log('INSERT ID:', result);
    //    console.log('-----------------------------------------------------------------');
        
    //    res.render('helloworld', { title: 'Hello, World!', message: strJson, insResult: result.affectedRows });
    //});
    
    var myDate = new Date();
    connection.beginTransaction(function (err) {
        if (err) { throw err; }
        //增
        var userAddSql = 'insert into bt_run_log (clazs, mothod, line_num) values(?, ?, ?)';
        var userAddSql_Params = ['3', '2', myDate.toLocaleString()];        
        connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {
                connection.rollback(function () {
                    throw err;
                });
            }
            console.log('--------------------------INSERT----------------------------');
            //console.log('INSERT ID:',result.insertId);        
            console.log('INSERT ID:', result);
            console.log('-----------------------------------------------------------------');
            
            var userAddSql1 = 'insert into bt_run_log (clazs, mothod, line_num) values(?, ?, ?)';
            var userAddSql_Params1 = ['5', '2', myDate.toLocaleString()];
            connection.query(userAddSql1, userAddSql_Params1, function (err, result) {
                if (err) {
                    connection.rollback(function () {
                        throw err;
                    });
                }
                console.log('--------------------------INSERT----------------------------');
                //console.log('INSERT ID:',result.insertId);        
                console.log('INSERT ID:', result);
                console.log('-----------------------------------------------------------------');
                connection.commit(function (err) {
                    if (err) {
                        connection.rollback(function () {
                            throw err;
                        });
                    }
                    console.log('success!');
                    var data = { dir: 'kunhony', param: 'aa' };
                    strJson = JSON.stringify(data);
                    res.render('helloworld', { title: 'Hello, World!', message: strJson, insResult: 'success' });
                });
            });
        });
    });

    ////关闭connection
    //connection.end(function (err) {
    //    if (err) {
    //        return;
    //    }
    //    console.log('[connection end] succeed!');
    //});
}