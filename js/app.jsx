var data = {
   "events": [
      {
         "name": "Drink beer with French boys!", 
         "organizer": "Claire", 
         "description": "We just arrived in the city and are looking for nice Germany supporters to drink with! Oponents are welcome too! We are going to watch the Bayern match", 
         "tags": [
            "beer", 
            "germany", 
            "bayern Munich", 
            "football"
         ], 
         "attendies": 8, 
         "location": {
            "country": "Switzerland", 
            "city": "Lausanne", 
            "address": "Place de la riponne", 
            "name": "Great Escape"
         }, 
         "startTime": "14224527444", //utcTime 
         "endTime": "14224529444"
      },
      {
         "name": "Visit the city with locals", 
         "organizer": "Claire", 
         "description": "We just arrived in the city and are looking for nice Germany supporters to drink with! Oponents are welcome too! We are going to watch the Bayern match", 
         "tags": [
            "beer", 
            "germany", 
            "bayern Munich", 
            "football"
         ], 
         "attendies": 5, 
         "location": {
            "country": "Switzerland", 
            "city": "Lausanne", 
            "address": "Place de la riponne", 
            "name": "Great Escape"
         }, 
         "startTime": "14224527444", //utcTime 
         "endTime": "14224529444"
      },
      {
         "name": "Learn Spanish songs in an Irish pub", 
         "organizer": "Claire", 
         "description": "We just arrived in the city and are looking for nice Germany supporters to drink with! Oponents are welcome too! We are going to watch the Bayern match", 
         "tags": [
            "beer", 
            "germany", 
            "bayern Munich", 
            "football"
         ], 
         "attendies": 12, 
         "location": {
            "country": "Switzerland", 
            "city": "Lausanne", 
            "address": "Place de la riponne", 
            "name": "Great Escape"
         }, 
         "startTime": "14224527444", //utcTime 
         "endTime": "14224529444"
      }
   ]
}

var storedData = JSON.parse(window.localStorage.getItem("data"))
if(!storedData) {
   window.localStorage.setItem("data",JSON.stringify(data))
}

React.render(<ResultList events={data.events} />, document.getElementById('resultList'))

function search(query) {
   // Example of search function
   var storedData = JSON.parse(window.localStorage.getItem("data"))
   filteredEvents = storedData.events.filter(function(d) {
      return true;
   })
   React.render(<ResultList events={newData.events} />,document.getElementById('resultList'))
}
