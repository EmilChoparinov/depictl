import { Express } from 'express'
import { resolve } from 'path'

import * as LoginController from '../controllers/login'

export function setRoutes(app: Express) {
    app.post('/api/login', LoginController.login)
}