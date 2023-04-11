export default {
    routes: [
      {
        method: 'POST',
        path: '/addBulkModules',
        handler: 'module.createBulkModules',
        config: { auth:false}
      },
    ],
  }

  