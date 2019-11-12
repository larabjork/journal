import {Entry} from './journal';
import './styles.css';

$(document).ready(function (){
  $("#form").submit(function (event){
  event.preventDefault ();
  var titleInput = $("#title").val();
  var newEntry = new Entry(titleInput);
  newEntry.capitalize();
  $("#output-here").text(newEntry.title);


  })


})
