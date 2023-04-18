function myFunction(x) {
  x.classList.toggle("change");
}



/*
const halfH = document.documentElement.scrollHeight/2
const options = {
    root: document.documentElement, // observe the entire document
    threshold: 0,
    rootMargin: `-${halfH}px 0px 0px 0px`
  }
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry)=>{
      if (entry.isIntersecting) {
        topBtn.parentNode.style.display = 'block';
      } else {
        topBtn.parentNode.style.display = '';
      }
    });
  }, options);
  
  // start observing the document
  observer.observe(document.documentElement)
*/

//각각의 article마다 적용될 색상을 배열로 저장
const changeColor = [
  "rgb(30, 44, 90)",
  "rgb(238, 120, 31)",
  "rgb(255, 225, 0)",
  "rgb(112, 87, 163)",
  "rgb(235, 110, 165)",
  "rgb(196, 215, 0)",
  "rgb(0, 52, 31)",
];
const changeImg = [
  "./images/header_nav_logo_y.png",
  "./images/header_nav_logo_n.png",
  "./images/header_nav_logo_n.png",
  "./images/header_nav_logo_y.png",
  "./images/header_nav_logo_n.png",
  "./images/header_nav_logo_n.png",
  "./images/header_nav_logo_w.png",
];
const changeLogo = ["y", "n", "n", "y", "n", "n", "w"];
//변경점의 article가져오기
const arts = document.querySelectorAll(".descContainer article");
const header = document.querySelector("header");
const menus = document.querySelectorAll(".menu li");
const snses = document.querySelectorAll(".sns li");
const headerScr = header.querySelector("img");
window.addEventListener("scroll", (e) => {
  e.preventDefault();
  //현재 스크롤의 상단 좌표구하기
  const currentScr = this.scrollY;
  for (const [i, value] of arts.entries()) {
    console.log(i)
    //각각의 value의 배경색상 가져오기getComputedStyle속성이용
    const artBg = window.getComputedStyle(value).backgroundColor;
    //각각의 articleTop 좌표구하기
    const artTop = value.offsetTop;
    const headBg = value.querySelector(".introHead");
    //currentScr이 i번째 artTop의 값보다 커지면 introHead의 배경색을
    //changeColor의 i번째 색상으로 바꾼다.
    if (currentScr >= artTop) {
      headBg.style.backgroundColor = artBg;
      header.style.backgroundColor = changeColor[i];
      headerScr.setAttribute("src", changeImg[i]);
      // 메뉴의 이미지도 변경해주기위해 반복문사용
      for (const menu of menus) {
        const getSrc = menu.querySelector("img");
        //replace를 이용하여 간소화
        const setSrc = getSrc
          .getAttribute("src")
          .replace(/(_.)?\.png$/, `_${changeLogo[i]}.png`);
        getSrc.setAttribute("src", setSrc);
      }
      for (const sns of snses) {
        const getSrc = sns.querySelector("img");
        const setSrc = getSrc
          .getAttribute("src")
          .replace(/(_.)?\.png$/, `_${changeLogo[i]}.png`);
        getSrc.setAttribute("src", setSrc);
      }
    }else if(document.documentElement.scrollHeight/2<currentScr){
        topBtn.parentNode.style.display = 'block'
    }else{
        topBtn.parentNode.style.display = ''
    }
  }
});
//상단 이동버튼
const topBtn = document.querySelector("aside a");
topBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});