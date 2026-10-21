/* 案件だけの動き：興和通信建設（警備員）（骨格の swipe.js は直さない）
 * 1. 塊（.blob）：ページごとに少しずつ違う位相から揺れ始める（同じ動きに見えないように）
 * 2. 吹き出し「!!」（.bub）は見出しが出た後に弾む（出現の順は土台の .rv に任せる。ここでは何もしない）
 */
(() => {
  document.querySelectorAll('.page').forEach((page, i) => {
    page.querySelectorAll('.blob').forEach((b, k) => {
      b.style.animationDelay = `${-(i * 1.7 + k * 4.3)}s`;
    });
  });
})();
