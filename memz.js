(function(window){

function getRandomInt(min,max)
{
  return Math.floor((max-min)*Math.random()+min);
}
function checkUrl(url)
{

}
// ====== Internet meme ======
//An Internet meme is an activity,concept, catchphrase or piece of media which spreads, often as mimicry,
// from person to person via the Internet.

function getUrlGIF()
{
  /*This function select the URL of a gif  */
  // OUTPOUT : the url the GIF
    var url_gif=[ "http://i.memeful.com/media/post/PM0aaRL_700wa_0.gif",
                  "http://i.memeful.com/media/post/GMEZW9R_700wa_0.gif",
                  "http://i.memeful.com/media/post/BRkjklM_700wa_0.gif",
                  "http://i.memeful.com/media/post/ZMavvBR_700wa_0.gif"
                  // ... add your funny GIF

                    ];

    var size_url_array=url_gif.length;
    var random=getRandomInt(0,size_url_array);
    return url_gif[random];

}

function GifOntheScreen(my_url=false)
{

  if (document.getElementById('justtrollin')===null || document.getElementById('rickastley')!=null)
  {
   document.body.innerHTML="<div id='justtrollin'></div> ";
  }
  if (document.getElementById('justtrollin'))
  var frame=document.getElementById('justtrollin');
  var x=getRandomInt(0,window.innerWidth*0.8)
  var y=getRandomInt(0,window.innerHeight*0.8)

  if (my_url==false)
  {
    frame.innerHTML+='<img class="test" style="position:absolute;top:'+y+'px;left:'+x+'px" src='+getUrlGIF()+'"></img>';
  }else{
    frame.innerHTML+='<img style="position:fixed;top:'+y+'px;left:'+x+'px" src='+my_url+'"></img>';
  }
}


function openEmbedVideo(url,width=window.innerWidth,height=window.innerHeight,startobject=document.body)
{
  /*This function open a video ( by default fullscreen) */
  // PARAMETERS url : url of the video
  // PARAMETERS  width : the width of the video default=window's width (number)
  // PARAMETERS  height : the height of the video default=window's height (number)
  // PARAMETERS  startobject : object which contain the video

  //TODO : add a function to check if it's a url


  if (document.getElementById('justtrollin')===null)
  {
  startobject.innerHTML="<div id='justtrollin'></div> ";
  }
  var frame=document.getElementById('justtrollin');
  startobject.innerHTML+='<iframe  id="trollin_video" width="'+(width-(width*0.01))+'" height="'+(height-(height*0.05))+'" src="'+url+'" frameborder="0" allowfullscreen></iframe>';

  var video= document.getElementById("trollin_video");
  video.style.marginLeft='auto';
  video.style.display='inline-block';
  video.style.marginRight='auto'
  video.style.position='fixed';

}
function memz()
{
   var memz={};
   memz.showRandomGIF=function(sleep,my_url=false)
   {
     /*This function show random meme FOREVER */
     // PARAMETERS my_url : the URL of your favourite meme
     // PARAMETERS sleep  : time during each call of the function



    setInterval(function(){GifOntheScreen(my_url); },sleep);

  }

  // ============================================ RickRolling =======================================================
  // Rickrolling, alternatively rick-rolling, is a prank and an Internet
  // meme involving an unexpected appearance of the music video for the 1987 Rick Astley song "Never Gonna Give You Up
  //==================================================================================================================

  memz.rickRoll=function(width=window.innerWidth,height=window.innerHeight,startobject=document.body)
  {
    /*This function display a video of 'Never Give You Up ' by Rick Astley  */
    // PARAMETERS  width : the width of the video default=window's width
    // PARAMETERS  height : the height of the video default=window's height

    if (typeof(width)!='number' || typeof(height)!='number' )
    {

      return 0;
    }
    openEmbedVideo("https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1&t=14s",width,height,startobject);
    return 1;
  }




  memz.ultimateRickRoll=function()
  {
    /* This function display 4 Video of 'Never Give You Up ' by Rick Astley in one window*/
    var i=0;
    var loop=4;
    var width=(window.innerWidth/2)-(window.innerWidth/2)*0.05;
    var height=(window.innerHeight/2)-(window.innerWidth/2)*0.005;
    for (i;i<=loop;i++)
    {
      memz.rickRoll(width,height);
    }
  }

  memz.floodConsole=function(yourMessage)
  {
    /*This function is flooding your console */
    setInterval(function(){ console.log(yourMessage); },1);
  }


  return memz;
}
if (typeof(window.memz)==="undefined")
{
  window.memz=memz();
}


})(window);
/* === This is the last line  line thank you for reading === */
