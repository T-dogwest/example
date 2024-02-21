import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';
import { max } from 'class-validator';
async function main() {
    try {
        for (let i = 0; i < 20; i++) {


            await prisma.university.create({
                data: {
                    name: faker.location.city()+' '+faker.word.words({count:{min:1,max:2}}),
                    minGpa: faker.number.float({min:3,max:5,fractionDigits:1})
                }
            })
        }
    } finally {
        prisma.$disconnect();
    }
}

main()