import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'

export const UrlsTable = pgTable(
  'urls',
  {
    id: serial('id').primaryKey(),
    path: text('path').notNull().unique(),
    url: text("url").notNull()
  },
  (urls) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(urls.path),
    }
  }
)

export type Url = InferSelectModel<typeof UrlsTable>
export type NewUrl = InferInsertModel<typeof UrlsTable>

// Connect to Vercel Postgres
export const db = drizzle(sql)
