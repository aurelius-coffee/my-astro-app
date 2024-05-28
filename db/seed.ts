import { db, Comment } from 'astro:db';

export default async function() {
  await db.insert(Comment).values([
    { author: "TEST", body: 'Hope you like Astro DB!' },
    { author: "TEST2", body: 'Enjoy!'},
  ])
}