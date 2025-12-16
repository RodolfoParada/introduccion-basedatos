// Task 2: Conceptos Fundamentales (10 minutos)
// Los elementos básicos que conforman una base de datos relacional.

// Tablas (Tables)
// Definición: Una tabla es una colección de datos organizados en filas y columnas.

// -- Ejemplo: Tabla de productos
CREATE TABLE productos (
  id INT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  descripcion TEXT,
  fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);
Características:

Nombre único en la base de datos
Columnas con nombres y tipos específicos
Filas (registros) con datos
Restricciones de integridad
Filas y Columnas (Rows and Columns)
-- Tabla: productos
-- Columnas: id, nombre, precio, descripcion, fecha_creacion
-- Filas: Cada producto es una fila

-- Insertar filas
INSERT INTO productos (nombre, precio, descripcion) VALUES
('Laptop Gaming', 1299.99, 'Laptop potente para gaming'),
('Mouse Óptico', 29.99, 'Mouse ergonómico inalámbrico'),
('Teclado Mecánico', 89.99, 'Teclado RGB con switches cherry');
Claves Primarias (Primary Keys)
Definición: Identificador único para cada fila en una tabla.

-- Clave primaria simple
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL
);

-- Clave primaria compuesta
CREATE TABLE productos_categorias (
  producto_id INT,
  categoria_id INT,
  PRIMARY KEY (producto_id, categoria_id)
);

-- Tipos de claves primarias:
-- 1. Natural: Usa datos reales (DNI, email)
-- 2. Surrogada: ID artificial auto-generado
-- 3. Compuesta: Combinación de múltiples columnas
Claves Foráneas (Foreign Keys)
Definición: Referencia a la clave primaria de otra tabla.

-- Tabla de pedidos
CREATE TABLE pedidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
  total DECIMAL(10,2),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Relaciones:
-- 1. Uno a Uno: Un usuario tiene un perfil
-- 2. Uno a Muchos: Un usuario tiene muchos pedidos
-- 3. Muchos a Muchos: Productos tienen muchas categorías