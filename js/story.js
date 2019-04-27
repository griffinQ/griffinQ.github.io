function iconQQ(){
	'use strict';
	var img=document.getElementById("imgQQ");
	img.src="icon/QQ2.png";

 }
 function iconQQ2(){
	'use strict';
	var img=document.getElementById("imgQQ");
	img.src="icon/QQ.png";

 }
function iconmusic(){
	'use strict';
	var img=document.getElementById("imgcloudmusic");
	img.src="icon/网易云.png";

 }
 function iconmusic2(){
	'use strict';
	var img=document.getElementById("imgcloudmusic");
	img.src="icon/网易云02.png";

 }
function icontwitter(){
	'use strict';
	var img=document.getElementById("imgtwitter");
	img.src="icon/微博.png";

 }
 function icontwitter2(){
	'use strict';
	var img=document.getElementById("imgtwitter");
	img.src="icon/微博02.png";

 }
function iconwechat(){
	'use strict';
	var img=document.getElementById("imgwechat");
	img.src="icon/微信.png";

 }
 function iconwechat2(){
	'use strict';
	var img=document.getElementById("imgwechat");
	img.src="icon/微信02.png";

 }
function playmusic(){
	'use strict';
	 musictime();
	var img=document.getElementById("stopbutton2");
	var imgicon=document.getElementById("musicicon1");
	var audio=document.getElementById("playmusic");
	if(audio.paused){
		img.src="icon/暂停.png";
		imgicon.src="icon/pause.png";
		audio.play();
		
	}
	else {
		img.src="icon/播放.png";
		imgicon.src="icon/play.png";
		audio.pause();
	}
	

}
var musicplayi=0;
var musicimgi=0;
function nextmusic(){
	'use strict';
	var audiosrc=["背景音乐/タイナカ彩智 - 一番星.mp3","背景音乐/Toni Braxton - Trippin (That's the Way Love Works).mp3","背景音乐/苏琛 - 最后一首情歌.mp3","背景音乐/Pianoboy - The truth that you leave.mp3"];  //所有歌曲的位置
	var audioimg=["背景音乐/一番星.png","背景音乐/Trippin.png","背景音乐/最后一首情歌.png","背景音乐/The truth that you leave.png"];//所有歌曲的背景
	var musicimg=document.getElementById("musicimg");//定义背景
	var musicplay=document.getElementById("playmusic");   //定义播放器
	var img=document.getElementById("stopbutton2");
	var imgicon=document.getElementById("musicicon1");
	var src;
	var imgsrc;
	if(musicplayi===audiosrc.length-1){
		musicplayi=0;
		musicimgi=0;
		imgsrc=audioimg[musicimgi];
		src=audiosrc[musicplayi];
	}
	else {
		musicimgi=musicimgi+1;
		imgsrc=audioimg[musicimgi];
	    src=audiosrc[++musicplayi];
	}
	musicplay.src=src;
	musicimg.style.backgroundImage="url(\'"+imgsrc+"\')";
	img.src="icon/暂停.png";
		imgicon.src="icon/pause.png";
		musicplay.play();
	       
}
function previousmusic(){
	'use strict';
	var audiosrc=["背景音乐/タイナカ彩智 - 一番星.mp3","背景音乐/Toni Braxton - Trippin (That's the Way Love Works).mp3","背景音乐/苏琛 - 最后一首情歌.mp3","背景音乐/Pianoboy - The truth that you leave.mp3"];  //所有歌曲的位置
	var audioimg=["背景音乐/一番星.png","背景音乐/Trippin.png","背景音乐/最后一首情歌.png","The truth that you leave.png"];//所有歌曲的背景
	var musicimg=document.getElementById("musicimg");//定义背景
	var musicplay=document.getElementById("playmusic");   //定义播放器
	var img=document.getElementById("stopbutton2");
	var imgicon=document.getElementById("musicicon1");
	var imgsrc;
	var src;
	if(musicplayi===0){
        musicplayi=audiosrc.length-1;
		 musicimgi=audioimg.length-1;
		src=audiosrc[musicplayi];
		imgsrc=audioimg[musicimgi];
	}
	else{musicplayi=musicplayi-1;
		 musicimgi=musicimgi-1;
	     src=audiosrc[musicplayi]; 
		 imgsrc=audioimg[musicimgi];
		}
	musicimg.style.backgroundImage="url(\'"+imgsrc+"\')";
	musicplay.src=src;
	img.src="icon/暂停.png";
		imgicon.src="icon/pause.png";
		musicplay.play();
	
}
function musictime(){
	'use strict';
	var audio=document.getElementById("playmusic");
	var time=parseInt(audio.currentTime);
	var sec=time;
	var alltime=parseInt(audio.duration);
	var minutetime="00";
	var alltimeminute="00";
	var alltimesec="00";
 
	if(time>=60){
		minutetime=parseInt(time/60);
		sec=time%60;
		if(minutetime<10){
			minutetime="0"+String(minutetime);
		}
		if(sec<10){
			sec="0"+String(sec);
		}
		
		
	}else {sec=time;
		  if(sec<10){
			sec="0"+String(sec);
		}}
	if(alltime>=60){
		alltimeminute=parseInt(alltime/60);
		alltimesec=alltime%60;
		if(alltimesec<10){
			alltimesec="0"+String(alltimesec);
		}
		if(alltimeminute<10){
			alltimeminute="0"+String(alltimeminute);
		}
		
	}else {
		alltimesec=alltime;
	}
	if(time===alltime){
		nextmusic();
	}
	document.getElementById("musicplaytime").innerHTML=minutetime+":"+sec+"/"+alltimeminute+":"+alltimesec;
	
						   

	
}
function musicprogress(){
	'use strict';
	var audio=document.getElementById("playmusic");
	  var nowtime=parseFloat(audio.currentTime);
	var alltime2=parseFloat(audio.duration);
	var s=(nowtime/alltime2)*100;
	var progress2=document.getElementById("nowprogress");
	progress2.style.width=s+"%";
}

