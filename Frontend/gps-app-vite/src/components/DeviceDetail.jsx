import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DeviceContext } from "../context/DeviceContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DeviceDetail = () => {
  const { id } = useParams();
  const { devices } = useContext(DeviceContext);
  const navigate = useNavigate();
  const device = devices.find(d => d.id === parseInt(id));

  if (!device) return <p>Dispositivo no encontrado.</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-2xl w-full bg-white rounded shadow p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Detalle del Dispositivo</h2>
        <p><strong>ID:</strong> {device.id}</p>
        <p><strong>Nombre:</strong> {device.name}</p>
        <p><strong>Estado:</strong> {device.status}</p>
        <p><strong>Descripción:</strong> {device.description}</p>
        {device.lat && device.lng && (
          <div className="mt-6" style={{ height: "400px", width: "100%" }}>
            <MapContainer center={[device.lat, device.lng]} zoom={13} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={[device.lat, device.lng]}>
                <Popup>
                  {device.name}<br />{device.description}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        )}
        <button
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default DeviceDetail;