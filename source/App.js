enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	
	components:[
		
		{kind: "onyx.Toolbar", content: "Hello Timer"},
		{kind: "enyo.Scroller", fit: true, components: [
			{name: "main", classes: "nice-padding", allowHtml: true},
			{kind: "Timer", name:"timer", onTick: "print", interval:1000, maxtime:5, onMaxElapsed:"helloWorldTap",format:"s"}
			
		]},
		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button", name:"starter",content: "Start Timer", ontap: "startStop"}
			
		]}
	],
	startStop: function(inSender, inEvent) {
		if(!this.$.timer.enabled){
			this.$.timer.start();
			this.$.main.addContent("Started...<br/>");
		}
		else{
			this.$.main.addContent("The Timer was stopped at "+this.$.timer.getElapsed()+"<br/>");
			this.$.timer.stop();
		}
	},
	counter: 0,
	//timer: "",
	print: function(){
		this.$.main.addContent("intervals: "+this.$.timer.getElapsed()+"<br/>");
	}
});
