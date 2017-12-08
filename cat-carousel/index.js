'use strict';

function handleThumbnailClicks() {
  $('.thumbnail').on('click', function (event) {
    const imgSrc = $(this).find('img').attr('src');
    const imgAlt = $(this).find('img').attr('alt');
    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

    // Accomplishes the same as line 6 with only one use off .attr()
    // by passing it an object with multiple properties.
    // See: http://api.jquery.com/attr/#attr-attributes
    // $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
  });
}

$(handleThumbnailClicks());
/*
Cat carousel
In this challenge, you need to write JavaScript that provides the following experience: 
when a user selects one of the thumbnail images using the mouse or keyboard, 
that image should be displayed in the full-size image container at the top. 
Updating the image should also update its alt attribute. 
To test keyboard interactivity, 
you can Tab to one of the thumbnails and press the Enter key.

Some of the methods we discussed in the previous assignment might be helpful here, 
but you should also use the jQuery docs and Google if you're not sure what to do here. 
Researching on your own is a key skill, and it'll get easier with practice.
*/
// function handlePhotoClicks(){

//   $('.thumbnail').on('click', function(event){
//     const heroCat = $(event.currentTarget);
//     const otherCats = $('.thumbnail').not(heroCat);
//     otherCats.removeClass('hero');
//     heroCat.toggleClass('hero',);



//   });
// }

// $(handlePhotoClicks());

// // save reference to this bulb,
// const targetBulb = $(event.currentTarget);
// // and reference to all other bulbs
// const otherBulbs = $('.js-lightbulb').not(targetBulb);

// // Remove 'bulb-on' class from other bulbs
// otherBulbs.removeClass('bulb-on');
// // toggle the presence of 'bulb-on' on this bulb; 
// targetBulb.toggleClass('bulb-on');