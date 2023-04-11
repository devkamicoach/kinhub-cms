import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::topic.topic', {
    async createBulkTopics(ctx: Context) {
      const { body } = ctx.request;
      console.log(body);
      const entries = await strapi.db.query('api::topic.topic').createMany(body)
      ctx.response.body = entries;
    }
  });
