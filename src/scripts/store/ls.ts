import { UuidObject } from "@/scripts/store/interfaces";

const LS_KEY = {
  saved: "UUID.saved",
}

export function storeUUIDsToLs (payload: UuidObject[]) {
  try {
    localStorage.setItem(LS_KEY.saved, JSON.stringify(payload))
  } catch {
    console.log("Could not write to localStorage")
  }
}
export function getUUIDsFromLs () {
  let result;
  try {
    result = JSON.parse(localStorage.getItem(LS_KEY.saved) || "[]")
  } catch (err) {
    console.log(err)
  }
  return result
}