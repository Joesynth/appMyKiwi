		var a = ["a.webm","b.webm","c.webm",];
		var i = Math.floor(Math.random() * (a.length));  /*	índice - random */

function addEventos () {

			 document.querySelector('video').src = a[i];  // seleciona tag video; inseri no src o arquivo do array "a" conforme sorteio de "i".

			/* estre trecho de código NÃO faz tocar, e sim o setTimeout o fará*/
				function Tocar () {
					var vidd = document.querySelector("video");
				   vidd.play();	
				   rnd();		
				}
			/*
			videoDuracaoAtual
			videoDuracaoTotal
			se (videoDuracaoAtual == videoDuracaoTotal ) { escolher outro vídeo}
			*/
	
			/* trigger by joe - exibe tempo de duraçãoAtual*/
			
	      // refresh ao terminar o vd
/*			var vidDD = document.querySelector("video");
			vidDD.onended = function () {
	 			location.reload();		
			}
*/
			var vidDD = document.querySelector("video");
			function playAudio() {
  				vidDD.play();
			} 

}
window.addEventListener("load", addEventos)