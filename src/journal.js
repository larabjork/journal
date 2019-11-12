export function Entry (title){
  this.title = title;
}

Entry.prototype.capitalize = function (){
  this.title = this.title.toUpperCase();

};
