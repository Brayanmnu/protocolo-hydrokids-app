import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function normalizarCodigo(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // quita tildes
        .toUpperCase()
        .trim()
        .replace(/\s+/g, "_");           // espacios -> guion bajo
}

export default function UbicacionAdmin() {
    const location = useLocation();
    const navigate = useNavigate();
    const valorRecibido = location.state?.valor;
    const nombreRecibido = location.state?.nombre;

    const irAChecklist = (nombreBoton) => {
        const codigo = `${normalizarCodigo(valorRecibido)}_${normalizarCodigo(nombreBoton)}`;
        navigate("/checklist-protocolo", {
            state: {
                proceso: `${nombreRecibido} - ${nombreBoton}`, // para mostrar en pantalla
                codigo: codigo                                 // para buscar en el servicio
            }
        });
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                px: 2,
                boxSizing: "border-box"
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#2b5480",
                }}
            >
                Protocolo de procesos
            </Typography>

            {valorRecibido && (
                <Typography
                    variant="h6"
                    sx={{ textAlign: "center", color: "#555" }}
                >
                    Proceso seleccionado: {nombreRecibido}
                </Typography>
            )}

            <Button
                variant="contained"
                onClick={() => irAChecklist("Recepción")}
                sx={{
                    height: "60px",
                    width: "60%",
                    maxWidth: "260px",
                    backgroundColor: "#bcdaf3",
                    "&:hover": { backgroundColor: "#bcdaf3" }
                }}
            >
                Recepción
            </Button>

            <Button
                variant="contained"
                onClick={() => irAChecklist("Hidro Vip")}
                sx={{
                    height: "60px",
                    width: "60%",
                    maxWidth: "260px",
                    backgroundColor: "#bcdaf3",
                    "&:hover": { backgroundColor: "#bcdaf3" }
                }}
            >
                Hidroterapia Vip
            </Button>

            <Button
                variant="contained"
                onClick={() => irAChecklist("Estimulación")}
                sx={{
                    height: "60px",
                    width: "60%",
                    maxWidth: "260px",
                    backgroundColor: "#bcdaf3",
                    "&:hover": { backgroundColor: "#bcdaf3" }
                }}
            >
                Estimulación
            </Button>

            <Button
                variant="contained"
                onClick={() => irAChecklist("Hidro 1")}
                sx={{
                    height: "60px",
                    width: "60%",
                    maxWidth: "260px",
                    backgroundColor: "#bcdaf3",
                    "&:hover": { backgroundColor: "#bcdaf3" }
                }}
            >
                Hidroterapia 1
            </Button>

            <Button
                variant="outlined"
                onClick={() => navigate(-1)}
                startIcon={<ArrowBackIcon />}
                sx={{
                    height: "50px",
                    width: "60%",
                    maxWidth: "260px",
                    borderColor: "#2b5480",
                    color: "#2b5480",
                    "&:hover": {
                        borderColor: "#2b5480",
                        backgroundColor: "rgba(43, 84, 128, 0.05)"
                    }
                }}
            >
                Regresar
            </Button>
        </Box>
    );
}