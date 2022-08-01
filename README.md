### 開發前環境準備
1. node 版本使用 > 16
2. 本地開發 url
```
localhost.admin.jvid.com:3003
```
3. 在本地電腦新增憑證後放置於 https 檔案夾內<br>
注意: 產生的檔案請命名為 localdev_key.pem 與 localdev.pem
```
mkcert "*.jvid.com" localhost 127.0.0.1 ::1 localhost.admin.jvid.com 0.0.0.0
```
4. (mac電腦) 請將憑證加入到 "鑰匙圈存取" 加入後，要手動改成 "永遠信任"
4. 刷新 macOS 與 Mac OS X 的 DNS 緩存指令，每個版本的終端機命令略有不同，若無法作動請上網查詢或是參考：https://appletoolbox.com/flush-dns-cache-mac-os-x/?doing_wp_cron=1657695813.0946660041809082031250



### 功能
- vue、vue-router、vue-i18n  API 自動引入  [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- components 組件自動引入 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- Router 自動生成，放入 `page/` 資料夾內 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- 全域資料管理 [pinia](https://pinia.vuejs.org/)

### 關於使用 windicss 必看
- [vite 安裝 WindiCSS](https://windicss.org/integrations/vite.html)
- [關於 alias config 使用](https://windicss.org/posts/v30.html#alias-config)
- [WindiCSS Attributify Mode 介紹](https://windicss.org/posts/v30.html#attributify-mode)

```html
<!-- Attributify Mode -->
<button
  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Button
</button>
```

- [github](https://github.com/windicss/vite-plugin-windicss)
