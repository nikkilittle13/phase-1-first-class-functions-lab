let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
return drivers.slice(0,2);
}

console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

console.log(returnLastTwoDrivers(drivers));

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) { function fareMultiplier(fare) {
    return fare * multiplier;
}
    return fareMultiplier;
}

const fareDoubler = function(fare) {
    const doubler = createFareMultiplier(2);
    return doubler(fare);
}

const fareTripler = function(fare) {
    const tripler = createFareMultiplier(3);
    return tripler(fare);
}

function selectDifferentDrivers(driversArray, driversFunction) {
    return driversFunction(driversArray);
}
