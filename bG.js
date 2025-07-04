function changeBg() {

  var backgrounds = ["https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", 
                     "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", 
                     "https://images.unsplash.com/photo-1566400628146-ae8f27849e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"];

  var imgShown = document.body.style.backgroundImage;
  var newNumber = Math.floor(Math.random() * backgrounds.length);
  document.body.style.background = 'url(' + backgrounds[newNumber] + ')';
}

window.onload = changeBg;
