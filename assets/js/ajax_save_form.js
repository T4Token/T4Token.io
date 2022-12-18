// Save Contact Form Data  Start
$('#contact-form').validate({
 	rules: {
 		email: {
        required:true,
        email:true,
    },
    first_name: {
      required:true
    },
    last_name: {
      required:true
    },
    enquiry: {
      required:true
    }
 	},
   submitHandler: function () {
      $("#overlay").fadeIn(300);
      var email = $("input[name='email']").val();
      var fname = $("input[name='first_name']").val();
      var lname = $("input[name='last_name']").val();
      var enquiry = $('#enquiry_value').find(":selected").val();
      var message = $("#contact-form-message").val();
      $.ajax({
    		url: "send_mail.php",
    		type: "post",
    		data: {email:email,fname:fname,lname:lname,enquiry:enquiry,message:message},
       	success: function(dataResult){
    			var dataResult = JSON.parse(dataResult);
    			if(dataResult.statusCode==200){
    				$(".contact-msg").html('<div class="alert alert-success" role="alert">Thank you for your message. It has been sent.</div>');
    				$("form").trigger("reset");
    				setTimeout(function() {
    					$('.alert-success').remove();
    				}, 3000);
               setTimeout(function(){
                 $("#overlay").fadeOut(300);
               },500);
    			}
       		else if(dataResult.statusCode==201){
    				$(".contact-msg").html('<div class="alert alert-warning" role="alert">There was an error trying to send your message. Please try again later.</div>');
    				$("form").trigger("reset");
    				setTimeout(function() {
    					$('.alert-success').remove();
    				}, 3000);
               setTimeout(function(){
                 $("#overlay").fadeOut(300);
               },500);
				}
       	}
      })
   }
});
// Save Contact Form Data End