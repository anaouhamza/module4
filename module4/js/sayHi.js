(function (window){

    var Hy = {};
    var w = "Hello";
    
    Hy.speak = function (names) {
      console.log(w + " " + names);
    }
     
     window.Hy = Hy;
     
    })(window);