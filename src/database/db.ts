import postgres from 'postgres'

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL not found');
}
console.log('✅ aqui:', databaseUrl);
export const sql = postgres(databaseUrl);

(async () => {
  try {
    const result = await sql`SELECT 1 as connected`;
    console.log('✅ Database connected:', result);
  } catch (error) {
    console.error('❌ Database connection error:', error);
  }
})();
