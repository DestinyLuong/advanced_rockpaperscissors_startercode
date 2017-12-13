//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION
$(document).ready( function(){

        
     
   
   
    $("#name").click(function(){
        $("#yourchoice").show();
        $("#choice").show();
        var name = $("#input").val();
        
        $("#words").html(name + " vs AI");
        $("#name").hide();
        $("#input").hide();
    });
        
    $("#choice").click(function(){       
            
      var choice = $("#yourchoice").val();
            
      var random = Math.floor(Math.random() * 3);
      
      var array = ["stick" , "leaf" , "rock"];
      
      var ai = array[random];
      
      console.log(array[random]);
    
      if (choice === "stick" && ai === "rock"){
              $("#rockaiwin").show();
              
              $("#draw").hide();
              $("#rockuserwin").hide();
              $("#paperuserwin").hide();
              $("#paperaiwin").hide();
              $("#scissorsuserwin").hide();
              $("#scissorsaiwin").hide();
              $("#error").hide();
      }  else if (choice === "stick" && ai === "stick"){
              $("#draw").show();
              
              $("#rockaiwin").hide();
              $("#rockuserwin").hide();
              $("#paperuserwin").hide();
              $("#paperaiwin").hide();
              $("#scissorsuserwin").hide();
              $("#scissorsaiwin").hide();
              $("#error").hide();
      }  else if (choice === "stick" && ai === "leaf"){
              $("#scissorsuserwin").show();
              
              $("#draw").hide();
              $("#rockaiwin").hide();
              $("#rockuserwin").hide();
              $("#paperuserwin").hide();
              $("#paperaiwin").hide();
              $("#scissorsaiwin").hide();
              $("#error").hide();
      }  else if (choice === "leaf" && ai === "stick") {
              $("#scissorsaiwin").show();
              
              $("#draw").hide();
              $("#rockaiwin").hide();
              $("#rockuserwin").hide();
              $("#paperuserwin").hide();
              $("#paperaiwin").hide();
              $("#scissorsuserwin").hide();
              $("#error").hide();
      }  else if (choice === "leaf" && ai === "leaf"){
              $("#draw").show();
              
              $("#rockaiwin").hide();
              $("#rockuserwin").hide();
              $("#paperuserwin").hide();
              $("#paperaiwin").hide();
              $("#scissorsuserwin").hide();
              $("#scissorsaiwin").hide();
              $("#error").hide();
      }  else if (choice === "leaf" && ai === "rock"){
              $("#paperuserwin").show();
              
              $("#draw").hide();
              $("#rockaiwin").hide();
              $("#rockuserwin").hide();
              $("#paperaiwin").hide();
              $("#scissorsuserwin").hide();
              $("#scissorsaiwin").hide();
              $("#error").hide();
      }  else if (choice === "rock" && ai === "leaf"){
              $("#paperaiwin").show();
              
              $("#draw").hide();   
              $("#rockaiwin").hide();
              $("#rockuserwin").hide();
              $("#paperuserwin").hide();
              $("#scissorsuserwin").hide();
              $("#scissorsaiwin").hide();
              $("#error").hide();
      }  else if (choice === "rock" && ai === "rock"){
              $("#draw").show();
              
              $("#rockaiwin").hide();
              $("#rockuserwin").hide();
              $("#paperuserwin").hide();
              $("#paperaiwin").hide();
              $("#scissorsuserwin").hide();
              $("#scissorsaiwin").hide();
              $("#error").hide();
      }  else if (choice === "rock" && ai === "stick"){
              $("#rockuserwin").show();
              
              $("#draw").hide();
              $("#rockaiwin").hide();
              $("#paperuserwin").hide();
              $("#paperaiwin").hide();
              $("#scissorsuserwin").hide();
              $("#scissorsaiwin").hide();
              $("#error").hide();
      } else {
            $("#error").show();
            
            $("#scissorsaiwin").hide();
            $("#draw").hide();
            $("#rockaiwin").hide();
            $("#rockuserwin").hide();
            $("#paperuserwin").hide();
            $("#paperaiwin").hide();
            $("#scissorsuserwin").hide();
      }
  
    });
    


});
