"use server"

import { UrlsTable, db } from "@/lib/drizzle"

export default async function CreateShortenedURL({
    path,
    url
}: {
    path: string
    url: string
}): Promise<{
    ok: boolean
}> {
    const response = await db.insert(UrlsTable).values({
        path,
        url
    }).catch((e) => {
        console.log(e)
    })

    if(!response) {
        return {
            ok: false
        }
    }

    return {ok: true}
}