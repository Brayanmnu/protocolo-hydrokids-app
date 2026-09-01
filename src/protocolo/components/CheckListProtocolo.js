import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useLocation, useNavigate } from "react-router-dom";
import protocoloService from "../services/ProtocoloService";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const STORAGE_PREFIX = "checklist_";

export default function ChecklistProtocolo() {
    const location = useLocation();
    const navigate = useNavigate();
    const proceso = location.state?.proceso;
    const codigo = location.state?.codigo;

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [dialogAbierto, setDialogAbierto] = useState(false);
    const [snackbarExito, setSnackbarExito] = useState(false);
    const [snackbarError, setSnackbarError] = useState(false);

    useEffect(() => {
        if (!codigo) {
            setError("No se recibió el proceso a consultar.");
            return;
        }

        const tareas = protocoloService.getProtocoloByCode(codigo);

        if (!tareas) {
            setError(`No hay checklist definido para "${proceso}".`);
            setItems([]);
            return;
        }

        const storageKey = STORAGE_PREFIX + codigo;
        const guardado = localStorage.getItem(storageKey);

        if (guardado) {
            try {
                setItems(JSON.parse(guardado));
            } catch (err) {
                console.error("Error al leer checklist guardado:", err);
                setItems(crearItemsIniciales(tareas));
            }
        } else {
            setItems(crearItemsIniciales(tareas));
        }

        setError(null);
    }, [codigo, proceso]);

    const crearItemsIniciales = (tareas) =>
        tareas.map((tarea, index) => ({
            id: index,
            nombre: tarea,
            completado: false
        }));

    const toggleItem = (id) => {
        setItems((prevItems) => {
            const actualizados = prevItems.map((item) =>
                item.id === id ? { ...item, completado: !item.completado } : item
            );

            const storageKey = STORAGE_PREFIX + codigo;
            localStorage.setItem(storageKey, JSON.stringify(actualizados));

            return actualizados;
        });
    };

    const handleAbrirConfirmacion = () => {
        const faltanChecks = items.some((item) => !item.completado);

        if (faltanChecks) {
            setSnackbarError(true);
            return;
        }

        setDialogAbierto(true);
    };

    const handleCancelarTerminar = () => {
        setDialogAbierto(false);
    };

    const handleConfirmarTerminar = () => {
        const storageKey = STORAGE_PREFIX + codigo;
        localStorage.removeItem(storageKey);

        setDialogAbierto(false);
        setSnackbarExito(true);
    };

    const handleCerrarSnackbarExito = () => {
        setSnackbarExito(false);
        navigate(-1);
    };

    const handleCerrarSnackbarError = () => {
        setSnackbarError(false);
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                px: 2,
                boxSizing: "border-box"
            }}
        >
            <Typography
                variant="h3"
                sx={{ fontWeight: "bold", textAlign: "center", color: "#2b5480" }}
            >
                Checklist
            </Typography>

            {proceso && (
                <Typography variant="h6" sx={{ textAlign: "center", color: "#555" }}>
                    {proceso}
                </Typography>
            )}

            {error && (
                <Typography sx={{ color: "red", textAlign: "center" }}>
                    {error}
                </Typography>
            )}

            {!error && items.length > 0 && (
                <List sx={{ width: "100%", maxWidth: "500px" }}>
                    {items.map((item) => (
                        <ListItem
                            key={item.id}
                            sx={{ backgroundColor: "#f5f0ff", borderRadius: "8px", mb: 1 }}
                        >
                            <Checkbox
                                checked={item.completado}
                                onChange={() => toggleItem(item.id)}
                                sx={{ color: "#b396ed", "&.Mui-checked": { color: "#7c4dff" } }}
                            />
                            <ListItemText primary={item.nombre} />
                        </ListItem>
                    ))}
                </List>
            )}

            <Box
                sx={{
                    width: "100%",
                    maxWidth: "500px",
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    justifyContent: "center"
                }}
            >
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate(-1)}
                    sx={{
                        height: "50px",
                        flex: 1,
                        maxWidth: "240px",
                        borderColor: "#2b5480",
                        color: "#2b5480",
                        "&:hover": { borderColor: "#1d3b5c", backgroundColor: "rgba(43, 84, 128, 0.05)" }
                    }}
                >
                    Regresar
                </Button>
                <Button
                    variant="contained"
                    startIcon={<AssignmentTurnedInIcon />}
                    onClick={handleAbrirConfirmacion}
                    sx={{
                        height: "50px",
                        flex: 1,
                        maxWidth: "240px",
                        backgroundColor: "#36bd3c",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#2ea233", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }
                    }}
                >
                    Terminar
                </Button>
            </Box>

            <Dialog
                open={dialogAbierto}
                onClose={handleCancelarTerminar}
            >
                <DialogTitle>¿Terminar proceso?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Esto borrará todos los checks marcados para "{proceso}". Esta acción no se puede deshacer.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelarTerminar} sx={{ color: "#2b5480" }}>
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleConfirmarTerminar}
                        variant="contained"
                        sx={{ backgroundColor: "#36bd3c", "&:hover": { backgroundColor: "#2ea233" } }}
                    >
                        Sí, terminar
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snackbarExito}
                autoHideDuration={2000}
                onClose={handleCerrarSnackbarExito}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert onClose={handleCerrarSnackbarExito} severity="success" sx={{ width: "100%" }}>
                    Proceso finalizado correctamente
                </Alert>
            </Snackbar>

            <Snackbar
                open={snackbarError}
                autoHideDuration={3000}
                onClose={handleCerrarSnackbarError}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert onClose={handleCerrarSnackbarError} severity="error" sx={{ width: "100%" }}>
                    Debes marcar todos los checks antes de terminar
                </Alert>
            </Snackbar>
        </Box>
    );
}