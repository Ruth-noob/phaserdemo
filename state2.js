demo.state2=function(){};
demo.state2.prototype = {
    preload:function(){
        
    },
    
    create:function(){
        game.stage.backgroundColor = '#FFF000';
        console.log('state2');
        addChangeStateEventListners();
    },
    
    update:function(){
        
    }
    
};