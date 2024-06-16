var swfobject = {};

swfobject.embedSWF = function(url, cont, width, height) {
    var ruffle = window.RufflePlayer.newest(),
        player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
            style: 'width: 100%; height: auto',
        });

    player.load({ url: url });

    function resizePlayer() {
        var aspectRatio = 4 / 3;  // Proporção do jogo
        var container = document.getElementById(cont);
        var newWidth = container.clientWidth;
        var newHeight = newWidth / aspectRatio;
        player.style.width = newWidth + 'px';
        player.style.height = newHeight + 'px';
    }

    // Ajusta o tamanho do player quando a janela é redimensionada ou a orientação muda
    window.addEventListener('resize', resizePlayer);
    window.addEventListener('orientationchange', resizePlayer);

    // Chame a função inicialmente para ajustar o tamanho
    resizePlayer();
};
