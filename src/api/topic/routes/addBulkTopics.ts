export default {
    routes: [
      {
        method: 'POST',
        path: '/addBulkTopics',
        handler: 'topic.createBulkTopics',
        config: { auth:false}
      },
    ],
  }

  