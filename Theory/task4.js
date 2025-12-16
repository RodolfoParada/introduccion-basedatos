Task 4: Diseño de Esquemas y Normalización (4 minutos)
Principios para diseñar bases de datos eficientes y sin redundancias.

Reglas de Normalización
Primera Forma Normal (1NF)

Regla: Cada columna contiene valores atómicos (indivisibles)
Problema: Evita datos separados por comas
-- ❌ No normalizado
CREATE TABLE estudiantes (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  telefonos VARCHAR(255)  -- "123-456-7890,098-765-4321"
);

-- ✅ Primera forma normal
CREATE TABLE estudiantes (
  id INT PRIMARY KEY,
  nombre VARCHAR(100)
);

CREATE TABLE telefonos_estudiante (
  id INT PRIMARY KEY,
  estudiante_id INT,
  telefono VARCHAR(20),
  tipo ENUM('casa', 'movil', 'trabajo'),
  FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id)
);
Segunda Forma Normal (2NF)

Regla: Estar en 1NF y todas las columnas no clave dependen completamente de la clave primaria
Problema: Evita dependencias parciales
-- ❌ Dependencia parcial
CREATE TABLE pedidos (
  pedido_id INT,
  producto_id INT,
  nombre_producto VARCHAR(100),  -- Depende SOLO de producto_id
  precio_unitario DECIMAL(10,2), -- Depende SOLO de producto_id
  cantidad INT,
  PRIMARY KEY (pedido_id, producto_id)
);

-- ✅ Segunda forma normal
CREATE TABLE productos (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  precio_unitario DECIMAL(10,2)
);

CREATE TABLE pedidos (
  id INT PRIMARY KEY,
  fecha DATETIME
);

CREATE TABLE detalle_pedidos (
  pedido_id INT,
  producto_id INT,
  cantidad INT,
  precio_venta DECIMAL(10,2), -- Precio al momento de venta
  PRIMARY KEY (pedido_id, producto_id),
  FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);
Tercera Forma Normal (3NF)

Regla: Estar en 2NF y no hay dependencias transitivas
Problema: Evita que columnas no clave dependan de otras columnas no clave
-- ❌ Dependencia transitiva
CREATE TABLE empleados (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  departamento VARCHAR(50),
  ubicacion_departamento VARCHAR(100)  -- Depende de departamento
);

-- ✅ Tercera forma normal
CREATE TABLE departamentos (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  ubicacion VARCHAR(100)
);

CREATE TABLE empleados (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  departamento_id INT,
  FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);