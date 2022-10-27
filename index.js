// Code your solution in this file!
const drivers = [ 'Antonia', 'Nuru', 'Jack', 'Bob']
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = drivers => {return drivers.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare) {
    return function(calculate){
        return fare * calculate
    }
    
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, oneFunction ) {
    return oneFunction(drivers)

}