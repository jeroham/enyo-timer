enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	
	components:[
		
		{kind: "onyx.Toolbar", content: "Hello Timer"},
		{kind: "enyo.Scroller", fit: true, components: [
			{name: "main", classes: "nice-padding", allowHtml: true},
			{kind: "Timer", name:"timer", onTick: "print", interval:1000,enabled:false, maxtime:5, onMaxElapsed:"helloWorldTap",format:"s"}
			
		]},
		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button", name:"starter",content: "Start Timer", ontap: "startStop"}
			
		]}
	],
	startStop: function(inSender, inEvent) {
		if(!this.$.timer.enabled){
			this.$.timer.start();
			this.$.main.setContent("Time elapsed: "+this.$.timer.getElapsed("h:m:s"));
			this.$.starter.setContent('Stop Timer');
		}
		else{
			this.$.main.addContent("<br />The Timer was stopped at "+this.$.timer.getElapsed("h:m:s")+"<br/>");
			this.$.starter.setContent('Start Timer');
			this.$.timer.stop();
		}
	},
	counter: 0,
	//timer: "",
	print: function(){
		this.$.main.setContent("Time elapsed: "+this.$.timer.getElapsed("h:m:s"));
	}
});
