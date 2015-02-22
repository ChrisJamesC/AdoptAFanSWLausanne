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
})

var style = {
   captionTest: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap"

   }
}

var Result = React.createClass({
   render : function() {
      var eventData = this.props.eventData; 
      return (
         <div className="col-sm-3 events-item">
           <a className="events-link">
               <div className="caption">
                   <div className="caption-content">
                     <div style={style.captionTest}>
                     {eventData.name}
                     </div>
                     Participants: {eventData.attendies}
                   </div>
               </div>
               <img src="img/icons/PNG/512/free-60-icons-31.png" className="img-responsive" alt=""></img>
           </a>
         </div>
      )         
   }
})
