
demo.state1=function(){};
demo.state1.prototype = {
    preload:function(){
        
    },
    
    create:function(){
        console.log('state1');
        game.stage.backgroundColor='000FFF';
        addChangeStateEventListners();
    },
    
    update:function(){
        
    }
    
};
