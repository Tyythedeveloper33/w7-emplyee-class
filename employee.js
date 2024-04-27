
class Employee {
    constructor(name, salary, title, manager = null, bonus) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
        this.bonus = bonus;

    if(manager){
        manager.addEmployee(this);

    }
    calculateBonus(multiplier); {
        incentative = (this.salary) * multiplier

    }
    }
}

// const leo = new Employee('Leonardo', 90000, 'Ninja');
// console.log(leo)

// do not modify below
try {
    module.exports = Employee
} catch {
    module.exports = null;
}
