// window.onload = function(){
    let btn = document.getElementById('btn');
    let output = document.getElementById('output');
    let quote = [
        '"All limitations are self-imposed."                                            – Oliver Wendell Holmes',
        '"Tough times never last but tough people do."                                      – Robert H. Schiuller',
        '"Problems are not stop signs, they are guidelines."                                           – Robert H. Schiuller',
        '"One day the people that don’t even believe in you will tell everyone how they met you."                                    – Johnny Depp',
        '"If I’m gonna tell a real story, I’m gonna start with my name."                                           – Kendrick Lamar',
        '"If you tell the truth you don’t have to remember anything."                                           – Mark Twain',
        '"Have enough courage to start and enough heart to finish."                                           – Jessica N. S. Yourko',
        '"Hate comes from intimidation, love comes from appreciation."                                           – Tyga',
        '"I could agree with you but then we’d both be wrong."                                           – Harvey Specter',
        '"Oh, the things you can find, if you don’t stay behind."                                           – Dr. Seuss',

    ];

    var clicked = ()=>{
        var randomQuoate = quote[Math.floor(Math.random() * quote.length)]
        output.innerHTML = randomQuoate;
    }


    
