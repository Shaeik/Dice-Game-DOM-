
var rno_1 = Math.floor(Math.random()* 6)+1;
var rno_2 = Math.floor(Math.random()* 6)+1;
var dice_1=document.querySelector(".img1");
var dice_2=document.querySelector(".img2");
var base=document.querySelector("h1");
dice_1.setAttribute("src",`images/dice${rno_1}.png`);
dice_2.setAttribute("src",`images/dice${rno_2}.png`);

base.innerHTML = rno_1 ===  rno_2  ? "<h1>Draw</h1>" : rno_2 >rno_1 ? "<h1>Player 2 wins 🚩</h1>" :"<h1>🚩 Player 1 Wins</h1> ";

