import config from 'config'
import { StatusCodes } from 'http-status-codes'
import type {
    Request,
    Response,
} from 'express'

const GREETING_RESPONSE = config.get('app.greeting_response')

export default function getHealth(req: Request, res: Response): Response {
    return res.status(StatusCodes.OK).send({
        status: 'success',
        data: GREETING_RESPONSE,
    })
}
