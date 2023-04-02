const $posterImg = document.querySelector('.poster-img');
const $age = document.querySelector('.age');
const $movieTitle = document.querySelector('.title p');
const $day = document.querySelector('.date p');
const $seat = document.querySelector('.seat p');
const $headCount = document.querySelector('.head-count p');
const $qrcode = document.querySelector('.qrcode-img');
const $secretBox = document.querySelectorAll('.secret-box li');
const $secretBoxLi = [...$secretBox];
 const $click = document.querySelector('.secret-box-click');



// console.log($qrcode);
// $age.innerHTML = '나이제한';
// $movieTitle.innerHTML = '제목<br><span>서브타이틀</span>';
// $day.innerHTML = 'cinemabox 날짜<br><span>시간</span>';
// $seat.innerHTML = '스크린타입<br><span>좌석</span>';
// $headCount.innerHTML = '인원';
// $qrcode.src = '../image/소울메이트.png';


// for(let i = 0; i < $secretBoxLi.length; i++){
//     $secretBoxLi[i].style.opacity= '0';
//     $secretBoxLi[i].style.transition = 'opacity '+ i +'s ease-out';
//     $secretBoxLi[i].style.transitionDelay = i-0.9+'s';
// }


//새번째 버전 이후 수정

const $getBook = JSON.parse(localStorage.getItem("bookinfo")); // bookInfo 객체 받는 부분 ==> 사용하실 때 ex) $getBook.title $getBook.startTime
const $people_type_number = JSON.parse(localStorage.getItem("people_type_number")); //인원수
const $seatArr = JSON.parse(localStorage.getItem("seatArr")); //좌석 번호
console.log($people_type_number);
console.log($seatArr);

switch ($getBook.title) {
    case "더퍼스트슬램덩크":
        $posterImg.src = '../image/PO슬램덩크.jpg';
        $age.innerHTML = '12세이상관람가';
        $movieTitle.innerHTML = '슬램덩크<br><span>The First Slam Dunk</span>';
        $qrcode.src = '../image/QR슬램덩크.jpg';
        break;

    case "스즈메의문단속":
        $posterImg.src = '../image/PO스즈메의문단속.jpg';
        $age.innerHTML = '12세이상관람가';
        $movieTitle.innerHTML = '스즈메의 문단속<br><span>신카이마코도 신작</span>';
        $qrcode.src = '../image/QR스즈메의문단속.jpg';
        break;

    case "던전앤드래곤-도적들의 명예":
        $posterImg.src = '../image/PO던전앤드래곤.jpg';
        $age.innerHTML = '12세이상관람가';
        $movieTitle.innerHTML = '던전앤드래곤<br><span>도적들의명예</span>';
        $qrcode.src = '../image/QR던전앤드래곤.jpg';
        break;

    case "웅남이":
        $posterImg.src = '../image/PO웅남이.jpg';
        $age.innerHTML = '15세이상관람가';
        $movieTitle.innerHTML = '웅남이<br><span>간이 쏙 빠지게 웃긴 사나이가 온다</span>';
        $qrcode.src = '../image/QR웅남이.jpg';
        break;

    case "엘카미노":
        $posterImg.src = '../image/PO엘카미노.jpg';
        $age.innerHTML = '전체관람가';
        $movieTitle.innerHTML = '엘카미노<br><span>산티아고 둘레길에서 찾은 희망과 위로의 메시지</span>';
        $qrcode.src = '../image/QR엘카미노.jpg';
        break;

    case "소울메이트":
        $posterImg.src = '../image/PO소울메이트.jpg';
        $age.innerHTML = '12세이상관람가';
        $movieTitle.innerHTML = '소울메이트<br><span>넌 항상 내 옆에 있었어</span>';
        $qrcode.src = '../image/QR소울메이트.jpg';
        break;

    case "오토라는남자":
        $posterImg.src = '../image/PO오토라는남자.jpg';
        $age.innerHTML = '12세이상관람가';
        $movieTitle.innerHTML = '오토라는남자<br><span>혼자가 좋지만 자꾸 함께하게 된다?</span>';
        $qrcode.src = '../image/QR오토라는남자.jpg';
        break;

    case "여섯개의밤":
        $posterImg.src = '../image/PO여섯개의밤.jpg';
        $age.innerHTML = '12세이상관람가';
        $movieTitle.innerHTML = '여섯개의밤<br><span>모든 여행은 여행가가 알 수 없는 비밀스러운 목적지가 있다</span>';
        $qrcode.src = '../image/QR여섯개의밤.jpg';
        break;
    default:
}

$day.innerHTML = `${$getBook.location} ${$getBook.date}<br><span>${$getBook.startTime}</span>`;
$seat.innerHTML = `${$getBook.room}<br><span>${$people_type_number}</span>`;
$headCount.innerHTML = `${$seatArr}`;

$click.parentElement.addEventListener('click', () => {
   if ($people_type_number) {
        for (let i = 0; i < $secretBoxLi.length; i++) {
            $secretBoxLi[i].style.opacity = '0';
            $secretBoxLi[i].style.transition = 'opacity ' + i + 's ease-out';
            $secretBoxLi[i].style.transitionDelay = i - 0.9 + 's';
        }
    }else{
        alert("예매해주세요");
    }
    
});
