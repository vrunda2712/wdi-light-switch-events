document.addEventListener('DOMContentLoaded',function() {
  var lightSwitch = document.querySelector('button');
  var body = document.querySelector('body');

  var message = document.querySelector('h1');

  lightSwitch.addEventListener('click', function() {
    if(body.classList.contains('light')) {
      body.classList.remove('light');
      body.classList.add('dark');
      message.innerText = "Hey, who turned off the lights? ";

      console.log('Hey, who turned off the lights?');
    } else if(body.classList.contains('dark')) {
      body.classList.remove('dark');
      body.classList.add('light');
      message.innerText = "It's so bright in here!";

      console.log('It\'s so bright in here!');
    };
  });
});
