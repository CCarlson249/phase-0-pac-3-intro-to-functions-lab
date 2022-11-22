function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase()
  }
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(str){
let message;
if(str === str.toLowerCase()){
message = "I can\'t hear you!"
}
if(str === str.toUpperCase()){
message = "YES INDEED!"
}
if (str === "Let's have dinner together!"){
message = "I would love to!";
}
return message
}