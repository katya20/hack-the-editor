var editor = $(parent.document.body)


$(".btn").click( function () {
  
editor.find("div").css({"border": "none"});
var topbar = $(parent.parent.document.body).find("#topbar")
topbar.find("input").css({background: "lightblue"}, {"color": "white"})
topbar.find("input").html("hAcKeD");
topbar.find("span").css({color:"lightpink"})
topbar.find("span").text("KaTyA iS tHe BeSt")
}
  );


//var allDivsInTheEditoritor.find("div")



// Now try to
// 1. add a button to the topbar
// 2. change the title above the file list
// 3. change some borders in the editor
// 4. Make all this happen when a button is clicked