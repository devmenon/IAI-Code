import { chromium } from "playwright";
export async function renderHtmlToPdfBuffer(html:string){
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf({printBackground:true});
  await browser.close();
  return pdf;
}
