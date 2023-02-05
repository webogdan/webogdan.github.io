$(document).ready(function() {
    let b = 0;
	let a = $('.a');
	
	
	
	
    

//Стрелки
    $('.arrow_right').click(function() {		
			
		$(a).each(function(i) {
			if(!$(this).hasClass('hidden')) {
				$(this).addClass('hidden');	
				b = (i+1)%a.length;
				$(a[b]).removeClass('hidden');
				return false;		
			}
	
		});

		
		
    });

    $('.arrow_left').click(function() {		
		$(a).each(function(i) {
			if(!$(this).hasClass('hidden')) {
				$(this).addClass('hidden');	
				if(i==0) {
					b = a.length-1;
				} else {
					b = (i-1)%a.length;
				}
			$(a[b]).removeClass('hidden');
			return false;		
			}			
		});	
    });

    

    let d = 0
	let c = $('.c');

	$('.arrow_right').click(function() {		
	
		$(c).each(function(i) {
		if(!$(this).hasClass('hidden')) {
			$(this).addClass('hidden');	
			d = (i+1)%c.length;   
			$(c[d]).removeClass('hidden');
			return false;		
		}			
	});	
});

$('.arrow_left').click(function() {		
    $(c).each(function(i) {
        if(!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');	
            if(i==0) {
                d = c.length-1;
            } else {
                d = (i-1)%c.length;
            }
    $(c[d]).removeClass('hidden');
    return false;		
    }			
});	
});

let f = 0
	let e = $('.e');

	$('.arrow_right').click(function() {		
	
		$(e).each(function(i) {
			if(!$(this).hasClass('hidden')) {
			$(this).addClass('hidden');	
			f = (i+1)%e.length;   
			$(e[f]).removeClass('hidden');
			return false;		
		}			
	});	
});

	$('.arrow_left').click(function() {		
		$(e).each(function(i) {
			if(!$(this).hasClass('hidden')) {
				$(this).addClass('hidden');	
				if(i==0) {
					f = e.length-1;
				} else {
					f = (i-1)%e.length;
				}
			$(e[f]).removeClass('hidden');
			return false;		
				}			
		});	
});


/************************************/
// Правильные ответы
	$('.c .good').click(function() {
		$('.c .good').each(function(i) {
			$('.c .good').addClass('answer');
			$('.c .bad').addClass('hidden');
			$('.info').removeClass('hidden')
		})
	});

	$('.c .bad').click(function() {
		$('.c .bad').each(function(i) {
			$('.c .bad').addClass('bad_answer');
			$('.c .good').addClass('answer');
			$('.info').removeClass('hidden')
		})
	});

	$('.e .good').click(function() {
		$('.e .good').each(function(i) {
			$('.e .good').addClass('answer');
			$('.e .bad').addClass('hidden');
			$('.info').removeClass('hidden')
		})
	});

	$('.e .bad').click(function() {
		$('.e .bad').each(function(i) {
			$('.e .bad').addClass('bad_answer');
			$('.e .good').addClass('answer');
			$('.info').removeClass('hidden')
		})
	});
/************************************/


//Очистка ответов
	$('.arrow_right').click(function() {
		$('.c .good').each(function(i) {
			if($(this).hasClass('answer')) {
				$(this).removeClass('answer')
			}
			$('.c .bad').removeClass('hidden')
		});
		$('.c .bad').each(function(i) {
			if($(this).hasClass('bad_answer')) {
				$(this).removeClass('bad_answer')
				$(this).removeClass('hidden')
			}
		});

		$('.e .good').each(function(i) {
			if($(this).hasClass('answer')) {
				$(this).removeClass('answer')
			}
			$('.e .bad').removeClass('hidden')
		});
		$('.e .bad').each(function(i) {
			if($(this).hasClass('bad_answer')) {
				$(this).removeClass('bad_answer')
				$(this).removeClass('hidden')
			}
		});
	});
	$('.arrow_left').click(function() {
		$('.c .good').each(function(i) {
			if($(this).hasClass('answer')) {
				$(this).removeClass('answer')
			}
			$('.c .bad').removeClass('hidden')
		});
		$('.c .bad').each(function(i) {
			if($(this).hasClass('bad_answer')) {
				$(this).removeClass('bad_answer')
				$(this).removeClass('hidden')
			}
		});

		$('.e .good').each(function(i) {
			if($(this).hasClass('answer')) {
				$(this).removeClass('answer')
			}
			$('.e .bad').removeClass('hidden')
		});
		$('.e .bad').each(function(i) {
			if($(this).hasClass('bad_answer')) {
				$(this).removeClass('bad_answer')
				$(this).removeClass('hidden')
			}
		});
	});
	$('.arrow_right').click(function() {
		$('.info').addClass('hidden');
	});
	$('.arrow_left').click(function() {
		$('.info').addClass('hidden');
	});
});
/************************************/