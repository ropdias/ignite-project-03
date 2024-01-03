import { Prisma, User } from '@prisma/client'
import { CheckInsRepository } from '../check-ins-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryCheckInsRepository implements CheckInsRepository {
  public items: User[] = []

  async create(data: Prisma.CheckInUncheckedCreateInput): Promise<User> {
    const checkIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id,
    }

    this.items.push(checkIn)

    return checkIn
  }
}
