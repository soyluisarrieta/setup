# 🖥️ Formateo y configuración de mi PC-Desktop

> Esta es mi guía para formatear mi PC-Desktop.

## Pasos Previos al Formateo

### 🗃️ Hago copias de seguridad

   1. Definir donde guardar las copias de seguridad en el disco D o disco duro externo.
   2. Revisar carpetas: escritorio, documentos, imagenes, video, musica.
   3. Exportar bases de datos de phpmyadmin y guardar en el respectivo proyecto.
   4. Revisar htdocs que los proyectos relevantes se hallan hecho push a GitHub.
   5. Screenshot a los accesos directos anclados al menu.
   6. Verificar si toca actualizar los [alias de bash](../terminal/bash-aliases.md)
   7. **Navegador:**
      1. Exportar marcadores.
      2. Verificar si toca actualizar [lista de extensiones para el navegador](../browser/extensions.md).
   8. **VS Code:**
      1. Verificar si toca actualizar [lista de extensiones para el editor de código](../vs-code/extensions.md).
      2. Verificar si toca actualizar [ajustes de usuario en JSON](../vs-code/user-settings-json.md).
   9. **Drivers:**
      1. Ir al directorio *C:\Windows\System32*.
      2. Seleccionar y copiar las carpetas *drivers* y *DriverStore*.
      3. Pegar en el la unidad de copias de seguridad.

### 📀 Preparo un medio de instalación

#### Para Windows 11

   1. Introducir una USB y formatearla con el sistema de archivos NTFS.
   2. Abrir el programa [Rufus](https://rufus.ie/es/) portable y seleccionamos el dispositivo USB.
   3. Presionar en el botón SELECCIONAR para adjuntar la ISO.
   4. Verificar que el esquema de partición sea MBR.
   5. Presionamos EMPEZAR y esperamos a que la USB sea booteada.

### 🚀 Realizo el formateo

   1. Apagar computadora y acceder a la BIOS usando la tecla `F2`.
   2. Buscamos la zona para cambiar el orden de arranque y priorizamos la USB Booteada.
   3. Presionar `F10` para salir y guardar.
   4. Una vez inicie el instalador de windows, seleccionar idioma .
   5. Seleccionar distribución de teclado "Español (España)" y presionar siguiente.
   6. Presionar el botón de Instalar.
   7. Presionar no tengo una clave de producto.
   8. Seleccionar la versión de Windows 11 Pro y presionar siguiente.
   9. Marcar aceptar los terminos y presionar siguiente.
   10. Presionar en la opción de instalación "Personalizada: Instalar solo Windows"
   11. Eliminar cada partición y formatear las que no permita eliminar.
   12. Con un disco duro de 476gb, dividiremos en 2 particiones de la siguiente manera:
        > *Al presionar en el botón "Nuevo" se creará la respectiva partición*
       - **Disco C** (Programas, instalaciones, configuraciones, códigos de programación en htdocs) le asignamos un tamaño de **204,800 MB**
       - **Disco D** (Carpetas documentos, imagenes, video, musica, escritorio, archivos importantes) le asignamos el restante completo.
   13. Seleccionamos la unidad Disco C (La que tiene 200gb) y presionar "Siguiente".
   14. Una vez termine el proceso de instalación, introducimos el nombre al dispositivo y presionar "Siguiente".
   15. Seleccionamos la configuración para uso personal y presionar "Siguiente".
   16. Presionar "Iniciar sesión" para ingresar o crear la cuenta de Microsoft.
   17. Con esto finalizaría los últimos ajustes de instalación.

### ✨ Configuro mis preferencias iniciales

  1. Usar copia de seguridad de los Drivers:
     1. Buscar en el menú "Administrador de dispositivos".
     2. Desplegar pestaña por ejemeplo "Adaptadores de pantalla".
     3. Clic derecho al controlador y presionar "Actualizar controlador"
     4. Presionar en "Buscar controladores en mi equipo".
     5. Examinar y seleccionar carpeta de backup que contiene: drivers y DriverStore.
     6. Presionar "Aceptar", verifica que la casilla "Incluir subcarpetas" esté verificada.
     7. Clic en "Siguiente" y cuando finalice presionar "Cerrar" para repetir el proceso con todos los drivers.
  2. Verificar la distribucion de teclado (Español España).
  3. Personalizar windows dark con ventana en light.
  4. Tiempos de espera 5min - 3h y suspención a los 15min - 5h.
  5. Anclar Explorador de archivos en la barra de herramientas.
  6. Quitar el icono de la vista de tareas de la barra de herramientas.
  7. Quitar recientes del menú.
  8. En el explorador de archivos:
     1. Activar "Mostrar extensiones de nombre de archivos".
     2. Activar "Mostrar elementos ocultos".
  9. Convertir el disco de los archivos en el disco de unidad "D".
  10. Cambiar ubicación de las carpetas generales.
      1. Creamos las carpetas en el disco D:
         1. Escritorio
         2. Documentos
         3. Imágenes
         4. Música
         5. Video
      2. Clic derecho en la carpeta original por ejemplo "Escritorio".
      3. Clic en "Propiedades" y abrir la pestaña "Ubicación".
      4. Presionar en el botón "Mover" y seleccionamos la nueva carpeta por ejemplo "Escritorio".
      5. Presionar "Seleccionar carpeta" y en la ventana de propiedades clic en "Aplicar".
      6. En la ventana confirmamos la acción en el botón "Sí"
      7. En la misma ventana de propiedades clic en "Aceptar" y repetimos el proceso con cada carpeta.

### ⬇️ Descargo e instalo los programas

  1.

### 🗜️ Aplico configuraciones adicionales los programas

  1.

### ✅ Pasos finales

  1.
