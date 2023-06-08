(
    function(){

        var names = ["Hamza","nabil","Jaouad","mohamed","ilyas","jumanji","jakob","Juliyan","Rachid","housine"];
        for (var i=0 ; i<names.length ; i++){
            var letter = names[i].charAt(0).toLowerCase();
            if (letter == 'j'){
                Bye.speak(names[i]);
            }
            else{
                Hy.speak(names[i]);
            }
        }



    }
)();