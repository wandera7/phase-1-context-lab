/* Your Code Here */
const createEmployeeRecord = function(rawRecord){
    return {
      firstName: rawRecord[0],
      familyName: rawRecord[1],
      title: rawRecord[2],
      payPerHour: rawRecord[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  const findEmployeeByFirstName = function(collection, name){
    return collection.find(employee => employee.firstName === name)
  }
  const createEmployeeRecords = function(records){
    return records.map(record => createEmployeeRecord(record))
  }
  const dateMatch = function(dateStamp){
    return dateStamp.match(/\d{2,4}-\d{2}-\d{2}/)[0]
  }
  const hourMatch = function(dateStamp){
    return parseInt(dateStamp.match(/\d{4}$/)[0])
  }
  const createTimeInEvent = function(dateStamp){
    this.timeInEvents.push({
      type: 'TimeIn',
      date: dateMatch(dateStamp),
      hour: hourMatch(dateStamp)
    })
    return this
  }
  const createTimeOutEvent = function(dateStamp){
    this.timeOutEvents.push({
      type: 'TimeOut',
      date: dateMatch(dateStamp),
      hour: hourMatch(dateStamp)
    })
    return this
  }
  const hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(event => event.date == date)
    let timeOut = this.timeOutEvents.find(event => event.date == date)
    return (timeOut.hour - timeIn.hour) / 100
  }
  const wagesEarnedOnDate = function(date){
    let hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
  }
  const calculatePayroll = function(employeeRecords){
    return employeeRecords.reduce((total,employee) => { return total + allWagesFor.call(employee) }, 0)
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

