# 接入sentry

## 创建一个sentry项目

根据sentry的指引文档拉取工具包
把sentry的init方法引入项目中

## 打包sourcemap并上传到sentry服务器

<https://docs.sentry.io/platforms/javascript/guides/react/sourcemaps/uploading/>
因为本地项目是vite创建所以用以下命令：
`npx @sentry/wizard@latest -i sourcemaps`
会把项目和sentry搭建连接

## 告警配置飞书

飞书创建自定义机器人事件，把事件的webhook地址复制到sentry的alerts中。当报错时，飞书机器人就会推送告警消息。
