import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../Context";


function Item({ title, to, icon, selected, setSelected }: any) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => { setSelected(title); navigate(to)}}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
}

export default Item;