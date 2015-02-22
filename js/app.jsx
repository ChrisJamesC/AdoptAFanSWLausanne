topEventList = [
   {
      "name": "World Cup 2014",
      "tags": "football worldwide pro soccer"
   },
   {
      "name": "Rio 2016",
      "tags": "olympics worldwide pro"
   },
]

var data = {
   "events": [
      {
         "name": "Drink beer with French boys!", 
         "organizer": "Claire", 
         "topEvent": 1, 
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
         "topEvent": 0,
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
         "topEvent": 0, 
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

////////////////////////////////////////////////
// Initial render
////////////////////////////////////////////////
function renderPage(events) {
    // Render new events
    var eventsToRender = events;
    if (!eventsToRender) { eventsToRender = JSON.parse(window.localStorage.getItem("data")).events }
    React.render(<ResultList events={eventsToRender} />, document.getElementById('resultList'));

    renderHeaderSearchEventsOptions();
}
renderPage();

////////////////////////////////////////////////
// Form to create new events
////////////////////////////////////////////////
var MyModal = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault()
    console.log(this.refs.name.getDOMNode())
    var newEvent = {
      name: this.refs.name.getDOMNode().value.trim(),
      organizer: this.refs.organizer.getDOMNode().value.trim(),
      topEvent: this.refs.topEvent.getDOMNode().value.trim(), 
      description: this.refs.description.getDOMNode().value.trim(),
      tags: this.refs.tags.getDOMNode().value.trim().split(' '),
      attendies:0, 
      location: {
         country: this.refs.country.getDOMNode().value.trim(), 
         city: this.refs.city.getDOMNode().value.trim(),
         address: this.refs.address.getDOMNode().value.trim(), 
         name: this.refs.locationName.getDOMNode().value.trim(), 
      },
      start: this.refs.start.getDOMNode().value.trim(),
      end: this.refs.end.getDOMNode().value.trim(),
   }
   console.log(newEvent)
   var storedData = JSON.parse(window.localStorage.getItem("data"))
   storedData.events.push(newEvent)
   window.localStorage.setItem("data",JSON.stringify(storedData))
   renderPage();
   this.props.onRequestHide();
  },
  render: function() {
    return (
        <ReactBootstrap.Modal {...this.props} title="Create New Event" animation={false}>
          <div className="modal-body">
             <form className="form-horizontal" onSubmit={this.handleSubmit}>
               <div className="form-group">
                  <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                  <div className='col-sm-10'>
                     <input type="text" ref='name' placeholder="Name" className="form-control"/>
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="inputOrganizer" className="col-sm-2 control-label">Organizer</label>
                  <div className='col-sm-10'>
                     <input type="text" ref='organizer' id='inputOrganizer' placeholder="Organizer"  className="form-control"/>
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="inputTopEvent" className="col-sm-2 control-label">Major Event</label>
                  <div className='col-sm-10'>
                     <select ref='topEvent' id='inputTopEvent' placeholder="Major Event"  className="form-control">
                        {
                           topEventList.map(function(d,i){
                              return <option value={i}>{d.name}</option>
                           })
                        }
                     </select>
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="inputDescription" className="col-sm-2 control-label">Description</label>
                  <div className='col-sm-10'>
                     <input type="textarea" ref='description' id='inputDescription' placeholder="Description"  className="form-control"/>
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="inputTags" className="col-sm-2 control-label">Tags</label>
                  <div className='col-sm-10'>
                     <input type="text" ref='tags' id='inputTags' placeholder="Tags"  className="form-control"/>
                  </div>
               </div>
               <h3>Location: </h3>
               <div className="form-group">
                  <label htmlFor="inputCountry" className="col-sm-2 control-label">Country</label>
                  <div className='col-sm-10'>
                     <input type="text" ref='country' id='inputCountry' placeholder="Country"  className="form-control"/>
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="inputCity" className="col-sm-2 control-label">City</label>
                  <div className='col-sm-10'>
                     <input type="text" ref='city' id='inputCity' placeholder="City"  className="form-control"/>
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="inputAdress" className="col-sm-2 control-label">Address</label>
                  <div className='col-sm-10'>
                     <input type="text" ref='address' id='inputAddress' placeholder="Address"  className="form-control"/>
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="inputLocationName" className="col-sm-2 control-label">Name</label>
                  <div className='col-sm-10'>
                     <input type="text" ref='locationName' id="inputLocationName" placeholder="Location's name" className="form-control"/>
                  </div>
               </div>
               <h3>Time: </h3>
               <div className="form-group">
                  <label htmlFor="inputStart" className="col-sm-2 control-label">Start</label>
                  <div className='col-sm-10'>
                     <input type="text" ref='start' id='inputStart' placeholder="Start"  className="form-control"/>
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="inputEnd" className="col-sm-2 control-label">End</label>
                  <div className='col-sm-10'>
                     <input type="text" ref='end' id='inputEnd' placeholder="End"  className="form-control"/>
                  </div>
               </div>
             <div className="modal-footer">
                  <ReactBootstrap.Button className="btn btn-warning" onClick={this.props.onRequestHide}>Close</ReactBootstrap.Button>
                  <input type="submit" className="btn btn-success" value="Submit"/>
             </div>
             </form>
          </div>
        </ReactBootstrap.Modal>
      );
  }
});

var overlayTriggerInstance = (
    <ReactBootstrap.ModalTrigger modal={<MyModal />}>
      <a>Create</a>
    </ReactBootstrap.ModalTrigger>
  );

React.render(overlayTriggerInstance, document.getElementById('createEventModalTrigger'));

////////////////////////////////////////////////
// Search
////////////////////////////////////////////////
function renderSearch(filteredEvents) {
    renderPage(filteredEvents);
}

function renderHeaderSearchEventsOptions() {
    React.render(<SearchEventOptions topEventList={topEventList} />, document.getElementById('header-search-select'));
}