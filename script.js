

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img = new Image();
  img.src = 'tarcza.png';
  img.onload = function()
  {
    ctx.drawImage(img,0, 0);
  }

var punkty = [0,0,0];
var strzaly=0;
function aktualizujTabele()
{
  document.getElementById("first").innerHTML = "Pierwszy strzał: " +  punkty[0];
  if (strzaly > 1)
  {
    document.getElementById("second").innerHTML = "Drugi strzał: " +  punkty[1];
    if (strzaly == 3)
    {
        document.getElementById("third").innerHTML = "Trzeci strzał: " +  punkty[2];

    }
  }
  document.getElementById("suma").innerHTML = "Suma: " + (punkty[0] + punkty[1] + punkty[2]);

}
function clicked(event)
{
    if (strzaly<3)
    {
      var x = event.clientX;
      var y = event.clientY;
      var i = 10;
      var r = 28;
      while (i!=0)
      {
          if ((x-368)*(x-368) + (y-368)*(y-368) < r*r)
          {
              punkty[strzaly] += i;
              i=0;
          }
          else
          {
            i--;
            r += 36;
          }

      }
      var kleks = new Image();
        kleks.src = 'kleks.png';
        kleks.onload = function()
        {
          ctx.drawImage(kleks,x-12, y-24);
        }
      strzaly++;
      aktualizujTabele();
    }

}

