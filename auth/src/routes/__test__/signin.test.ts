import request from 'supertest';
import { app } from '../../app';

it ("fails when a email that doesn't exist is supplied", async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'pepe@gmail.com',
      password: 'pepe'
    })
    .expect(400);
})

it('fails when an incorrect password is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    }).expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'asdasdas'
    }).expect(400);
});

it('responds with a cookie when a given valid credentials', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    }).expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    }).expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
