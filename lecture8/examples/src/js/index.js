var result = new Array(9);

function bot() {
        var id = Math.floor(Math.random() * 9);
        result[id] ? bot() : move(id, 'bot');
}

function checkEnd() {
    if (result[0]=='bot' && result[1]=='bot' && result[2]=='bot'
        || result[0]=='player' && result[1]=='player' && result[2]=='player')  return true;
    if (result[3]=='bot' && result[4]=='bot' && result[5]=='bot'
        || result[3]=='player' && result[4]=='player' && result[5]=='player')  return true;
    if (result[6]=='bot' && result[7]=='bot' && result[8]=='bot'
        || result[6]=='player' && result[7]=='player' && result[8]=='player')  return true;
    if (result[0]=='bot' && result[3]=='bot' && result[6]=='bot'
        || result[0]=='player' && result[3]=='player' && result[6]=='player')  return true;
    if (result[1]=='bot' && result[4]=='bot' && result[7]=='bot'
        || result[1]=='player' && result[4]=='player' && result[7]=='player')  return true;
    if (result[2]=='bot' && result[5]=='bot' && result[8]=='bot'
        || result[2]=='player' && result[5]=='player' && result[8]=='player')  return true;
    if (result[0]=='bot' && result[4]=='bot' && result[8]=='bot'
        || result[0]=='player' && result[4]=='player' && result[8]=='player')  return true;
    if (result[2]=='bot' && result[4]=='bot' && result[6]=='bot'
        || result[2]=='player' && result[4]=='player' && result[6]=='player')  return true;
    if(result[0] && result[1] && result[2] && result[3] && result[4] && result[5] && result[6] && result[7] && result[8]) return true;
}

function move(id, role) {
    if(result[id] ) return false;
    result[id] = role;
    document.getElementById(id ).className = role;
    !checkEnd() ? (role == 'player') ? bot() : null : reset()
}

function reset() {
    alert("Игра окончена!");debugger
    result = new Array(9);
    var grid = document.getElementById('gameGrid');
    var cels = grid.getElementsByTagName('td');
    for(var i = 0; i < cels.length; i++){
        cels[i].className = '';
    }

    //window.location.reload();
}