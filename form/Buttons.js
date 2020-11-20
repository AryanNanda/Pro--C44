class Buttons {
    constructor (){
this.button = createButton("MOTIVATION BEHIND");
this.button2 = createButton("PLAY");
this.button3 = createButton("HOME");
}
display(){
this.button.position(200,400);
this.button2.position(400,400);
this.button3.position(800,10);
    
this.button.mousePressed(()=>{
gameState=1
this.button2.hide();
this.button.hide();
//play.stop();
//this.title.hide();

if(gameState === 1);

background(bg2);
})
this.button2.mousePressed(()=>{
gameState=2
this.button.hide();
this.button2.hide();
//play.stop();
if(gameState === 2){
background(bg3);
           
}
})
    
this.button3.mousePressed(()=>{
this.button2.show();
this.button.show();
//this.title.show();
//play.play();
gameState=0
})

   
}
    
}

    