function musicname(){
	'use strict';
	var audio=document.getElementById("playmusic");
	var a=document.getElementById("musicname");
	var name=audio.src;
	var index=name.lastIndexOf("\/");
	var musicname;
	if(name.indexOf("/")>0){
		musicname=name.substring(index+1,name.length-4);
		musicname= decodeURI(musicname);
		
	}
	else {
		musicname=name;
	}
	a.innerHTML=musicname;
	setInterval(musictime, 1000);
	setInterval(musicprogress, 0);

}
var n=1;
function left(){
	'use strict';
	var flag=document.getElementById("arrow");
	var controlmusic=document.getElementById("controlmusic");
	var leftslide=document.getElementById("leftslide");
	if(n===1){
		flag.src="icon/左箭头.png";
		controlmusic.setAttribute("class","controlmusic");
		n=n-1;
		
	}
	else {
		flag.src="icon/右箭头.png";
		controlmusic.class="controlmusic3";
		controlmusic.setAttribute("class","controlmusic2");
		n=n+1;
	}
}
function progresscontrol(){
	'use strict';
	var button=document.getElementById("progress-button");
	
}
function progressmouseadd(ev){
	'use strict';
	var audio=document.getElementById("playmusic");
	var nowwidth=document.getElementById("nowprogress");
	var allwidth=document.getElementById("all-progress");
	var allwidth2=document.getElementById("all-progress2");
	var img=document.getElementById("stopbutton2");
	var imgicon=document.getElementById("musicicon1");
	var eX=ev||window.event;
	var leftmost=allwidth.getBoundingClientRect().left;
	var a=eX.clientX-leftmost;	
	var Timeprecentage=a/120;
	var s=audio.duration;
	audio.pause();
	audio.currentTime=s*Timeprecentage;
	img.src="icon/播放.png";
		imgicon.src="icon/play.png";
	allwidth2.onmousemove=function(event){
	var eX2=event||window.event;
	var leftmost=allwidth.getBoundingClientRect().left;
	var a=eX2.clientX-leftmost;	
	var Timeprecentage=a/120;
	var s=audio.duration;
	audio.pause();
	audio.currentTime=s*Timeprecentage;
		img.src="icon/播放.png";
		imgicon.src="icon/play.png";
		
	};
	allwidth2.onmouseup=function(){
		  allwidth2.onmousemove = null;
                allwidth2.onmouseup = null;
	};
	
	
}


// JavaScript Document