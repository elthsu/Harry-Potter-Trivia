window.onload = function() {


	var number = 10;
	var intervalId;
	var i = 1


    $(".startbtn").on("click", function(){

 
    	$(".start").css("display", "none");
    	$(".wrapper1").css("display", "inline");
    	run();

    });


    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $(".timer").html("<h2>" + number + "</h2>");

      if (number === 0) {

      stop();

      $(".wrapper1").css("display", "none");
      $(".a1").css("display", "inline");
      
      
      }
	}

	function stop() {

      clearInterval(intervalId);
    }

	

    // function abc () {

    // 	for (var i = 0; i < 10; i++) {
    		
    // 		[i]
    // 	}
    // };
}
