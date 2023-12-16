window.addEventListener('load', () => {
    const btn = document.querySelector("#btn");
    const img = document.querySelector(".img-con");
    const s = document.querySelector(".stop");
    const stopBtn = document.querySelector("#stopbtn");
    var audio = document.querySelector('#audio');
    const reload = document.querySelector("#reload");
    var count = 0;


    // alert
    const q = "Do you want to enter?\n(Press \"Ok\" if you want  \"Cancel\" if you don't)";
    
    if (confirm(q) == true) {
        // typing script
        var typed = new Typed(".typing", {
            strings: ["Helloooooo boo", "I'm back again with this hehe", "Let me tell you something", "You're beautiful, kind, soft person I ever know", "You'll get through all of your problems, you're strong", "Don't ever think to give up, okay?", "You did great, take care of yourself always", "I'm proud of you Valerie", "Always remember that I'm here for you", "I'll be there for you on your bad days or good days", "You can call me, text me, I will always giving the best for you", "Boo, you know I always hope that I can make you happy", "Did I make you happy?", "Because you make me happy", "Oh! You know, you're the first thought in my head when I wake up and the last thought in my mind when I go to sleep", "Believe me when I say I always think of you, no matter how busy I am", "Let me be there for you, let me take care of you", "I think that's it boo", "Love from me, Valerie" ],
            typeSpeed: 50,
            backSpeed: 30, 
            startDelay: 17000,
            loop: false
        });
        
        var typed = new Typed(".typing2", {
            strings: ["Hello Valerie", "I want to", "tell you something", "Press the button"],
            typeSpeed: 100,
            backSpeed: 40,
            startDelay: 1000,
            loop: false
        });        

        // button show
        const myTimeout = setTimeout(showbtn, 15000);
        
        function showbtn() {
            if (btn.classList.contains("hide")) {
                btn.classList.add("show");
                btn.classList.remove("hide");
            } else{
                btn.classList.add("hide");
                btn.classList.remove("show");
            }
        }
        
        const hiding = {
            getPicShow(){
                if(btn.innerHTML === "Show Message &#9658;"){
                    btn.innerHTML = "Hide Message &#9208;";
                } else{
                    btn.innerHTML = "Show Message &#9658;";
                }
        
                if (img.classList.contains("hide")) {
                    img.classList.add("show");
                    img.classList.remove("hide");
                } else{
                    img.classList.add("hide");
                    img.classList.remove("show");
                }
                
            },
            getBtnShow(){
                if (s.classList.contains("hide")) {
                    s.classList.add("show");
                    s.classList.remove("hide");
                } else{
                    s.classList.add("hide");
                    s.classList.remove("show");
                }
            },
            getAudio(){
                if(count == 0){
                    count = 1;
                    audio.play();
                    btn.innerHTML = "Hide Message &#9208;";
                } else {
                    count = 0;
                    audio.pause();
                    btn.innerHTML = "Show Message &#9658;";
                }
            }
        }
        
        
        // 1st button
        btn.addEventListener('click', () => {
        
            hiding.getPicShow();
            hiding.getBtnShow();
            hiding.getAudio();
            
            
        
        });
        
        // stop button for audio
        stopBtn.addEventListener('click', () => {
            hiding.getAudio();
            audio.pause();
            audio.currentTime = 0;
            hiding.getPicShow();
            hiding.getBtnShow();
            btn.innerHTML = "Show Message &#9658;";
        });
    } else {
        document.querySelector(".msg").innerHTML = "<h4>Unfortunately, this page was not able to be loaded,<br/>still Thank you for taking the time to visit my simple webpage.</h4><br/><br/><h5>Try to press \"Reload\" and press \"Ok\".</h5>";

        if (reload.classList.contains("hide")) {
            reload.classList.add("show");
            reload.classList.remove("hide");
        } else {
            reload.classList.add("hide");
            reload.classList.remove("show");
        }

        reload.addEventListener('click', () => {
            location.reload();
        })

        return false;
    }
});
