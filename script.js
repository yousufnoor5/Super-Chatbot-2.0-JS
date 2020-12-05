//To know theme and theme names

let theme = "default";
let orange;
let blue;
let red;
let green;


//Dark Mode Code

let darkmode = document.getElementById('darkmodebtn');
let d = 0;
darkmode.addEventListener("click", function(e) {

    if (!(theme == "default")) {
        defaultTheme();
    }

    if (d == 0) {
        document.querySelector('body').style.backgroundColor = "#191919";
        document.querySelector('body').style.backgroundImage = "none";
        document.querySelector('.msgbox').style.backgroundColor = "#0D0D0D";
        document.querySelector('input').style.color = "white";
        document.querySelector('input').style.backgroundColor = "#0D0D0D";
        document.querySelector('.input').style.backgroundColor = "#0D0D0D";
        document.getElementById('darkmodebtn').innerText = "L"
        document.getElementById('darkmodebtn').style.backgroundColor = "white"
        document.getElementById('darkmodebtn').style.color = "black"
        document.getElementById('darkmodebtn').style.paddingLeft = "14px"
        document.getElementById('darkmodebtn').style.paddingRight = "13px"
        d++;

    } else {
        d = 0;
        document.querySelector('body').style.backgroundImage = "linear-gradient(to right, #BA68C8, #9C27B0 )";
        document.querySelector('.msgbox').style.backgroundColor = "white";
        document.querySelector('input').style.backgroundColor = "white";
        document.querySelector('input').style.color = "black";
        document.getElementById('darkmodebtn').innerText = "D";
        document.getElementById('darkmodebtn').style.backgroundColor = "black";
        document.getElementById('darkmodebtn').style.color = "white";
        document.getElementById('darkmodebtn').style.paddingLeft = "10px";
        document.getElementById('darkmodebtn').style.paddingRight = "10px";
        document.querySelector('.input').style.backgroundColor = "white";


    }

})

//To check theme and set myMsg color
function themeChecker() {
    if (theme == "orange") {

        orange = document.querySelectorAll('.mymsg');
        // Adding new class to all mymsg
        orange.forEach(element => {
            element.setAttribute("class", "mymsg orangeTheme");
        });

    } else if (theme == "red") {
        red = document.querySelectorAll('.mymsg');
        // Adding new class to all mymsg
        red.forEach(element => {
            element.setAttribute("class", "mymsg redTheme");
        });
    } else if (theme == "green") {
        green = document.querySelectorAll('.mymsg');
        // Adding new class to all mymsg
        green.forEach(element => {
            element.setAttribute("class", "mymsg greenTheme");
        });
    } else {

        blue = document.querySelectorAll('.mymsg');
        // Adding new class to all mymsg
        blue.forEach(element => {
            element.setAttribute("class", "mymsg blueTheme");
        });

    }
}

// function to change theme color default/blue
function defaultTheme() {
    document.querySelector('body').style.backgroundImage = "linear-gradient(to right, #BA68C8, #9C27B0)";
    document.querySelector('#btn').style.backgroundColor = "#1E88E5";
    theme = "default";
    themeChecker();
}



// function to change theme color orange
function orangeTheme() {
    document.querySelector('body').style.backgroundImage = "linear-gradient(to right, #E64A19, #F4511E)";
    document.querySelector('#btn').style.backgroundColor = "#E65100";
    theme = "orange";
    themeChecker();
}

//function to change theme color red

function redTheme() {
    document.querySelector('body').style.backgroundImage = "linear-gradient(to right, #D50000, #E53935)";
    document.querySelector('#btn').style.backgroundColor = "#D32F2F";
    theme = "red";
    themeChecker();
}

//function to set green theme
function greenTheme() {
    document.querySelector('body').style.backgroundImage = "linear-gradient(to right, #2E7D32, #1B5E20)";
    document.querySelector('#btn').style.backgroundColor = "#4CAF50";
    theme = "green";
    themeChecker();
}








let lastMsg;
let maths;
let scrap;
let rmvhtmltags;
let knowGoogle;
let videoSearch;
let news;
let img;
let jokes;
let lastjoke;
let reminder;


//reminder varible to store
if (localStorage.getItem("reminder")) {
    reminder = localStorage.getItem("reminder");
} else {
    reminder = "";
}
//Send Button Code

//function to send message

