const Koa = require('koa');
const axios = require('axios');

const app = new Koa();

app.use(async ctx => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt');
    ctx.body = new Buffer(response.data, 'base64').toString('ascii');
  } catch (error) {
    ctx.throw(500)
  }
});

app.listen(80);
