import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreateGymUseCase } from '@/use-cases/factories/make-create-gym-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createGymBodySchema = z.object({
    // the check needs to match the Gym model from schema.prisma
    title: z.string(),
    description: z.string().nullable(),
    phone: z.string().nullable(),
    // The refine method below is a function to use a verification that is not native from zod like min or max
    latitude: z.number().refine((value) => {
      return Math.abs(value) <= 90
    }),
    longitude: z.number().refine((value) => {
      return Math.abs(value) <= 180
    }),
  })

  const { title, description, phone, latitude, longitude } =
    createGymBodySchema.parse(request.body)

  const createGymUseCase = makeCreateGymUseCase()

  await createGymUseCase.execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  })

  return reply.status(201).send()
}
