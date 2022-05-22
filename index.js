// Write your solution in this file!
const employee = {name:"Bob", streetAddress: '420 High st'}



const updateEmployeeWithKeyAndValue = (employee, key, value) =>{
    const newObj = {...employee}
    newObj.name = "Sam"
    newObj.streetAddress = "11 Broadway"
    return newObj
    
    
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee.streetAddress = value
    return employee
    

}

const deleteFromEmployeeByKey = (employee, key) => {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}


const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee.name
    return employee
}

