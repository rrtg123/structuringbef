class Game{
constructor(){

}
getState(){
    var gameStateREF=database.ref('gameState')
    gameStateREF.on("value",function(data){
        gameState=data.val();

    })
}
update(state){
    database.ref('/').update({
        gameState:state

    })
    
}
start(){
    if(gameState===0){
        player=new Player();
        player.getCount()
        form=new Form()
        form.display()
    }
}
}
//  '/'  refers to the main root
//CREATING THE OBJECT WITHOUT CREATING ITS CLASS IS CALLED ABSTRACTION/