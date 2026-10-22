# LP Boilerplate

Vite + React + TypeScript + Tailwind CSS v4 をベースにしたLPボイラープレートです。

## 動作環境

- Node.js 22.x 以上

## セットアップ

```bash
npm install
```

## コマンド

| コマンド             | 説明                         |
| -------------------- | ---------------------------- |
| `npm run dev`        | 開発サーバー起動             |
| `npm run build`      | 本番ビルド（`dist/` に出力） |
| `npm run preview`    | ビルド結果のプレビュー       |
| `npm run lint`       | ESLint（TypeScript）         |
| `npm run lint:style` | Stylelint（SCSS / CSS）      |

## ディレクトリ構成

```
.
├── public/
│   ├── favicon.svg
│   └── assets/
│       └── img/
│           ├── image.png      # 仮画像
│           └── ogp.png        # OGP用画像（1200×630px）
├── src/
│   ├── main.tsx               # エントリポイント
│   ├── pages/                 # ページ単位のコンポーネント
│   │   └── Top.tsx
│   ├── components/            # 再利用するUIコンポーネント
│   │   └── Header.tsx
│   └── styles/
│       ├── tailwind.css       # Tailwindエントリ
│       ├── style.scss         # グローバルカスタムスタイル
│       └── _mixin.scss        # 変数・ミックスイン
├── index.html
└── meta.json                  # メタ情報の一括管理
```

## JSX 早見表（マークアップエンジニア向け）

ページ・コンポーネントは `.tsx` ファイルに HTML に近い記法（JSX）で記述します。
通常の HTML と異なる点は以下の通りです。

| HTML                | JSX                        | 備考             |
| ------------------- | -------------------------- | ---------------- |
| `class="..."`       | `className="..."`          | 予約語のため変更 |
| `for="..."`         | `htmlFor="..."`            | `<label>` 属性   |
| `<!-- comment -->`  | `{/* comment */}`          | JSXのコメント    |
| `style="color:red"` | `style={{ color: 'red' }}` | オブジェクト形式 |
| `<img>`             | `<img />`                  | タグは必ず閉じる |
| `<input>`           | `<input />`                | 同上             |

### コンポーネントの基本形

```tsx
// src/components/MyComponent.tsx

export default function MyComponent() {
  return (
    <div className="px-4 py-8">
      <h2 className="text-xl font-bold">見出し</h2>
    </div>
  );
}
```

### 状態を持つコンポーネント（インタラクション）

```tsx
import { useState } from 'react';

export default function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? '閉じる' : '開く'}
      </button>
      {isOpen && <p>表示されるコンテンツ</p>}
    </div>
  );
}
```

### コンポーネントの使い方

```tsx
// src/pages/Top.tsx
import MyComponent from '@/components/MyComponent';

export default function Top() {
  return (
    <>
      <MyComponent />
    </>
  );
}
```

## メタ情報の管理

`meta.json` を編集することで、ページタイトル・description・OGPタグをまとめて管理できます。
ビルド時およびdev起動時に `index.html` のプレースホルダーへ自動的に注入されます。

```json
{
  "title": "ページタイトル",
  "description": "ページの説明文",
  "url": "https://example.com/",
  "siteName": "サイト名",
  "ogImage": "https://example.com/assets/img/ogp.png",
  "twitterCard": "summary_large_image"
}
```

### 各フィールドの反映先

| フィールド    | 反映先タグ                                                             |
| ------------- | ---------------------------------------------------------------------- |
| `title`       | `<title>` / `og:title` / `twitter:title`                               |
| `description` | `<meta name="description">` / `og:description` / `twitter:description` |
| `url`         | `og:url`                                                               |
| `siteName`    | `og:site_name`                                                         |
| `ogImage`     | `og:image` / `twitter:image`                                           |
| `twitterCard` | `twitter:card`                                                         |

### OGP画像について

`public/assets/img/ogp.png` を推奨サイズ（**1200×630px**）の画像に差し替えてください。
`ogImage` のURLは本番ドメインの絶対URLで指定します。

### Twitter Card の種類

| 値                    | 表示形式                 |
| --------------------- | ------------------------ |
| `summary`             | 小さいサムネイル         |
| `summary_large_image` | 大きいサムネイル（推奨） |

## スタイルについて

Tailwind CSS v4 をベースに、SCSSも併用できます。

- **Tailwindクラス**: `Top.tsx` などのコンポーネント内で直接記述
- **グローバルスタイル**: `src/styles/style.scss` に `@apply` またはSCSSで記述
- **変数・ミックスイン**: `src/styles/_mixin.scss` で管理
