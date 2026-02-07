import { Plans } from "./plans";
export function assertEntitlement(plan:any, key:string){
  if(!Plans[plan].entitlements[key]){
    const e:any = new Error("Payment required");
    e.status = 402; throw e;
  }
}
