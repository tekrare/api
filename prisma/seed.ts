import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    pseudo: 'Alice',
    email: 'alice@prisma.io',
    password: 'test1234',
  },
  {
    pseudo: 'Nilu',
    email: 'nilu@prisma.io',
    password: 'test1234',
  },
  {
    pseudo: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    password: 'test1234',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
