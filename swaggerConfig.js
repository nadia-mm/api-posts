const swaggerUi = require('swagger-ui-express');
const yamljs = require('yamljs');
const swaggerDocument = yamljs.load('./swagger.yaml');

const setupSwaggerDocs = (app, port) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
};

module.exports = setupSwaggerDocs;
