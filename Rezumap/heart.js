var heart=document.getElementById('like');
function red1()
      {
         heart.src="coeur_red.png";
      }
function red2()
  {
    heart.src="coeur.png";
  }

heart.addEventListener('mouseover', red1);
heart.addEventListener('mouseout', red2);