
// Component "Timer"
// created by: jortiz@singleb.it
// created on: 09/23/2013
//original js class source: http://www.dailycoding.com/Posts/object_oriented_programming_with_javascript__timer_class.aspx

enyo.kind({
	name: "Timer",
	kind: "Component",
    // Member variable: Hold interval id of the timer
    timerId: 0,    
    
    published:{
		// Property: Frequency of elapse event of the timer in millisecond
		interval: 1000,
		//Output format for getElapsed function, valid: s, m, m.X(X decimal spaces), h:m, h:m:s
		format: "m.2",
		enabled: false
	},
	// Intervals counter
	counter: 0,
    
	//Max Time (in interval counts): useful for an event with constant tick monitoring, will stop the timer automatically if provided
	maxTime: 0,
    // Event: Timer tick
    events:{
		//do on each interval
		onTick:"",
		//do on max time reached
		onMaxElapsed: ""
	},		
    // Member variable: Hold instance of this class
   // var thisObject;
    
    // Function: Start the timer
    start: function()
    {
        this.counter = 0;
        thisObject = this;
		this.enabled = new Boolean(true);
        this.timerId = setInterval(
            function()
            {
				thisObject.counter++;
				if(thisObject.counter >= thisObject.maxTime
					& thisObject.maxTime > 0){
					thisObject.doMaxElapsed(); 
					this.stop();
					return;
				}
                thisObject.doTick(); 
            }, thisObject.interval);   
    },
    
    // Function: Stops the timer
    stop: function()
    {            
        this.enabled = new Boolean(false);
		clearInterval(this.timerId);
    },
	getElapsed: function (format){
		if(!format){
			format = this.format;
		}
		if(format == 's'){
			return this.counter;
		}
		if(format == 'm'){
			return parseInt(this.counter)/60;
		}
		if(format.indexOf('m.')> -1){
			spaces = Math.pow(10,parseInt(format.split('.')[1]));
			//console.log(spaces);
			return Math.round(parseFloat(this.counter)/parseFloat(60)*spaces)/spaces;
		}
		return this.counter;
	}

});