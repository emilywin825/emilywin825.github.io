
// <영화> 영화 목록 색깔 ======================================= start
const $movielist = document.querySelector('.movie-list ul li');
$movielist.parentElement.onclick = e => {
    const $selected = e.target.parentElement.querySelector('.change-color-movie');
    const $movielistSoldout = e.target.querySelector('.movie-list ul .soldout');
    const $poster = document.querySelector('#poster');
    let selectedPic = '';

    if ($selected !== null) $selected.classList.remove('change-color-movie');

    e.target.classList.add('change-color-movie');

    // bookInfo 객체에 선택한 영화 제목 담기
    bookInfo.title = e.target.textContent;
    // bookInfo 객체에 선택한 영화 제목 담기


    if (e.target.classList.contains('soldout')) {
        alert(`해당 영화는 매진입니다.`);
        e.target.classList.remove('change-color-movie');
        bookInfo.title = '';
    }
    // check-content 부분 영화 제목 보여주기
    document.querySelector('.seletedTitle').textContent = bookInfo.title;
    // check-content 부분 영화 제목 보여주기

    switch (bookInfo.title) {
        case "더퍼스트슬램덩크":
            selectedPic = 'slamdunk';
            break;
        case "스즈메의문단속":
            selectedPic = 'suzume';
            break;
        case "던전앤드래곤-도적들의 명예":
            selectedPic = 'dungeon';
            break;
        case "웅남이":
            selectedPic = 'woongnam';
            break;
        case "엘카미노":
            selectedPic = 'elcamino';
            break;
        case "소울메이트":
            selectedPic = 'soulmate';
            break;
        case "오토라는남자":
            selectedPic = 'otto';
            break;
        case "여섯개의밤":
            selectedPic = 'layover';
            break;
        default:
            selectedPic = '';
    }



    // check-content poster부분 이미지 클래스 삭제 후 추가 ====== start
    $poster.className = '';
    $poster.classList.add('poster');
    $poster.classList.add(selectedPic);
    // check-content poster부분 이미지 클래스 삭제 후 추가 ====== end
    bookInfoCheck();
};

// <영화> 영화 목록 색깔 ======================================= end


// <극장> 지역 목록 색깔 $ display ======================================= start

const $region = document.querySelector('.region');
const $regionLi = document.querySelector('.region li');
const $cityWrap = document.querySelector('.city-wrap');
let checkFlag = -1;
$regionLi.parentElement.onclick = e => {

    for (let i = 0; i < $region.children.length; i++) {

        if ($region.children[i].id === e.target.id) {
            e.target.classList.add('change-color-region');
            checkFlag = i;
        } else {
            $region.children[i].classList.remove('change-color-region');
            $cityWrap.children[i].classList.remove('show-city');
        }
    }
    if (checkFlag !== -1) {
        $cityWrap.children[checkFlag].classList.add('show-city');
    }
    bookInfoCheck();
}

// <극장> 지역 목록 색깔 $ display ======================================= end


// <극장> detail지역 목록 색깔 $ display ======================================= start

const $detailCity = document.querySelector('.city-wrap .city');
$detailCity.parentElement.onclick = e => {

    // 기존에 클래스가 붙은 요소를 찾아내서 리무브
    const $city = e.target.parentElement.querySelector('.change-color-city');

    if ($city !== null) $city.classList.remove('change-color-city');

    e.target.classList.add('change-color-city');
    bookInfo.location = e.target.parentElement.querySelector('li.change-color-city').textContent;

    // check-content<selected-location>  ==================================== start
    document.querySelector('.selected-show-location em').textContent = bookInfo.location;
    // check-content<selected-location>  ==================================== end
    bookInfoCheck();
}

// <극장> detail지역 목록 색깔 $ display ======================================= end


// <날짜> 날짜 선택 색깔 ==================================== start

const $daydateWrap = document.querySelector('.daydate-wrap');
const $daydate = document.querySelector('.daydate');