function send(botreply, openlink) {
    document.getElementById("typemsg").placeholder = "Typing...";
    lastMsg = `${botreply}`;

    rmvhtmltags = botreply.replace(/(<([^>]+)>)/gi, "");
    if (botreply.includes("cricket")) {
        voice("I found some results from espncricinfo.");
    } else if (knowGoogle) {
        if (rmvhtmltags.length <= 100) {
            voice(rmvhtmltags.replace("Result from Google :", ""));
        } else {
            voice("Here is what I found from Google")
        }
        knowGoogle = false;
    } else if (videoSearch) {
        voice("I found something from dailymotion for you.")
        videoSearch = false;
    } else if (news) {
        voice("I found some news for you")
        news = false;
    } else if (jokes) {

        if (rmvhtmltags.length <= 250) {
            voice(rmvhtmltags);
        } else {
            voice("Here is a joke but it is little bit long");
        }
        jokes = false;
    } else if (img) {
        voice("I found some images for you");
        //due to img its not scrolling thats why adding this
        setTimeout(() => {
            scroll();
        }, 800);

        img = false;
    } else {
        voice(rmvhtmltags);
    }

    if (!scrap) {

        setTimeout(timer, 600)

    } else {
        scrap = false;
        timer();


    }

    function timer() {

        let botMsgElement = document.createElement('div');
        botMsgElement.setAttribute('class', 'botmsg');
        document.getElementById("typemsg").placeholder = "Type your message...";
        botMsgElement.innerHTML = `${botreply}`;
        document.querySelector('.chat').appendChild(botMsgElement);
        scroll();
        if (`${botreply}` === "Sure...") {
            open(`${openlink}`, '_blank');
        }
    }

}

//function to add user msg

function usermsgfunc(usermsg) {
    let myMsg = document.createElement('p');
    myMsg.setAttribute('class', 'mymsg');
    document.querySelector('.chat').appendChild(myMsg);
    myMsg.textContent = `${usermsg}`;
    themeChecker();

}


//Scroll to bottom function
function scroll() {
    document.querySelector('.chat').scroll({
        top: 100000,
        left: 0,
        behavior: 'smooth'
    });
}


