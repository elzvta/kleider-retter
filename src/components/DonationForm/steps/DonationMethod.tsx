import {Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from '@mui/material';
import {useFormContext} from 'react-hook-form';

const donationOptions = [
    {value: 'handover', label: 'Übergabe an der Geschäftsstelle'},
    {value: 'pickup', label: 'Abholung'}
];

const DonationMethod = () => {
    const {register, watch, setValue} = useFormContext();
    const selectedValue = watch('donationType');

    return (
        <Box>
            <Typography variant="h6">Spendenmethode auswählen</Typography>
            <FormControl component="fieldset">
                <RadioGroup
                    aria-label="donationType"
                    value={selectedValue}
                    onChange={(e) => setValue('donationType', e.target.value)}
                >
                    {donationOptions.map((option) => (
                        <FormControlLabel
                            key={option.value}
                            value={option.value}
                            control={<Radio/>}
                            label={option.label}
                            {...register('donationType')}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    );
}

export default DonationMethod;
