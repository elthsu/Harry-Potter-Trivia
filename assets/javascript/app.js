window.onload = function() {
  

  var audio = new Audio('assets/sounds/theme.mp3');
  audio.loop = true;
  audio.play();

	var number = 10;
	var intervalId;


    $(".startbtn").one("click", function(){

      var startSound = new Audio();
      startSound.src = "assets/sounds/nogood.mp3";
      startSound.play();

      setTimeout(function(){

      $(".timer").css("display", "inline");
    	$(".start").css("display", "none");
      $(".startbtn").css("display", "none");
    	$(".wrapper1").css("display", "inline");
      
    	run1();

      $(".button").on("click", function () {

        console.log($(this).val());

      });


    }, 3000);

    });

    function run1() {
      
      intervalId = setInterval(decrement1, 1000);
    }
    
    function decrement1() {
      
      number--;
      $(".timer").html("Timer: <p></p>" + number);

      if (number === 9) {

        startSound = new Audio();
        startSound.src = "assets/sounds/brother.mp3";
        startSound.play();
      }

      if (number === 0) {
      stop1();  

      }
	 }
  	
    function stop1() {
      clearInterval(intervalId);

      $(".wrapper1").css("display", "none");
      $(".a1").css("display", "inline");
      $(".timer").css("display", "none");
      setTimeout( function(){
        $(".a1").css("display", "none");
        $(".timer").css("display", "inline");
        $(".wrapper2").css("display", "inline");
        run2();

      }, 4000);
    }

function run2() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement2, 1000);
    }
    
    function decrement2() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 8) {

        startSound = new Audio();
        startSound.src = "assets/sounds/lumosmaxima.mp3";
        startSound.play();
      }

      if (number === 0) {
      stop2();  

      }
   }
    
    function stop2() {
      clearInterval(intervalId);
      $(".wrapper2").css("display", "none");
      $(".a2").css("display", "inline");
      $(".timer").css("display", "none");
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a2").css("display", "none");
        $(".wrapper3").css("display", "inline");
        run3();

      }, 4000);
    }
    function run3() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement3, 1000);
    }
    
    function decrement3() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 6) {

        startSound = new Audio();
        startSound.src = "assets/sounds/gryffindor.wav";
        startSound.play();
      }

      if (number === 0) {
      stop3();  

      }
   }
    
    function stop3() {
      clearInterval(intervalId);
      $(".wrapper3").css("display", "none");
      $(".a3").css("display", "inline");
      $(".timer").css("display", "none");
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a3").css("display", "none");
        $(".wrapper4").css("display", "inline");
        run4();

      }, 4000);
    }
    function run4() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement4, 1000);
    }
    
    function decrement4() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 7) {

        startSound = new Audio();
        startSound.src = "assets/sounds/require.mp3";
        startSound.play();

      }

      if (number === 0) {
      stop4();  

      }
   }
    
    function stop4() {
      clearInterval(intervalId);
      $(".wrapper4").css("display", "none");
      $(".a4").css("display", "inline");
      $(".timer").css("display", "none");
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a4").css("display", "none");
        $(".wrapper5").css("display", "inline");
        run5();

      }, 4000);
    }
    function run5() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement5, 1000);
    }
    
    function decrement5() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 0) {
      stop5();  

      }
   }
    
    function stop5() {
      clearInterval(intervalId);
        $(".wrapper5").css("display", "none");
        $(".a5").css("display", "inline");
      $(".timer").css("display", "none");
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a5").css("display", "none");
        $(".wrapper6").css("display", "inline");
        run6();

      }, 4000);
    }
    function run6() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement6, 1000);
    }
    
    function decrement6() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 8) {
        
        startSound = new Audio();
        startSound.src = "assets/sounds/obliviate.mp3";
        startSound.play();

      }

      if (number === 0) {
      stop6();  
       

      }
   }
    
    function stop6() {
      clearInterval(intervalId);
       $(".wrapper6").css("display", "none");
        $(".a6").css("display", "inline");
      $(".timer").css("display", "none");
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a6").css("display", "none");
        $(".wrapper7").css("display", "inline");
        run7();

      }, 4000);

    }
    function run7() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement7, 1000);
    }
    
    function decrement7() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      
      if (number === 6) {

      startSound = new Audio();
      startSound.src = "assets/sounds/wicked.mp3";
      startSound.play();

      }

      if (number === 0) {
      stop7();  

      }
   }
    
    function stop7() {
      clearInterval(intervalId);
              $(".wrapper7").css("display", "none");
        $(".a7").css("display", "inline");
      $(".timer").css("display", "none");
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a7").css("display", "none");
        $(".wrapper8").css("display", "inline");
        run8();

      }, 4000);

    }
    function run8() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement8, 1000);
    }
    
    function decrement8() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 9) {

      startSound = new Audio();
      startSound.src = "assets/sounds/accepted.mp3";
      startSound.play();

      }

      if (number === 0) {
      stop8();  

      }
   }
    
    function stop8() {
      clearInterval(intervalId);
              $(".wrapper8").css("display", "none");
        $(".a8").css("display", "inline");
      $(".timer").css("display", "none");
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a8").css("display", "none");
        $(".wrapper9").css("display", "inline");
        run9();

      }, 4000);
    }
    

    function run9() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement9, 1000);
    }
    
    function decrement9() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 0) {
      stop9();  


      }
   }
    
    function stop9() {
      clearInterval(intervalId);
        $(".wrapper9").css("display", "none");
        $(".a9").css("display", "inline");
      $(".timer").css("display", "none");
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a9").css("display", "none");
        $(".wrapper10").css("display", "inline");
        run10();

      }, 4000);
    }


    function run10() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement10, 1000);
    }
    
    function decrement10() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 7) {

      startSound = new Audio();
      startSound.src = "assets/sounds/homenum-revelio.mp3";
      startSound.play();

      }

      if (number === 0) {
      stop10();  

      }
   }
    
    function stop10() {
      clearInterval(intervalId);
        $(".wrapper10").css("display", "none");
        $(".a10").css("display", "inline");
        $(".timer").css("display", "none");

    }

}
