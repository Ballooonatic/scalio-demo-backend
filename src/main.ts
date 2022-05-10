import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: [
            'http://localhost:4200',
            'https://adorable-sprinkles-d02886.netlify.app',
        ],
        methods: 'GET',
    });
    await app.listen(3000);
}
bootstrap();
