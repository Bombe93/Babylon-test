var fps = 0;

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame   || 
    window.mozRequestAnimationFrame      || 
    window.oRequestAnimationFrame        || 
    window.msRequestAnimationFrame       || 
    function(callback, element){
        window.setTimeout(function(){
           
            callback(+new Date);
        }, 1000 / 60);
    };
})();

var lastRun;
(function(window, document){

    var canvas       = document.getElementById("frame"),
        /*context      = canvas.getContext("2d"), 
        width        = canvas.width,
        height       = canvas.height,             */
        game_running = true,
        show_fps     = true;

    function showFPS(){
        context.fillStyle = "Black";
        context.font      = "normal 16pt Arial";

        context.fillText(fps + " fps", 10, 50);
    }
    function gameLoop(){
        if(!lastRun) {
            lastRun = new Date().getTime();
            requestAnimFrame(gameLoop);
            return;
        }
        var delta = (new Date().getTime() - lastRun)/1000;
        lastRun = new Date().getTime();
        fps = 1/delta;
        //Clear screen
        context.clearRect(0, 0, width, height);

        if (show_fps) showFPS();

        if (game_running) requestAnimFrame(gameLoop);

    }
    
    gameLoop();

}(this, this.document))
