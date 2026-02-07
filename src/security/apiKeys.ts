import crypto from "crypto";
import { prisma } from "../prisma";
export async function createApiKey(userId:string,name:string){
  const raw = crypto.randomBytes(24).toString("hex");
  const hash = crypto.createHash("sha256").update(raw).digest("hex");
  await prisma.apiKey.create({data:{userId,name,hash,last4:raw.slice(-4)}});
  return raw;
}
