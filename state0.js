var demo = {};
demo.state0=function(){};
var hero,cursors,speed=10;
var centerX=1500/2,centerY=1000/2;
demo.state0.prototype = {
    preload:function(){
        game.load.spritesheet('hero','assets/herosp.png',260,500);
        game.load.image('bg','assets/bg.png');

        
    },
    
    create:function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        console.log('state0');
        game.stage.backgroundColor = 'FF0000';
        addChangeStateEventListners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0,0,2813,1000);
        
        
        
         var bg = game.add.sprite(0,0,'bg');
        //hero
         hero = game.add.sprite(centerX,centerY,'hero');
        
        hero.anchor.setTo(0.5,0.5);
        hero.scale.setTo(0.7,0.7);
        cursors = game.input.keyboard.createCursorKeys();
        game.physics.enable(hero);
        hero.body.collideWorldBounds = true;
        
         hero.animations.add('walk',[0,1,2,3]);
        game.camera.follow(hero);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300,0,600,1000);
        
       
    },
    
    update:function(){
        if(cursors.up.isDown)
        {hero.y -= speed;
         if(hero.y<395)
             hero.y=395;
        
        }
        
        else if(cursors.down.isDown)
        {hero.y += speed;}
       
        
         if(cursors.left.isDown)
         {hero.x -= speed;
           hero.animations.play('walk',15,true);
          hero.scale.setTo(-0.7,0.7);}
        
        else if(cursors.right.isDown)
        { hero.x += speed;
          hero.animations.play('walk',15,true);
          hero.scale.setTo(0.7,0.7);
        }
        
         
        else {
            hero.animations.stop('walk');
            hero.frame = 0;
        }
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