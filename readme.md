# beicun's ShuffleText

## Introduction

中村勇吾さんと池田泰延さんのテキストをシャッフルするアニメーションが好きで、似たようなアニメーション及び自分に必要な機能を備えたライブラリを作っている次第です。

## Demo

[https://beicun.github.io/beicun-ShuffleText/](https://beicun.github.io/beicun-ShuffleText/)

## Get started

````html
<head>
<link href="./style.css">
<script  src="./beicun-ShuffleText.js"></script>
</head>
<body>
<p class="text">BEICUN'S SHUFFLE-TEXT</p>
<p class="button is-start"><button>start()</button></p>
<p class="button is-end"><button>reverse()</button></p>
<script>
const element = document.querySelector('.text');
const st = new ShuffleText(element);
const startButton = document.querySelector('.button.is-start');
startButton.addEventListener('click', () => {
  st.start();
});
const endButton = document.querySelector('.button.is-end');
endButton.addEventListener('click', () => {
  st.reverse();
});
</script>
````

## Memo

- TypeScriptで作り直す予定。
- NPMパッケージ化する予定。
