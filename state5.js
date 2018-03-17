demo.state5=function(){};
demo.state5.prototype = {
    preload:function(){
        
    },
    
    create:function(){
        console.log('state5');
         game.stage.backgroundColor='5BBDA1';
        addChangeStateEventListners();
    },
    
    update:function(){
        
    }
    
};