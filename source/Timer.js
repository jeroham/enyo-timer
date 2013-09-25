
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
		//Output format for getElapsed function, valid: s, m, m.X(X decimal spaces), h:m:s
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
		this.enabled = true;
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
        this.enabled = false;
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
			return Math.round(parseFloat(this.counter)/parseFloat(60)*spaces)/spaces;
		}
		if(format.indexOf('h:m:s')> -1){
			var sec_num = parseInt(this.counter, 10); // don't forget the second parm
			var hours   = Math.floor(sec_num / 3600);
			var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
			var seconds = sec_num - (hours * 3600) - (minutes * 60);

			if (hours   < 10) {hours   = "0"+hours;}
			if (minutes < 10) {minutes = "0"+minutes;}
			if (seconds < 10) {seconds = "0"+seconds;}
			return hours+':'+minutes+':'+seconds;
		}
		
		return this.counter;
	}

});