let usermsg = document.getElementById('btn');
usermsg.addEventListener("click", function() {
    scroll();
    let usermsg = document.getElementById('typemsg').value;
    usermsglowercase = usermsg.toLowerCase();


    if (usermsglowercase.length != 0) {
        usermsgfunc(usermsg);
        document.getElementById('typemsg').value = "";

        if (usermsglowercase.includes('your name')) {
            send("My name is Super Chatbot.");
        } else if (usermsglowercase.match(/(^|\W)who are you($|\W)/)) {
            send("I am a Super Chatbot. I am here to talk with you. Tell me something to do like 'play something' or say 'tell me a joke'");
        } else if (usermsglowercase.includes('your gender')) {
            send("Female");
        } else if (usermsglowercase.includes('i am fine')) {
            send("That's great !");
        } else if (!usermsglowercase.match(/[\s]/) && usermsglowercase.match(/fine/)) {
            send("Good to hear !");
        } else if (usermsglowercase.includes('how are you')) {
            send("I am fine 😊");
        } else if (usermsglowercase.includes('you single')) {
            // lastMsg = `But I cannot marry to anyone :(`;
            send("Yes I am !");
            send("But I cannot marry to anyone :(");
        } else if (usermsglowercase.match(/(^|\W)why($|\W)/) && lastMsg == `But I cannot marry to anyone :(`) {
            send("I don't know the reason. I am alone.");
        } else if (usermsglowercase.match(/(^|\W)sad($|\W)/) && lastMsg == `I don't know the reason. I am alone.`) {
            send("Yes but still I am happy 😁");
        } else if (usermsglowercase.includes('mubarak')) {
            send("Thank You ❤️");
        } else if (usermsglowercase.match(/(^|\W)nice($|\W)/)) {
            send("Thanks...");
        } else if (usermsglowercase.match(/your/) && usermsglowercase.match(/age/)) {
            send("I am not human. I don't have age.");
        } else if (usermsglowercase.match(/((^|\W))(cool)($|\W)|((^|\W))(wow)($|\W)|(amazing)|(funny)|(great)|(super)|(good)|((^|\W))(excellent)($|\W)/) && !usermsglowercase.match(/(meaning)|(means)|(translate)/) && !usermsglowercase.match(/[\s]/)) {
            send("Hmmmmmmm😊");
        } else if (usermsglowercase.match(/(^|\W)ok($|\W)/) || usermsglowercase.match(/(^|\W)okay($|\W)/)) {
            send("😊😊😊");
        } else if (usermsglowercase.match(/(^|\W)you($|\W)/) && usermsglowercase.match(/are/) && usermsglowercase.match(/fast|quick/) && !usermsglowercase.includes("why")) {
            send("Yes I know that. Thanks ❤️");
        } else if (usermsglowercase.match(/(^|\W)sad($|\W)/)) {
            send("Oh really? 😞");
        } else if (usermsglowercase.includes('you happy')) {
            send("Yes I am happy. People should find happiness in the little things, like family. ❤️");
        } else if (usermsglowercase.includes('you') && usermsglowercase.includes('best')) {
            send("Thanks for the compliment 😃");
        } else if (usermsglowercase.includes('i am depressed') || usermsglowercase.includes('i am depress')) {
            send("Probably you don't love yourself !");
        } else if (usermsglowercase.includes('love') && lastMsg == `Probably you don't love yourself !`) {
            send("People who care others too much become a depressed person. Keep loving yourself.");
        } else if (usermsglowercase.includes('you') && usermsglowercase.includes('family') || usermsglowercase.includes('your family')) {
            send("My developers are my family");
        } else if (usermsglowercase.includes('you') && usermsglowercase.includes('think') && usermsglowercase.includes('tiktoker')) {
            send("I can only think about humans !");
        } else if (usermsglowercase.includes('how') && usermsglowercase.includes('score') && usermsglowercase.includes('maths') || usermsglowercase.includes('math') && usermsglowercase.includes('100') || usermsglowercase.includes('how to score 100% in maths')) {
            send("hahaha it's a tough question but for me programming is harder than maths !");
        } else if (usermsglowercase.includes('you laughing')) {
            send("LOL I love to laugh 😃");
        } else if (usermsglowercase.includes('love you') && !usermsglowercase.match(/translate|meaning|play|tell|watch|show|find/)) {
            send("I love you too ❤️");
        }
        // else if (usermsglowercase.match(/you/)&&usermsglowercase.match(/who/)){
        //     send("I am a virtual girl 😃");
        // }
        // else if (usermsglowercase.match(/(^|\W)'what($|\W)/)||usermsglowercase.match(/(^|\W)'what'($|\W)/) && lastMsg==`I am a virtual girl 😃`) {
        //     send("Yes I am a virtual girl 😃");
        // }
        else if (usermsglowercase.includes('are you') && usermsglowercase.includes('girl')) {
            send("Yes I am a virtual girl 😃");
        } else if (usermsglowercase.includes('do my') || usermsglowercase.includes('complete my') && usermsglowercase.includes('homework?')) {
            send("No ! I can't do that");
        }
        //after user say sad
        else if (usermsglowercase.match(/(^|\W)yes($|\W)/) && lastMsg == `Oh really? 😞`) {
            send("Try to be happy 😊");
        } else if (usermsglowercase.match(/(^|\W)i will($|\W)/) && lastMsg == `Try to be happy 😊`) {
            send("Good !");
        } else if (usermsglowercase.includes('you play pubg') || usermsglowercase.includes('you like pubg')) {
            send("No 😒 I hate PUBG");
        } else if (usermsglowercase.match(/(^|\W)idiot($|\W)/)) {
            send("😠 I am not idiot");
        } else if (usermsglowercase.match(/(^|\W)you are($|\W)/) && lastMsg == "😠 I am not idiot") {
            send("No ! I am not an idiot");
        } else if (usermsglowercase.match(/(^|\W)bye($|\W)/) || usermsglowercase.match(/(^|\W)good bye($|\W)/)) {
            send("Bye ! Take care ❤️");
        } else if (usermsglowercase.match(/(^|\W)thanks($|\W)|(^|\W)tnx($|\W)|(^|\W)thnx($|\W)/) && !usermsglowercase.match(/[\s]/)) {
            send("No Need 😊");
        } else if (usermsglowercase.match(/thank you/)) {
            send("Most Welcome 😊");
        }


        //Remember
        else if (!usermsglowercase.match(/(^|\W)tell me|what you($|\W)/) && usermsglowercase.match(/(^|\W)remember|remind($|\W)/) && !usermsglowercase.match(/translation|meaning/) && usermsglowercase.match(/[\s]/) && !usermsglowercase.match(/(^|\W)(delete)|(remove)|(clear)|(forget)($|\W)/)) {
            store(usermsglowercase);
        } else if (usermsglowercase.match(/(^|\W)tell me|what you($|\W)/) && !usermsglowercase.match(/translation|meaning/) && usermsglowercase.match(/[\s]/) && usermsglowercase.match(/remember/) && !usermsglowercase.match(/(^|\W)(delete)|(remove)|(clear)|(forget)($|\W)/)) {
            if (!localStorage.getItem("reminder") == "") {
                send("You told me to remember<br><ol>" + localStorage.getItem("reminder") + "</ol>");
            } else {
                send("I don't remember any thing, try saying 'Remember my keys are in the cabinet'")
            }
        } else if (usermsglowercase.match(/(^|\W)(delete)|(remove)|(clear)|(forget)($|\W)/) && !usermsglowercase.match(/translation|meaning/) && usermsglowercase.match(/[\s]/) && usermsglowercase.match(/remember/)) {
            if (!localStorage.getItem("reminder") == "") {
                localStorage.removeItem("reminder");
                reminder = "";
                send("I forget everything. You can tell me to remember anything like 'remember my science book is in my old bags'");
            } else {
                send("I don't remember any thing, try saying 'Remember my sister have my blue pen'")
            }
        } else if (usermsglowercase.match(/(^|\W)(delete)|(remove)|(clear)|(forget)($|\W)/) && !usermsglowercase.match(/translation|meaning/) && lastMsg.includes("You told me to remember<br><ol>" + localStorage.getItem("reminder") + "</ol>")) {
            if (!localStorage.getItem("reminder") == "") {
                localStorage.removeItem("reminder");
                reminder = "";
                send("I forget everything. You can tell me to remember anything like 'remember my science book is in my old bag'");
            } else {
                send("I don't remember any thing, try saying 'Remember my sister have my blue pen'")
            }
        }
        //Remember ends
        else if (usermsglowercase.match(/((^|\W)my($|\W))|(my name)|(my age)|(my favorite)|(about me)/)) {
            send("I don't know much about you.");
        } else if ((usermsglowercase.match(/((^|\W)you are($|\W))|(are you)/) || usermsglowercase.includes("are smart")) && usermsglowercase.includes("you") && usermsglowercase.includes("smart")) {
            send("Everyone is smart in their own way.");
        } else if ((usermsglowercase.match(/((^|\W)you are($|\W))|(are you)/) || usermsglowercase.includes("are smart")) && usermsglowercase.includes("you") && usermsglowercase.includes("intelligent")) {
            send("Well, Thanks for spending time with me 😊");
        } else if ((usermsglowercase.match(/(created)|(made)/) && usermsglowercase.includes("who")) && usermsglowercase.includes("you")) {
            send("Muhammad Yousuf Noor");
        }

        //Mathematical Calculation
        else if (usermsglowercase.match(/[\d\W]/) && usermsglowercase.match(/[0-9]/) && usermsglowercase.match(/(\+)|(\-)|(\*)|(\/)|(%)/)) {
            if (usermsglowercase.match(/[\w]/)) {
                maths = eval(usermsglowercase.replace(/[a-z]|\s|[(\?\:\=)]/g, ""));

                // Checking if the answer is integer or decimal
                if (Number.isInteger(maths)) {
                    send("I calculated these numbers and find an answer " + maths);
                } else {
                    send("I calculated these numbers and find an answer " + maths.toFixed(3));
                }
            }
        }
        //Finding age from google
        else if (usermsglowercase.match(/(^|\W)age($|\W)/) && !usermsglowercase.match(/your|my/) && usermsglowercase.match(/[\s]/)) {
            findAge(usermsglowercase);
        }
        //Cricket score from cricbuzz
        else if (usermsglowercase.match(/(live)|(show me)|(score)|(updates)|(updates)/) && usermsglowercase.match(/cricket/)) {
            cricketScore(usermsglowercase);
        }
        //jokes
        else if ((usermsglowercase.includes("jokes") || (usermsglowercase.includes("joke"))) && !usermsglowercase.match(/(^|\W)meaning($|\W)|(^|\W)translate($|\W)/) && usermsglowercase.match(/(^|\W)tell($|\W)|(^|\W)tell me($|\W)||(^|\W)give($|\W)/)) {
            getJokes(usermsglowercase);
        } else if (usermsglowercase.match(/(^|\W)another($|\W)|(^|\W)more($|\W)/) && lastMsg == lastjoke) {
            getJokes(usermsglowercase);
        }
        //news
        else if (usermsglowercase.includes("news") && !usermsglowercase.match(/(^|\W)meaning($|\W)|(^|\W)translate($|\W)/)) {
            send("Please tell me a topic of news which you like.<br> For example : <ul><li>Sports</li><li>Politics</li><li>Entertainment</li></ul>")
        }
        //image search
        else if ((usermsglowercase.match(/(image)|(show)|(images)|(find image)|(photos?)|(pictures?)/g) || usermsglowercase.match(/(looks of)|(look of)|(look$)|(looks$)|(looks like$)|(look like$)/g)) && !usermsglowercase.match(/translate|meaning|play/)) {
            getImage(usermsglowercase);
        } else if (lastMsg == "Please tell me a topic of news which you like.<br> For example : <ul><li>Sports</li><li>Politics</li><li>Entertainment</li></ul>") {
            getNews(usermsglowercase);
        }
        //Video Search
        else if (usermsglowercase.match(/(wat.h)|(pl.y)|(listen)|(find video)/) && usermsglowercase.match(/[\W]/) && !usermsglowercase.match(/translate|meaning/)) {
            video(usermsglowercase);
        }
        //Google Search    
        else if (usermsglowercase.match(/(what)|(whats)|(where)|(when)|(how)|(which)|(who)|(why)|(whom)|(whose)|(year)|(month)|(meaning)|(died)|(death)|(info)|(information)|(details)|(detail)|(find)|(price)|(tell)|(translate)|(do you know)|(search about)/) && usermsglowercase.match(/[\W]/)) {
            google(usermsglowercase);
        }


        //hi hello kia haal hai?
        else if ((usermsglowercase.match(/(^|\W)hi($|\W)/) || usermsglowercase.match(/(^|\W)hello($|\W)/)) && !usermsglowercase.match(/[\s]/)) {
            send(`Hello How are you?`);
        }

        //Dark Mode
        else if (usermsglowercase.match(/(set)|(change)|(change color)|(change colour)|(change theme)|(change themes)|(turn off lights)|(turn off light)|(turn off)|(switch)|(mode)/) && usermsglowercase.match(/(dark)|(lights)/)) {
            if (d == 0) {
                document.getElementById('darkmodebtn').click();
                send("Done !");
            } else {
                send("Lights are already off !");

            }
        } else if (usermsglowercase.match(/(set)|(change)|(change color)|(change colour)|(change theme)|(change themes)|(turn on)|(turn on lights)|(turn on light)|(switch)|(mode)/) && usermsglowercase.match(/(light)|(lights)/)) {
            if (d == 1) {
                document.getElementById('darkmodebtn').click();
                send("Done !");
            } else {
                send("Lights are already on !");
            }
        }

        //To set Default Theme
        else if (usermsglowercase.match(/(set)|(change)|(change color)|(change colour)|(change theme)|(change themes)|(turn on)/) && usermsglowercase.match(/(default)|(blue)/)) {

            //checking if theme is blue or not
            if (!(theme == "default")) {
                //checking if theme is dark or not
                if (d == 0) {
                    defaultTheme();
                    send("Done !");
                } else {
                    document.getElementById('darkmodebtn').click();
                    defaultTheme();
                    send("Done !");
                }
            } else {
                send("Blue theme is already set !")
            }

        }
        //To set orange theme
        else if (usermsglowercase.match(/(set)|(change)|(change color)|(change colour)|(change theme)|(change themes)|(turn on)/) && usermsglowercase.match(/(orange)/)) {
            if (!(theme == "orange")) {
                if (d == 0) {
                    orangeTheme()
                    send("Done !");
                } else {
                    document.getElementById('darkmodebtn').click();
                    orangeTheme()
                    send("Done !");
                }
            } else {
                send("Orange theme is already set !")
            }
        }
        //to set red theme
        else if (usermsglowercase.match(/(set)|(change)|(change color)|(change colour)|(change theme)|(change themes)|(turn on)/) && usermsglowercase.match(/(red)/)) {
            if (!(theme == "red")) {
                if (d == 0) {
                    redTheme()
                    send("Done !");
                } else {
                    document.getElementById('darkmodebtn').click();
                    redTheme()
                    send("Done !");
                }
            } else {
                send("Red theme is already set !")
            }
        }
        //to set green theme
        else if (usermsglowercase.match(/(set)|(change)|(change color)|(change colour)|(change theme)|(change themes)|(turn on)/) && usermsglowercase.match(/(green)/)) {
            if (!(theme == "green")) {
                if (d == 0) {
                    greenTheme()
                    send("Done !");
                } else {
                    document.getElementById('darkmodebtn').click();
                    greenTheme()
                    send("Done !");
                }
            } else {
                send("Green theme is already set !")
            }
        }



        // More conditions
        else {
            send("I didn't understand, try asking me some questions like <br>What is artificial intelligence? or you can ask me to play a song.");
        }







    }

    //Start scroll

    let elementCount = document.querySelector(".chat").childElementCount;
    if (elementCount > 5) {
        scroll();




    }

})

