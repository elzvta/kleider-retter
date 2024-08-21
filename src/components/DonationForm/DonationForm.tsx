import {FC, useState} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Box, Button, Stepper, Step, StepLabel, Grid} from '@mui/material';
import DonationMethod from './steps/DonationMethod';

type FormField = {
    Component: FC;
    name: string;
};

const formFields: { [key: number]: FormField } = {
    0: {
        Component: DonationMethod,
        name: 'Spendenmethode auswählen',
    },
    1: {
        Component: () => <div>PLZ</div>,
        name: 'PLZ'
    },
    2: {
        Component: () => <div>Persönliche Angaben</div>,
        name: 'Persönliche Angaben'
    }
}

const formFieldsWithoutPostalCode = Object.fromEntries(
    Object.entries(formFields).filter(([key]) => key !== '1')
);

function DonationForm() {
    const [activeStep, setActiveStep] = useState(0);
    const methods = useForm({
        defaultValues: {
            donationType: 'handover',
            name: '',
            email: '',
            phone: '',
            address: '',
            postalCode: '',
            clothingType: '',
            crisisRegion: ''
        }
    });
    const {watch} = methods;
    const formData = watch();
    const visibleFormFields = formData.donationType === 'handover'
        ? formFieldsWithoutPostalCode
        : formFields
    const FormStep = Object.values(visibleFormFields)[activeStep].Component;

    const handleNext = async () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <FormProvider {...methods}>
            <Box sx={{flexGrow: 1, p: 2}}>
                <Grid container spacing={2}>
                    {/* Stepper Section */}
                    <Grid item xs={12} md={4}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {Object.values(visibleFormFields).map((value) => (
                                <Step key={value.name}>
                                    <StepLabel>{value.name}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Grid>

                    {/* Form Section */}
                    <Grid item xs={12} md={8}>
                        <Box sx={{p: 2}}>
                            <FormStep/>
                            <Box sx={{mt: 2}}>
                                <Button onClick={handleBack} disabled={activeStep === 0}>
                                    Zurück
                                </Button>
                                <Button onClick={handleNext} sx={{ml: 2}}>
                                    Weiter
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </FormProvider>
    );
}

export default DonationForm;
