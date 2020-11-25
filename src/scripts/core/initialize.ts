import { UuidObject } from "@/scripts/store/interfaces";
import { getUUIDsFromLs } from "@/scripts/store/ls";
import { mutate } from "@/scripts/store/state";

export default function () {
  const x = getUUIDsFromLs()
  if (!Array.isArray(x)) return
  x.forEach(each => {
    if (Object.keys(each).length !== 2 || !Object.keys(each).includes("name") || !Object.keys(each).includes("uuid")) return
  })
  mutate.importLsData(x as UuidObject[])
}