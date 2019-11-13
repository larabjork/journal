import {Entry} from './journal';
import './styles.css';

$(document).ready(function (){
  $("#form").submit(function (event){
  event.preventDefault ();
  var titleInput = $("#title").val();
  var bodyInput = $("#body").val();
  var newEntry = new Entry(titleInput, bodyInput);
  newEntry.capitalize();
  newEntry.countCharacters();


  $("#output-title").text(newEntry.title);
  $("#output-body").text(newEntry.body);
  $("#title-words-count").text(newEntry.characterCount);



  });


});
