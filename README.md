# Gestión de Usuarios y Ventas con Node.js, Express, Sequelize y SQLite

Este proyecto es una API REST básica para gestionar usuarios y ventas, desarrollada utilizando Node.js, Express, Sequelize y SQLite. 
La API permite crear, listar, y gestionar usuarios, así como registrar y consultar ventas.

## Requisitos

- Node.js (v12 o superior)
- npm (v6 o superior)

## Instalación

1. **Clonar el repositorio:**
2. **Instalar dependencias:**
     - npm install
3. **Configuración base de datos:**
    La configuración de la base de datos ya está incluida en el proyecto utilizando SQLite. No es necesario configurar manualmente
    la base de datos, ya que Sequelize se encargará de crear el archivo database.sqlite en la carpeta raíz del proyecto.

## USO
  1. **Iniciar servidor:**
       -node index.js (iniciara el servidor en 'http://localhost:3001'
  2. **Probar la API en Postman:**

### Crear nuevo usuario**
      **Ruta** POST /usuarios
       **body:**   {
                "nombre": "Juan Pérez",
                "rol": "Analista"
                }
### Listar todos los usuarios activos
      **Ruta** GET /usuarios
         
### Desactivar un usuario
       **Ruta** PATCH /usuarios/:id/desactivar
### Cambiar rol usuario
      **Ruta** PATCH /usuarios/:id/rol
      **body:** {
          "rol": "Administrador"
        }
        
### Registrar nueva venta
     **Ruta** POST /ventas
    **body:** {
            "nombreComprador": "Cliente Ejemplo",
            "totalCompra": 250.75
            }
### Listar todas las ventas
    **Ruta** GET /ventas

    

       
