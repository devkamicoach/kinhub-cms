import { factories } from '@strapi/strapi';
import { Context } from 'koa';


export default factories.createCoreController('api::article.article', {
  async createBulkArticles(ctx: Context) {
    const { body } = ctx.request as any
    await strapi.db.query('api::article.article').createMany(body)

    const entries = await Promise.all(body?.data?.map(async (article) => {
      console.log(article.topics)
       await strapi.db.query('api::article.article').update({
        where: {slug: article.slug},
        data: {
  
          topics: article.topics
        }
      })
    }))
    console.log(entries)
    
    ctx.response.body = entries;
  }
});