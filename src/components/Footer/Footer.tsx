import {FC} from 'react';
import {Container, Typography} from '@mui/material';

const Footer: FC = () => {
    return (
        <footer>
            <Container>
                <Typography variant='body2'>Kleider-Retter © 2024. Alle Rechte vorbehalten. </Typography>
            </Container>
        </footer>
    )
}

export default Footer;
