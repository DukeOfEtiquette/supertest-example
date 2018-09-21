'use strict';

const request = require('supertest');
const app = require('../server/app');

describe('Server', () => {

  it('should return family', () => {

    request(app)
      .get('/stooges')
      .expect(9000) // wtf?
      .expect('Content-Type', /garbage/) // wtf?
      .end((err, res) => {
        if(err) throw err;
        let stooges = ['Larry', 'Moe', 'Shemp'];

        // Uncomment to show it fails as expected
        // expect(res.header['content-type']).toMatch(/application\/garbage/);
        // expect(res.body).toEqual({});
        // expect(res.status).toBe(9000);

        expect(res.header['content-type']).toMatch(/application\/json/);
        expect(res.body).toEqual(stooges);
        expect(res.status).toBe(200);
      });

  });

});