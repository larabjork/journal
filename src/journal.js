export function Entry (title, body){
  this.title = title;
  this.body = body;
  this.characterCount = 0;
}

Entry.prototype.capitalize = function (){
  this.title = this.title.toUpperCase();

}

Entry.prototype.countCharacters = function (){
  this.characterCount = this.characterCount + this.body.length;
  console.log(this.characterCount);
};
