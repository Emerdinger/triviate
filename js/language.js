//NavBAR
navHome = document.querySelector('.nav-home');
navHowToPlay = document.querySelector('.nav-howtoplay');
navObjetive = document.querySelector('.nav-objetive');
navPlay = document.querySelector('.nav-play');
navSupport = document.querySelector('.nav-support');
navLogout = document.querySelector('.nav-logout');
sLanguage = document.querySelector('.s-language');

//Index
enjoy = document.querySelector('.enjoy');
updates = document.querySelector('.update');
updatesMonth = document.querySelector('.updates-month');
howToPlay = document.querySelector('.howtoplay');
hText = document.querySelector('.h-objetive');
objectiveGame = document.querySelector('.o-categoria');
oTitle = document.querySelector('.o-title');
oText = document.querySelector('.o-text');
cTitle = document.querySelector('.c-title');
cText = document.querySelector('.c-text');
rTitle = document.querySelector('.r-title');
rText = document.querySelector('.r-text');
conditions = document.querySelector('.conditions');

//Categories
tTitle1 = document.querySelector('.t-title-1');
tTitle2 = document.querySelector('.t-title-2');
tTitle3 = document.querySelector('.t-title-3');
sesion = document.querySelector('.sesion');
sports = document.querySelector('.sports');
sTitle = document.querySelector('.s-title');
sText = document.querySelector('.s-text');
sPlay = document.querySelector('.s-play');
knowledge = document.querySelector('.knowledge');
kTitle = document.querySelector('.k-title');
kText= document.querySelector('.k-text');
kPlay = document.querySelector('.k-play');
science = document.querySelector('.science');
snTitle = document.querySelector('.sn-title');
snText = document.querySelector('.sn-text');
snPlay = document.querySelector('.sn-play');
art = document.querySelector('.art')
aTitle = document.querySelector('.a-title')
aText = document.querySelector('.a-text')
aPlay = document.querySelector('.a-play')
animals = document.querySelector('.animals')
anTitle = document.querySelector('.an-title')
anText = document.querySelector('.an-text')
anPlay = document.querySelector('.an-play')
geography = document.querySelector('.geography')
gTitle = document.querySelector('.g-title')
gText = document.querySelector('.g-text')
gPlay = document.querySelector('.g-play')

//Login and Sign Up
lEmail = document.querySelector('.l-email');
lPassword = document.querySelector('.l-password');
lSend = document.querySelector('.l-send');
lMsg = document.querySelector('.l-msg');
lSignup = document.querySelector('.l-signup');
sRegister = document.querySelector('.r-register');
sSend = document.querySelector('.r-send');
sMsg = document.querySelector('.r-msg');
sSignin = document.querySelector('.r-signin');
lRecovery = document.querySelector('.l-recovery');
pRecovery = document.querySelector('.p-recovery');
pRecover = document.querySelector('.p-recover');


let en = readText("../language/en.json");
let interprete_en = JSON.parse(en);


if (localStorage.getItem('en') == 'true') {
    navHome.innerHTML = interprete_en.navHome
    navHowToPlay.innerHTML = interprete_en.navHowToPlay
    navObjetive.innerHTML = interprete_en.navObjetive
    navPlay.innerHTML = interprete_en.navPlay
    navSupport.innerHTML = interprete_en.navSupport
    auth.onAuthStateChanged(user => {
        if(user){
            navLogout.innerHTML = interprete_en.navLogOut      
        }
    })
    sLanguage.innerHTML = "EN"

    if (document.querySelector('.updates')) {
        enjoy.innerHTML = interprete_en.enjoy
        updates.innerHTML = interprete_en.updates
        updatesMonth.innerHTML = interprete_en.updatesMonth
        howToPlay.innerHTML = interprete_en.howToPlay
        hText.innerHTML = interprete_en.hText
        objectiveGame.innerHTML = interprete_en.objective
        oTitle.innerHTML = interprete_en.answer
        oText.innerHTML = interprete_en.answerText
        cTitle.innerHTML = interprete_en.compete
        cText.innerHTML = interprete_en.competeText
        rTitle.innerHTML = interprete_en.rewards
        rText.innerHTML = interprete_en.rewardsText
        conditions.innerHTML = interprete_en.conditions
    }

    if(document.querySelector('.categories-page')){
        tTitle1.innerHTML = interprete_en.tTitle1
        tTitle2.innerHTML = interprete_en.tTitle2
        tTitle3.innerHTML = interprete_en.tTitle3
        sesion.innerHTML = interprete_en.sesion
        sports.innerHTML = interprete_en.sports
        sTitle.innerHTML = interprete_en.sTitle
        sText.innerHTML = interprete_en.sText
        sPlay.innerHTML = interprete_en.play
        knowledge.innerHTML = interprete_en.knowledge
        kTitle.innerHTML = interprete_en.kTitle
        kText.innerHTML = interprete_en.kText
        kPlay.innerHTML = interprete_en.play
        science.innerHTML = interprete_en.science
        snTitle.innerHTML = interprete_en.snTitle
        snText.innerHTML = interprete_en.snText
        snPlay.innerHTML = interprete_en.play
        art.innerHTML = interprete_en.art
        aTitle.innerHTML = interprete_en.aTitle
        aText.innerHTML = interprete_en.aText
        aPlay.innerHTML = interprete_en.play
        animals.innerHTML = interprete_en.animals
        anTitle.innerHTML = interprete_en.anTitle
        anText.innerHTML = interprete_en.anText
        anPlay.innerHTML = interprete_en.play
        geography.innerHTML = interprete_en.geography
        gTitle.innerHTML = interprete_en.gTitle
        gText.innerHTML = interprete_en.gText
        gPlay.innerHTML = interprete_en.play
        conditions.innerHTML = interprete_en.conditions
    }

    if(document.querySelector('.login-page')){
        lEmail.innerHTML = interprete_en.lEmail
        lPassword.innerHTML = interprete_en.lPassword
        lSend.innerHTML = interprete_en.lSend
        lMsg.innerHTML = interprete_en.lMsg
        lSignup.innerHTML = interprete_en.lSignUp
        lRecovery.innerHTML = interprete_en.lRecovery
    }

    if(document.querySelector('.register-page')){
        lEmail.innerHTML = interprete_en.lEmail
        lPassword.innerHTML = interprete_en.lPassword
        sRegister.innerHTML = interprete_en.sRegister
        sSend.innerHTML = interprete_en.sSend
        sMsg.innerHTML = interprete_en.sMsg
        sSignin.innerHTML = interprete_en.sSignIn
    }

    if (document.querySelector('.password-page')){
        lEmail.innerHTML = interprete_en.lEmail
        pRecovery.innerHTML = interprete_en.pRecovery
        pRecover.innerHTML = interprete_en.pRecover
    }
}

function readText(local_route) {
    var text = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", local_route, false);
    xmlhttp.send();

    if (xmlhttp.status == 200) {
        text = xmlhttp.responseText;
    }

    return text;
}

function enSwtich(i){
    if (i == 'en'){
        localStorage.setItem('en', 'true');
        window.location.reload()
    }else{
        localStorage.removeItem('en')
        window.location.reload()
    }
}