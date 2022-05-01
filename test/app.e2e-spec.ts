import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import * as posts from '../src/data.json';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/posts (GET)', () => {
        return request(app.getHttpServer())
            .get('/posts')
            .expect(200)
            .expect(posts);
    });

    it('/post:id (GET)', () => {
        return request(app.getHttpServer())
            .get('/posts/9')
            .expect(200)
            .expect(posts[8]);
    });

    it('/post:id (GET) throws error when invalid id is passed', () => {
        return request(app.getHttpServer()).get('/posts/11').expect(404);
    });

    afterAll(async () => {
        await app.close();
    });
});
