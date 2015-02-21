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


var Result = React.createClass({
   render : function() {
      var eventData = this.props.eventData; 
      return (
         <div className="col-sm-4 portfolio-item">
           <a href="#portfolioModal1" className="portfolio-link">
               <div className="caption">
                   <div className="caption-content">
                       {eventData.Name}
                   </div>
               </div>
               <img src="img/icons/PNG/512/free-60-icons-31.png" className="img-responsive" alt=""></img>
           </a>
         </div>
      )         
   }

})
