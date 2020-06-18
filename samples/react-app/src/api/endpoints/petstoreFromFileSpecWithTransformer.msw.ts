/*
 * Generated by orval v2.3.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import faker from 'faker';
import { rest } from 'msw';

export const getSwaggerPetstoreMSW = () => [
  rest.get('*/v:version/pets', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(
        [...Array(faker.random.number({ min: 1, max: 10 }))].map(() => ({
          id: faker.random.number(),
          name: faker.random.word(),
          tag: faker.helpers.randomize([faker.random.word(), undefined]),
        })),
      ),
    );
  }),
  rest.post('*/v:version/pets', (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
  rest.get('*/v:version/pets/:petId/test/:testId', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json({
        id: faker.random.number(),
        name: faker.random.word(),
        tag: faker.helpers.randomize([faker.random.word(), undefined]),
      }),
    );
  }),
];
