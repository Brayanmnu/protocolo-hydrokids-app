import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtocoloMain from "./protocolo/components/ProtocoloMain";
import UbicacionAdmin from "./protocolo/components/UbicacionAdmin";
import CheckListProtocolo from "./protocolo/components/CheckListProtocolo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtocoloMain />} />
      <Route path="/ubicacion-admin" element={<UbicacionAdmin />} />
      <Route path="/checklist-protocolo" element={<CheckListProtocolo />} />
    </Routes>
  );
}