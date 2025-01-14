import React , {useState} from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Notifications } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from 'react-router-dom';


const SpeedAccess = () => {

  const navigate= useNavigate()

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleNavigateLink = ()=> {
  //   navigate("/")
  // }

  const handleNavigateNotification = () => {
    navigate("/notifications")
  }

  const handleNavigateCart = ()=> {
    navigate("/checkout")
  }
  const handleNavigateProfile = ()=> {
    navigate("/profile")
  }
  const handleNavigateLinkedIn = () => {
    window.open("https://tr.linkedin.com/in/mert-doğan-samsunlu-49b494201?trk=people-guest_people_search-card", "_blank");
  };
  

  return (
    <Box sx={{  transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'fixed', bottom:"2.5rem", right: "2.5rem" }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
          <SpeedDialAction
            icon={<PersonIcon/>} 
            tooltipTitle="Profile"
            onClick={()=>handleNavigateProfile()}
          />
          <SpeedDialAction
            icon={<ShoppingCartIcon/>} 
            tooltipTitle="Cart"
            onClick={()=>handleNavigateCart()}
          />
          <SpeedDialAction
            icon={<Notifications/>} 
            tooltipTitle="Inbox"
            onClick={handleNavigateNotification}
          />
          <SpeedDialAction
            icon={<LinkedInIcon/>} 
            tooltipTitle="Hire Me!"
            onClick={()=>handleNavigateLinkedIn()}
          />
        
      </SpeedDial>
    </Box>
  )
}

export default SpeedAccess