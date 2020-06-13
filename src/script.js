$("div").on("click",function(event){
 var cls = $(this).attr("class");
 alert(cls);
 event.stopPropagation();
});
