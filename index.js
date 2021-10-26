const {Client} = require('pg')
const prompt = require('prompt-sync')();
const mysql      = require('mysql');

// for postgres
// const client = new Client({
//     host:"ec2-107-23-135-132.compute-1.amazonaws.com",
//     port:"5432",
//     user:"aghnsuruqqgbkb",
//     password:"d5b6724e7c4f03f8c5ea8c4fa53689fe3a47e3938dc8dc4d2e7fdac77fa31fce",
//     database:"df8ofig3oivksu"
// })

// for mysql
const client = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'online_vidya'
});

client.connect()

let obj = {
    sno:"",
    name:"",
    email:"",
    phone:"",
    course:""
}

    console.log("1. Insert")
    console.log("2. Display")
    const choice = prompt('Enter your choice: ');
    switch (parseInt(choice)) {
        case 1:
            obj.sno = prompt('Enter sno: ');
            obj.name = prompt('Enter name: ');
            obj.email = prompt('Enter email: ');
            obj.phone = prompt('Enter phone: ');
            obj.course = prompt('Enter course: ');
            let query = `INSERT INTO students (sno, name, phone, email, course) VALUES (${parseInt(obj.sno)},"${obj.name}", "${obj.phone}", "${obj.email}", "${obj.course}");`
            client.query(query,(err,res) => {
                if(!err){
                    console.log(res);
                    console.log("inserted")
                }else{
                    console.log(err.message);
                }
                client.end()
            })
     
            break;
        case 2:
            client.query('Select * from students',(err,res) => {
                if(!err){
                    console.log(res);
                }else{
                    console.log(err.message);
                }
                client.end()
            })
    
        default:
            break;
    
}

// client.query('Select * from students',(err,res) => {
//     if(!err){
//         console.log(res);
//     }else{
//         console.log(err.message);
//     }
//     client.end()
// })