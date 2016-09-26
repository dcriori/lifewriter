var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: '时光闪存'
  });
});

module.exports = router;
