// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);


// Game objects

var menu, game, crash;

var player = {
    speed: 256 // movement in pixels per second
};

// Reset the game when the player catches a monster
var reset = function () {
        player.x = 100;
        player.y = canvas.height / 2;
		scene1 = 710; scene2 = 780;
		wallx1 = 600; wallx2 = 800; wallx3 = 1100; wallx4 = 1300;
		coinx1 = 600; coinx2 = 800; slowmox1 = 967;
		score = 0; points = 0;
		game = 1;
		menu = 0;
		crash = 0;
    };

        // Draw everything
		var scene1 = 710; var scene2 = 700;
		var score = 0; var points = 0;
		
        var render = function () {
                // Background
				ctx.fillStyle = "rgb(0, 0, 0)";
				ctx.fillRect(0, 0, 600, 400);
				if(menu == 1){
					// Title Text is drawn here.
					ctx.fillStyle = "rgb(17, 234, 0)";
					ctx.font = "100px Arial";
					ctx.fillText("jPlane", 150, 400 / 4 + 50); 
					ctx.fillStyle = "rgb(255, 255, 255)"; 
					//g2d.drawImage(image, 10, 10, null);
					ctx.font = "20px Arial"; 
					ctx.fillText("Click to Start!", 600 / 2 - 90, 400 / 4 + 100); 
					//g2d.drawString("(c) 2012, All Rights Reserved.", 600 / 2 - 30, 400 / 4 + 250); 	
				}
				if(game == 1 || crash == 1){
					ctx.fillStyle = "rgb(17, 234, 0)";
					ctx.fillRect(0, 0, 600, 45);
					ctx.fillRect(0, 355, 600, 45);
				}
				if(game == 1){
					scene1 += -4; scene2 += -4; 
					if(scene2 == -720){ scene2 = 610; } 
					if(scene1 == -720){ scene1 = 550; } 
					ctx.fillRect(scene2, 0, 650, 50); 
					ctx.fillRect(scene1, 350, 690, 52); 
				
					// Power-ups
					ctx.fillStyle = "rgb(221, 206, 35)";
					if(c1 == 1){
					ctx.fillRect(coinx1, coin1, 10, 10);
						}
					if(c2 == 1){
					ctx.fillRect(coinx2, coin2, 10, 10); 
					}
					ctx.fillStyle = "rgb(35, 157, 221)";
					if(sm == 1){
					ctx.fillRect(slowmox1, slowmo1, 10, 10); 
					}
					ctx.fillStyle = "rgb(17, 234, 0)";
					// Walls
					ctx.fillRect(wallx1, wall1, 30, 75);
					ctx.fillRect(wallx2, wall2, 30, 75);
					ctx.fillRect(wallx3, wall3, 30, 75);
					ctx.fillRect(wallx4, wall4, 30, 75);
				
					// Text on Screen
					ctx.font = "21px Arial";
					ctx.fillStyle = "rgb(255, 255, 255)";
					ctx.fillText("Distance: " + Math.floor((score /2) /3) , (600 / 2) + 125, 25); 
					ctx.fillText("Gold: " + points, (600 / 2) + 15, 25);
					ctx.font = "21px Arial";
					ctx.fillStyle = "rgb(255, 255, 255)";
					if(!(hscore == 0)){
						ctx.fillText("Best: " + hscore, (600 / 2) + 125, 385);
					}
					// Player
					ctx.fillStyle = "rgb(0, 50, 177)";
					ctx.fillRect(player.x, player.y, 50, 35);
					
				}
				
				
				if(crash == 1){
					// Moving Sides of Cave are drawn here.
					ctx.fillStyle = "rgb(17, 234, 0)";
					ctx.fillRect(scene2, 0, 650, 50); 
					ctx.fillRect(scene1, 350, 690, 52); 
			
					// Player is redrawn as white.
					ctx.fillStyle = "rgb(255, 255, 255)";
					ctx.fillRect(player.x, player.y, 50, 35);
					
					// Crash Menu is displayed.
					ctx.font = "21px Arial";
					ctx.fillText("Distance: " + Math.floor((score /2) /3), (600 / 2) + 125, 25); 
					ctx.fillText("Gold: " + points, (600 / 2) + 15, 25); 
					ctx.fillText("You Crashed! Click here.", 600 / 2, 400 / 2);
				
				}
            };
			
			var wall1 = 0; var wall2 = 0; var wall3 = 0; var wall4 = 0; 
            var wallx1 = 600; var wallx2 = 800; var wallx3 = 1100; var wallx4 = 1300;
			
		function moveWalls(){
			if(wallx1 < 0 || wallx1 == 700){ 
				wall1 = Math.floor(Math.random()*250) + 45; 
				wallx1 = 699 - Math.floor(Math.random()*100);
			} 
			if(wallx2 < 0 || wallx2 == 1000){ 
				wall2 = Math.floor(Math.random()*249) + 45;
				wallx2 = 800 + Math.floor(Math.random()*69);
			} 
			if(wallx3 < 0 || wallx3 == 1500){ 
				wall3 = Math.floor(Math.random()*251) + 45; 
				wallx3 = 900 - Math.floor(Math.random()*200); 
			} 
			if(wallx4 < 0 || wallx4 == 1700){ 
				wall4 = Math.floor(Math.random()*248) + 45; 
				wallx4 = 1200 - Math.floor(Math.random()*150);
			} 
			wallx1 += -4; wallx2 += -4; wallx3 += -4; wallx4 += -4;
		} 
		
		
		var coinx1 = 700; var coinx2 = 799; var coin1; var coin2;
	var slowmox1 = 1500; var slowmo1;
	var flywallx1 = 600; var flywall;
	
	function moveCoins() {

		if(coinx1 < 0){
			coin1 = Math.floor(Math.random()*250) + 45;
			coinx1 = Math.floor(Math.random()*600) + 600;
			c1 = 1;
		}
		if(coinx2 < 0){
			coin2 = Math.floor(Math.random()*250) + 45;
			coinx2  = Math.floor(Math.random()*600) + 600;
			c2 = 1;
		}

		if(slowmox1 < 0){
			slowmo1 = Math.floor(Math.random()*250) + 45;
			slowmox1  = Math.floor(Math.random()*600) + 1500;
			sm = 1;
		}

		
		coinx1 += -4; coinx2 += -4; slowmox1 += -4;
	}

	function spriteCollision(x1,y1,w1,h1,x2,y2,w2,h2){
		if(x2<(x1+w1)&&(x2+w2)>x1&&y2<(y1+h1)&&(y2+h2)>y1){
		return 1;
		}
	}
	
	function collisionDectection(){
		if((spriteCollision(player.x, player.y, 50, 35, wallx1, wall1, 30, 75)) == 1){
			crash = 1;
			game = 0;
			menu = 0;
		}
		if((spriteCollision(player.x, player.y, 50, 35, wallx2, wall2, 30, 75)) == 1){
			crash = 1;
			game = 0;
			menu = 0;
		}
		if((spriteCollision(player.x, player.y, 50, 35, wallx3, wall3, 30, 75)) == 1){
			crash = 1;
			game = 0;
			menu = 0;
		}
		if((spriteCollision(player.x, player.y, 50, 35, wallx4, wall4, 30, 75)) == 1){
			crash = 1;
			game = 0;
			menu = 0;
		}
		
		if ((spriteCollision(wallx4, wall4, 30, 75, wallx1, wall1, 30, 75)) == 1){ wallx1 += 50;}
		if ((spriteCollision(wallx4, wall4, 30, 75, wallx2, wall2, 30, 75)) == 1){ wallx2 += 150;}
		if ((spriteCollision(wallx1, wall1, 30, 75, wallx3, wall3, 30, 75)) == 1){ wallx3 += 150;}
		if ((spriteCollision(wallx1, wall1, 30, 75, wallx2, wall2, 30, 75)) == 1){ wallx2 += 150;}
		if ((spriteCollision(wallx2, wall2, 30, 75, wallx3, wall3, 30, 75)) == 1){ wallx3 += 150;}
		if ((spriteCollision(wallx2, wall2, 30, 75, wallx4, wall4, 30, 75)) == 1){ wallx4 += 150;}
		if ((spriteCollision(wallx3, wall3, 30, 75, wallx4, wall4, 30, 75)) == 1){ wallx4 += 150;}
		if ((spriteCollision(wallx4, wall4, 30, 75, wallx1, wall1, 30, 75)) == 1){ wallx1 += 150;}
		
		
		if(c1 == 1){
		if((spriteCollision(player.x, player.y, 50, 35, coinx1, coin1, 10, 10)) == 1){
			coinPickup();
			c1 = 0;
		}}
		if(c2 == 1){
		if((spriteCollision(player.x, player.y, 50, 35, coinx2, coin2, 10, 10)) == 1){
			coinPickup();
			c2 = 0;
		}}
		if(sm == 1){
		if((spriteCollision(player.x, player.y, 50, 35, slowmox1, slowmo1, 10, 10)) == 1){
			slowMode();
			sm = 0;
		}}

		
	}
	var c1, c2, sm;
	
	function coinPickup(){
		points += 25
	}
	function slowMode(){
		points += 100;
	}
	
	var mouseisdown = 0;
	function mousedown(e){
		console.log("DOWN!");
		if(game == 1){
			mouseisdown = 1;
		}
		
		}
	function mouseup(e){
		console.log("UP!");
		if(menu == 1){
			reset();
		}
		if(game == 1){
			mouseisdown = 0;
		}
		if(crash == 1){
			reset();
		}
		}
		
        // The main game loop
        var main = function () {
                var now = Date.now();
                var delta = now - then;
				if(game == 1){
				collisionDectection();
				moveWalls();
				moveCoins();
				score++;
				if(mouseisdown == 0){
				player.y += 5;
				}
				if(mouseisdown == 1){
				player.y += -4;
				}
				if(player.y < 45){
					crash = 1;
					game = 0;
					menu = 0;
					if((Math.floor((score /2) /3)) > hscore){
						hscore = 0;
						hscore = (Math.floor((score /2) /3));
					}
				}
				if(player.y > 320){
					crash = 1;
					game = 0;
					menu = 0;
					if((Math.floor((score /2) /3)) > hscore){
						hscore = 0;
						hscore = (Math.floor((score /2) /3));
					}
				}
				}
				render();
                then = now;
            };
			var hscore = 0;
        // Let's play this game!
        //reset();
		menu = 1;
		document.addEventListener("mousedown", mousedown, false);
		document.addEventListener("mouseup", mouseup, false);
        var then = Date.now();
        setInterval(main, 25); // Execute as fast as possible