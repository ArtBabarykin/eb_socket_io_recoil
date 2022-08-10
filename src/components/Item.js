import { itemState } from "../recoil/atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Item = ({ id, content }) => {
  const items = useRecoilValue(itemState());
  const setItem = useSetRecoilState(itemState(id));

  socket.on("msg", (msg) => {
    const updatedObj = JSON.parse(msg);

    const prevList = items.slice(),
      indx = prevList.findIndex((obj) => obj.id === updatedObj.id);
    prevList.splice(indx, 1, updatedObj);
    setItem(prevList);
  });

  return (
    <div>
      <p>{content}</p>
    </div>
  );
};
export default Item;
