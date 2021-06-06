class Player{
constructor(){
this.name = null;
this.index = 0 ;
this.distance = 0 ;

}

getCount(){
var playercountref = database.ref("playerCount");
playercountref.on("value",(data)=>{
playerCount = data.val()




})
}

updateCount(c){
database.ref("/").update({
playerCount:c

})

}

update(){
var playerindex = "players/player"+ this.index ;
database.ref(playerindex).set({
 name: this.name,
distance:this.distance
})

}
}