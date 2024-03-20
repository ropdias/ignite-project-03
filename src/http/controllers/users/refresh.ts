import { FastifyRequest, FastifyReply } from 'fastify'

export async function refresh(request: FastifyRequest, reply: FastifyReply) {
  // This will check in the cookies if we have the refresh token and it's valid:
  await request.jwtVerify({ onlyCookie: true })

  // this will have a default expiresIn of 10minutes (we defined it in app.ts)
  // request.user.sub will be available after jwtVerify()
  const token = await reply.jwtSign({}, { sign: { sub: request.user.sub } })

  const refreshToken = await reply.jwtSign(
    {},
    { sign: { sub: request.user.sub, expiresIn: '7d' } },
  )

  return reply
    .setCookie('refreshToken', refreshToken, {
      path: '/',
      secure: true, // HTTPS
      sameSite: true,
      httpOnly: true,
    })
    .status(200)
    .send({ token })
}
