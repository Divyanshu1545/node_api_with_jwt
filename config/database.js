const mysql=require('mysql')
const pool= mysql.createPool({
    port:3306,
    user: process.env.DB_USER,
    password:process.env.DB_PASS,
    host:process.env.DB_HOST,
    database:process.env.MYSQL_DB,
    connectionLimit:"10"
})

module.exports=pool;