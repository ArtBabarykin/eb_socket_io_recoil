import { atomFamily } from "recoil";
export const itemState = atomFamily({
  key: "items",
  default: [
    { id: 1, content: "Art" },
    { id: 2, content: "Mike" },
  ],
});
