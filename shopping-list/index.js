'use strict';
/*
To complete this challenge requires:

Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
Linking to your application JavaScript file from the index.html page.
Using this and event delegation
Requirements
In terms of user experience, your shopping list app must allow users to:

enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
check and uncheck items on the list by clicking the "Check" button
permanently remove items from the list
Additionally:

You must use a CDN-hosted version of jQuery
Put your application code in a file called index.js and link to it in index.html
Be sure to put both script elements at the bottom of the <body> element.
Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
*/

$(function(){
//locating the entire form and attaching a submit event. (You call/invoke functions, programs and methods.)
  $('#js-shopping-list-form').submit(event => {
    // this stops the default form submission behavior
    event.preventDefault();
    //we store the value of what is typed into the form text box and assign it to the const shoppingText.
    const shoppingText = $('.js-shopping-list-entry').val();

//this clear out the entry form.
    $('.js-shopping-list-entry').val('');

//We are locating an object (shopping-list ul) based on its class and then appending(adding another child to the current collection of children, which might be none. It's adding another child to the list. In this case we're adding a <li></li> to that collection of <li>'s , which is denoted by the shopping-list ul) onto that object.
    $('.shopping-list').append(
      `<li>
      <span class="shopping-item">${shoppingText}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
  });

//locate the .shopping list ul and listen for a click event on anything that's a child of it that matches .shopping-item-toggle (the second selector) and execute the function below.
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {

//this is the function that's executed. $this is referring to .shopping-item-toggle. find the closest (parent-going up the tree until you find a li) to that class. once you found a li, you go down the tree until you find a shopping-item because .find() looks for a child that matches that. toggleClass toggle each of the classes separated by spaces. It's toggling the class shopping-item__checked. we do not use the "." in this case because of toggleClass.
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

//locate the .shopping list ul and listen for a click event on anything that's a child of it that matches .shopping-item-delete (the second selector) and execute the function below.
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    //here $this refers to .shopping-item-delete, which is the button to delete it. The parent goes the tree until it finds the li and removes the entire li.
    $(this).closest('li').remove()
  });
});
