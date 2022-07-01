/*
 * @Author: Aiden(戴林波)
 * @Date: 2022-06-30 10:54:03
 * @LastEditTime: 2022-06-30 10:56:33
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
 */
const express = require('express')
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const cors = require('cors');

const app = express()

// app.use(cors());
app.use(express.static('dist/', {
  maxAge: 1000 * 3600
}))

app.listen(3009)
