import { channelTwoState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Item2 = () => {
  const [channelTwo, setChannelTwo] = useRecoilState(channelTwoState);

  socket.on("msg", (msg) => {
    // socket.on("msg", (msg) => {
    if (JSON.parse(msg).id === 2)
      setChannelTwo((prev) => ({
        ...prev,
        content: JSON.parse(msg).content,
      }));
    // });

    // const msgObj = JSON.parse(msg);
    // if (msgObj.id === 2)
    //   setChannelTwo((prev) => ({ ...prev, content: msgObj.content }));
  });

  return (
    <div>
      <p>{channelTwo.content}</p>
    </div>
  );
};
export default Item2;
