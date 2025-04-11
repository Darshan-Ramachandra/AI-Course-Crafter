import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
// console.log(process.env.DATABASE_URL);

const sql = neon("postgresql://neondb_owner:npg_mYJne3L7HONa@ep-frosty-salad-a55h072m-pooler.us-east-2.aws.neon.tech/CourseList?sslmode=require");


export const db = drizzle(sql);

