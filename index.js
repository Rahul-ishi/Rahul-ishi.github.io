let screen =document.getElementById('screen');
 buttons=document.querySelectorAll('button');
 let screenvalue=" "
for(items of buttons){
items.addEventListener('click',(e)=>{
    buttontext=e.target.innerText;
    console.log('Button text is ',buttontext);

    if(buttontext=="=")
    {
        screenvalue=screenvalue.replace("×","*")
        screenvalue=screenvalue.replace("÷","/")
        screen.value=eval(screenvalue);
        if(screen.value>0 ){
            speak("equals"+screen.value);
            screenvalue="";
        }  
        else{speak("equals minus"+screen.value);
        screenvalue="";}  
     
    }
    else if(buttontext=='×')
    {
        buttontext='×';
        speak("multiplied")
        screenvalue +=buttontext;
        screen.value=screenvalue;
    }
    else if(buttontext=='-')
    {
        buttontext='-';
        speak("minus")
        screenvalue +=buttontext;
        screen.value=screenvalue;
    }

    else if(buttontext=="AC")
    {
        screenvalue="";
        speak("Allclear")
        screen.value=screenvalue;
    }
    else if(buttontext=="T")
    {
        
        speak("ThemeChange")
        screen.value=screenvalue;
    }
    else if(buttontext=="CE")
    {
        screenvalue=screenvalue.slice(0,-1);
        screen.value=screenvalue;
        speak("ClearEntry");

    }
 
    else if(buttontext==".")
    {
        speak("point");
        screenvalue+=buttontext;
        screen.value=screenvalue;
    }


    else{
        screenvalue+=buttontext;
        speak(buttontext)
        screen.value=screenvalue;
    }
 

})
}
function speak(x)
{
let speech = new SpeechSynthesisUtterance();
speech.lang = "eng-US";
                
speech.text = x;
speech.volume = 1;
speech.rate = 1
speech.pitch = 100;
                
window.speechSynthesis.speak(speech);
}   


var theme = document.getElementById("btn1")

theme.onclick=function(){
    document.body.classList.toggle("dark");
}
 
