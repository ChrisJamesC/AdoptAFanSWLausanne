var ResultList = React.createClass({
   render: function() {
      var data = this.props.events;
      return (
         <div className="row">
            {
               data.map(function(d,i) {
                  return <Result key={i} eventData={d}/>
               })
            }
         </div>
      )
   }
});

var EventSelect = React.createClass({
    render : function() {
        var topEventList = this.props.topEventList;

        return (
            <select className={"form-control " + this.props.selectClass}>
            {
                topEventList.map(function(d,i){
                    return <option value={i} key={i}>{d.name}</option>
                })
            }
            </select>
        );
    }
});

var style = {
   captionTest: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap"

   }
}

var EventModal = React.createClass({
  getInitialState: function() {
     return { participants: this.props.eventData.attendies};              
  },
  handleJoin: function() {
    var state = this.state;
    state.participants+=1;
   this.setState(state);           
  },
  render: function() {
   eventData = this.props.eventData;
    return (
        <ReactBootstrap.Modal {...this.props} title={eventData.name} animation={false}>
          <div className="modal-body">
            <div>
             Organized by <b>{eventData.organizer}</b>
             </div>
             <br/>
            <div>
             <b>{this.state.participants}</b> participants!
             </div>
             <br/>
             <div>
               As part of: {topEventList[eventData.topEvent].name}
             </div>
             <br/>
             <div>
                {eventData.description} 
             </div>
             <br/>
             <div>
               <i>{eventData.startTime}</i>
             </div>
             <div style={{color:'darkgray'}}>
               <b>
                {eventData.location.name}<br/>
                {eventData.location.address}<br/>
                {eventData.location.city}, {eventData.location.country}
               </b>
             </div>
             <br/>
             <div className='text-center'>
            <button className="btn btn-lg btn-success" onClick={this.handleJoin}>Join!</button>
            </div>
          </div>
          <div className="modal-footer">
          </div>
        </ReactBootstrap.Modal>
      );
  }
});

var Result = React.createClass({
   render : function() {
      var eventData = this.props.eventData; 
      return (
        <ReactBootstrap.ModalTrigger modal={<EventModal eventData={eventData} />}>
            <div className="col-sm-6 events-item events-item-fullsize" style={{backgroundImage: 'url(' + bgImages[Math.floor(Math.random() * bgImages.length)] + ')'}}>
                <div className="caption">
                    <div className="caption-content">
                      <img src="img/icons/PNG/512/free-60-icons-31.png" className="img-responsive caption-icon" alt=""></img>
                      <div style={style.captionTest}>
                        {eventData.name}
                      </div>
                      Participants: {eventData.attendies}
                    </div>
                </div>
            </div>
         </ReactBootstrap.ModalTrigger>
      )
   }
});
