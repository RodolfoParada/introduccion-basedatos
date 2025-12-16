#### 1. se guardan las tasks en la carpeta THeory
#### 2. se guarda las tablas de base de datos de ejemplo.
#### 3. desarrolla la actividad.

-- 1. Crear la base de datos si no existe
```
CREATE DATABASE IF NOT EXISTS ecommerce_db;
```
1.1 selecciona la base de datos que existe.
```
USE ecommerce_db;
```
-- 2. Crear la tabla USUARIOS
```
CREATE TABLE Usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasena_hash VARCHAR(255) NOT NULL,
    fecha_registro DATETIME NOT NULL
);
```

-- 3. Crear la tabla CATEGORIAS
```
CREATE TABLE Categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    descripcion TEXT
);
```

-- 4. Crear la tabla PRODUCTOS (con FK a Categorias)
```
CREATE TABLE Productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL CHECK (precio >= 0),
    stock INT NOT NULL CHECK (stock >= 0),
    id_categoria INT NOT NULL,
    fecha_creacion DATETIME NOT NULL,
    
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);
```

-- 5. Crear la tabla METODOS_PAGO
```
CREATE TABLE Metodos_Pago (
    id_metodo_pago INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);
```

-- 6. Crear la tabla DIRECCIONES_ENVIO (con FK a Usuarios)
```
CREATE TABLE Direcciones_Envio (
    id_direccion INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    calle VARCHAR(255) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    codigo_postal VARCHAR(20) NOT NULL,
    pais VARCHAR(100) NOT NULL,
    es_principal BOOLEAN NOT NULL DEFAULT FALSE,
    
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);
```

-- 7. Crear la tabla PEDIDOS (con FK a Usuarios, Direcciones_Envio y Metodos_Pago)
```
CREATE TABLE Pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    fecha_pedido DATETIME NOT NULL,
    estado VARCHAR(50) NOT NULL, -- Ej: 'Pendiente', 'Procesando', 'Enviado', 'Entregado'
    total DECIMAL(10, 2) NOT NULL CHECK (total >= 0),
    id_direccion_envio INT NOT NULL,
    id_metodo_pago INT NOT NULL,
    
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_direccion_envio) REFERENCES Direcciones_Envio(id_direccion),
    FOREIGN KEY (id_metodo_pago) REFERENCES Metodos_Pago(id_metodo_pago)
);
```

-- 8. Crear la tabla DETALLES_PEDIDO (Tabla de unión Muchos a Muchos)
```
CREATE TABLE Detalles_Pedido (
    id_pedido INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL CHECK (cantidad > 0),
    precio_unitario DECIMAL(10, 2) NOT NULL CHECK (precio_unitario >= 0),
    
    PRIMARY KEY (id_pedido, id_producto), -- Clave primaria compuesta
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);
```

-- 9. Crear la tabla RESENAS_PRODUCTO (con FK a Usuarios y Productos)
```
CREATE TABLE Resenas_Producto (
    id_resena INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_producto INT NOT NULL,
    calificacion TINYINT NOT NULL CHECK (calificacion BETWEEN 1 AND 5), -- Calificación de 1 a 5
    comentario TEXT,
    fecha_resena DATETIME NOT NULL,
    
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);
```