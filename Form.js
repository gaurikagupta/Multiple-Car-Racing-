class Form{
    constructor(){}
    display(){
        var title=createElement('h2');
        var input=createInput("name");
        var button=createButton('play');
        var greeting=createElement('h3');
        title.html("Car Racing!");
        title.position(530,100);
        input.position(510,200);
        button.position(570,310);
        button.mousePressed(function(){
         input.hide();
         button.hide();
         var name=input.value();
         playerCount=playerCount+1;
         player.updateCount(playerCount);
         player.update(name);
         greeting.html("Hello:"+name); 
         greeting.position(545,400);   
        });
    }
}