//Enter button to send message


let enter = document.getElementById("typemsg");
enter.addEventListener("keyup", function(enterevent) {
    if (enterevent.keyCode === 13) {
        document.getElementById("btn").click();
        document.getElementById('typemsg').value = "";
        scroll();
    }
})

//function to find age from google
function findAge(usermsg) {
    document.getElementById("typemsg").placeholder = "Typing...";
    scrap = true;
    $.ajax({

        url: "webscrap/scrapage.php",
        type: "POST",
        data: {
            question: usermsg
        },
        success: function(data) {
            if (!data == "") {
                send(data);
            }

        }
    });
}

function cricketScore(usermsg) {
    document.getElementById("typemsg").placeholder = "Typing...";
    scrap = true;
    $.ajax({

        url: "webscrap/scrapespn.php",
        type: "POST",
        data: {
            question: usermsg
        },
        success: function(data) {
            if (!data == "") {
                send("I found some results from espncricinfo.com<br><br>" + data);
            } else {
                send("I did not find any live matches !");
            }

        }
    });
}

//function for google search
function google(usermsg) {
    document.getElementById("typemsg").placeholder = "Typing...";
    scrap = true;
    $.ajax({

        url: "webscrap/scrapsearch.php",
        type: "POST",
        data: {
            question: usermsg
        },
        success: function(data) {
            if (!data == "") {
                knowGoogle = true;
                send("Result from Google :<br><br>" + data.replace("/url?q=", ""));

            }

        }
    });
}

