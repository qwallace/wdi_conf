console.log('scroll loaded')

$('.down-btn').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$('.nav-header').offset().top}, 700);
});


$('.nav-twitter').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$('#twitter').offset().top}, 700);
});

$('.nav-speakers').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$('#speakers').offset().top}, 700);
});

$('.nav-schedule').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$('#schedule').offset().top}, 700);
});

$('.nav-sponsors').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$('#sponsors').offset().top}, 700);
});


$('.nav-contact').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$('#contact').offset().top}, 700);
});

$('.nav-home').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$('#landing-page').offset().top}, 700);
});