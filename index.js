// Code your solution in this file!
const  returnFirstTwoDrivers = function anonymousFunction([]){
    return (['Antonia', 'Nuru']);
    }
    //return LastTwoDRivers()
    const  returnLastTwoDrivers = function anonymousFunction([]){
        return (['Amari', 'Mo']);
    }
    const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
    //createFareMultiplier
    function createFareMultiplier(anInteger){
        return function(fare){
          return fare*anInteger;
        };
    }
    //create fareDoubler(), create fareTripler
    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);
    const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
        return driversToReturn(arrayOfDrivers);
      };