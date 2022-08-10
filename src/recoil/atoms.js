import { atom } from "recoil";

export const channelOneState = atom({
  key: "channelOne",
  default: { id: 1, content: "Art" },
});
export const channelTwoState = atom({
  key: "channelTwo",
  default: { id: 2, content: "Mike" },
});
