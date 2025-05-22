-- Crear tabla
CREATE TABLE Dispositivos (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    estado VARCHAR(20)
);

-- Insertar registros
INSERT INTO Dispositivos (id, nombre, estado) VALUES
(1, 'GPS-001', 'activo'),
(2, 'GPS-002', 'inactivo');

-- Consultar dispositivos activos ordenados por nombre
SELECT * FROM Dispositivos
WHERE estado = 'activo'
ORDER BY nombre ASC;

-- Procedimiento para actualizar estado
CREATE PROCEDURE sp_actualizar_estado
  @id INT,
  @nuevo_estado VARCHAR(20)
AS
BEGIN
  UPDATE Dispositivos
  SET estado = @nuevo_estado
  WHERE id = @id;
END;

