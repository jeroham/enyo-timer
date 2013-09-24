
// Component "Timer"
// created by: jortiz@singleb.it
// created on: 09/23/2013
//original js class source: http://www.dailycoding.com/Posts/object_oriented_programming_with_javascript__timer_class.aspx

enyo.kind({
	name: Timer,
	kind: "Component",
    // Member variable: Hold interval id of the timer
    timerId: 0,    
    // Property: Frequency of elapse event of the timer in millisecond
    interval: 1000,
    // Property: Whether the timer is enable or not
    enable : new Boolean(false),
    
    // Event: Timer tick
    events:{
		onTick:""
	},		
    // Member variable: Hold instance of this class
   // var thisObject;
    
    // Function: Start the timer
    start: function()
    {
        this.Enable = new Boolean(true);

        thisObject = this;
        if (thisObject.Enable)
        {
            thisObject.timerId = setInterval(
            function()
            {
                thisObject.Tick(); 
            }, thisObject.Interval);
        }
    },
    
    // Function: Stops the timer
    stop: function()
    {            
        thisObject.Enable = new Boolean(false);
        clearInterval(thisObject.timerId);
    }

};