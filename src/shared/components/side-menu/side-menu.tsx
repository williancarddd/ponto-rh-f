import {
  Drawer,
  Box,
  useTheme,
  Avatar,
  Divider,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  List,
  useMediaQuery,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import { ReactNode } from "react";
import avatar from "../../assets/avatar/avatar_1.png";
import useDrawerAtom from "../../hooks/useDrawerAtom";

interface ISideMenuProps {
  children: ReactNode;
}

export default function SideMenu({ children }: ISideMenuProps): JSX.Element {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { drawer, toggleDrawer } = useDrawerAtom();
  return (
    <>
      <Drawer open={drawer} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawer}>
        <Box width={theme.spacing(28)} display="flex" height="100%" flexDirection="column">
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              alt="icon user logged"
              sx={{
                height: theme.spacing(15),
                width: theme.spacing(15),
              }}
              src={avatar}
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary="Employees" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
}
