// importing from other .j file
import createNewAirplane from './createNewAirplane.js'
import createNewFlight from "./createNewFlight.js"


//creating objects
let magic777 = createNewAirplane("magic", "777", 150)
let big747 = createNewAirplane("berha", "747", 300)

//creating flights

let maidenFlight = createNewFlight(
    'September 2',
    '10AM',
    '1PM',
    'Boston',
    'San Diego'

)

let vacationFlight = createNewFlight(
    'July 4',
    '5AM',
    '3PM',
    'Seattle',
    'Maui'

)

magic777.scheduleFlight(maidenFlight)
console.log(magic777)

magic777.scheduleFlight(vacationFlight)
console.log(magic777)

big747.scheduleFlight(maidenFlight)
console.log(big747)

big747.scheduleFlight(vacationFlight)
console.log(big747)