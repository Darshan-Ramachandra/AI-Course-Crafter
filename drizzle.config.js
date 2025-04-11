/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/Schema.jsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_mYJne3L7HONa@ep-frosty-salad-a55h072m-pooler.us-east-2.aws.neon.tech/CourseList?sslmode=require",
  }
};
