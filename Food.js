class Food {
    constructor(){
    this.foodStock=0;
    this.lastFeed;
    this.image=loadImage('Milk.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFeedTime(lastFeed){
     this.lastFeed=lastFeed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      fill(255,255,254);
        textSize(15);
      if(lastFeed>=12){
        text("Last Feed : "+ lastFeed%12 + " PM", 50,30);
      }else if(lastFeed==0){
        text("Last Feed : 12 AM",50,30);
           }else{
             text("Last Feed : "+ lastFeed + " AM", 50,30)
           }
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}
