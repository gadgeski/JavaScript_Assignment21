目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

このコードは、ウェブページでテーマカラーを動的に変更する仕組みを実装しています。

HTML、CSS、JavaScript の 3 つのファイルが連携して動作します。

<h1>HTML (index.html)</h1>

このファイルは、ウェブページの構造を定義しています。

<h3>headタグ</h3>

<h3>meta charset="UTF-8"</h3> 文字コードをUTF-8に設定し、日本語などの文字が正しく表示されるようにします。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> レスポンシブデザインの設定で、デバイスの幅に合わせて表示を調整します。

<h3>title</h3> ブラウザのタブに表示されるページタイトルです。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssファイルを読み込み、ページの見た目をCSSで設定できるようにします。

<h3>bodyタグ</h3> ページに表示されるコンテンツが含まれます。

<h3>h1タグ</h3> ページのメインタイトル「色々テーマカラーが変わるヤツ」を表示します。

<h3>div class="color-buttons"</h3>

- テーマカラーを変更するための 4 つのボタン（「デフォルト」「グリーン」「パープル」「オレンジ」）が入っています。

- 各ボタンには id（例: defaultTheme）と class="theme-btn"が設定されています。

- data-color 属性: 各ボタンには data-color という特殊な属性があり、クリックしたときに適用する色（16 進数コード）が設定されています。JavaScript がこの値を使って色を変更します。

<h3>div class="content-box"</h3>

- テーマカラーが適用されるコンテンツの例です。

- <h2>（「色が変わります」）、<p>（説明文）、<button class="action-button">（アクションボタン）、<div class="highlight-box">（ハイライトされる部分）が含まれています。これらの要素の色は、選択したテーマカラーに合わせて変わります。

<h3>script src="script.js"</h3> script.jsファイルを読み込み、JavaScriptの機能（ボタンクリックで色を変える機能）を有効にします。

<h1>CSS (style.css)</h1>

このファイルは、ページの見た目をスタイリングしています。特に CSS 変数が重要な役割を果たします。

- :root セレクタ:

  - --main-theme-color: #007bff;: メインのテーマカラーを定義する CSS 変数です。初期値は青色（#007bff）です。:root に定義することで、HTML ドキュメント全体からこの変数にアクセスできます。

  - --accent-color: #ffc107;: アクセントカラーを定義する CSS 変数ですが、このコードでは使われていません。

- body:

  - フォント、配置（display: flex で中央寄せ）、背景色、文字色など、ページ全体の基本的なスタイルを設定しています。

- h1、.color-buttons、.theme-btn など:

  - それぞれの要素に対して、色、サイズ、余白、影、ホバー時のアニメーションなど、具体的なデザインが設定されています。

  - h1 や.content-box h2、.action-button、.highlight-box のように、color: var(--main-theme-color);という記述がある箇所は、定義された CSS 変数--main-theme-color の値を参照して色が設定されます。これにより、JavaScript でこの変数の値を変更するだけで、これらの要素の色が一括で変わるようになります。

- #defaultTheme, #greenTheme, #purpleTheme, #orangeTheme:

  - それぞれのテーマボタンの背景色を個別に設定しています。これは、ボタン自体がクリックするまでどのテーマの色になるかを示すためです。

<h1>JavaScript (script.js)</h1>

このファイルは、ユーザーがボタンをクリックしたときにページのテーマカラーを変更するロジックを実装しています。

- const themeButtons = document.querySelectorAll(".theme-btn");:

  - document.querySelectorAll(".theme-btn")を使って、HTML 内の class が theme-btn となっているすべての要素（つまり 4 つのテーマ切り替えボタン）を取得し、themeButtons という定数に配列として格納します。

- const rootElement = document.documentElement;:

  - document.documentElement は HTML ドキュメントのルート要素、つまり<html>タグを指します。CSS 変数--main-theme-color はこの:root 要素に定義されているため、JavaScript でこの要素のスタイルを操作して CSS 変数の値を変更します。

- themeButtons.forEach((button) => { ... });:

  - themeButtons 配列内の各ボタンに対してループ処理を行います。

  - button.addEventListener("click", () => { ... });: 各ボタンがクリックされたときに実行される処理を設定します。

* const newColor = button.dataset.color;: クリックされたボタンの data-color 属性の値（例えば#28a745）を取得し、newColor という定数に格納します。

  rootElement.style.setProperty("--main-theme-color", newColor);:

  - これがテーマカラーを変更する主要な部分です。

  - rootElement.style.setProperty()メソッドを使って、:root 要素のカスタムプロパティ（CSS 変数）の値を設定します。

  - 最初の引数"--main-theme-color"は変更したい CSS 変数の名前です。

  - 2 番目の引数 newColor は、その変数に設定したい新しい色（クリックされたボタンの data-color 属性から取得した値）です。

  - この一行のコードで、CSS で var(--main-theme-color)を使っているすべての要素の色が、即座に newColor で指定された色に変わります。

<h1>【まとめ】</h1>

このコードは以下の流れで動作します。

- HTML でページの構造と、テーマカラー変更ボタン、および色が変わるコンテンツを定義します。各ボタンには、適用する色情報（data-color 属性）を持たせています。

- CSS で、ページの基本的な見た目を整え、特に--main-theme-color という CSS 変数を定義します。そして、色を変えたい要素の color や background-color プロパティにこの CSS 変数を指定します。

- JavaScript で、すべてのテーマ切り替えボタンを取得し、それぞれのボタンにクリックイベントリスナーを設定します。

ボタンがクリックされると、そのボタンの data-color 属性から新しい色を取得し、その色で:root 要素に定義されている--main-theme-colorCSS 変数の値を上書きします。

- CSS 変数--main-theme-color の値が JavaScript によって変更されると、その変数を参照しているすべての CSS プロパティ（h1 の文字色、アクションボタンの背景色など）が自動的に新しい色に更新され、ページのテーマカラーが動的に切り替わる仕組みです。

これにより、少ないコード量で柔軟なテーマカラー変更機能を実現できます。
