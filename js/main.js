let songs = document.querySelectorAll('.track');
let albumPics = document.querySelectorAll('.pics');

function hideAll() {
  songs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albumPics.forEach(function(el) {
  el.onclick = (e) => {

    hideAll();

    switch (e.target.getAttribute('id')) {

      case 'afterSchool':
        document.querySelector('#testMe').style.display = 'block';
        preventBreakage();
        break;

      case 'k_12':
        document.querySelector('#nursesOffice').style.display = 'block';
        preventBreakage();
        break;

      case 'crybaby':
        document.querySelector('#cake').style.display = 'block';
        preventBreakage();
        break;

      case 'dollhouse':
        document.querySelector('#carousel').style.display = 'block';
        preventBreakage();
        break;
    }

  }
})

function preventBreakage() {
  let players = document.querySelectorAll('audio');
  players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });

}
