import { useContext } from "react";
import { DeviceContext } from "../context/DeviceContext";
import { Link } from "react-router-dom";

const DeviceList = () => {
  const { devices } = useContext(DeviceContext);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Lista de Dispositivos GPS</h2>
      <ul className="space-y-2 device-list">
        {devices.length === 0 ? (
          <li className="text-gray-500">No hay dispositivos disponibles</li>
        ) : (
          devices.map(device => (
            <li key={device.id} className="bg-white rounded shadow p-4 flex justify-between items-center hover:bg-blue-50 transition">
              <Link to={`/device/${device.id}`} className="text-blue-700 font-semibold hover:underline">
                {device.name} <span className="text-sm text-gray-500">({device.status})</span>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DeviceList;