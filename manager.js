const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, salary, title, manager = null, employees) {
        super(name, salary, title, manager);
        this.employees = [];
        // if (this.manager === undefined) {
        //     this.manager = null
        // } else {
        //     this.manager = manager
        // }
    }
    addEmployee(employee) {
        if(employee === this){
         console("error, cannot add mager as their own employee")
         return
        }
        this.employees.push(...[employee]);
        employee.manager = this;
        console.log(employee)

    }
}

const splinter = new Manager('Splinter', 100000, 'Sensai');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

splinter.addEmployee(leo);
splinter.addEmployee(mikey);
splinter.addEmployee(donnie);
splinter.addEmployee(raph);

console.log('After: ', splinter);





try {
    module.exports = Manager


} catch {
    module.exports = null;
}
