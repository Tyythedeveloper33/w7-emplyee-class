const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees;
        // if (this.manager === undefined) {
        //     this.manager = null
        // } else {
        //     this.manager = manager
        // }
    }
    addEmployee(employee) {
     employee.employees.push(employee)
                console.log(employee)

    }
}
const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log(splinter);

    splinter.addEmployee(splinter)

try {
    module.exports = Manager
} catch {
    module.exports = null;
}
