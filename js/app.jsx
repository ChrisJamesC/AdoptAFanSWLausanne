var data = {
   "events": [
      {
         "Name": "Drink beer with German girls!", 
         "Organizer": "Claire", 
         "Description": "We just arrived in the city and are looking for nice Germany supporters to drink with! Oponents are welcome too! We are going to watch the Bayern match", 
         "Tags": [
            "Beer", 
            "Germany", 
            "Bayern Munich", 
            "football"
         ], 
         "Attendies": 12, 
         "Location": {
            "Country": "Switzerland", 
            "City": "Lausanne", 
            "Address": "Place de la riponne", 
            "Name": "Great Escape"
         }, 
         "startTime": "14224527444", //utcTime 
         "endTime": "14224529444"
      }, 
      {
         "Name": "Drink beer with German girls!", 
         "Organizer": "Claire", 
         "Description": "We just arrived in the city and are looking for nice Germany supporters to drink with! Oponents are welcome too! We are going to watch the Bayern match", 
         "Tags": [
            "Beer", 
            "Germany", 
            "Bayern Munich", 
            "football"
         ], 
         "Attendies": 12, 
         "Location": {
            "Country": "Switzerland", 
            "City": "Lausanne", 
            "Address": "Place de la riponne", 
            "Name": "Great Escape"
         }, 
         "startTime": "14224527444", //utcTime 
         "endTime": "14224529444"
      },
      {
         "Name": "Drink beer with Russian girls!", 
         "Organizer": "Claire", 
         "Description": "We just arrived in the city and are looking for nice Germany supporters to drink with! Oponents are welcome too! We are going to watch the Bayern match", 
         "Tags": [
            "Beer", 
            "Germany", 
            "Bayern Munich", 
            "football"
         ], 
         "Attendies": 12, 
         "Location": {
            "Country": "Switzerland", 
            "City": "Lausanne", 
            "Address": "Place de la riponne", 
            "Name": "Great Escape"
         }, 
         "startTime": "14224527444", //utcTime 
         "endTime": "14224529444"
      }
   ]
}

React.render(<ResultList events={data.events} />, document.getElementById('resultList'))
