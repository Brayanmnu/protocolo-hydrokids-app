import React from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function MainOptions(props) {
    return (
         <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <Button variant="contained" startIcon={<ChecklistIcon />}>
                    Protocolo
                </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Button variant="contained" startIcon={<PersonPinIcon />}>
                    Asistencia
                </Button>
            </Grid>
        </Grid>
    );
}