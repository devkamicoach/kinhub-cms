declare const strapi: StrapiGlobal;

interface StrapiGlobal {
  db: any;
  query(entity: string): StrapiQueryBuilder;
  plugins: {
    [pluginName: string]: {
      services: {
        [serviceName: string]: any;
      };
    };
  };
}

interface StrapiQueryBuilder {
  create(data: any): Promise<any>;
  // add other methods as needed
}
