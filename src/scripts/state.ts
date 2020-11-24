import { reactive, toRefs } from "vue";
import { v4 as uuid } from "uuid";
import { UuidObject } from "@/scripts/interfaces";
import { storeUUIDsToLs } from "@/scripts/ls";

const $state = reactive({
  savedUUIDs: [] as UuidObject[]
})

function saveUUID (name: string) {
  const newUUID: UuidObject = {
    name,
    uuid: uuid(),
  }
  $state.savedUUIDs.push(newUUID)
  storeUUIDsToLs($state.savedUUIDs)
}

function importLsData(payload: UuidObject[]) {
  $state.savedUUIDs = payload
}

export const state = {
  ...toRefs($state),
}

export const mutate = {
  saveUUID,
  importLsData,
}