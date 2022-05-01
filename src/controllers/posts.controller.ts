import { Controller, Get, Param } from '@nestjs/common';
import { Post } from '../interfaces/post.interface';
import { PostsService } from '../services/posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    getPosts(): Post[] {
        return this.postsService.getPosts();
    }

    @Get(':id')
    getPost(@Param() params): Post {
        return this.postsService.getPost(params.id);
    }
}
