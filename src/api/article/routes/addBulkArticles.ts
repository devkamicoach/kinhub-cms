export default {
    routes: [
      {
        method: 'POST',
        path: '/addBulkArticles',
        handler: 'article.createBulkArticles',
        config: { auth:false}
      },
    ],
  }

  