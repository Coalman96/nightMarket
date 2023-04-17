function myFunction(x) {
    x.classList.toggle("change");
  }


//각각의 article마다 적용될 head색상을 배열로 저장
const changeColor =[
    'rgb(30, 44, 90)',
    'rgb(238, 120, 31)',
    'rgb(255, 225, 0)',
    'rgb(112, 87, 163)',
    'rgb(235, 110, 165)',
    'rgb(196, 215, 0)',
    'rgb(0, 52, 31)',
]


console.log(changeColor)
//변경점의 article가져오기

const arts = document.querySelectorAll('.descContainer article')
window.addEventListener('wheel',(e)=>{
    // e.preventDefault()
    //현재 스크롤의 상단 좌표구하기
    const currentScr = this.scrollY
for(const [i, value] of arts.entries()){
    //각각의 articleTop 좌표구하기
    const artTop = value.offsetTop
    const headBg = value.querySelector('.introHead')
    //currentScr이 i번째 artTop의 값보다 커지면 introHead의 배경색을 
    //changeColor의 i번째 색상으로 바꾼다.
    if(currentScr>=artTop){
        headBg.style.backgroundColor = changeColor[i]
    }else if(currentScr<artTop){
        headBg.style.backgroundColor = ''
    }
}
})


/*
//여러 대상을 가져옴(가져온대상은 nobeList이기때문에 Array.from을통해 배열로 바꿔줘야한다.)
const arts = document.querySelectorAll('.descContainer article')
//발동트리거 설정(화면에 나타나거나 사라지자마자 바로 발동)
const options = {threshold:50}
//새로운 IntersectionObserver instance를 생성한다.
//여러대상 중 하나씩 순회해야하기때문에 인자를 받아야한다.
const observer = new IntersectionObserver((entries)=>{
    //iterable object(반복가능한 객체)를 다뤄야하기때문에 for of문 사용
    for(const entry of entries){
        //순회하는 각 요소의 순서를 저장
        //elements을 배열로 바꿔주고 그중에서 현재시점의 요소의 순서를 찾는다.없을경우 -1반환
        const introHead = entry.target.querySelector('.introHead');
        const currentIdx = Array.from(arts).indexOf(entry.target)
        console.log(currentIdx)
        console.log(introHead)
        // console.log(entry.target)
        if(entry.isIntersecting){
            introHead.style.backgroundColor = `${changeColor[currentIdx]}`
        } else{
            introHead.style.backgroundColor = ''
        }
    }
},{options})
//observer를 반복하여 실행시킨다.
for(const element of arts){
    observer.observe(element)
}
*/

