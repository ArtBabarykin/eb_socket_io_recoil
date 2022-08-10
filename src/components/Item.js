import { channelOneState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Item = () => {
  const [channelOne, setChannelOne] = useRecoilState(channelOneState);

  socket.on("msg", (msg) => {
    const msgObj = JSON.parse(msg);
    if (msgObj.id === 1)
      setChannelOne((prev) => ({ ...prev, content: msgObj.content }));
  });

  return (
    <div>
      <p>{channelOne.content}</p>
    </div>
  );
};
export default Item;
