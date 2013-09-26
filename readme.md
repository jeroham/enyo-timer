Timer for Enyo 2
====================

About
-----

This is an Timer kind for Enyo 2. Tap/Click on an Timer item to toggle (open/close) that item. Only 1 item can be open at a time, however all items can be closed at the same time.


How to Use
----------

First include the Timer lib:

	<script src="../../../Timer/package.js" type="text/javascript"></script>

Then instantiate your Timer kind:

	{kind: "Timer", headerHeight: 40, onViewChange: "viewChanged", components: [
		
		// First item of Timer
		{kind: "TimerItem", headerTitle: "Timer Header 1", contentComponents:[
			// Add whatever you want here
		]},
		
		// Second item of Timer
		{kind: "TimerItem", headerTitle: "Timer Header 2", contentComponents:[
			// Add whatever you want here
		]}
		
	]}


Properties
----------

- headerHeight -> Integer: Specifies the height in pixels of the visible tap/click area for the Timer's items. Defaults to 40.


Methods
-------
	
- getItems() -> Returns an array of objects, containing the items in the Timer.
- toggleItem(index) -> Toggles (open/close) the index position item of the Timer. Ex: this.$.Timer.toggleItem( this.$.Timer.getItems()[ 0 ] )


Events
------

- onViewChange: "" -> Returns the object containing the currently open Timer item. Returns false if all items are toggled closed.


Demos
-----

- http://www.variablelimit.com/enyo/lib/germboy/Timer/examples/Timer-stretched/
- http://www.variablelimit.com/enyo/lib/germboy/Timer/examples/Timer-sized/\