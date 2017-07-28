window.onload = function() {
  

  var audio = new Audio('assets/sounds/theme.mp3');
  audio.loop = true;
  audio.play();

	var number = 10;
	var intervalId;
  var score = 0;



    $(".startbtn").one("click", function(){
      clearInterval(intervalId);
      var startSound = new Audio();
      startSound.src = "assets/sounds/nogood.mp3";
      startSound.play();
      
      setTimeout(function() {

          $(".timer").css("display", "inline");
    	    $(".start").css("display", "none");
          $(".startbtn").css("display", "none");
    	    $(".wrapper1").css("display", "inline");
    	    run1();
      
      }, 3000);
    });

    function run1() {
      
      intervalId = setInterval(decrement1, 1000);

      $(".triviaAns1").one("click", function () {
      clearInterval(intervalId);
      var temp = ($(this).val());

      if (temp !== "3") {      
        $(".a1w").css("display", "inline");
        stop1();  
      }

      else {
        $(".a1r").css("display", "inline");
        score++;
        stop1();
      }

      });
      
      }
    
    function decrement1() {
      
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 9) {
        startSound = new Audio();
        startSound.src = "assets/sounds/brother.mp3";
        startSound.play();
      };

      if(number === 0) {

        $(".a1w").css("display", "inline");
        stop1();

      }
	  }

  	
    function stop1() {
      
      clearInterval(intervalId);

      $(".wrapper1").css("display", "none");
      $(".timer").css("display", "none");
      
        setTimeout( function(){
          $(".a1w").css("display", "none");
          $(".a1r").css("display", "none");
          $(".timer").css("display", "inline");
          $(".wrapper2").css("display", "inline");
          run2();

        }, 4000);
    }

    
    function run2() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement2, 1000);

      $(".triviaAns2").one("click", function () {
      
      clearInterval(intervalId);

      var temp = ($(this).val());
    
      if (temp !== "3") {
        
        $(".a2w").css("display", "inline");
        stop2();
      }

      else {
        $(".a2r").css("display", "inline");
        score++;
        stop2();
        }
      });
      
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

        $(".a2w").css("display", "inline");
        stop2();
      }
    }
    
    function stop2() {
      
      clearInterval(intervalId);
      $(".wrapper2").css("display", "none");
      $(".timer").css("display", "none");
      
      setTimeout( function(){
        
        $(".timer").css("display", "inline");
        $(".a2w").css("display", "none");
        $(".a2r").css("display", "none");
        $(".wrapper3").css("display", "inline");
        
        run3();

      }, 4000);
    }
    




    function run3() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement3, 1000);
      $(".triviaAns3").one("click", function () {
        clearInterval(intervalId);
       var temp = ($(this).val());

        if (temp !== "1") {
          $(".a3w").css("display", "inline");
          stop3();
        }

        else {
          $(".a3r").css("display", "inline");
          score++;
          stop3();
        }

      });
      
    }
    
    function decrement3() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 8) {

        startSound = new Audio();
        startSound.src = "assets/sounds/gryffindor.wav";
        startSound.play();
      }

      if (number === 0) {
        $(".a3w").css("display", "inline");
        stop3();  

      }
    }
    
    function stop3() {
      clearInterval(intervalId);
      $(".wrapper3").css("display", "none");
      $(".timer").css("display", "none");
      
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a3w").css("display", "none");
        $(".a3r").css("display", "none");
        $(".wrapper4").css("display", "inline");
        run4();

      }, 4000);
    }
    

    function run4() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement4, 1000);
      $(".triviaAns4").one("click", function () {
        clearInterval(intervalId);
        var temp = ($(this).val());

        if (temp !== "3") {
          $(".a4w").css("display", "inline");
          stop4();
        }

        else {

          $(".a4r").css("display", "inline");
          score++;
          stop4();
        }

      });
    }
    
    function decrement4() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 8) {

        startSound = new Audio();
        startSound.src = "assets/sounds/require.mp3";
        startSound.play();

      }


      if (number === 0) {
        $(".a4w").css("display", "inline");
        stop4();  
      }

    }
    
    

    function stop4() {
      
      clearInterval(intervalId);
      $(".wrapper4").css("display", "none");
      $(".timer").css("display", "none");
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a4w").css("display", "none");
        $(".a4r").css("display", "none");
        $(".wrapper5").css("display", "inline");
        run5();
      }, 4000);
    }
    

    function run5() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement5, 1000);
    }
      $(".triviaAns5").one("click", function () {
        clearInterval(intervalId);
        var temp = ($(this).val());

        if (temp !== "4") {
        $(".a5w").css("display", "inline");
        stop5();
      }

        else {
        $(".a5r").css("display", "inline");
        score++;
        stop5();
      }

      }); 
    
    
    function decrement5() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      
      if (number === 0) {
        $(".a5w").css("display", "inline");
        stop5(); 
      }
    }
    
    function stop5() {
      clearInterval(intervalId);
        $(".wrapper5").css("display", "none");
      $(".timer").css("display", "none");
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a5w").css("display", "none");
        $(".a5r").css("display", "none");
        $(".wrapper6").css("display", "inline");
        run6();

      }, 4000);
    }


    function run6() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement6, 1000);
      }
      $(".triviaAns6").one("click", function () {
      clearInterval(intervalId);
        var temp = ($(this).val());

        if (temp !== "2") {
          $(".a6w").css("display", "inline");
          stop6();

        }

        else {
          $(".a6r").css("display", "inline");
          score++;
          stop6();

      }

      });
    
    function decrement6() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 8) {
        
        startSound = new Audio();
        startSound.src = "assets/sounds/obliviate.mp3";
        startSound.play();

      }

      if (number === 0) {

        $(".a6w").css("display", "inline");
        stop6();
      }
    }
    
    function stop6() {
      clearInterval(intervalId);
        $(".wrapper6").css("display", "none");
        $(".timer").css("display", "none");
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a6w").css("display", "none");
        $(".a6r").css("display", "none");
        $(".wrapper7").css("display", "inline");
        run7();
      }, 4000);

    }

    function run7() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement7, 1000);
    }
      $(".triviaAns7").one("click", function () {
      clearInterval(intervalId);
      var temp = ($(this).val());

        if (temp !== "4") {
          $(".a7w").css("display", "inline");
          stop7();
        }

        else {
          $(".a7r").css("display", "inline");
          score++;
          stop7();
        }

      });
    
    function decrement7() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      
      if (number === 7) {

      startSound = new Audio();
      startSound.src = "assets/sounds/wicked.mp3";
      startSound.play();

      }

      if (number === 0) {
        $(".a7w").css("display", "inline");
        stop7();  
      }
    
    }
    
    function stop7() {
      clearInterval(intervalId);
        $(".wrapper7").css("display", "none");
        $(".timer").css("display", "none");
      
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a7w").css("display", "none");
        $(".a7r").css("display", "none");
        $(".wrapper8").css("display", "inline");
        
        run8();

      }, 4000);

    }
    

    function run8() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement8, 1000);
    }
      $(".triviaAns8").one("click", function () {
          clearInterval(intervalId);
          var temp = ($(this).val());
          

          if (temp !== "4") {
          $(".a8w").css("display", "inline");
          stop8();
        }

          else {
          $(".a8r").css("display", "inline");
          score++;
          stop8();
        }

      });
    
    
    function decrement8() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 9) {

        startSound = new Audio();
        startSound.src = "assets/sounds/accepted.mp3";
        startSound.play();

      }

      if (number === 0) {
        
        $(".a8w").css("display", "inline");
        stop8(); 
      }
    }
    
    function stop8() {
      clearInterval(intervalId);
        $(".wrapper8").css("display", "none");
        $(".timer").css("display", "none");
      
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a8w").css("display", "none");
        $(".a8r").css("display", "none");
        $(".wrapper9").css("display", "inline");
        run9();

      }, 4000);
    }
    

    function run9() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement9, 1000);
    }
      $(".triviaAns9").one("click", function () {
        clearInterval(intervalId);
        var temp = ($(this).val());
        if (temp !== "2") {
          $(".a9w").css("display", "inline");
          stop9();
        }

        else {
          $(".a9r").css("display", "inline");
          score++;
          stop9();
        }

      });
    
    function decrement9() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      if (number === 0) {
        $(".a9w").css("display", "inline");
        stop9();
      }
    }
    
    function stop9() {
      clearInterval(intervalId);
        $(".wrapper9").css("display", "none");
        $(".timer").css("display", "none");
      
      setTimeout( function(){
        $(".timer").css("display", "inline");
        $(".a9w").css("display", "none");
        $(".a9r").css("display", "none");
        $(".wrapper10").css("display", "inline");
        run10();

      }, 4000);
    }


    function run10() {
      number = 10;
      $(".timer").html("Timer: <p></p>" + number);
      intervalId = setInterval(decrement10, 1000);
    }

      $(".triviaAns10").one("click", function () {    
        clearInterval(intervalId);
        var temp = ($(this).val());
        if (temp !== "1") {
        $(".a10w").css("display", "inline");
        stop10();

        }

        else {
        $(".a10r").css("display", "inline");
        score++;
        stop10();

        }

      });
    
    function decrement10() {
      number--;
      $(".timer").html("Timer: <p></p>" + number);
      
      if (number === 7) {

        startSound = new Audio();
        startSound.src = "assets/sounds/homenum-revelio.mp3";
        startSound.play();
      }

      
      if (number === 0) {
        $(".a10w").css("display", "inline");
        stop10();  

      }
    }
    
    function stop10() {
      clearInterval(intervalId);
        

        $(".wrapper10").css("display", "none");
        
      setTimeout( function(){
        $(".a10w").css("display", "none");
        $(".a10r").css("display", "none");
        $(".timer").css("display", "none");
        $(".wrapperScore").css("display", "inline");
        $("#Score").append("Your Score is: " + score + " / 10");

      }, 4000);
    }

}
