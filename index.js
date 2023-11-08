/* Your Code Here */
function createEmployeeRecord(array) {

    let employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

function createEmployeeRecords(employeeDataArray){
    return employeeDataArray.map(employeeData => createEmployeeRecord(employeeData))
}

function createTimeInEvent(dateStamp){
    // console.log(dateStamp)
    // console.log(employee)
    const [date, hour] = dateStamp.split(" ")
    // console.log(date)
    // console.log(hour)
    let timeObj = {
        type: "TimeIn",
        hour: Number(hour),
        date: date,
    }
    this.timeInEvents.push(timeObj)
    return(this)
}

function createTimeOutEvent(dateStamp){
    // console.log(dateStamp)
    // console.log(this)
    const [date, hour] = dateStamp.split(" ")
    // console.log(date)
    // console.log(hour)
    let timeObj = {
        type: "TimeOut",
        hour: Number(hour),
        date: date,
    }
    this.timeOutEvents.push(timeObj)
    return(this)
}

function hoursWorkedOnDate(date){
    let timeInEvent = this.timeInEvents.find(e => e.date === date)
    let timeOutEvent = this.timeOutEvents.find(e => e.date === date)
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
    // console.log(typeof date)
    let rate = Number(this.payPerHour)
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * rate
}


function findEmployeeByFirstName(srcArray, firstNameString){
    let nameComp = srcArray.map((e) => e.firstName)
    for(let i = 0; i < nameComp.length; i++){
        if(nameComp[i] === firstNameString){
            return srcArray[i]
        }
    }
    return undefined
}



function calculatePayroll(empArray){
    //loop over each employee in empArray
    //For each employee, call 'allWagesFor' to get the total wages for that employee
    //sum these wages into 'totalPayroll'
    let totalPayroll = empArray.reduce((total, employeeRecord) => {
        //accumulates a single value from the array
        return total + allWagesFor.call(employeeRecord);
        //the inside 'reduce','allWagesFor.call...' is used to calculate the total wages for each employee.
    }, 0);
    
    return totalPayroll;
    //the total for all employee wages is accumulated here
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

