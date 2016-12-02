var editor = $(parent.document.body)

editor.find("div").css({border: "1px solid orange"});
var topbar = $(parent.parent.document.body).find("#topbar")
topbar.find("button").css({background: "green"});
//var allDivsInTheEditoritor.find("div")



// Now try to
// 1. add a button to the topbar
// 2. change the title above the file list
// 3. change some borders in the editor
// 4. Make all this happen when a button is clicked