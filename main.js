// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
document.querySelector('#modal').classList.add('hidden');

document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', () => {
    if (heart.innerHTML === EMPTY_HEART) {
      mimicServerCall()
        .then(() => {
          heart.innerHTML = FULL_HEART;
          heart.classList.add('activated-heart');
        })
        .catch((error) => {
          document.querySelector('.error-modal').classList.remove('hidden');
          document.querySelector('.error-message').innerHTML = error;
          setTimeout(() => {
            document.querySelector('.error-modal').classList.add('hidden');
          }, 3000);
        });
      } else {
        heart.innerHTML = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
  })
});

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
