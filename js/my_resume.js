//Initializing the side navbar
var jQuery = $, documentObj = jQuery(document);
documentObj.ready(function(){
  jQuery('.sidenav').sidenav();
});

jQuery('[id="download_btn"]').click(function(e) {
    window.open("file:///D:/work/my_resume/uploads/joetomy.pdf");
});