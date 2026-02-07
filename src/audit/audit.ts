import { prisma } from "../prisma";
export async function audit(userId:string, action:string){
  await prisma.auditEvent.create({data:{userId,action}});
}
