import { UuidObject } from "@/scripts/interfaces";
import { getUUIDsFromLs } from "@/scripts/ls";
import { mutate } from "@/scripts/state";

export default function () {
  const x = getUUIDsFromLs()
  if (!Array.isArray(x)) return
  x.forEach(each => {
    if (Object.keys(each).length !== 2 || !Object.keys(each).includes("name") || !Object.keys(each).includes("uuid")) return
  })
  mutate.importLsData(x as UuidObject[])
}