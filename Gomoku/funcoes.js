		function iniciar(){
			atualizaVez();
			document.getElementById("tabuleiro").setAttribute("style", ("background-color: lightgray; border: 5px solid black; width: "+(nlinhas * 60)+"px; heigth: "+(ncolunas * 60)+"px; border-radius: 30px; padding-top: 20px; padding-right: 0px; padding-bottom: 20px; padding-left: 20px; margin:auto;"));
			var id = 1;
			var tab = document.getElementById("tabuleiro");
			tab.innerHTML = "";
			for( i = 0; i < nlinhas; i++){
				for( j = 0; j < ncolunas; j++){
					var ima = document.createElement("img");
					ima.setAttribute("id",""+id);
					ima.setAttribute("class","celula");
					ima.setAttribute("src",emptyCell.src);
					ima.setAttribute("onclick","efetuaJogada(this)");
					tab.appendChild(ima);
					id++;
				}
				document.getElementById("tabuleiro").innerHTML = document.getElementById("tabuleiro").innerHTML +"<br>";
			}
		}
		function atualizaTema(){
			switch(document.getElementById("temas").value){
				case "1":
					xCell.src = "temas/superman.jpg";
					oCell.src = "temas/batman.jpg";
					break;
				case "2":
					xCell.src = "temas/ironman.jpg";
					oCell.src = "temas/capitaoAmerica.jpg";
					break;
				case "3":
					xCell.src = "temas/comunismo.jpg";
					oCell.src = "temas/anarquismo.jpg";
					break;
				case "4":
					xCell.src = "temas/coca.jpg";
					oCell.src = "temas/pepsi.jpg";
					break;
				case "5":
					xCell.src = "temas/garantido.jpg";
					oCell.src = "temas/caprichoso.jpg";
			}
			iniciar();
		}
		function atualizaVez(){
			if(caraDaVez == true){
				document.getElementById("vez").src = xCell.src;
				document.getElementById("player").innerHTML = "<strong>Player 1</strong>";
			}else{
				document.getElementById("vez").src = oCell.src;
				document.getElementById("player").innerHTML = "<strong>Player 2</strong>";
			}
		}
		function efetuaJogada(elem){
			
			if(elem.getAttribute("src") == xCell.src || elem.getAttribute("src") == oCell.src){
				//nada!
			}else if(caraDaVez == true){
				elem.setAttribute("src", xCell.src);
				caraDaVez = false;
			}else{
				elem.setAttribute("src", oCell.src);
				caraDaVez = true;
			}
			atualizaVez();
			if(checaHorizontal()){
				
			}else if(checaVertical()){
			
			}else if(checaDiagonal()){
			}
		}
		function checaHorizontal(){
				var conts = 0;
				var contb = 0;
				var ganhou = false;
				var id = 1;
				for (i = 0; i < nlinhas && ganhou == false; i++){
					conts = 0;
					contb = 0;
					for(j = 0; j < ncolunas && ganhou == false; j++){
						if(document.getElementById(id).getAttribute("src") == xCell.src){
							conts++;
							contb = 0;
						}else if(document.getElementById(id).getAttribute("src") == oCell.src){
							contb++;
							conts = 0;
						}else{
							conts=0;
							contb=0;
						}
						if(conts >= 5){
							//var winner = document.createElement("img");
							//winner.setAttribute("src", xCell.src);
							window.alert("Jogador 1 Ganhou!");
							//window.alert(winner);
							ganhou = true;
						}else if(contb >= 5){
							//var winner = document.createElement("img");
							//winner.setAttribute("src", oCell.src);
							//winner.setAttribute("class", "celula" );
							window.alert("Jogador 2 Ganhou!");
							//window.alert(winner);
							ganhou = true;
						}
						id++;
					}
				}
				return ganhou;
		}
		function checaVertical(){
			var conts = 0;
			var contb = 0;
			var ganhou = false;
			for(i = 1; i <= ncolunas && ganhou == false; i++){
					conts = 0;
					contb = 0;
					n = 0;
					j = i;
				while(n < nlinhas && ganhou == false){
				if(document.getElementById(j).getAttribute("src") == xCell.src){
						conts++;
						contb = 0;
					}else if(document.getElementById(j).getAttribute("src") == oCell.src){
						contb++;
						conts = 0;
					}else{
						conts=0;
						contb=0;
					}
					if(conts >= 5){
						window.alert("Jogador 1 Ganhou!");
						ganhou = true;
					}else if(contb >= 5){
						window.alert("Jogador 2 Ganhou!");
						ganhou = true;
					}
					j = j + ncolunas;
					n++;
				}
				
			}
			return ganhou;
		}
		function checaDiagonal(){
			var aux = ncolunas;
			var ganhou = false;
			var conts = 0;
			var contb = 0;
			for(i = 1; i <= ncolunas - 4 && ganhou == false; i++){
				n = i;
				for(j = 0; j < aux && ganhou == false; j++){
					if(document.getElementById(n).getAttribute("src") == xCell.src){
						conts++;
						contb = 0;
					}else if(document.getElementById(n).getAttribute("src") == oCell.src){
						contb++;
						conts = 0;
					}else{
						conts=0;
						contb=0;
					}
					if(conts >= 5){	
						window.alert("Jogador 1 Ganhou!");
						ganhou = true;
					}else if(contb >= 5){
						window.alert("Jogador 2 Ganhou!");
						ganhou = true;
					}
					n = n + ncolunas + 1;
				}
				aux--;
			}
			if(ganhou == false){
				aux = nlinhas;
				conts = 0;
				contb = 0;
				n = 1;
				for(i = 0; i < nlinhas - 4 && ganhou ==false; i++){					
					n = n + ncolunas;
					aux--;
					id = n;
					for(j = 0; j < aux && ganhou == false; j++){
						if(document.getElementById(id).getAttribute("src") == xCell.src){
							conts++;
							contb = 0;
						}else if(document.getElementById(id).getAttribute("src") == oCell.src){
							contb++;
							conts = 0;
						}else{
							conts=0;
							contb=0;
						}
						if(conts >= 5){	
							window.alert("Jogador 1 Ganhou!");
							ganhou = true;
						}else if(contb >= 5){
							window.alert("Jogador 2 Ganhou!");
							ganhou = true;
						}
						id = id + ncolunas + 1;
					}
				}
				if(ganhou == false){
					aux = 4;
					n = 1 + (3 * ncolunas);
					for(i = 0; i < nlinhas - 4 && ganhou ==false; i++){
						n = n + ncolunas;
						aux++;
						id = n;
						conts = 0;
						contb = 0;
						for(j = 0; j < aux && ganhou == false; j++){
							if(document.getElementById(id).getAttribute("src") == xCell.src){
								conts++;
								contb = 0;
							}else if(document.getElementById(id).getAttribute("src") == oCell.src){
								contb++;
								conts = 0;
							}else{
								conts=0;
								contb=0;
							}
							if(conts >= 5){
								window.alert("Jogador 1 Ganhou!");
								ganhou = true;
							}else if(contb >= 5){
								window.alert("Jogador 2 Ganhou!");
								ganhou 
							}
							id = id - (nlinhas - 1);
						}					
					}
				}
				if(ganhou == false){
					n = (ncolunas * (ncolunas - 1))+ 1;
					aux = nlinhas;
					for(i = n+1; i <= (n + ncolunas) - 5 && ganhou == false; i++){
						aux--;
						conts = 0;
						contb = 0;
						id = i;
						for(j = 0; j < aux && ganhou == false; j++){
							if(document.getElementById(id).getAttribute("src") == xCell.src){
								conts++;
								contb = 0;
							}else if(document.getElementById(id).getAttribute("src") == oCell.src){
								contb++;
								conts = 0;
							}else{
								conts=0;
								contb=0;
							}
							if(conts >= 5){
								window.alert("Jogador 1 Ganhou!");
								ganhou = true;
							}else if(contb >= 5){
								window.alert("Jogador 2 Ganhou!");
								ganhou 
							}
							id = id - (nlinhas - 1);
						}
					}
					
					
				}
			}
			return ganhou;
		}