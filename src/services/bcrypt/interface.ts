export interface IBcryptHashParameters {
    data: string | Buffer,
    salt_rounds: string | number,
}

export interface IBcryptCompareParameters {
    data: string | Buffer,
    hash: string,
}

export interface IBcryptService {
    hash: (parameters: IBcryptHashParameters) => Promise<string>,
    compare: (parameters: IBcryptCompareParameters) => Promise<boolean>,
}
