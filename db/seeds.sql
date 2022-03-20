-- Select database for USE
USE employees_db;

-- Insert departments into db.
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Human Resources");
INSERT INTO department (name)
VALUES ("Executive");

-- Insert roles into db.
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Clerk", 40000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer Lead", 200000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Head Accountant", 150000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Head Legal Consultant", 200000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Consultant", 150000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", 125000, 5);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Clerk", 50000, 5);
INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 500000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Julius", "Doe", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Janet", "Doe", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Doe", 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jupiter", "Doe", 7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Juan", "Doe", 8, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jimmy", "Doe", 9, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Doe", 10, 9);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Amber", "Doe", 11, null);