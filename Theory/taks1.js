Task 1: ¿Qué son las Bases de Datos Relacionales? (8 minutos)
Las bases de datos relacionales son el pilar fundamental del almacenamiento de datos estructurados en aplicaciones modernas.

Historia y Evolución
1960s-1970s: Los inicios

Ted Codd (IBM) propone el modelo relacional en 1970
Se basa en teoría matemática de relaciones
Reemplaza los modelos jerárquicos y de red
1980s: Estándares SQL

SQL (Structured Query Language) se convierte en estándar
Primeras implementaciones comerciales: Oracle, IBM DB2
Surge MySQL (1995), PostgreSQL (1996)
2000s-Presente: Era Moderna

Bases de datos relacionales siguen dominando (80%+ del mercado)
Nuevos motores: MariaDB, SQLite, SQL Server
Integración con NoSQL y NewSQL
¿Por qué son importantes?
Ventajas clave:

Consistencia: ACID garantiza integridad de datos
Flexibilidad: Cambios de esquema sin reescribir aplicación
Consultas complejas: SQL permite análisis sofisticado
Concurrencia: Múltiples usuarios simultáneamente
Estandarización: SQL es universal
Madurez: 50+ años de optimización
Casos de uso ideales:

Sistemas financieros y bancarios
E-commerce y inventarios
Sistemas de gestión (ERP, CRM)
Aplicaciones empresariales
Análisis de datos históricos
Comparación con otras bases de datos
// Relacional vs NoSQL - Ejemplo práctico

// Sistema de Blog - Relacional
const blogSQL = `
-- Tabla de usuarios
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

-- Tabla de posts
CREATE TABLE posts (
  id INT PRIMARY KEY,
  titulo VARCHAR(200),
  contenido TEXT,
  autor_id INT,
  FOREIGN KEY (autor_id) REFERENCES usuarios(id)
);

-- Consulta con JOIN
SELECT posts.titulo, usuarios.nombre
FROM posts
JOIN usuarios ON posts.autor_id = usuarios.id;
`;

// Sistema de Blog - NoSQL (MongoDB)
const blogNoSQL = `
{
  "_id": ObjectId("..."),
  "titulo": "Mi Post",
  "contenido": "Contenido del post...",
  "autor": {
    "id": ObjectId("..."),
    "nombre": "Juan Pérez",
    "email": "juan@example.com"
  },
  "comentarios": [
    {
      "autor": "María",
      "contenido": "Buen post!",
      "fecha": ISODate("2024-01-01")
    }
  ]
}
`;