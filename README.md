# 澳门回归 · 拍摄清单

适合手机的全天实地拍摄清单。每站的 Google 地图按钮会打开前往该地点的路线。勾选状态保存在当前浏览器的 `localStorage`，同一网址下刷新仍可继续。换设备、浏览器或部署网址时，进度各自独立。

## 本机预览

从项目根目录执行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

打开 [http://127.0.0.1:8000](http://127.0.0.1:8000)。

## 部署到 Vercel

选择以下任一种方式：

- **Vercel Dashboard**：将项目放进 Git 仓库并导入。若项目在仓库的子目录，`Root Directory` 选 `macau-field-checklist`。项目含 `vercel.json`，使用 `Other`、空构建命令和 `public` 输出目录。没有环境变量或安装步骤。
- **Vercel CLI**：安装并登录 Vercel CLI 后，在这个目录执行 `vercel deploy --prod`，按提示选择账号和项目。把返回的网址发到手机打开。

[静态站点的 Vercel 设置](https://vercel.com/docs/builds/configure-a-build#skip-build-step) · [Vercel CLI 部署说明](https://vercel.com/docs/cli/deploy)

路线、导航目的地和拍摄项位于 `public/app.js`。已部署后若要保持已有进度，请保留已有站点与拍摄项的 ID。
