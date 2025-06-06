const themeButtons = document.querySelectorAll(".theme-btn");
const rootElement = document.documentElement; // HTMLの:root要素

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const newColor = button.dataset.color; // data-color属性から新しい色を取得

    // CSS変数 '--main-theme-color' の値を変更する
    rootElement.style.setProperty("--main-theme-color", newColor);
  });
});
