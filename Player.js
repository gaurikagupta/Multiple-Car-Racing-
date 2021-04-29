class Player{
    constructor(){}
getCount(){
    var playerCountRef=database.ref('playerCount');
    playerCountRef.on("value",function(data){
        playerCount=data.val();
        //playerCount is code variable not db variable
        // : for db variable
        // = for code variable
    });                                                    
}
updateCount(count){
database.ref('/').update({
    playerCount:count
})
}
update(name){
var playerIndex="player"+playerCount;
database.ref(playerIndex).set({
    name:name
});    
}
}

