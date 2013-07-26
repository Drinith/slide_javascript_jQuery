$(function() {						// Adiciona o document ready pra começar a brincadeira 
													// só quando o HTML estiver pronto
	var position = 0;
	var min = 0;
	var max = 1;	
	
	// Load the image 
	var loadImage = function ( pImage )  				// declara a variavel função.									
	{													// legal você usar um identificador que identifique o 			
		var imageObject = $("#image");					// parametro de funcao.

	  	imageObject.fadeOut('fast', function(){
	    	imageObject.load(function() {
	      		$(this).hide();
	      		$(this).fadeIn();
	    	}).attr('src', pImage);
	  	});
	}

	var esquerda = function() 
	{
		//andando com os valores para esquerda 
		
		position--;									// usa o modo reduzido de decremento
		
		if(position<min || position> max){			// se posição ficar negativa refaça o loop para três fotos
			position=max;
		}
		
		loadImage("img/image"+position+".jpg")
		
	}
	
	var direita = function () 
	{
		//andando com os valores para esquerda 

		position++;									// usa o modo reduzido de incremento
		
		if(position>max || position<min){
			position=min;
		}
		loadImage("img/image"+position+".jpg")
		
	}


	//
	// Comportamento para os botões sem precisar colocar no HTML

	$('#setaesquerda').click(esquerda);
	$('#setadireita').click(direita);

	
});
		