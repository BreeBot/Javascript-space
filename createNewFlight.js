

//new function



let createNewFlight = (date, takeoffTime, landingTime, origin, destination) =>{
    let newFlight = {
        date,
        takeoffTime,
        landingTime,
        origin,
        destination
    }
    return newFlight

}

export default createNewFlight