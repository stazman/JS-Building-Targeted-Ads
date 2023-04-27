// get user's data

// Get the user's time:


// function userTime(){
//     const now = new Date()
//     console.log(now)
// }

//NOTE: Make sure to call the userTime function after you paste/write the declaration for userTime()

// userTime()

function userTime(){
    const now = new Date()
    return now.getHours()
}
console.log(userTime())


// Get the user's time:
function getMealTime(){
    const tod = userTime()

    // if (tod > 20) {return 'late-night snack'}
    // else if (tod > 16) {return 'dinner'}
    // else if (tod > 11) {return 'lunch'}
    // else {return 'breakfast'}

    // A ternary is another way to write an if-else statement
    // Another way to write the above lines would to refactor it as:
    return tod > 20 ? 'late-night snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast' // <--- this is an example of a ternary
}

  console.log(getMealTime())

// get user's coordinates

// Get the user's coordinates:
// function getCoords(){
//     navigator.geolocation.getCurrentPosition();
// }

// getCoords()


// Get the user's coordinates:
function getCoords(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

// console.log(getCoords());


// get user's time


// helper functions
// check time of day


// build ads
// build ad 1

// Build Ad 1:
function buildAd1(){
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(inner)
}
// buildAd1()


// build ad 2

// Build Ad 2
async function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}

// On load, build ads:
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}


// console.log(buildAd2(getCoords()))

// event listeners
// on load, build ads
