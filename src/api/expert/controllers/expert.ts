import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::expert.expert', {
    async createBulkExperts(ctx: Context) {
      const { body }: any = ctx.request;
      await strapi.db.query('api::expert.expert').createMany(body)
      const entries = await Promise.all(body?.data?.map(async (expert) => {
        console.log(expert.topics)
         await strapi.db.query('api::expert.expert').update({
          where: {slug: expert.slug},
          data: {
    
            topics: expert.topics
          }
        })
      }))
      
      ctx.response.body = entries;
    }
  });
