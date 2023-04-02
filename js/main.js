function slide(){
const $slides = document.querySelector('.slide-wrapper');
const $slide = document.querySelectorAll('.slide');
var currentIdx = 0;
const slideCount = $slide.length;
const slideWidth = 336;
const slideMargin = 33; 
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const $slidesWidth = (slideWidth + slideMargin) * slideCount + slideMargin;

$slides.style.width = String($slidesWidth) +'px';

function moveSLide (num){
    $slides.style.left = String(-num * 369) +'px';
    currentIdx = num;
}

nextBtn.addEventListener('click',function(){
    if(currentIdx < slideCount-3){
    moveSLide(currentIdx+1);
    }else{
        moveSLide(0);
    }
});

prevBtn.addEventListener('click',function(){
    if(currentIdx > 0){
    moveSLide(currentIdx-1);
    }else{
    moveSLide(slideCount -3);
    }
});

}

function clickMovie(){
    const $slide = [...document.querySelectorAll('.slide')];
    const $title = document.querySelector('.title');
    const $movieTiketing = document.querySelector('.movie-tiketing');
    
    
    $slide[0].addEventListener('click',function(){
        $title.innerHTML = '스즈메의 문단속<br><span>신카이마코도 신작</span>';
        $movieTiketing.innerHTML = '바로예매';
        
        
    });
     
    $slide[1].addEventListener('click',function(){
        $title.innerHTML = '던전앤드래곤<br><span>도적들의명예</span>';
        $movieTiketing.innerHTML = '바로예매';
      
    });

     
    $slide[2].addEventListener('click',function(){
        $title.innerHTML = '슬램덩크<br><span>The First Slam Dunk</span>';
        $movieTiketing.innerHTML = '바로예매';
      
    });

     
    $slide[3].addEventListener('click',function(){
        $title.innerHTML = '리바운드<br><span>감동실화</span>';
        $movieTiketing.innerHTML = '바로예매';
        
    });

     
    $slide[4].addEventListener('click',function(){
        $title.innerHTML = '소울메이트<br><span>넌 항상 내 옆에 있었어</span>';
        $movieTiketing.innerHTML = '바로예매';
      
    });

     
    $slide[5].addEventListener('click',function(){
        $title.innerHTML = '웅남이<br><span>간이 쏙 빠지게 웃긴 사나이</span>';
        $movieTiketing.innerHTML = '바로예매';
    });

}


clickMovie();
slide();
