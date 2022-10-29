import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {

    public async login({request, auth}: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        const token = await auth.use('api').attempt(email, password)
        return token.toJSON()
    }

    public async store({request, response}: HttpContextContract) {
        const { email, password } = request.only(['email', 'password'])
        try {
            const user = await User.create({
                email,
                password
            })
            return user
        }catch(e){
            if(!password)
                return response.status(422).send('É necessario inserir um password');
            if(!email)
                return response.status(422).send('É necessario inserir um email');
            return response.status(422).send('Usuario ja cadastrado')
        }
    }

}

