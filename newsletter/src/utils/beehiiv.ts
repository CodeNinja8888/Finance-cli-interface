import { Context } from "hono"
import { BEEHIIV_API_URL } from "./constants"
import { HonoEnv } from ".."

type SubscribeBody = {
    email: string,
}

export const subscribe = ({ email }: SubscribeBody, c: Context<HonoEnv>) => {
    const apiKey = c.env.BEEHIIV_API_KEY
    const publicationId = c.env.BEEHIIV_PUBLICATION_ID

    return fetch(BEEHIIV_API_URL + `/publications/${publicationId}/subscriptions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            email: email
        })
    })
} 