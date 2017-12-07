function fizzbuzzer(num) {
  if (num % 15 === 0) {
    return 'fizzbuzz';
  }

  if (num % 5 === 0) {
    return 'buzz';
  }

  if (num % 3 === 0) {
    return 'fizz';
  }

  return num;
}

function generateItem(result) {
  let className = '';
  if (typeof result === 'string') {
    className = result;
  }

  return `
    <div class="fizz-buzz-item ${className}">
      <span>${result}</span>
    </div>
  `;
}

function startFizzbuzzer(num) {
  const results = [];
  for (let i = 1; i <= num; i++) {
    results.push(fizzbuzzer(i));
  }
  return results;
}

//delay this code until the DOM is ready. It's a special callback. It's good to use whenever setting up event handerls, otherwise you risk having some browsers not setting up the event handlers properly. Key: This is a way to set up most event handlers.
$(function() {


/*
for completionist sake, here's the function where you only append ONCE to the DOM.  the performance increase is actually quite big:
*/

//this is the more efficient version:

  $('#number-chooser').on('submit', function(event) {
    event.preventDefault();
    
    //including the 10 forces it to use decimal.
    const input = parseInt($('#number-choice').val(), 10);
    const results = startFizzbuzzer(input);

    results.forEach(result => {
      const div = generateItem(result);

      //this is called once for each result.
      $('.js-results').append(div);
    });
  });



//This is the less efficient version:


  $('#number-chooser').on('submit', function(event) {
  event.preventDefault();
  const input = parseInt($('#number-choice').val(), 10);
  const results = startFizzbuzzer(input);
  const divs = results.map(result => generateItem(result));

//.append is very slow when putting stuff on the DOM. This line below is called just once.
  $('.js-results').append(divs);
});

});
