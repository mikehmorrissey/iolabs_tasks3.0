$("#client-collection-select").change(function () {
  var str = "";
  $("#client-collection-select option:selected").each(function () {
        str = $(this).text();
        console.log(str);
      });
  if(str === "new client"){
  	$(".client-form-container").html("<%= j render template: 'clients/_new.html.haml'%>");
  	
  } else {
    $(".client-form-container").html("");
    
  };
})
$("#client-collection-select option:selected").trigger('change');
$(".datepicker").datepicker();
$(".job_user_select").chosen({width: '220px'});