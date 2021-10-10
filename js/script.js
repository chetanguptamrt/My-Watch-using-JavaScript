var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
function setTime() {
	var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes()*6;
    var s = time.getSeconds()*6;
    if(time.getHours()>=12){
        h-=12;
    }
    h = (h*30)+(m/12)-90;
    m = m-90;
    s = s-90;
    console.log(h+" "+m+" "+s+" "+h)
    hour.style.transform = 'rotate('+h+'deg)';
    minute.style.transform = 'rotate('+m+'deg)';
    second.style.transform = 'rotate('+s+'deg)';
}
setTime();
setInterval(setTime, 900);