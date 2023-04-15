import { Container } from 'inversify'
import BcryptService from '@services/bcrypt'
import JwtService from '@services/jwt'
import Types from '@src/types'

const container = new Container()

container.bind(Types.BcryptService).to(BcryptService)
container.bind(Types.JwtService).to(JwtService)

export default container
