var demo = {};
demo.state0=function(){};
var hero,cursors,speed=10;
var centerX=1500/2,centerY=1000/2;
demo.state0.prototype = {
    preload:function(){
        game.load.image('hero','assets/hero.png');
        
    },
    
    create:function(){
        console.log('state0');
        game.stage.backgroundColor = 'FF0000';
        addChangeStateEventListners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        //hero
         hero = game.add.sprite(centerX,centerY,'hero');
        hero.anchor.setTo(0.5,0.5);
        cursors = game.input.keyboard.createCursorKeys();
    },
    
    update:function(){
        if(cursors.up.isDown)
            hero.y -= speed;
        
        else if(cursors.down.isDown)
            hero.y += speed;
        
         if(cursors.left.isDown)
            hero.x -= speed;
        
        
        else if(cursors.right.isDown)
            hero.x += speed;
    }
    
};

function changeState(i,stateNum)
{
  game.state.start('state'+ stateNum);    
}

function addKeyCallback(key,fn,args)
{
    game.input.keyboard.addKey(key).onDown.add(fn,null,null,args);
}

function addChangeStateEventListners()
{
    addKeyCallback(Phaser.Keyboard.ZERO,changeState,0);
        addKeyCallback(Phaser.Keyboard.ONE,changeState,1);
        addKeyCallback(Phaser.Keyboard.TWO,changeState,2);
        addKeyCallback(Phaser.Keyboard.THREE,changeState,3);
        addKeyCallback(Phaser.Keyboard.FOUR,changeState,4);
        addKeyCallback(Phaser.Keyboard.FIVE,changeState,5);
        addKeyCallback(Phaser.Keyboard.SIX,changeState,6);
        addKeyCallback(Phaser.Keyboard.SEVEN,changeState,7);
        addKeyCallback(Phaser.Keyboard.EIGHT,changeState,8);
        addKeyCallback(Phaser.Keyboard.NINE,changeState,9);
}