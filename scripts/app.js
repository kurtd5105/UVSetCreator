(function(){
	var rows = 1;
	var cols = 1;
	var entriesAvailable = false;
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
			if(this.rowEntry > 0 && this.colEntry > 0){
				if(this.entriesAvailable == false){
					this.entriesAvailable = true;
					this.entries = [{name:null, range:null}];
				}
				
			}
			this.rowEntry = null;
			this.colEntry = null;
		}
		this.resetEntries = function(){
			this.entries = [{name:null, range:null}];
		}
		this.addEntry = function(){
			this.entries.push({name:null, range:null});
		}
		this.refreshImage = function(){
			this.imagePath = this.imageInput;
		}
	});
})();
