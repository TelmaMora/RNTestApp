# React Native Test App

## Descripción

Aplicación React Native creada con Expo que permite a los usuarios iniciar sesión y consultar una lista de datos de una API externa. La aplicación incluye validación de campos en el inicio de sesión, y muestra una lista de elementos que se pueden refrescar. 

## Funcionalidades

- Pantalla de inicio de sesión con validación de email y contraseña.
- Pantalla de listado que consulta datos de un servidor JSON.
- Detalle de cada elemento al hacer clic en la lista.
- Funcionalidad de "pull-to-refresh" para actualizar los datos.

## Requisitos

- Node.js
- Expo CLI
- JSON Server

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/nombre-del-repo.git
   cd nombre-del-repo
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```


3. Crea un archivo `.env` en la raíz del proyecto y añade la siguiente línea para configurar la variable de entorno del host de la API:

   ```bash
   API_HOST=http://localhost:3000
   ```

## Obtener la Dirección del Host

Para acceder a tu API desde un dispositivo móvil, necesitas obtener la dirección IP de tu computadora. Aquí te mostramos cómo hacerlo:

### En Windows:

1. Abre el símbolo del sistema (cmd) y ejecuta el siguiente comando:

   ```bash
   ipconfig
   ```

2. Busca la sección que dice "Dirección IPv4" bajo la conexión activa (generalmente es algo como `Ethernet` o `Wi-Fi`). La dirección debería ser algo como `192.168.x.x`.

### En macOS/Linux:

1. Abre la terminal y ejecuta el siguiente comando:

   ```bash
   ifconfig
   ```

2. Busca la sección que dice "inet" bajo la conexión activa (generalmente `en0` para Wi-Fi o `eth0` para Ethernet). La dirección debería ser algo como `192.168.x.x`.

### Actualiza la Variable de Entorno

Una vez que tengas la dirección IP, actualiza tu archivo `.env`:

```bash
EXPO_PUBLIC_API_HOST=http://<tu_direccion_ip>:3000
```

Asegúrate de reemplazar `<tu_direccion_ip>` con la dirección IP que obtuviste.

## Ejecución del Servidor JSON

Para ejecutar el servidor JSON y servir los datos de prueba, usa el siguiente comando:

```bash
json-server --host 0.0.0.0 --port 3000 --watch db.json
```

## Ejecución de la Aplicación

Para iniciar la aplicación en Expo, utiliza el siguiente comando:

```bash
npx expo start
```

Esto mostrara un código QR con tu dispositivo móvil para ver la aplicación en acción.

Adicionalmente puedes verla tambien en tu navegador Web presionando la tecla W.

## Credenciales de Prueba

Las credenciales válidas para iniciar sesión son:

- **Email:** `test@example.com`
- **Contraseña:** `Password@123`

## Notas Adicionales

- Asegúrate de que tu dispositivo móvil esté en la misma red que tu computadora para poder acceder al servidor JSON.
- Puedes modificar la variable `API_HOST` en el archivo `.env` si deseas usar una dirección diferente para el servidor.

