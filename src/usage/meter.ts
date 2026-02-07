import { prisma } from "../prisma";
export async function consumeCredits(userId:string, units:number){
  const u = await prisma.user.findUnique({where:{id:userId}});
  if(!u || u.creditsBalance < units) throw new Error("Insufficient credits");
  await prisma.user.update({where:{id:userId}, data:{creditsBalance:{decrement:units}}});
}
