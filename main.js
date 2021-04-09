// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

const shapeHearts = document.querySelectorAll(".like-glyph");
const modal = document.getElementById('modal');

for( let heart of shapeHearts) {
    heart.addEventListener('click', likeClick);
}

function likeClick(e) {
  let goal = e.target;
  mimicServerCall()
    .then(function(serverMessage) {
      //
      if (goal.innerText === FULL_HEART ) {
        goal.className = 'like-glyph';
        goal.innerText = EMPTY_HEART;
      } else {
        goal.className = 'activated-heart';
        goal.innerText = FULL_HEART;
      }
    })
    .catch(function(error) {
      //
      modal.className = '';
      document.getElementById('modal-message').innerText = error;
      setTimeout(hideModal,5e3);
    })
}

function hideModal() {
  modal.className = 'hidden';
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
