/**
 * ShuffleText
 * @author BEICUNDUN
 * @since 2023-08-15
 */
class ShuffleText {
  /**
   * コンストラクタ
   */
  constructor(element, fps = 30, duration = 300) {
    this.textElement = element;
    this.originalText = element.textContent;
    this.duration = duration;
    // this.FPS = fps;
    // this.DEF = Math.floor(1000 / this.FPS);
    this.requestAnimationFrameId = 0;
    this.startTime;
    this.isReverse = false;
    // ランダム文字列
    this.randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    this.floatIndexes = this.originalText.split('').map((randomChar, index) => {
      // return Math.random() * index;
      let rate = index / this.originalText.length;
      return Math.random() * (1 - rate) + rate;
    });
    element.textContent = '';
  }
  
  /**
   * 順方向のアニメーションを実行
   */
  start() {
    console.log('start');
    cancelAnimationFrame(this.requestAnimationFrameId);
    this.startTime = Date.now();
    this.isReverse = false;
    // 描画のアニメーションを実行
    this.requestAnimationFrameId = requestAnimationFrame(() => {
      this.onInterval();
    });
  }

  /**
   * 逆方向のアニメーションを実行
   */
  reverse() {
    console.log('reverse');
    cancelAnimationFrame(this.requestAnimationFrameId);
    this.startTime = Date.now();
    this.isReverse = true;
    // 描画のアニメーションを実行
    this.requestAnimationFrameId = requestAnimationFrame(() => {
      this.onInterval();
    });
  }
  
  /**
   * アニメーションを定義
   */
  onInterval() {
    this.requestAnimationFrameId = requestAnimationFrame(() => {
      this.onInterval();
    });
    // 順方向
    if (!this.isReverse) {
      let percent =  (Date.now() - this.startTime) / this.duration;
      let randomText = '';
      if (percent <= 1) {
        let textLength = this.originalText.length * percent;
        for (let i = 0; i < textLength; i++) {
          let floatIndex = this.floatIndexes[i];
          if (percent >= floatIndex) {
            randomText += this.originalText.charAt(i);
          }
          else {
            let randomCharIndex = Math.floor(Math.random() * this.randomChars.length);
            randomText += this.randomChars.charAt(randomCharIndex);
          }
        }
        this.textElement.textContent = randomText;
      }
      else if (percent > 1) {
        this.textElement.textContent = this.originalText;
        cancelAnimationFrame(this.requestAnimationFrameId);
      }
      else {
        cancelAnimationFrame(this.requestAnimationFrameId);
      }
    }
    // 逆方向
    else {
      let percent =  (Date.now() - this.startTime) / this.duration;
      let randomText = '';
      percent = 1 - percent;
      if (percent > 0) {
        let textLength = this.originalText.length * percent;
        for (let i = 0; i < textLength; i++) {
          let floatIndex = this.floatIndexes[i];
          if (percent >= floatIndex) {
            randomText += this.originalText.charAt(i);
          }
          else {
            let randomCharIndex = Math.floor(Math.random() * this.randomChars.length);
            randomText += this.randomChars.charAt(randomCharIndex);
          }
        }
        this.textElement.textContent = randomText;
      }
      else if (percent <= 0) {
        this.textElement.textContent = '';
        cancelAnimationFrame(this.requestAnimationFrameId);
      }
      else {
        cancelAnimationFrame(this.requestAnimationFrameId);
      }
    }
  }
  
  /**
   * ランダムなテキストを返す
   * @param {Array} _randomChars ランダムな文字を要素とする配列
   * @param {int} length 生成したい文字数
   * @param {int} prefixLength 生成するテキストの先頭何文字を、オリジナルテキストとするか
   * @returns {String}
   */
  getRandomText(_randomChars, length, prefixLength) {
    let newRandomText = ''; // ランダム文字列を格納
    if (prefixLength) {
      length -= prefixLength;
      newRandomText = this.originalText.slice(0, prefixLength);
    }
    // ランダム文字の配列をコピー
    let newRandomChars = _randomChars.filter(() => true);
    // 引数で指定された長さのランダム文字列を生成
    for (let i = 0; i < length; i++) {
      // ランダム文字群からランダムなインデックスを取得
      let randomIndex = Math.floor(Math.random() * newRandomChars.length);
      // ランダム文字を取得し、文字列に追加
      let randomChar = newRandomChars[randomIndex];
      newRandomText += randomChar;
      // 取得した文字を除く配列を生成
      newRandomChars = newRandomChars.filter((char, index) => {
        return index !== randomIndex;
      });
    }
    return newRandomText;
  }
}
