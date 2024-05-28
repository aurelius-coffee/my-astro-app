import { defineMiddleware } from "astro:middleware";

// THESE LINES BREAK DEPLOY
import { db, Comment } from "astro:db"

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
    console.log('middleware')

    // THESE LINES BREAK DEPLOY
    const comments = await db.select().from(Comment)
    console.log('comments', comments)
    return next()
});