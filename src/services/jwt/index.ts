import { injectable } from 'inversify'
import jwt from 'jsonwebtoken'
import type {
    IJwtSignParameters,
    IJwtVerifyParameters,
    IJwtService,
} from './interface'

@injectable()
export default class JwtService implements IJwtService {
    sign(parameters: IJwtSignParameters): string {
        const {
            payload,
            key,
            expires_in,
        } = parameters
        if (expires_in) return jwt.sign(payload, key, {
            expiresIn: expires_in,
        })
        return jwt.sign(payload, key)
    }

    verify(parameters: IJwtVerifyParameters): string | jwt.JwtPayload | jwt.Jwt {
        const {
            token,
            key,
            options,
        } = parameters
        return jwt.verify(token, key, options)
    }
}
