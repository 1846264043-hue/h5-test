# 发掘奶茶人格 H5（GitHub Pages 部署包）

这是一个纯静态项目，无需安装依赖或执行构建命令。

## 文件结构

```text
.
├── index.html
├── app.js
├── styles.css
├── README.md
├── .nojekyll
└── assets
    ├── images   # 页面实际使用的 33 张 PNG 图片
    └── svg      # SVG 独立目录；当前页面没有直接使用 SVG 文件
```

## GitHub Pages 部署

1. 将本目录中的全部内容上传到 GitHub 仓库根目录。
2. 打开仓库的 `Settings → Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. 选择部署分支（通常为 `main`）和 `/ (root)`，然后保存。
5. 等待 GitHub Pages 生成访问地址。

也可以将内容放入仓库的 `docs` 目录，并在 Pages 设置中选择 `/docs`。

## 本地预览

直接打开 `index.html`，或使用任意静态文件服务器打开本目录。

## 资源说明

- 图片与 SVG 已按目录分开打包。
- 当前 H5 使用 Figma 整屏导出的 PNG 画板，因此实际引用的视觉资源都位于 `assets/images`。
- `assets/svg` 保留为独立目录，方便以后加入独立 SVG 图标或插画。
