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
					this.entries = [{name:null, range:null}];
				}
				
			}
			this.rowEntry = null;
			this.colEntry = null;
		}

		//Reset the entries and also the output if there is any
		this.resetEntries = function(){
			this.entries = [{name:null, range:null}];
			this.output = null;
			this.outputCreated = false;
		}

		//Add an empty entry
		this.addEntry = function(){
			this.entries.push({name:null, range:null});
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
			this.outputCreated = outputCreated;
			this.imageInput = imagePath;
			this.rowEntry = null;
			this.colEntry = cnull;
		}

		//Create the UV sets for display in the text area
		this.createOutput = function(){
			var width = 1;
			var height = 1;
			var unitWidth = width/this.rows;
			var unitHeight = height/this.cols;
			//TODO: Process the entries based on the output

			this.outputCreated = true;
		}
	});
})();
