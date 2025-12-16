Task 3: Tipos de Datos SQL (8 minutos)
SQL ofrece diversos tipos de datos para almacenar información específica.

Tipos Numéricos
-- Enteros
TINYINT   -- -128 a 127 (1 byte)
SMALLINT  -- -32,768 a 32,767 (2 bytes)
INT       -- -2^31 a 2^31-1 (4 bytes)
BIGINT    -- -2^63 a 2^63-1 (8 bytes)

-- Decimales
DECIMAL(10,2)  -- Hasta 10 dígitos, 2 decimales
FLOAT         -- Precisión simple
DOUBLE        -- Precisión doble

-- Ejemplos de uso
CREATE TABLE productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  precio DECIMAL(8,2),      -- 999999.99 máximo
  cantidad SMALLINT,        -- -32K a +32K
  peso FLOAT,               -- Peso en kg
  stock INT                 -- Cantidad en inventario
);
Tipos de Texto
-- Texto de longitud fija
CHAR(10)      -- Siempre 10 caracteres (rellena con espacios)
VARCHAR(255)  -- Hasta 255 caracteres (longitud variable)

-- Texto largo
TEXT          -- Hasta 65,535 caracteres
MEDIUMTEXT    -- Hasta 16MB
LONGTEXT      -- Hasta 4GB

-- Ejemplos
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE,
  biografia TEXT,
  codigo_postal CHAR(5)
);
Tipos de Fecha y Hora
-- Fecha y hora
DATE          -- YYYY-MM-DD (fecha)
TIME          -- HH:MM:SS (hora)
DATETIME      -- YYYY-MM-DD HH:MM:SS
TIMESTAMP     -- Similar a DATETIME pero con zona horaria
YEAR          -- YYYY

-- Ejemplos
CREATE TABLE eventos (
  id INT PRIMARY KEY,
  titulo VARCHAR(200),
  fecha_evento DATE,
  hora_inicio TIME,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar fechas
INSERT INTO eventos (titulo, fecha_evento, hora_inicio) VALUES
('Conferencia Tech', '2024-06-15', '09:00:00'),
('Meetup JavaScript', '2024-07-20', '18:30:00');
Tipos Booleanos y Enumerados
-- Booleanos
BOOLEAN  -- TRUE/FALSE (TINYINT(1) en MySQL)
BIT      -- 0/1

-- Enumerados
ENUM('activo', 'inactivo', 'suspendido')
SET('lunes', 'martes', 'miercoles')  -- Múltiples valores

-- Ejemplos
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  activo BOOLEAN DEFAULT TRUE,
  estado ENUM('activo', 'inactivo', 'suspendido') DEFAULT 'activo',
  dias_trabajo SET('lunes', 'martes', 'miercoles', 'jueves', 'viernes')
);
Tipos Binarios
-- Binarios
BINARY(16)    -- Datos binarios fijos
VARBINARY(255) -- Datos binarios variables
BLOB          -- Binary Large Object (imágenes, archivos)

-- Ejemplos para archivos pequeños
CREATE TABLE documentos (
  id INT PRIMARY KEY,
  nombre VARCHAR(255),
  tipo VARCHAR(50),     -- 'pdf', 'jpg', etc.
  contenido MEDIUMBLOB, -- Hasta 16MB
  tamano INT            -- Tamaño en bytes
);