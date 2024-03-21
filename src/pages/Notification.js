// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import { styled } from "@mui/material/styles";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, getTotals } from "../redux/cartSlice";

// const CardContainer= styled(Card)(({ theme }) =>({
//     width:"21%",
//     margin: "1rem",
//     marginBottom: "2rem",
//     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//     borderRadius: "14px",
//     [theme.breakpoints.down("sm")]: {
//       width:"90%"
//     },
//  }));

    
//  const Content = styled(CardContent) ({
//     minHeight: "11rem",
//   })

  
// const ItemCard = ({ item}) => {
  

//     const [expanded, setExpanded] = useState(false);
  
//     const handleChange = (panel) => (event, isExpanded) => {
//       setExpanded(isExpanded ? panel : false);
//     };
  
//     const dispatch = useDispatch();
  
//     const cart = useSelector((state) => state.cart);
  
//     const handleAddToCart = (a) => {
//       dispatch(addToCart(a));
//     };
  
//     useEffect(() => {
//       dispatch(getTotals());
//     }, [cart, dispatch]);


// const Notifications = () => {
//   return (
//     <CardContainer> 
//     <Box sx={{ flexGrow: 1 }}>
//       <Typography variant="h4" component="h1" align="center" mt={4} mb={2}>
//         NOTIFICATIONS
//       </Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//         <Card sx={{ minWidth: 275, maxWidth: 400, m: 2 }}>
//           <CardContent>
//             <Typography variant="h6" component="div">
//               Bildirim 1 Başlık
//             </Typography>
//             <Typography variant="body2">
//               Bildirim 1 Metin
//             </Typography>
//           </CardContent>
//         </Card>
//         <Card sx={{ minWidth: 275, maxWidth: 400, m: 2 }}>
//           <CardContent>
//             <Typography variant="h6" component="div">
//               Bildirim 2 Başlık
//             </Typography>
//             <Typography variant="body2">
//               Bildirim 2 Metin
//             </Typography>
//           </CardContent>
//         </Card>
//         <Card sx={{ minWidth: 275, maxWidth: 400, m: 2 }}>
//           <CardContent>
//             <Typography variant="h6" component="div">
//               Bildirim 3 Başlık
//             </Typography>
//             <Typography variant="body2">
//               Bildirim 3 Metin
//             </Typography>
//           </CardContent>
//         </Card>
//       </Box>
//     </Box>
//     </CardContainer>
//   );
// }




// export default Notification;
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from "@mui/material/styles";

const CardContainer = styled(Card)(({ theme }) => ({
  width:"100%",
  margin: "1rem",
  marginBottom: "2rem",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "14px",
  [theme.breakpoints.down("sm")]: {
    width:"100%"
  },
}));

const Notifications = () => {
  return (
    <CardContainer> 
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h1" align="center" mt={4} mb={2}>
          NOTIFICATIONS
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ minWidth: 275, maxWidth: 400, m: 2 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                GTA VI IS SOON!
              </Typography>
              <Typography variant="body2">
                Developers works hard for the new game.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, maxWidth: 400, m: 2 }}>
            <CardContent>
              <Typography variant="h6" component="div">
              Elden Ring Release Date Announced!
              </Typography>
              <Typography variant="body2">
              FromSoftware's highly anticipated action RPG, Elden Ring, finally gets a release date
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, maxWidth: 400, m: 2 }}>
            <CardContent>
              <Typography variant="h6" component="div">
              New Trailer Reveals Stunning Graphics for Horizon Forbidden West
              </Typography>
              <Typography variant="body2">
              The latest trailer for Horizon Forbidden West showcases breathtaking visuals, giving players a glimpse into the vibrant and dangerous world of post-apocalyptic America
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </CardContainer>
  );
};

export default Notifications;
