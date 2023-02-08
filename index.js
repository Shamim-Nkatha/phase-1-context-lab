// TASK ONE
function createEmployeeRecord(fourElementArray) {
  let [firstName, familyName, title, payPerHour] = fourElementArray;
  let objectBuilt = {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
  return objectBuilt;
}
// TASK TWO
function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map((member) => {
    return createEmployeeRecord(member);
  });
}
// TASK THREE
function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });
  return this;
}
// TASK FOUR
function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  });
  return this;
}
// TASK FIVE
function hoursWorkedOnDate(dateArg) {
  let inEvents = this.timeInEvents.find((e) => e.date === dateArg);
  let outEvents = this.timeOutEvents.find((e) => e.date === dateArg);
  return (outEvents.hour - inEvents.hour) / 100;
}
// TASK SIX
function wagesEarnedOnDate(dateArg) {
  let raw = hoursWorkedOnDate.call(this, dateArg) * this.payPerHour;
  return parseFloat(raw.toString());
}
// TASK SEVEN
const allWagesFor = function () {
  let avaiableDates = this.timeInEvents.map((obj) => obj.date);
  let payable = avaiableDates.reduce(
    function (accumulator, value) {
      return accumulator + wagesEarnedOnDate.call(this, value);
    }.bind(this),
    0
  );
  return payable;
};
// TASK EIGHT
function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find((obj) => obj.firstName === firstNameString);
}
// TASK NINE
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((accumulator, value) => {
    return accumulator + allWagesFor.call(value);
  }, 0);
}