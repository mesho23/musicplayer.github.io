/* define varibles to control the next and prev functions */
artist = "Anne";
var song = ["2002", "Alarm","Ciao Adios","i'm lonely","Rockabye","Rumour Mill","Then"]
  var count = 0;

/* display the menu */
 $("#menubtn").click(function(){
    if($("#mySidebar").css('display') == 'none'){
       $("#mySidebar").css('display','block');
         $(".nav-item").css('margin-right','155px');
    }
    else {
       $("#mySidebar").css('display','none');  
     $(".nav-item").css('margin-right','0px');
    }
 });



/* starting audio player*/

 var myaduio = document.getElementById("au");

function play_pause() {
      if (document.getElementById("playimg")) {

          myaduio.play();
            document.getElementById("time").innerHTML = formatTime(myaduio.currentTime) +
              "/" + formatTime(myaduio.duration);




          document.getElementById("playbtn").innerHTML = "<svg  xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-pause-fill' viewBox='0 0 16 16'>" +
              "<path d='M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z'/>" +
              '</svg>';
      } else {
          
          myaduio.pause();
          document.getElementById("playbtn").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-play-fill' viewBox='0 0 16 16' id = 'playimg' >" +
              "  <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />" +
              '</svg>';
      }
  }
/* end of play and pause fumction*/



/* takes audio duration in seconds and turn it to minuts*/

function formatTime(seconds) {
      minutes = Math.floor(seconds / 60);
      minutes = (minutes >= 10) ? minutes : "0" + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = (seconds >= 10) ? seconds : "0" + seconds;
      return minutes + ":" + seconds;
  }


/*end*/



/* dsplay current lentght with audio progress bar */

setInterval(function () {

      let prog = (myaduio.currentTime / myaduio.duration) * 100;
      document.getElementById("probar").style.width = prog + '%'
  }, 1000);


/*end*/


/*function that calls itself very second to set the current time of the song to a lable*/

 setInterval(function () {
     
      document.getElementById("time").innerHTML = formatTime(myaduio.currentTime) +
          "/" + formatTime(myaduio.duration);

  }, 1000);
/*end*/









/* play next song if user press next button */
function next() {

      document.getElementById("playbtn").innerHTML = "<svg  xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-pause-fill' viewBox='0 0 16 16'>" +
          "<path d='M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z'/>" +
          '</svg>';
      if (count == song.length - 1) {
          count = 0;

  myaduio.src = "songs/"+artist+"/"+song[count]+".mp3";
          myaduio.play();
      } else {
          count++;
    myaduio.src = "songs/"+artist+"/"+song[count]+".mp3";
          myaduio.play();
         
      }
    document.getElementById("scroll-text").innerHTML = song[count];

  }

/* play previous song if user press next prev */

  function back() {

      document.getElementById("playbtn").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-pause-fill' viewBox='0 0 16 16'>" +
          "<path d='M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z'/>" +
          '</svg>';
      if (count == 0) {
          count = song.length;

          count--;
           myaduio.src = "songs/"+artist+"/"+song[count]+".mp3";
          myaduio.play();
      } else {
          count--;
            myaduio.src = "songs/"+artist+"/"+song[count]+".mp3";
          myaduio.play();
      }
       document.getElementById("scroll-text").innerHTML = song[count];

  }

/*if audio end change play button*/
 myaduio.onended = function () {

      document.getElementById("playbtn").innerHTML ="<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-play-fill' viewBox='0 0 16 16' id = 'playimg' >" +
              "  <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />" +
              '</svg>';
  };


/*listening for a click to switch to selected song*/

$(".song-item").click(function(){
  showsong_details();
    myaduio.src =  "songs/"+artist+"/"+this.innerHTML+".mp3";
    document.getElementById("scroll-text").innerHTML = this.innerHTML;
    
     if (!document.getElementById("playimg")) { document.getElementById("playbtn").innerHTML ="<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-play-fill' viewBox='0 0 16 16' id = 'playimg' >" +
              "  <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />" +
              '</svg>';}
    
    setcount(this.innerHTML);
     
});


/*search for song name and assgin the counter */
function setcount(name) {

   song.forEach((element ,index ) => {
       if(element == name){
       count = index;
       }
                                     },name);

}

/*to animte the song details showing*/
function showsong_details(){
    $("#playercontop").css("display","block");
     document.getElementById("playercontop").style.animation = " up 2s linear" 
}

/*switch artist*/

$("h5").click( () => { 
    artist = this.innerHTML;
} );