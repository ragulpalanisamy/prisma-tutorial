import { PrismaClient } from '@prisma/client'
import { disconnect } from 'process';
const prisma = new PrismaClient()

async function main(){
    /* const user = await prisma.user.create({ data: { name:"sachin", email:"sachin@gmail.com" } });
    console.log(user);
 */
    const user = await prisma.user.findMany();
    console.log(user);

}

main()
    .catch(e =>{
        console.error("error", e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })