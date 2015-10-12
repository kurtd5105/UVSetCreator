(function(){
	var rows = 1;
	var cols = 1;
	var entriesAvailable = false;
	var imagePath = "";
	var entries = [{name:"test"}, {name:"test2"}];
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
			if(this.rows * this.cols < this.entries.length){
				this.entries = [];
			}
			this.rowEntry = null;
			this.colEntry = null;
		}
		this.refreshImage = function(){
			this.imagePath = this.imageInput;
		}
	});
})();
