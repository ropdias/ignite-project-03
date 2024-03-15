import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function gymRoutes(app: FastifyInstance) {
  // Making all routes in this file to use the middleware verifyJWT
  app.addHook('onRequest', verifyJWT)
}
