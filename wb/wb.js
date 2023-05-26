//  Your mission, should you choose to accept it, is to create a super cool function that takes a duration in seconds and converts it into a format that's totally user-friendly.

// Here's the deal: Your function needs to handle non-negative integers. If the duration is zero, simply return the snazzy word "now." But if we've got some seconds to work with, we want to express the duration in a combination of years, days, hours, minutes, and seconds.

// Let me break it down with a couple of examples to make it crystal clear:

// Example 1: If we have 62 seconds on our hands, your function should give us the hip output of "1 minute and 2 seconds." Can you dig it?

// Example 2: Let's take it up a notch with 3662 seconds. Your function should rock our world with the result "1 hour, 1 minute and 2 seconds." How awesome is that?

// For this challenge, we'll say a year has 365 days and a day consists of 24 hours. Keep that in mind, Matrix

// Now, let's talk style. We want our output to look slick, so here are a few guidelines:

// Each component should be a combo of a positive integer and a valid unit of time, like "4 seconds" or "1 year." If the integer is greater than 1, make sure to pluralize the unit of time. Rock on!
// Separate the components with a comma and a space (", "), except for the last one, which should be connected with an awesome "and." That's how we roll!
// Make sure the more significant units of time come before the less significant ones. So, "1 second and 1 year" won't fly, but "1 year and 1 second" is totally rad.
// Oh, and please don't repeat the same unit of time. We're all about variety here, so no "5 seconds and 1 second," okay?
// If a component's value is zero, don't include it at all. So "1 minute and 0 seconds" is a no-go, but just "1 minute" is totally fine.
// Finally, let's use each unit of time to the max. Don't give us "61 seconds" when you can deliver "1 minute and 1 second." The duration of each component shouldn't surpass any more significant unit of time. Got it?

const convertTo = seconds => {
    if (seconds < 1) {
        return "Now"
    }
    const timeInSeconds = {
        second: 1,
        minute: 60,
        hour: 3600,
        day: 86400,
        year: 31536000
    }
    const arr = ["year", "day", "hour", "minute", "second"]
    const newDict = {}
    let returnString = ""

    for (let unit = 0; unit < arr.length; unit++) {
        while (seconds / timeInSeconds[arr[unit]] >= 1) {
            seconds -= timeInSeconds[arr[unit]]
            if (newDict[arr[unit]]) {
                newDict[arr[unit]] += 1
            } else {
                newDict[arr[unit]] = 1
            }
        }
    }
    
    for (const k in newDict) {
        let unitName = "second"
        if (newDict[k] > 1) {
             unitName = k + 's'
        } 
        returnString += `${newDict[k]} ${unitName} ` 
    }

    return returnString
}
console.log(convertTo(662))
console.log(convertTo(3602))