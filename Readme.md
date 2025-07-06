# テーマカラー変更機能 - 学習用プロジェクト

## 概要

CSS 変数と JavaScript を使用してウェブページのテーマカラーを動的に変更する機能を実装したプロジェクトです。

**目的**: TypeScript や React にスケールするための準備段階  
**使用技術**: HTML / CSS / JavaScript

## 学習のポイント

### 1. CSS 変数（カスタムプロパティ）

```css
:root {
  --main-theme-color: #007bff;
}

.element {
  color: var(--main-theme-color);
}
```

- `:root`で定義することでグローバルにアクセス可能
- `var()`関数で変数を参照
- JavaScript から動的に値を変更可能

### 2. データ属性の活用

```html
<button data-color="#28a745">グリーン</button>
```

- `data-*`属性で HTML にデータを埋め込み
- JavaScript で`dataset`プロパティからアクセス

### 3. DOM 操作とイベント処理

```javascript
const buttons = document.querySelectorAll(".theme-btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const newColor = button.dataset.color;
    document.documentElement.style.setProperty("--main-theme-color", newColor);
  });
});
```

## 仕組み

1. **HTML**: ボタンに`data-color`属性で色情報を設定
2. **CSS**: `--main-theme-color`変数を使用して色を統一管理
3. **JavaScript**: ボタンクリック時に CSS 変数の値を変更

## 実装のメリット

- **保守性**: 一つの変数を変更するだけで複数要素の色が変わる
- **拡張性**: 新しいテーマカラーを簡単に追加可能
- **パフォーマンス**: CSS の再計算が効率的

## ファイル構成

- `index.html`: ページ構造とテーマ切り替えボタン
- `style.css`: CSS 変数の定義とスタイル設定
- `script.js`: テーマ変更のロジック

## 次のステップ

このプロジェクトで学んだ概念は、以下の発展に活用できます：

- TypeScript での型安全な実装
- React での state 管理
- より複雑なテーマシステムの構築
- CSS フレームワークとの統合
