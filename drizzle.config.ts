import type { Config } from 'drizzle-kit'
import { config } from 'dotenv'
import { z } from 'zod'

config({
  path: '.env.development.local',
})

const databaseUrl = z.string().url().parse(process.env.DATABASE_URL)

export default {
  schema: './src/db/schema/*',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: databaseUrl,
  },
} satisfies Config
