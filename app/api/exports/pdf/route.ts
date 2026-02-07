import { NextResponse } from "next/server";
import { renderHtmlToPdfBuffer } from "@/src/exports/pdf";
import { consumeCredits } from "@/src/usage/meter";
import { requireUser } from "@/src/auth/requireUser";

export async function POST(req:Request){
  const user = await requireUser();
  await consumeCredits(user.id,5);
  const { html } = await req.json();
  const pdf = await renderHtmlToPdfBuffer(html);
  return new NextResponse(pdf,{headers:{'Content-Type':'application/pdf'}});
}
