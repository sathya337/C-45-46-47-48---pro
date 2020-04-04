class Form {

 constructor(){
   this.input = createInput("Name");
   this.play = createButton('Play');
   this.greeting1 = createElement('h2');
   this.start = createButton('Start');
   this.relieve1 = createButton('Relieve');
   this.relieve2 = createButton('Relieve');
   this.relieve3 = createButton('Relieve');
   this.relieve4 = createButton('Relieve');
   this.relieve5 = createButton('Relieve');
   this.greeting2 = createElement('h2');
   this.reset = createButton('Reset')
 }

 hide(){
   this.input.hide();
   this.play.hide();
   this.greeting.hide();
   this.start.hide();
   this.relieve1.hide();
   this.relieve2.hide();
   this.relieve3.hide();
   this.relieve4.hide();
   this.relieve5.hide();
   this.greeting2.hide();
   this.reset.hide();
 }

 display(){
   var title = createElement('h2');
   title.html("Stress Reliever");
   title.position(900,30);
   this.input.position(900,270);
   this.play.position(900,300);
   this.play.mousePressed(()=>{
     this.input.hide();
     this.play.hide();
     this.greeting1.html("Hello "+player.name +"We are here to relieve your stress");
     this.greeting.position(900,285);
     this.start.position(900,360);
   })
   this.start.mousePressed(()=>{
     this.greeting1.hide();
     this.start.hide();
     game.update(1);
     this.relieve1.position(900,450);
   })
   this.relieve1.mousePressed(()=>{
     this.relieve1.hide();
     this.relieve2.position(900,540);
   })
   this.relieve2.mousePressed(()=>{
     this.relieve2.hide();
     this.relieve3.position(900,630)
   })
   this.relieve3.mousePressed(()=>{
    this.relieve3.hide();
    this.relieve4.position(900,720)
  }) 
  this.relieve4.mousePressed(()=>{
    this.relieve4.hide();
    this.relieve5.position(900,810)
  })
  this.relieve5.mousePressed(()=>{
   this.relieve5.hide();
   game.update(2);
   this.greeting2.html("Stress is a feeling of strain and pressure." + "I made this game for the people who are suffering with stress")
   this.greeting2.position(900,855);
   this.reset.position(900,900);
  })
  this.reset.mousePressed(()=>{
    this.greeting2.hide();
    this.reset.hide();
    game.update(0);
  })
 }

}
