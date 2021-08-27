
const showTime = function(){
    var today = new Date();
    var hrs = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    if(today.getHours >12){
        hrs-=12;
    }
    if(hrs==0){
        hrs=0;
    }
    let currentTime = (hrs+':'+min+':'+sec)
    console.log(currentTime)
    document.getElementById('myClock').innerHTML=currentTime;
}
setInterval(showTime,500)
