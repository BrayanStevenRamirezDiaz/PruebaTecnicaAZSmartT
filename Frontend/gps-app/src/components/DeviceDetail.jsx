import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DeviceContext } from "../context/DeviceContext";

const DeviceDetail = () => {
  const { id } = useParams();
  const { devices } = useContext(DeviceContext);
  const device = devices.find(d => d.id === parseInt(id));

  if (!device) return <p>Dispositivo no encontrado.</p>;

  return (
    <div>
      <h2>Detalle del Dispositivo</h2>
      <p><strong>ID:</strong> {device.id}</p>
      <p><strong>Nombre:</strong> {device.name}</p>
      <p><strong>Estado:</strong> {device.status}</p>
    </div>
  );
};

export default DeviceDetail;
