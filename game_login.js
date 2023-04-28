
function addUser() {
  
    
     //Set "player1_name" using localStorage.setItem() function
	  // "player2_name" using localStorage.setItem() function

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location = "game_page.html";
}

