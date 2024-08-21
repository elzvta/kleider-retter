import React from 'react';
import {Container} from '@mui/material';
import DonationForm from '../../components/DonationForm/DonationForm.tsx';

const Donation: React.FC = () => {
    return (
        <Container>
            <DonationForm/>
        </Container>
    )
}

export default Donation;
