# LP Boilerplate — AI Context

## Tech Stack

- **Vite** — ビルドツール・開発サーバー
- **React 19 + TypeScript** — UIとインタラクション
- **Tailwind CSS v4** — ユーティリティファーストCSS（メイン）
- **SCSS** — カスタムスタイル・ミックスイン（補助）
- **ESLint + Prettier + Stylelint** — Lint / フォーマット
- **husky + lint-staged** — コミット前の自動Lint

## Directory Structure

```
src/
  main.tsx              # エントリポイント（基本的に編集しない）
  vite-env.d.ts         # Viteの型定義（編集しない）
  pages/                # ページ単位のコンポーネント
  components/           # 再利用するUIコンポーネント
  styles/
    tailwind.css        # Tailwindエントリ（編集しない）
    style.scss          # グローバルカスタムスタイル
    _mixin.scss         # SCSS変数・ミックスイン
public/
  favicon.svg           # ファビコン
  assets/img/           # 画像
meta.json               # メタ情報（title / OGP等）を一元管理
```

## Key Conventions

### ページの追加

1. `src/pages/NewPage.tsx` を作成
2. `src/main.tsx` でルーティングがあれば追加（現状はシングルページ）

### コンポーネントの追加

`src/components/` 以下に配置する。

```tsx
// src/components/MyComponent.tsx
export default function MyComponent() {
  return <div className="...">...</div>;
}
```

### パスエイリアス

`src/` 配下は `@/` で参照する。

```ts
import Header from '@/components/Header';
import '@/styles/style.scss';
```

### スタイルの使い分け

| ケース                               | 方法                                      |
| ------------------------------------ | ----------------------------------------- |
| 汎用レイアウト・余白                 | Tailwindクラスを直接記述                  |
| 複雑なアニメーション・SCSS特有の記述 | `style.scss` に `@apply` またはSCSSで記述 |
| 変数・ミックスイン                   | `_mixin.scss` に追加                      |

### メタ情報の更新

`meta.json` のみ編集する。`index.html` は直接編集しない。

## Commands

```bash
npm run dev          # 開発サーバー起動
npm run build        # 本番ビルド
npm run format       # Prettierで全ファイルフォーマット
npm run lint         # ESLint
npm run lint:style   # Stylelint
```
