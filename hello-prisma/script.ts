import { PrismaClient } from '@prisma/client'
import { log } from 'console';
import { disconnect } from 'process';
const prisma = new PrismaClient()

async function main(){
    //create 
/*     const users = await prisma.user.createMany({
        data: [
          {
            name: 'Kyle',
            email: 'kyle@test11.com',
            age: 24,
            isAdmin: false,
            perference: {},
          },
          {
            name: 'Sally',
            email: 'sally@test12.com',
            age: 25,
            isAdmin: false,
            perference: {},
          },
        ],
      });

    console.log(users);
    } */
// find 

 const user = await prisma.user.findMany({
    where: {
        //single User
        /* email: 'kyle@test.com',
        name_age:{
            age: 21,
            name: 'Kyle',
        } */

        //many user
       name: {notIn: "Sally"},
       //email: {contains: "@test.com"}
       age: { gt: 23}
    },
    /* orderBy: {
        age: "desc",
    }, */
    //distinct: ["name","age"],
    //take: 2,
    //skip: 1,
})
console.log(user);

}


main()
    .catch(e =>{
        console.error("error", e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })