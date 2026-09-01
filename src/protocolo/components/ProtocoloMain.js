import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function ProtocoloMain() {
    const navigate = useNavigate();

    const irAUbicacion = (valorBoton, nombreBoton) => {
        navigate("/ubicacion-admin", { state: { valor: valorBoton, nombre: nombreBoton } });
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

            <Button
                variant="contained"
                onClick={() => irAUbicacion("open", "Apertura")}
                sx={{
                    height: "60px",
                    width: "60%",
                    maxWidth: "260px",
                    backgroundColor: "#d3bcff",
                    "&:hover": { backgroundColor: "#b396ed" }
                }}
            >
                Apertura
            </Button>

            <Button
                variant="contained"
                onClick={() => irAUbicacion("start", "Inicio de actividades")}
                sx={{
                    height: "60px",
                    width: "60%",
                    maxWidth: "260px",
                    backgroundColor: "#d3bcff",
                    "&:hover": { backgroundColor: "#b396ed" }
                }}
            >
                Inicio de actividades
            </Button>

            <Button
                variant="contained"
                onClick={() => irAUbicacion("end", "Finalización de actividades")}
                sx={{
                    height: "60px",
                    width: "60%",
                    maxWidth: "260px",
                    backgroundColor: "#d3bcff",
                    "&:hover": { backgroundColor: "#b396ed" }
                }}
            >
                Finalización de actividades
            </Button>

            <Button
                variant="contained"
                onClick={() => irAUbicacion("close", "Cierre")}
                sx={{
                    height: "60px",
                    width: "60%",
                    maxWidth: "260px",
                    backgroundColor: "#d3bcff",
                    "&:hover": { backgroundColor: "#b396ed" }
                }}
            >
                Cierre
            </Button>
        </Box>
    );
}