// Code your solution here

//would probably be better to just format both strings as either lower or uppercase, used a regexp because I thought it was more interesting that it has a parameter that allows it to be case insensitive.
const findMatching = (driverArray, name) => driverArray.filter(driver => RegExp(driver, "i").test(name)); 

const fuzzyMatch = (driverArray, name) => driverArray.filter(driver => driver.startsWith(name));

const matchName = (driverArray, name) => driverArray.filter(driver => driver.name.startsWith(name));  