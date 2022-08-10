import Item from "./Item";
import { itemState } from "../recoil/atoms";
import { useRecoilValue } from "recoil";

const ChannelList = ({ id }) => {
  const items = useRecoilValue(itemState(id));

  return (
    <div>
      {items.map((p) => (
        <Item key={p.id} content={p.content} id={id} />
      ))}
    </div>
  );
};

export default ChannelList;
