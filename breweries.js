// Function that searches the Brewery API
function breweriesSearch(searchName) {
    fetch(`https://api.openbrewerydb.org/breweries?by_state=tennessee&by_city=nashville&by_name=${searchName}`)
        .then(breweries => breweries.json())
        .then(parsedBreweriesArray => {
// Loops through the API searching for brewery name from the users input
            
            parsedBreweriesArray.forEach(brewery => {
                console.log(brewery);
// Prints the name of the brewery to the resultsContainer and populates a save button
                document.querySelector("#resultsContainer").innerHTML += `<h3>${brewery.name}</h3> <button>Save</button>
                `



                // console.log(brewery.name)
            });


            // parsedBreweriesArray.forEach(element => {
            //     console.log(element.name)
            //     if(element.name)
            // })
        }
        )
}

// Listens for a click on the brewery search button
document.querySelector("#breweryBtn").addEventListener("click", function () {
// This variable represents whatever the user inputs into the Brewery search field
    const breweryValue = document.querySelector("#brewerySearch").value
  
// If there is a value in the search container, run the breweriesSearch function to try to match the search to the name of a brewery and clear the field
    if (breweryValue != "") {
        breweriesSearch(`${breweryValue}`);
        document.querySelector("#brewerySearch").value = "";
    }
// Otherwise print this error message
    else {
        document.querySelector("#resultsContainer").innerHTML = "Not a valid search. Please try again."
    }
})

    // breweriesSearch("")


    //breweriesSearch function should run when the Search Breweries button is pressed. Taking whatever is in the input field and searching it in the API. Then print the results to the DOM in #resultsContainer.

    // Step one: Click the button and console.log that it registered the click
    // Step two: Take the users input from the input field and run it through the breweriesSearch function.
    // Step three: Get the results and print the results in the DOM