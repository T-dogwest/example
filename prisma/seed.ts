import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main(){
    try {
        await prisma.university.create({
            data: {
                name: "MIT",
                minGpa: "4.2"
            }
        })
    } finally {
        prisma.$disconnect();
    }
}

main()