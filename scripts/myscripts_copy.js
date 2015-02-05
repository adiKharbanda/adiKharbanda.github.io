// JavaScript Document



$(document).ready(function() {
	
	$("a").on("click",refer)
	
   
});
	
	function refer(){
		var test_id = this.id;
		console.log(this);
		if (this.id == 'a'){
		$(".test").show();	
		}
		else
		$(".test2").show();
	}
