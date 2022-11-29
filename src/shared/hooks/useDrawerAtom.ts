import { useAtom } from "jotai";
import drawerAtom from "../contexts/atom/DrawerAtom";

const useDrawerAtom = () => {
  const [drawer, setDrawer] = useAtom(drawerAtom);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return { drawer, toggleDrawer };
};

export default useDrawerAtom;
