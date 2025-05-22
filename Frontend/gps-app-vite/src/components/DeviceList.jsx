import { useContext } from "react";
import { DeviceContext } from "../context/DeviceContext";
import { Link } from "react-router-dom";

const DeviceList = () => {
  const { devices } = useContext(DeviceContext);

  console.log("Dispositivos en contexto:", devices); 

  return (
    <div>
      <h2>Lista de Dispositivos GPS</h2>
      <ul>
        {devices.length === 0 ? (
          <li>No hay dispositivos disponibles</li>
        ) : (
          devices.map(device => (
            <li key={device.id}>
              <Link to={`/device/${device.id}`}>
                {device.name} - {device.status}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DeviceList;