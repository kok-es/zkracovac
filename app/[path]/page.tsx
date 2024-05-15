import { UrlsTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function Redirecter({params}: {params: {path: string}}) {
    const path = (await db.select().from(UrlsTable).where(eq(UrlsTable.path, params.path)).catch(() => {}))?.[0]

    if(!path) {
        return <div>
            Adresa nebyla nalezena
        </div>
    }

    redirect(path.url)
}