import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::module.module', {
    async createBulkModules(ctx: Context) {
      const { body } = ctx.request as any
      await strapi.db.query('api::module.module').createMany(body)

      const entries = await Promise.all(body?.data.map(async (module) => {
        await strapi.db.query('api::module.module').update({
         where: {name: module.name},
         data: {
   
           topics: module.topics
         }
       })
     }))
      ctx.response.body = entries;
    }
  });
