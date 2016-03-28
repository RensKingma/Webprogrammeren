


//Inloggen 

	function inloggen() {
		var gn = myForm.elements["gn"].value;
		var ww = myForm.elements["ww"].value;
		var gnArray = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen", "RensKingma"];

		for(var j = 0; j < gnArray.length; j++){	
			if(gn == gnArray[j] && ww == "qwerty"){
		location.href="tijdlijn.html";
			}
		}
			

	if(gn == "" || ww == ""){
		document.getElementById("bericht").innerHTML = "U heeft uw gebruikersnaam en/of wachtwoord niet ingevuld.";
		}
	else{
		document.getElementById("bericht").innerHTML = "Uw gebruikersnaam en/of wachtwoord is niet juist.";
		$("div").effect("shake");
		i++;
	}
		
	if(i>2){
		document.getElementById("bericht").innerHTML = "U heeft 3x een verkeerde gebruikersnaam en/of wachtwoord ingevuld, u moet 3 minuten wachten.";
		$("button").hide();
		$("input").prop('disabled', true);
		}
	}


//Registreren


$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});

function imageIsLoaded(e) {
    $('#pf').attr('src', e.target.result);
};
	
	function registreren (){
    	var voornaam = form1.elements["voornaam"].value;
    	var achternaam = form1.elements["achternaam"].value;
    	var reggn = form1.elements["reggn"].value;
		var regww = form1.elements["regww"].value;
		var bevww = form1.elements["bevww"].value;
		var propic = form1.elements["propic"].value;
		var gnArray = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen", "RensKingma"];


		for(var i = 0; i < gnArray.length; i++){

			if(reggn === gnArray[i]){
				document.getElementById("bericht").innerHTML = "Deze gebruikersnaam is al in gebruik. Kies een andere gebruikersnaam";
				return false;				
			}

			if(voornaam == "" || achternaam == ""|| reggn == ""|| regww == ""|| bevww == "" || propic == ""){
				document.getElementById("bericht").innerHTML = "Één of meer velden zijn niet ingevuld. Controleer en probeer opnieuw.";
				return false;
			}  

			if(regww !== bevww){
				document.getElementById("bericht").innerHTML = "De wachtwoorden komen niet overeen.";
				return false;
			}  

			if (!regww.match(/\d/)) { 
     			document.getElementById("bericht").innerHTML = "Het wachtwoord moet minimaal een cijfer bevatten."; 
    			return false; 
    		}

			if(voornaam !== "" & achternaam !== "" & reggn !== gnArray[i] & regww !== "" & regww.match(/\d/) & regww === bevww & propic !== ""){
				location.href="tijdlijn.html";
			}
			
		}
	
	
	
}

//Timeline

$(document).ready(function() {
	
	//cover photo

	 $('#covercontainer').on('click', function() {
        $('#cover').trigger('click');
    });

	 $(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});

function imageIsLoaded(e) {
    $('#coverphoto').attr('src', e.target.result);
};




	//add post
	 

	 $('#add').click(function() {
	 	var post = $('#message').val();
    	$("#timeline").prepend("<article><div class='timeline-post'><img src='images/user_male_klein.jpg' alt=''><h3>Rens Kingma</h3><p>" +post+ "</p><button class='verwijder'>Verwijderen</button></div></article>");
  });

	$('#message').keyup(function() {
    	var postLength = $(this).val().length;
    	var charactersLeft = 200 - postLength;
    	var post = $('#message').val();

    $('.counter').text(charactersLeft + " tekens over");
  
    if(charactersLeft < 0) {
      $('#add').prop('disabled', true); 
    }
    else if(charactersLeft == 200) {
      $('#add').prop('disabled', true);
    }
    else {
      $('#add').prop('disabled', false);
    }

    

  });


	
//Delete post
	$(document).on('click', '.verwijder', function(){
		$(this).parent().slideUp();
			$(this).remove();

	});
});


//like post

$(document).on('click', '.likeButton', function() { 
 
 
 		$(this).parent().parent().find(".likeField").toggle(); 
 		$(this).toggleClass("current"); 
 
 
 	}); 

//comment

$(document).on('click', '.reagerenButton', function() { 

 
 		$(this).parent().parent().find(".reagerenField").toggle(); 
 		$(this).toggleClass("current"); 
 
 
 	}); 



$('.addCommentOnPost').keypress(function (e) { 
 
 
 		var addCommentOnPost = $('.addCommentOnPost').val(); 
 
 
 		if (e.which == 13) { 
 			$(this).closest(".reagerenField").prepend(""+addCommentOnPost+"<br>"); 
 			
 		}		 
 	}); 

	



//var message = document.GetElementById('message').value; //JS versie
//var message = $("#message").val(); //JQuery versie



//Vriendenlijst

$(document).ready(function() {

$(".voegvriendtoe").click(function() { 
 
 
 		$("#lijstvanvrienden").prepend(" <li><img src='images/user_female_klein.jpg' alt=''><p>Bo ter Ham</p><button class='vriend-verwijder1'>Verwijder</button></li>"); 
 		$(this).parent().slideUp(); 
 		$(this).remove(); 
 	}); 

$(".vriend-toevoeg").click(function() { 
 
 
 		$("#lijstvanvrienden").prepend(" <li><img src='images/user_male_klein.jpg' alt=''><p>Cor Netto</p><button class='vriend-verwijder2'>Verwijder</button></li>"); 
 		$(this).parent().slideUp(); 
 		$(this).remove(); 
 	}); 


$(document).on('click', '.vriend-verwijder1', function() { 
 
 
 		$(this).parent().slideUp(); 
 		$(this).remove(); 
 		$("#lijstvanpotvrienden").prepend("<li><img src='images/user_female_klein.jpg' alt=''><p>Bo ter Ham</p><button class='vriend-toevoeg1'>Voeg toe</button></li>"); 
	}); 

$(document).on('click', '.vriend-verwijder2', function() { 
 
 
 		$(this).parent().slideUp(); 
 		$(this).remove(); 
 		$("#lijstvanpotvrienden").prepend("<li><img src='images/user_male_klein.jpg' alt=''><p>Cor Netto</p><button class='vriend-toevoeg2'>Voeg toe</button></li>"); 
	}); 


});




 //Berichten
 $(document).ready(function() {

$("#addMessageButton").click(function() { 
 
 
 		var addMessage = $('#berichtje').val(); 
 
 		var textareaIsEmpty = $.trim($('#berichtje').val()); 
 		if(textareaIsEmpty.length !== 0) { 
 
 
 			$("#convo").append("<article id='geplaatstberichtje'><p>"+addMessage+"</p><button class='verwijderbericht'>Verwijder</button></article>"); 
 
 
 			$("#berichtje").val(''); 
 

 			scrolled=scrolled+300; 
 
 
 			$(".Convo").animate({ 
 				scrollTop:  scrolled 
 			}); 
 			$("#errorTimeline").text(''); 
 		} else { 
 			$("#errorTimeline").text('Het veld is niet ingevuld.'); 
 		} 
 
 
 

 	}); 
 
 
 
 
 	$(document).on('click', '.verwijderbericht', function() { 
 
 
 		$(this).parent().slideUp(); 
 		$(this).remove(); 
 
 
 	}); 

});