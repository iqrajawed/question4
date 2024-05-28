const edate="30 May 2024 11:59:59 PM";
document.querySelector("#edate").innerText=edate;

const inputs=document.querySelectorAll("input");

function countdowntimer()
{
    const end=new Date (edate)
 const current = new Date();
 let diff =(end-current)/1000
if (diff<0) return;
 //convert into days
inputs[0].value=(Math.floor(diff/3600/24));
 //convert into hours
 inputs[1].value=(Math.floor(diff/3600%24));
 //convert into minutes
 inputs[2].value=(Math.floor(diff/60%24));
 //convert into minutes
 inputs[3].value=(Math.floor(diff%60));
 
}
setInterval(()=>{countdowntimer();},1000);