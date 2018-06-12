const { mysql } = require('../qcloud');

// let t = mysql('fc').select('*').where({ id: 1 });

module.exports = ctx => {
  ctx.state.data = {
    msg: 'fuck'
  }
}