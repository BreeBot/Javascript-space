
let createNewAirplane = (make, model, capacity) => {
    let airplane ={
        make,
        model,
        capacity,
        //adding a method to the object that is being returned
        //Add a new property into this object called flights which
        // starts as an empty array. Then, add a method to this object
        // called scheduleFlight which takes in a flight object as an argument,
        // and adds it into the flights array for a given plane.
        flights: [],
        scheduleFlight(flight){
            this.flights.push(flight);
        },

    }
    return airplane
    

}

export default createNewAirplane