import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as posts from '../data.json';
import { Post } from '../interfaces/post.interface';

@Injectable()
export class PostsService {
    getPosts(): Post[] {
        return posts;
    }
    getPost(postId): Post {
        const post = posts.find((post) => post.id == postId);
        /* 
            used double equals bc the param id was a string.
            wonder if changing both to numbers or strings would generally be a better way
        */
        if (!post) {
            throw new HttpException(
                "There's no post with that ID :(",
                HttpStatus.NOT_FOUND,
            );
        }
        return post;
    }
}
