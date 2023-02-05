$(document).ready(function() {
	Ship One
	$('.shipOne-1, .shipOne-2').click(function() {
		if (!$(this).hasClass('shipClicked')) 
		{
			$(this).css('background','black');
			$(this).addClass('shipOneClicked');
			shipOneHit--;
			allShipHit--;
			
			if (shipOneHit <= 0) {
				$('.pipe').show();
			}
		}
	
)};
)};	
	/*for ( index = 0; index < shipOne.length; index++ ) {
		
		
	}
	*/
	
