
$(document).ready(function(){
   $(".sounds").hide();

/* ======= start button ===========*/
    $("#logo button").click(function(){
        $("#backpage").css("z-index","6");
    });
    
/* ======= Menu button ============*/
    $("#menupage").slideUp();
    
    $("#backpage .div1 button").click(function(){
        $("#menupage").slideDown().css("z-index","7");
        $("#menu .mymenu_opt:nth-child(even)").css("animation","menu_opt-left both 1s .2s");
         $("#menu .mymenu_opt:nth-child(odd)").css("animation","menu_opt-right both 1s .2s");
         $("#backpage").css({"position":"fixed","pointer-events":"none"});
    });
    
/*========== Menu cross button =========*/
    $("#menu .mymenu button").click(function(){
        $("#menu").css("animation","exitmenu linear both 4s");
        setTimeout(function(){
           $("#menu").css("animation","none");
           $("#menupage").slideUp().css ("z-index","5");
           $("#backpage").css({"position":"","pointer-events":"all"});
        },4000);
});
           
/*========= play N pausesongs ===============*/
   var 
sounds=document.getElementsByClassName("sounds");

var 
keys=document.getElementsByClassName("playbutton");
for(var i=0;i<keys.length;i++){
    keys[i].addEventListener("click",function(){
    
/* ============ key1 ================== */
        if(this.id=="playkey1") {
        for(i=0; i<100; i++) { window.clearInterval(i); }
       
          if(sounds[0].paused){
          var track1= setInterval(function(){
             $("progress").attr("max",sounds[0].duration).attr("value",sounds[0].currentTime);
             
         },1000)
          
          $(".sounds:not(#s1)").trigger("pause").prop("currentTime","0");
          $(".playbutton img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
          
          sounds[0].play();
             $("#playkey1 img").attr("src","https://img.icons8.com/fluent/48/000000/pause.png");
             $(".beats .div1").css("animation","play1 1s both infinite");
             $(".beats .div2").css("animation","play2 1s both infinite");
             
             $(".beats .div3").css("animation","play3 1s both infinite");
             $(".beats .div4").css("animation","play4 1s both infinite");
             $("#mp .tracksong .nowplay marquee").text("• Sivuni Aana - Baahubali https// tsm.co ");
             
             }
             
            else {sounds[0].pause();
            $("#playkey1 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            }
            sounds[0].addEventListener("ended",function(){
              sounds[0].pause();
              clearInterval(track1);
            $("#playkey1 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            $("progress").attr("value","0");
        })
        }
        
/* ============ key2  ================== */
     else if(this.id=="playkey2") {
     
     for(i=0; i<100; i++) { window.clearInterval(i); }
       
         if(sounds[1].paused){
         var track2= setInterval(function(){
             $("progress").attr("max",sounds[1].duration).attr("value",sounds[1].currentTime);
             
             
         },1000)
         $(".sounds:not(#s2)").trigger("pause").prop("currentTime","0");
         
           $(".playbutton img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
           
         sounds[1].play();
             $("#playkey2 img").attr("src","https://img.icons8.com/fluent/48/000000/pause.png");
             $(".beats .div1").css("animation","play1 1s both infinite");
             $(".beats .div2").css("animation","play2 1s both infinite");
             
             $(".beats .div3").css("animation","play3 1s both infinite");
             $(".beats .div4").css("animation","play4 1s both infinite");
             $("#mp .tracksong .nowplay marquee").text("• Single Anthem - Bheeshma https// tsm.co ");
             }
             
            else {sounds[1].pause();
            $("#playkey2 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            }
            
            sounds[1].addEventListener("ended",function(){
              sounds[1].pause();
              clearInterval(track2);
            $("#playkey2 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            $("progress").attr("value","0");
        })
     }
     
/* ============ key3 ================== */
     else if(this.id=="playkey3"){
     for(i=0; i<100; i++) { window.clearInterval(i); }
       
     
         if(sounds[2].paused){
         var track3= setInterval(function(){
             $("progress").attr("max",sounds[2].duration).attr("value",sounds[2].currentTime);
             
             
         },1000)
         $(".sounds:not(#s3)").trigger("pause").prop("currentTime","0");
           $(".playbutton img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
         sounds[2].play();
             $("#playkey3 img").attr("src","https://img.icons8.com/fluent/48/000000/pause.png");
             $(".beats .div1").css("animation","play1 1s both infinite");
             $(".beats .div2").css("animation","play2 1s both infinite");
             
             $(".beats .div3").css("animation","play3 1s both infinite");
             $(".beats .div4").css("animation","play4 1s both infinite");
             $("#mp .tracksong .nowplay marquee").text("• Samajavaragamana - Alvp https// tsm.co ");
             }
             
            else {
            sounds[2].pause();
            $("#playkey3 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            }
            
            sounds[2].addEventListener("ended",function(){
              sounds[2].pause();
              clearInterval(track3);
            $("#playkey3 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            $("progress").attr("value","0");
        })
     }  
     
/* ============ key4  ================== */
     else if(this.id=="playkey4"){
     for(i=0; i<100; i++) { window.clearInterval(i); }
       
     
         if(sounds[3].paused){
         var track4= setInterval(function(){
             $("progress").attr("max",sounds[3].duration).attr("value",sounds[3].currentTime);
             
         },1000)
         $(".sounds:not(#s4)").trigger("pause").prop("currentTime","0");
           $(".playbutton img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
         sounds[3].play();
             $("#playkey4 img").attr("src","https://img.icons8.com/fluent/48/000000/pause.png");
             $(".beats .div1").css("animation","play1 1s both infinite");
             $(".beats .div2").css("animation","play2 1s both infinite");
             
             $(".beats .div3").css("animation","play3 1s both infinite");
             $(".beats .div4").css("animation","play4 1s both infinite");
             $("#mp .tracksong .nowplay marquee").text("• Namo Namo - Kedarnath https// tsm.co ");
             }
             
            else {sounds[3].pause();
            $("#playkey4 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            }
            
            sounds[3].addEventListener("ended",function(){
              sounds[3].pause();
              clearInterval(track4);
            $("#playkey4 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            $("progress").attr("value","0");
        })
     }
     
/* ============ key5  ================== */
     else if(this.id=="playkey5"){
     
     for(i=0; i<100; i++) { window.clearInterval(i); }
       
         if(sounds[4].paused){
         var track5= setInterval(function(){
             $("progress").attr("max",sounds[4].duration).attr("value",sounds[4].currentTime);
             
             
         },1000)
         $(".sounds:not(#s5)").trigger("pause").prop("currentTime","0");
           $(".playbutton img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
         sounds[4].play();
             $("#playkey5 img").attr("src","https://img.icons8.com/fluent/48/000000/pause.png");
             $(".beats .div1").css("animation","play1 1s both infinite");
             $(".beats .div2").css("animation","play2 1s both infinite");
             
             $(".beats .div3").css("animation","play3 1s both infinite");
             $(".beats .div4").css("animation","play4 1s both infinite");
               $("#mp .tracksong .nowplay marquee").text("• Khairiyat - Chhichhore https// tsm.co ");
             
             }
             
            else {sounds[4].pause();
            $("#playkey5 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            }
            
            sounds[4].addEventListener("ended",function(){
              sounds[4].pause();
              clearInterval(track5);
            $("#playkey5 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            $("progress").attr("value","0");
        })
     }
     
/* ============ key6 ================== */
     else if(this.id=="playkey6"){
     for(i=0; i<100; i++) { window.clearInterval(i); }
       
         if(sounds[5].paused){
         var track6= setInterval(function(){
             $("progress").attr("max",sounds[5].duration).attr("value",sounds[5].currentTime);
             
             
         },1000)
         $(".sounds:not(#s6)").trigger("pause").prop("currentTime","0");
           $(".playbutton img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
         sounds[5].play();
             $("#playkey6 img").attr("src","https://img.icons8.com/fluent/48/000000/pause.png");
             $(".beats .div1").css("animation","play1 1s both infinite");
             $(".beats .div2").css("animation","play2 1s both infinite");
             
             $(".beats .div3").css("animation","play3 1s both infinite");
             $(".beats .div4").css("animation","play4 1s both infinite");
              $("#mp .tracksong .nowplay marquee").text("• Dil Bechara title - #ssr https// tsm.co ");
             
           
             }
             
            else {sounds[5].pause();
            $("#playkey6 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            }
            
            sounds[5].addEventListener("ended",function(){
              sounds[5].pause();
              clearInterval(track6);
            $("#playkey6 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            $("progress").attr("value","0");
        })
     }
     
     
/* ============ key7 ================== */

     else if(this.id=="playkey7"){

     for(i=0; i<100; i++) { window.clearInterval(i); }
       
         if(sounds[6].paused){
         var track7= setInterval(function(){
             $("progress").attr("max",sounds[6].duration).attr("value",sounds[6].currentTime);
             
         },1000)
         $(".sounds:not(#s7)").trigger("pause").prop("currentTime","0");
           $(".playbutton img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
        
         sounds[6].play();
             $("#playkey7 img").attr("src","https://img.icons8.com/fluent/48/000000/pause.png");
             $(".beats .div1").css("animation","play1 1s both infinite");
             $(".beats .div2").css("animation","play2 1s both infinite");
             
             $(".beats .div3").css("animation","play3 1s both infinite");
             $(".beats .div4").css("animation","play4 1s both infinite");
             $("#mp .tracksong .nowplay marquee").text("• On my Way - Alan Walker https// tsm.co ");
            
             }
             
            else
            {sounds[6].pause();
            $("#playkey7 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            }
            
                    sounds[6].addEventListener("ended",function(){
              sounds[6].pause();
              clearInterval(track7);
            $("#playkey7 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
             $("progress").attr("value","0");
            
        })
     }
     
/* ============ key8 ================== */
     else if(this.id=="playkey8"){
          
          for(i=0; i<100; i++) { window.clearInterval(i); }
       
         if(sounds[7].paused){
          var track8= setInterval(function(){
             $("progress").attr("max",sounds[7].duration).attr("value",sounds[7].currentTime);
            
             
         },1000)
         
          $(".sounds:not(#s8)").trigger("pause").prop("currentTime","0");
           $(".playbutton img").attr("src","https://img.icons8.com/fluenpt/48/000000/play.png");
        
         sounds[7].play();
             $("#playkey8 img").attr("src","https://img.icons8.com/fluent/48/000000/pause.png");
             $(".beats .div1").css("animation","play1 1s both infinite");
             $(".beats .div2").css("animation","play2 1s both infinite");
             
             $(".beats .div3").css("animation","play3 1s both infinite");
             $(".beats .div4").css("animation","play4 1s both infinite");
             $("#mp .tracksong .nowplay marquee").text("• God's Plan - Drake https// tsm.co ");
             
             }
             
            else {sounds[7].pause();
            $("#playkey8 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            }
            
            sounds[7].addEventListener("ended",function(){
              sounds[7].pause();
              clearInterval(track8);
            $("#playkey8 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
             $("progress").attr("value","0");
            
        })
     }
     
/* ============ key9 ================== */
     else if(this.id=="playkey9"){
     
      for(i=0; i<100; i++) { window.clearInterval(i); }

       
         if(sounds[8].paused){

        var track9= setInterval(function(){
             $("progress").attr("max",sounds[8].duration).attr("value",sounds[8].currentTime);
             
         },1000)
         
         $(".sounds:not(#s9)").trigger("pause").prop("currentTime","0");
           $(".playbutton img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");

           sounds[8].play();
             $("#playkey9 img").attr("src","https://img.icons8.com/fluent/48/000000/pause.png");
             $(".beats .div1").css("animation","play1 1s both infinite");
             $(".beats .div2").css("animation","play2 1s both infinite");
             
             $(".beats .div3").css("animation","play3 1s both infinite");
             $(".beats .div4").css("animation","play4 1s both infinite");
             $("#mp .tracksong .nowplay marquee").text("• Available - J.B https// tsm.co ");
             
             }
             
            else {sounds[8].pause();
            $("#playkey9 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
            }
            
            
            sounds[8].addEventListener("ended",function(){
              sounds[8].pause();
              clearInterval(track9);
            $("#playkey9 img").attr("src","https://img.icons8.com/fluent/48/000000/play.png");
             $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
             
            $("progress").attr("value","0");
            
        })
        
        
     }
     
    });
}

/*=============== m🙃p ================*/

/* ===== mp buttons =========*/


  $("#mp .mute").click(function(){
    
     $(".sounds").prop("muted",!($(".sounds").prop("muted")));
     var muted = $(".sounds").prop("muted");
     if(!muted){
       $("#mp .mute img").attr("src","https://img.icons8.com/color/25/000000/room-sound.png")
   }
   else{
        $("#mp .mute img").attr("src","https://img.icons8.com/color/25/000000/mute.png")
   }
   
        
});

  $("#mp .stopmusic").click(function(){
      $(".sounds").trigger("pause").prop("currentTime","0");
      $(".beats .div1").css("animation","");
             $(".beats .div2").css("animation","");
             $(".beats .div3").css("animation","");
             $(".beats .div4").css("animation","");
             
             $("#mp .tracksong .nowplay marquee").text("");
  })
   
   
           
});
