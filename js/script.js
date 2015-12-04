/******
Script .
Author : Ramesh Balasekaran
*/

$(document).ready(function() {
    
    /*** Intializing Game Log in TypeWriter Mode***/
     
                var angry   = new Image();
				var happy   = new Image();
				var rock    = new Image();
                var teeth   = new Image();
                var Excited = new Image();
                var surpris = new Image();
                var cool    = new Image();

				angry.src   = "images/angry.png";
				happy.src   = "images/Happy.png";
				rock.src    = "images/Rock.png";
                teeth.src   = "images/teeth.png";
                Excited.src = "images/Excited.png";
                surpris.src = "images/Wow.png";
                cool.src    = "images/Cool.png";

        
        function changesmiley(imageSrc){
            $("#smiley").html('<img src="'+imageSrc+'" alt="Smiley face" height="300" width="258" id="smileylogo">');
        }
    
    
        $("#smiley").realshadow({
            type: 'drop',
            length: 7
        });
        $("#signupID").realshadow({
            type: 'drop',
            length: 5
        });
   
        $("#homeicon").realshadow({
            type: 'drop',
            length: 3
        });
    
        /****************** Name Events*******************/
    
         $("#name").focus(function() {
            changesmiley(teeth.src);
            var name = $(this).val();
             if(name==""||name==undefined||name==null){
                smileymessage("Hello "," Please enter your name");
             }
         });
    
        $("#name").blur(function() {
            var name = $(this).val();
             if(name==""||name==undefined||name==null){  
                smileymessage_one(" Your name is required to signup");
                changesmiley(angry.src);
                $(this).addClass("errorfields");
             }else{
                 $(this).removeClass("errorfields");
             }
         });
        
         $("#name").change(function() {
            var name = $(this).val();
            smileymessage("Hello "+$("#name").val()," Welcome");
             changesmiley(Excited.src);        
         });
            
        /****************** Mail Events*******************/
    
        $("#mail").blur(function() {
            var name = $(this).val();
             if(name==""||name==undefined||name==null){  
                smileymessage("Please provide your email","its mandatory");
                changesmiley(angry.src);
                $(this).addClass("errorfields");
             }else{
                $(this).removeClass("errorfields");
             }
         });
    
        $("#mail").change(function() {
            var name = $(this).val();
            smileymessage("We will use "+$("#mail").val()+",","for all communication");
            changesmiley(teeth.src);           
         });        
        
        /****************** Mail Events*******************/
        
        $("#password").blur(function() {
            var name = $(this).val();
             if(name==""||name==undefined||name==null){  
                smileymessage_one(" Password is required.");
                changesmiley(angry.src);
                $(this).addClass("errorfields");
             }else{
                $(this).removeClass("errorfields");
             }            
         });
    
        $("#repassword").blur(function() {
            var name = $(this).val();
             if(name==""||name==undefined||name==null){  
                smileymessage_one(" Please re enter password.");
                changesmiley(angry.src);
                $(this).addClass("errorfields");
             }else{
                $(this).removeClass("errorfields");
             }            
         });
    
        $("#password").change(function() {
            var name = $(this).val();                
            smileymessage_one("Remember your password.");
            changesmiley(Excited.src);           
         });   
        
        $("#repassword").change(function() {
            var p1 = $(this).val();  
            var p2 = $("#password").val();
            if(p1==p2){
                smileymessage_one("Bingo, Your passwords match.");
                changesmiley(teeth.src);           
            }else{
                smileymessage("Sorry, your passwords do not match.", "Please re try");
                changesmiley(cool.src);  
            }
         }); 
        
        /****************** Submit button*******************************/
        $("#submit").click(function() {
            try{
            var name = $("#name").val();
            var mail = $("#mail").val();
            var pas1 = $("#password").val();
            var pas2 = $("#repassword").val();
            
            if(name==""||mail==""||pas1==""||pas2==""){
                smileymessage_one("Please fill required field.");
                changesmiley(angry.src); 
            }else{
                smileymessage_one("Thank your for signing up");
                changesmiley(surpris.src); 
            }
            
                if(name==""){
                    $("#name").addClass("errorfields");
                }
                if(mail==""){
                    $("#mail").addClass("errorfields");
                }
                if(pas1==""){
                    $("#password").addClass("errorfields");
                }
                if(pas2==""){
                    $("#repassword").addClass("errorfields");
                }
                
            }catch(e){
                alert("e"+e.message);
            }                      
         });

        $("#smiley").mouseover(function() {
                $("#smiley").html('<img src="images/Rock.png" alt="Smiley face" height="300" width="258" id="smileylogo">');
        }).mouseout(function() {
                $("#smiley").html('<img src="images/Happy.png" alt="Smiley face" height="300" width="258" id="smileylogo">');
        });

    
        /***************** Message Methods*************************/
        function smileymessage(content,content2){
            $("#Smiley_Message").hide(500);
            var options = {
              strings: [content, content2],
              typeSpeed: 0
            }
            $("#typed").html('<label id="Smiley_Message"></label>');
            $("#Smiley_Message").typed(options);            
        }
    
        function smileymessage_one(content){
            $("#Smiley_Message").hide(500);
            var options = {
              strings: [content],
              typeSpeed: 0
            }
            $("#typed").html('<label id="Smiley_Message"></label>');
            $("#Smiley_Message").typed(options);            
        }
});

