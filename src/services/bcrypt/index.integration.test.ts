import bcrypt from 'bcrypt'
import config from 'config'
import { Factory } from 'rosie'
import type {
    IBcryptHashParameters,
    IBcryptService,
} from './interface'
import container from '@src/index'
import Types from '@src/types'

const BCRYPT_SALT_ROUNDS: number = config.get('app.bcrypt.salt_rounds')

describe('BcryptService', (): void => {
    const bcryptService: IBcryptService = container.get(Types.BcryptService)

    describe('#hash', (): void => {
        it('hashes a data', async (): Promise<void> => {
            const hashParameters: IBcryptHashParameters = Factory.build('service.bcryptService.hash.parameter.parameters')
            const {
                data,
            } = hashParameters
            const hash = await bcryptService.hash(hashParameters)
            const comparedDataAndHash = await bcrypt.compare(data, hash)
            expect(comparedDataAndHash).toEqual(true)
        })
    })

    describe('#compare', (): void => {
        it('compares a data to its hash', async (): Promise<void> => {
            const data = 'data'
            const hash = await bcrypt.hash(data, BCRYPT_SALT_ROUNDS)
            const compareParameters = {
                data,
                hash,
            }
            const comparedDataAndHash = await bcryptService.compare(compareParameters)
            expect(comparedDataAndHash).toEqual(true)
        })
    })
})
