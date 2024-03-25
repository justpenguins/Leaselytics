import * as React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ListingsCard = ({ address, price, imagePath, bed, bath }) => {

    return (
        <Card sx={{ maxWidth: 500, borderRadius: '16px', boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <img src={imagePath} alt="Rental Listing" style={{width: 468}}/>
                        <Typography variant="h3" component="div">
                            {price}
                        </Typography>
                        <Typography component="div">
                            {address}
                        </Typography>
                        <Typography component="div">
                            {bed} bedrooms, {bath} bathrooms
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ListingsCard;
