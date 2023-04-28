export default {
    routes: [
      {
        method: 'POST',
        path: '/addBulkExperts',
        handler: 'expert.createBulkExperts',
        config: { auth:false}
      },
    ],
  }

  