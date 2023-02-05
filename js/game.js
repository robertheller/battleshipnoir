/*Robert Heller*/

$(document).ready(function(){
	
	//Initial Variables
	var hitsCount = 50;
	var allShipHit = 18;
	var shipOneHit = 2;
	var shipTwoHit = 3;
	var shipThreeHit = 4;
	var shipFourHit = 4;
	var shipFiveHit = 5;
	var playSong = document.getElementById("playmusic");
	var missFX = document.getElementById("missEffect");
	var hitFX = document.getElementById("hitEffect");
	var winFX = document.getElementById("winEffect");
	var loseFX = document.getElementById("loseEffect");
	
	//Hidden elements
	$('#board').hide();
	$('#gameOver').hide();
	$('#winLose').hide();
	$('#win').hide();
	$('.pipe').hide();
	$('.gun').hide();
	$('.knife').hide();
	$('.glass').hide();
	$('.five').hide();
	
	//Play button 
	$('#btn').click(function() {
		$('#btn').hide();
		$('#instructions').hide();
		$('#board').show();
		playSong.play();
		document.querySelector('.remainingHits').innerHTML = hitsCount;
	});
	
	//Play again button
	$('#winLose').click(function() {
		location.reload();
	});
	
	//Function executes when game is won
	function winner() {
		$('#board').hide();
		$('#win').show();
		$('#winLose').show();
		winFX.volume = 0.8;
		winFX.play();			
	}
	
	//Function executes when game is lost
	function loser() {
		$('#board').hide();
		$('#gameOver').show();
		$('#winLose').show();
		loseFX.volume = 0.8;
		loseFX.play();
	}

	//Individual Table Cells
    $('.cell').click(function() {
		if (!$(this).hasClass('clicked')) 
		{
			$(this).addClass('missImage');
			$(this).addClass('clicked');
			missFX.volume = 0.2;
			missFX.play();
			document.querySelector('.remainingHits').innerHTML = --hitsCount;	
			
			if (hitsCount <= 0) {
				loser();
			}	
		}	
	});
	
	//Ship One
	$('.shipOne-1, .shipOne-2').click(function() {
		if (!$(this).hasClass('shipClicked')) 
		{
			$(this).addClass('bgImage');
			$(this).addClass('shipClicked');
			hitFX.volume = 0.2;
			hitFX.play();
			document.querySelector('.remainingHits').innerHTML = --hitsCount;
			--shipOneHit;
			--allShipHit;
			
			if (shipOneHit <= 0) {
				$('.pipe').show();
				
				if (allShipHit <= 0) {
					$('table').hide();
					setTimeout(winner, 1300);
				}
				
				else if (hitsCount <= 0) {
					loser();
				}
			}
		}	
	});
	
	//Ship Two
	$('.shipTwo-1, .shipTwo-2, .shipTwo-3').click(function() {
		if (!$(this).hasClass('shipClicked')) 
		{
			$(this).addClass('bgImage');
			$(this).addClass('shipClicked');
			hitFX.volume = 0.2;
			hitFX.play();
			document.querySelector('.remainingHits').innerHTML = --hitsCount;
			--shipTwoHit;
			--allShipHit;
			
			if (shipTwoHit <= 0) {
				$('.gun').show();
				
				if (allShipHit <= 0) {
					$('table').hide();
					setTimeout(winner, 1300);
				}
				
				else if (hitsCount <= 0) {
					loser();
				}
			}	
		}	
	});
	
	//Ship Three
	$('.shipThree-1, .shipThree-2, .shipThree-3, .shipThree-4').click(function() {
		if (!$(this).hasClass('shipClicked')) 
		{
			$(this).addClass('bgImage');
			$(this).addClass('shipClicked');
			hitFX.volume = 0.2;
			hitFX.play();
			document.querySelector('.remainingHits').innerHTML = --hitsCount;
			--shipThreeHit;
			--allShipHit;
			
			if (shipThreeHit <= 0) {
				$('.knife').show();
				
				if (allShipHit <= 0) {
					$('table').hide();
					setTimeout(winner, 1300);
				}
				
				else if (hitsCount <= 0) {
					loser();
				}
			}	
		}	
	});
	
	//Ship Four
	$('.shipFour-1, .shipFour-2, .shipFour-3, .shipFour-4').click(function() {
		if (!$(this).hasClass('shipClicked')) 
		{
			$(this).addClass('bgImage');
			$(this).addClass('shipClicked');
			hitFX.volume = 0.2;
			hitFX.play();
			document.querySelector('.remainingHits').innerHTML = --hitsCount;
			--shipFourHit;
			--allShipHit;
			
			if (shipFourHit <= 0) {
				$('.glass').show();
				
				if (allShipHit <= 0) {
					$('table').hide();
					setTimeout(winner, 1300);
				}
				
				else if (hitsCount <= 0) {
					loser();
				}
			}	
		}
	});
	
	//Ship Five
	$('.shipFive-1, .shipFive-2, .shipFive-3, .shipFive-4, .shipFive-5').click(function() {
		if (!$(this).hasClass('shipClicked')) 
		{
			$(this).addClass('bgImage');
			$(this).addClass('shipClicked');
			hitFX.volume = 0.2;
			hitFX.play();
			document.querySelector('.remainingHits').innerHTML = --hitsCount;
			--shipFiveHit;
			--allShipHit;
			
			if (shipFiveHit <= 0) {
				$('.five').show();
				
				if (allShipHit <= 0) {
					$('table').hide();
					setTimeout(winner, 1300);
				}
				
				else if (hitsCount <= 0) {
					loser();
				}
			}
		}
	});
}); 