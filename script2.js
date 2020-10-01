$(document).ready(function() 
{

  $('#first_form').submit(function(e) 
  {
    e.preventDefault();
    var first_name = $('#first_name').val();
    
  if (first_name!="" || first_name!=null)
  {
    var line ="<tr><td>"+first_name+"</td></tr>";
    alert(line);
    //$("table").append(line);
  }
   
  });

});