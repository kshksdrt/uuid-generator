import { computed, ref } from "vue";
import { v4 as uuid } from "uuid";
import { UuidObject } from "@/scripts/interfaces";
import { storeUUIDsToLs } from "@/scripts/ls";

// State
const savedUUIDs = ref([] as UuidObject[])

// Mutations
function saveUUID (name: string) {
  const newUUID: UuidObject = {
    name,
    uuid: uuid(),
  }
  savedUUIDs.value.push(newUUID)
  storeUUIDsToLs(savedUUIDs.value)
}

function removeUUID (uuid: string) {
  const prev = JSON.parse(JSON.stringify(savedUUIDs.value))
  const result = prev.filter((each: UuidObject) => {
    return each.uuid !== uuid
  })
  savedUUIDs.value = []
  result.forEach((x: UuidObject) => savedUUIDs.value.push(x))
  storeUUIDsToLs(savedUUIDs.value)
}

function importLsData(payload: UuidObject[]) {
  savedUUIDs.value = payload
}

// Exports
export const get = {
  savedUUIDs: computed(() => savedUUIDs.value),
}

export const mutate = {
  saveUUID,
  removeUUID,
  importLsData,
}