
// document.querySelector("#concertBtn").addEventListener("click", function (searchInput){
//     let searchInput = document.querySelector("#concertSearch").value
function searchForConcerts(searchInput) {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=SlYuccUz1PK4T04jD9wSKObKC8r37zIQ&city=nashville&classificationName=${searchInput}`)
        .then(concerts => concerts.json())
        .then(parsedEventsArray => {
            parsedEventsArray._embedded.events.forEach(concert => {
                if (concert.classifications[0].segment.name == "Music") {
                    //   console.log(concert.name, concert.classifications[0].genre.name)
                    let genre = concert.classifications[0].genre.name
                    let dates = new Date(concert.dates.start.localDate)
                    let today = new Date()
                    let todaysDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    let where = concert._embedded.venues[0].name
                    // console.log (todaysDate, dates)

                    //   const searchInput = document.querySelector("#concertSearch")

                    if (searchInput === genre && `${dates}` >= todaysDate) {
                        document.querySelector("#resultsContainer").innerHTML +=
                            `
                          <li>
                            ${concert.name} is playing at ${where} ${concert.dates.start.localDate}
                            <button id="saveBtn">Save</button>
                          </li>
                        `

                        // console.log(`${concert.name} is a ${searchInput} concert`)
                    } else {

                        // console.log(`${concert.name} is NOT a ${searchInput} concert!`)
                    
                    //     document.querySelector("#orderedList").innerHTML +=
                    //     `
                    //    </ol>
                    //    </div>`
                }
            }
        })
        

})
}       

document.querySelector("#concertBtn").addEventListener("click", function () {
    let searchValue = document.querySelector("#concertSearch").value
    document.querySelector("#resultsContainer").innerHTML = ` `
    
    if (searchValue != "") {
        searchForConcerts(`${searchValue}`);
        document.querySelector("#concertSearch").value = ""
    } else {
        document.querySelector("#resultsContainer").innerHTML = "Not a valid search. Please try again."
    }
})
