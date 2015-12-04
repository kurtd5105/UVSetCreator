(function(){
	var rows = 1;
	var cols = 1;
	var entriesAvailable = false;
	var outputCreated = false;
	var imagePath = "";
	var entries = [];
	var app = angular.module('animationCreator', []);
	app.controller('AnimationController', function(){
		this.debug = true;

		//Local variables
		this.rows = rows;
		this.cols = cols;
		this.entriesAvailable = entriesAvailable;
		this.entries = entries;//list with name, # start, # end
		this.imagePath = imagePath;
		this.output = "";
		this.outputCreated = outputCreated;

		//For use in the input fields
		var imageInput = imagePath;
		var rowEntry = rows;
		var colEntry = cols;
		this.setDimensions = function(){
			if(this.rowEntry > 0){
				this.rows = this.rowEntry;
			}
			if(this.colEntry > 0){
				this.cols = this.colEntry;
			}

			//If both rows and cols are valid then make entries visible
			if(this.rowEntry > 0 && this.colEntry > 0){
				//Init the entries list if it was previously unavailable
				if(this.entriesAvailable == false){
					this.entriesAvailable = true;
					this.entries = [{animName:null, range:null}];
				}
				
			}
			this.rowEntry = null;
			this.colEntry = null;
		}

		//Reset the entries and also the output if there is any
		this.resetEntries = function(){
			this.entries = [{animName:null, range:null}];
			this.output = "";
			this.outputCreated = false;
		}

		//Add an empty entry
		this.addEntry = function(){
			this.entries.push({animName:null, range:null});
		}

		//Change the image
		this.refreshImage = function(){
			this.imagePath = this.imageInput;
		}

		//Reset the whole page
		this.resetPage = function(){
			this.imagePath = "";
			this.imageInput = "";
			this.rows = rows;
			this.cols = cols;
			this.entriesAvailable = entriesAvailable;
			this.entries = entries;//list with name, # start, # end
			this.imagePath = imagePath;
			this.output = "";
			this.outputCreated = outputCreated;
			this.imageInput = imagePath;
			this.rowEntry = null;
			this.colEntry = null;
		}

		//Create the UV sets for display in the text area
		//UV set output format as follows:
		//alphanumeric name:                    {  decimal or integer number with comma after 3 times      number again } multiple times then ;
		//(    [[:alnum:]]+   :         (     \\{    ([[:digit:]](.[[:digit:]]+)?,){3} [[:digit:]] (.[[:digit:]]+)?   \\}       )+      ;      )+
		this.createOutput = function(){
			var width = 1;
			var height = 1;
			var unitWidth = width/this.rows;
			var unitHeight = height/this.cols;

			var fullRange = new RegExp("^((\\d+)-(\\d+))$");
			var csv = new RegExp("^((\\d+,)+\\d+)$");

			console.log("Creating output...");
			//TODO: Process the entries based on the output
			this.outputCreated = true;
			for(var entry of this.entries){
				if(entry.animName == null && entry.tag == null){
					console.log("Null entry.");
				}
				//Entry uses a range
				if(fullRange.test(entry.range)){
					console.log("Range.");
					var temp = entry.range;
					temp = temp.split('-');
					var limit = parseInt(temp[1], 10);
					this.output += entry.animName + ":{";
					for(var i = parseInt(temp[0], 10); i < limit; i++){
						//TODO: Create a UV set {x.x;x.x;x.x;x.x};
						this.output += "}";
					}
					//this.output += "Range.\n";
				//Entry is csv	
				} else if (csv.test(entry.range)){
					console.log("CSV.");
					//TODO: Parse entry into a UV set
				} else {
					this.output = "Syntax error: invalid range for " + entry.animName + ", given: " + entry.range;
					this.output += "\nExpected a number range or comma separated values. (e.g. a-d or a,c,d)";
				}
			}	
		}
	});
})();
