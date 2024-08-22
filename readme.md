1주차 과제
display 속성
block / inline 차이점 - 각각의 예제 코드 작성
#block {
display: block;
}
#inline {
display: inline;
}

HTML의 Layout
HTML의 Layout 과 css layout 종류 설명

<div>
            HTML의 Layout
               HTML5 의 시멘틱 요소들
            </div>
            <div>
                <header>
                    헤더
                </header>
                <nav>네비</nav>
                <section>섹션</section>
                <article>아티클</article>
                <footer>푸터 </footer>
            </div>

    - 각각의 예제 코드 작성

<div class="wrapper">
  <div class="box1">하나</div>
  <div class="box2">둘</div>
  <div class="box3">셋</div>
  <div class="box4">넷</div>
  <div class="box5">다섯</div>
  <div class="box6">여섯</div>
</div>

.wrapper {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 100px 100px;
grid-gap: 10px;
}

flex

<div class="wrapper">
  <div class="box1">하나</div>
  <div class="box2">둘</div>
  <div class="box3">셋</div>
</div>

.wrapper {
display: flex;
}

.wrapper > div {
flex: 1;
}

HTML의 박스 모델
Content / padding / Border / Margin - 각각의 예제 코드 작성
#boxModel {
padding : 5px;
border : 1px solid yellow;
margin : 5px;
background-color :blue;
width: 50px;
}

html의 id / class
id / class 의 차이점
css 파일에서 id 선택자 : #

css 파일에서 class 선택자 : . - 각각의 예제 코드 작성
html의 id / class 차이점에 대해 설명하겠습니다. # / .
■ class (클래스)

class를 설정할 때 띄어쓰기로 2개 이상의 클래스를 지정할 수 있다.

■ id (아이디)

id를 설정할 때 1개의 id만을 지정할 수 있다.
