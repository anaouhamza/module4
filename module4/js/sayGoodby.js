(function (window){

    var Bye = {};
    var w = "Good Bye";
    
    Bye.speak = function (names) {
      console.log(w + " " + names);
    }
     
     window.Bye = Bye;
     
    })(window);