function stage1() {
    var btn = document.createElement('button');
    btn.classList.add('startBtn');
    btn.innerHTML = "Старт";
    document.querySelector('div.bomber').appendChild(btn);

}

function stage2() {
     var gamearea = document.querySelector('div.bomber'),
        i = 0,
        j = 0;
    
    for(;i<9;i++){
        var rowDOM = document.createElement('div');
        rowDOM.classList.add('row');
        j = 0;
        for(; j<12; j++){
            var cellDOM = document.createElement('div');
            rowDOM.appendChild(cellDOM);
        }
    }
}

window.onload = function() {
    stage1();
}