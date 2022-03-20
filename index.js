const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTables = require("console.table");

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'employees_db'
    },
    console.log('Connected to database')
);

// check for connection error
db.connect(function(err) {
    if (err) throw err;
    console.log(err);
    
    // if no error call inquirer prompt
    initialPrompt();
});

function initialPrompt() {
    inquirer
        .prompt(
            {
                name: "choice",
                type: "list",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update an employee role",
                    // "View employees by department",
                    // "Delete Employee",
                    "Quit",
                ],
                message: "What would you like to do? Select an option."  
            }
        )
        .then(function ({ choice }) {
            console.log(`${choice} was picked.`)
            
            switch (choice) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "view all roles":
                    viewRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an Employee":
                    addEmployee();
                    break;
                case "Update an employee role":
                    updateEmployee();
                    break;
                // case "View employees by department":
                //     viewEmployeeByDepartment();
                //     break;
                // case "Delete Employee":
                //     deleteEmployee();
                //     break;
                case "Quit":
                    db.end();
                    break;
            };
        });
};

function viewAllDepartments() {
    let query = "SELECT * FROM department";

    db.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        initialPrompt();
    });
};

function viewRoles() {
    let query = "SELECT * FROM roles";

    db.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        initialPrompt();
    });
};

function viewAllEmployees() {
    let query = "SELECT * FROM employee";

    db.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        initialPrompt();
    });
};

function addDepartment() {
    inquirer.prompt(
        {
            name: "DPName",
            type: "input",
            message: "What is the name of the department?"
        }
    )
    .then(function(answer) {
        db.query("INSERT INTO department (name) VALUES (?)", [answer.DPName], (err, res) => {
            if (err) throw err;
            console.log("New department added");
            console.table(res);
            initialPrompt();
        })
    })
};

function addRole() {
    inquirer.prompt(
        [{
            name: "roleTitle",
            type: "input",
            message: "What is the Title of the Role?",
        },
        {
            name: "roleSalary",
            type: "input",
            message: "What is the role's salary",
        },
        {
            name: "roleDP",
            type: "input",
            message: "Which department does the role belong (Enter 1 to 6)? (1)Sales, (2)Engineering, (3)Finance, (4)Legal, (5)Human Resources, (6)Executive",
        },]
    )
    .then(function(answer) {
        db.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleTitle, answer.roleSalary, answer.roleDP], (err, res) => {
            if (err) throw err;
            console.log("New role added");
            console.table(res);
            initialPrompt();
        })
    })
};

function addEmployee() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?",
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?",
        },
        {
            type: "input",
            name: "roleID",
            message: "What is the employee's role ID (1 to 11)?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager ID the employee works under (1, 3, 5, 7, 9, 11)?",
        },
    ])
    .then(function(answer){
        db.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], (err, res) => {
                if (err) throw err;
                console.table(res);
                initialPrompt();
            }
        )
    })
};

function updateEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Which employee would you like to update?",
          name: "employeeUpdate"
        },
  
        {
          type: "input",
          message: "What role do you want to update to (type in 1 to 11)?",
          name: "updateRole"
        },
      ])
      .then(function(answer) {
  
        db.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.employeeUpdate], (err, res) => {
          if (err) throw err;
          console.table(res);
          initialPrompt();
        });
      });
  };