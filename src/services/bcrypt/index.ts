import bcrypt from 'bcrypt'
import { injectable } from 'inversify'
import type {
    IBcryptHashParameters,
    IBcryptCompareParameters,
    IBcryptService,
} from './interface'

@injectable()
export default class BcryptService implements IBcryptService {
    hash(parameters: IBcryptHashParameters): Promise<string> {
        const {
            data,
            salt_rounds,
        } = parameters
        return bcrypt.hash(data, salt_rounds)
    }

    compare(parameters: IBcryptCompareParameters): Promise<boolean> {
        const {
            data,
            hash,
        } = parameters
        return bcrypt.compare(data, hash)
    }
}
