const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: employees_db
    },
    console.log('Connected to database')
);

// check for connection error
db.connect(function(err) {
    if (err) throw err;
    console.log(err);
    
    // if no error call inquirer prompt
    inquirerPrompt();
});

function inquirerPrompt() {
    inquirer
        .prompt(
            {
                type: "list",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update an employee role",
                    "View employees by department",
                    "Delete department",
                    "Delete role",
                    "Delete Employee",
                    "Quit",
                ]
            }
        );
};