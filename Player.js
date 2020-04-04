class Player {
  constructor(){
    this.index = null;
    this.score = 0;
    this.name = null;
  }

  update(){
    var playerIndex = "player" + this.index;
    database.ref(playerIndex).set({
    });
  }

  static getPlayerInfo(){
   // console.log(this.index);
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      playerInfo = data.val();
    })
  }
}
