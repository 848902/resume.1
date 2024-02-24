document.getElementById('changeColorBtn').addEventListener('click', function () {
    // Change the background color of the entire resume container
    var resumeContainer = document.getElementById('resumeContainer');
    resumeContainer.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}