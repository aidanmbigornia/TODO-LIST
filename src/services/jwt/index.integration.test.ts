import jwt from 'jsonwebtoken'
import { Factory } from 'rosie'
import type {
    IJwtSignParameters,
    IJwtService,
} from './interface'
import container from '@src/index'
import Types from '@src/types'

describe('JwtService', (): void => {
    const jwtService: IJwtService = container.get(Types.JwtService)
    const signParameters: IJwtSignParameters = Factory.build('service.jwtService.sign.parameter.parameters')

    describe('#sign', (): void => {
        it('signs a payload', (): void => {
            const {
                payload,
                key,
            } = signParameters
            const signedJwt = jwtService.sign(signParameters)
            const verifiedJwt = jwt.verify(signedJwt, key)
            expect(verifiedJwt).toMatchObject(payload)
        })
    })

    describe('#verify', (): void => {
        it('verifies a token', (): void => {
            const {
                payload,
                key,
                expires_in,
            } = signParameters
            const signedJwt = jwt.sign(payload, key, {
                expiresIn: expires_in,
            })
            const verifiedParameters = {
                token: signedJwt,
                key,
            }
            const verifiedJwt = jwtService.verify(verifiedParameters)
            expect(verifiedJwt).toMatchObject(payload)
        })
    })
})