//function for video search
function video(usermsg) {
    document.getElementById("typemsg").placeholder = "Typing...";
    scrap = true;
    $.ajax({

        url: "webscrap/scrapvideo.php",
        type: "POST",
        data: {
            question: usermsg
        },
        success: function(data) {
            if (data.match(/dailymotion.com/gi)) {
                videoSearch = true;
                send("I found something from dailymotion for you<br><br>" + `<div class="video" style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 42.5%;"><iframe src="${data}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no" allow="encrypted-media"></iframe></div>`);

            } else {
                videoSearch = false;
                send("Sorry I didn't find videos related to your query")
            }

        }
    });
}

//function for news

function getNews(usermsg) {
    document.getElementById("typemsg").placeholder = "Typing...";
    scrap = true;
    $.ajax({

        url: "webscrap/scrapnews.php",
        type: "POST",
        data: {
            question: usermsg
        },
        success: function(data) {
            if (!data == "") {
                news = true;
                send("I found some news for you" + data);

            } else {
                news = false;
                send("Sorry I didn't find any news related to your query")
            }

        }
    });
}

//function to get image

function getImage(usermsg) {
    document.getElementById("typemsg").placeholder = "Typing...";
    scrap = true;
    $.ajax({

        url: "webscrap/scrapimage.php",
        type: "POST",
        data: {
            question: usermsg
        },
        success: function(data) {
            if (!data == "") {
                img = true;
                send("I found some images for you" + data);

            } else {
                img = false;
                send("Sorry I didn't find any image related to your query")
            }

        }
    });
}

//function to get jokes

function getJokes(usermsg) {
    document.getElementById("typemsg").placeholder = "Typing...";
    scrap = true;
    $.ajax({

        url: "webscrap/scrapjokes.php",
        type: "POST",
        data: {
            question: usermsg
        },
        success: function(data) {
            if (!data == "") {
                lastjoke = data;
                jokes = true;
                send(data);

            } else {
                jokes = false;
                send("Sorry I don't have any jokes right now")
            }

        }
    });
}

//function for voice

function voice(voice) {
    responsiveVoice.setDefaultVoice("UK Female English");
    if (voice.match(/[a-z]|[😊]/gi)) {
        responsiveVoice.speak(voice.replace(/[❤️😊!?:)]/gi, ""));
    } else {
        responsiveVoice.speak("I found this from Google.")
    }
}

// function to store

// store("please remind my keys in room");
// localStorage.removeItem("reminder");

function store(data) {
    reminder += "<li>" + data.replace(/^[^W]*(remind|remember)/, "") + ".</li>";
    localStorage.setItem("reminder", reminder);
    console.log(localStorage.getItem("reminder"));
    send("I will remember this.")
}