import type jwt from 'jsonwebtoken'

export interface IJwtSignParameters {
    payload: string | object | Buffer,
    key: jwt.Secret,
    expires_in?: string | number,
}

export interface IJwtVerifyParameters {
    token: string,
    key: jwt.Secret,
    options?: jwt.VerifyOptions,
}

export interface IJwtService {
    sign: (parameters: IJwtSignParameters) => string,
    verify: (parameters: IJwtVerifyParameters) => string | jwt.JwtPayload | jwt.Jwt,
}