$daydate.parentElement.onclick = e => {

    const $selectedDatdate = e.target.parentElement.querySelector('div.change-color-daydate');

    const $year = e.target.parentElement.parentElement.querySelector('.year').textContent;
    const $month = e.target.parentElement.parentElement.querySelector('.month').textContent;
    const $detaildate = e.target.querySelector('.detaildate').textContent;
    const $day = e.target.querySelector('.day').textContent;

    if ($selectedDatdate !== null) $selectedDatdate.classList.remove('change-color-daydate');

    e.target.classList.add('change-color-daydate');
    bookInfo.date = `${$year}.${$month}.${$detaildate}(${$day})`;


    // checkcontent<selected-date>   ==================================== start
    document.querySelector('.selected-date').textContent = bookInfo.date;
    // checkcontent<selected-date>   ==================================== end
    bookInfoCheck();
};

// <시간> 시간 선택 색깔 ==================================== start

const $room = document.querySelector('.room');
const $startTime = document.querySelector('.start-time');
const $timeList = document.querySelector('.time-list');

$room.parentElement.onclick = e => {
    const $selectedTime = $room.parentElement.querySelector('.change-color-playtime');

    if ($selectedTime !== null) $selectedTime.classList.remove('change-color-playtime');
    e.target.classList.add('change-color-playtime');
    bookInfo.room = e.target.parentElement.parentElement.parentElement.querySelector('.typ').textContent;
    bookInfo.startTime = e.target.parentElement.querySelector('.start-time.change-color-playtime').textContent;
    // check-content / poster-title 부분 
    document.querySelector('.selectedRoom').textContent = e.target.parentElement.parentElement.parentElement.querySelector('b').textContent;
    // check-content / book-info 시간부분 
    document.querySelector('.selected-startTime').textContent = bookInfo.startTime;
    // check-content / selected-show-room 부분
    document.querySelector('.selected-show-room').textContent = bookInfo.room;

    bookInfoCheck();
}


// <시간> 시간 선택 색깔 ==================================== end


// 영화 예약 정보 담는 객체 
const bookInfo = {
    title: "",
    location: "",
    date: "",
    startTime: "",
    room: "",
};
// bookInfo 객체에 프로퍼티 값들이 null이 없는지 확인해주는 Flag객체
// const flag = {
//     index : ''
// };


// 좌석페이지로 넘어가는 버튼 클릭시 bookInfo객체에 null값이 있으면 페이지 이동막기 === start
const $nextBtn = document.querySelector('.next-btn-wrap a');
$nextBtn.onclick = e => {
    let bookInfoIndex = '';
    switch(index) {
        case "title" : bookInfoIndex = "영화"; break;
        case "location" : bookInfoIndex = "극장"; break;
        case "date" : bookInfoIndex = "날짜"; break;
        case "startTime" : bookInfoIndex = "시간 & 상영관"; break;
        default : bookInfoIndex = "영화"; break;
    }

    if(!$nextBtn.classList.contains('change-color-btn')) {
        alert(`${bookInfoIndex}를 선택해주세요.`);
    }
}

// 좌석페이지로 넘어가는 버튼 클릭시 bookInfo객체에 null값이 있으면 페이지 이동막기 === end


// 좌석선택페이지로 객체 넘기기

let index = ''; // boolInfo 프로퍼티 중 몇번째 인덱스가 null인지 알려주는 값
// bookInfo객체의 모든 프로퍼티가 입력된 상태인지 확인하는 함수 ==== start
function bookInfoCheck() {
    let infoFullFlag = 1 // bookInfo 객체에 null 값이 없는 상태
    for (let infokey in bookInfo) {
        if (bookInfo[infokey] === "") {
            // console.log(bookInfo.infokey);
            infoFullFlag = -1;
            index = infokey;
            break;
        }
    }

    if (infoFullFlag === 1) {
        $nextBtn.classList.add('change-color-btn');
        $nextBtn.pathname = "/html/seat.html";
        console.log(bookInfo);
        localStorage.setItem("bookinfo", JSON.stringify(bookInfo));     // bookInfo 객체 다음 페이지로 넘기는 부분
    } else {
        $nextBtn.classList.remove('change-color-btn');
        $nextBtn.pathname = "/html/book.html";
    }
}
// bookInfo객체의 모든 프로퍼티가 입력된 상태인지 확인하는 함수 ==== end


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 좌석선택페이지로 객체 넘기기

