# beicun's ShuffleText

## Introduction

中村勇吾さんと池田泰延さんのテキストをシャッフルするアニメーションが好きで、似たようなアニメーション及び自分に必要な機能を備えたライブラリを作っている次第です。
コードは池田泰延さんの[ShuffleText](https://github.com/ics-ikeda/shuffle-text)を参考にしました。

## Demo

[https://beicun.github.io/beicun-ShuffleText/](https://beicun.github.io/beicun-ShuffleText/)

## Get started

````html
<p class="text">ABOUT THIS WEBSITE</p>
<p class="box"></p>
<p class="button is-start"><button>start()</button></p>
<p class="button is-end"><button>reverse()</button></p>

<script>
// テキストの包含要素を取得
const element = document.querySelector('.text');
// インタスタンスを生成
const st = new ShuffleText(element);

const startButton = document.querySelector('.button.is-start');
startButton.addEventListener('click', () => {
  // テキストが増えていく
  st.start();
});

const endButton = document.querySelector('.button.is-end');
endButton.addEventListener('click', () => {
  // テキストが減っていく
  st.reverse();
});
</script>
````

## Memo

- TypeScriptで作り直す予定。
- NPMパッケージ化する予定。
