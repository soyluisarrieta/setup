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
   4. El sistema solicitará muy rápidamente que se presione cualquier tecla.
   5. Una vez inicie el instalador de windows, seleccionar idioma .
   6. Seleccionar distribución de teclado "Español (España)" y presionar siguiente.
   7. Presionar el botón de Instalar.
   8. Presionar no tengo una clave de producto.
   9. Seleccionar la versión de Windows 11 Pro y presionar siguiente.
   10. Marcar aceptar los terminos y presionar siguiente.
   11. Presionar en la opción de instalación "Personalizada: Instalar solo Windows"
   12. Eliminar cada partición y formatear las que no permita eliminar.
   13. Con un disco duro de 476gb, dividiremos en 2 particiones de la siguiente manera:
        > *Al presionar en el botón "Nuevo" se creará la respectiva partición*
       - **Disco C** (Programas, instalaciones, configuraciones, códigos de programación en htdocs) le asignamos un tamaño de **204,800 MB**
       - **Disco D** (Carpetas documentos, imagenes, video, musica, escritorio, archivos importantes) le asignamos el restante completo.
   14. Seleccionamos la unidad Disco C (La que tiene 200gb) y presionar "Siguiente".
   15. Una vez termine el proceso de instalación, seleccionamos el idioma y distribución de teclado y presionar "Siguiente".
   16. Introducimos el nombre al dispositivo y presionar "Siguiente".
   17. Seleccionamos la configuración para uso personal y presionar "Siguiente".
   18. Presionar "Iniciar sesión" para ingresar o crear la cuenta de Microsoft.
   19. Continuas el proceso de configuración a tu gusto.
   20. Con esto finalizaría los últimos ajustes de instalación.

### ✨ Configuro mis preferencias iniciales

  1. Usar copia de seguridad de los Drivers:
     1. Si no usará la copia de seguridad, en el menú buscar "Buscar actualizaciones"
     2. Presionar el botón de buscar actualizaciones.
     3. Si usará la copia de seguridad, copiar y pegar los drivers al escritorio.
     4. Buscar en el menú "Administrador de dispositivos".
     5. Desplegar pestaña por ejemeplo "Adaptadores de pantalla".
     6. Clic derecho al controlador y presionar "Actualizar controlador"
     7. Presionar en "Buscar controladores en mi equipo".
     8. Examinar y seleccionar carpeta de backup que contiene: drivers y DriverStore.
     9. Presionar "Aceptar", verifica que la casilla "Incluir subcarpetas" esté verificada.
     10. Clic en "Siguiente" y cuando finalice presionar "Cerrar" para repetir el proceso con todos los drivers.
  3. Verificar la distribucion de teclado (Español México).
  4. Personalizar windows dark con ventana en light.
  5. Activar luz nocturna con intensidad a gusto (37%).
  6. Tiempos de espera 5min a 1h
  7. Suspención a nunca.
  8. Quitar accesos directos de la barra de tareas buscando "Configuración barra de tareas".
  9. Ocultar icono de buscar de la barra de tareas.
  10. Desanclar el resto de accesos directos de la barra de tareas.
  11. Quitar recientes del menú.
  12. En el explorador de archivos desplegar en "Ver" y "Mostrar:
     1. Activar mostrar "Extensiones de nombre de archivos".
     2. Activar mostrar "Elementos ocultos".
  13. Formatear y cambiar letra del disco de los archivos en el disco de unidad "D".
      1. Buscar "Crear y formatear particiones del disco duro"
      2. Clic derecho en la unidad y presionar en "Cambiar letra y ruta de acceso de unidad..."
      3. Presionar "Cambiar" y seleccionar "D"
      4. Presionar "Aceptar" y confirmar acción en "Si"
      5. Clic derecho nuevamente a la unidad y presionar "Formatear"
      6. En etiqueta introducir "ARCHIVOS"
      7. En sistema de archivos en "NTFS"
      8. Presionar "Aceptar" y confirmar accion en "Acetar"
  14. Cambiar ubicación de las carpetas generales al disco D.
      1. Creamos la carpeta "Mi PC" y dentro las carpetas:
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

  1. WinRar
  2. **Navegadores:**
     1. Google Chrome
     2. Firefox
     3. Brave
        1. Crear tres perfiles:
           1. SoyLuisArrieta
           2. Jessi
           3. Invitado
        2. Cambiar a modo oscuro en [Diseño](brave://settings/appearance).
        3. Importar [mis marcadores](../browser/bookmarks_06_04_24.html).
        4. Instalar [mis extensiones favoritas](../browser/extensions.md).
        5. Configurar buscador de YouTube por URL:
           1. Ir a [Administrar la búsqueda en sitios y motores de búsqueda](brave://settings/searchEngines)
           2. En la sección "Búsqueda en sitios", presionar en "Agregar".
           3. Nombre: `Youtube`
           4. Atajo: `you`
           5. URL: `https://www.youtube.com/results?search_query=%s`
           6. Presionar en "Guardar"
           7. Probar en la url poniendo "you" y presionando la tecla `Tab`
        6. Iniciar sesión de cuentas Gmail en el siguiente orden:
           1. <louise.avilez.7@gmail.com>
           2. <luisarrieta796@gmail.com>
           3. <paylusestudio@gmail.com>
           4. <jpaola1017@gmail.com>
        7. Fijar páginas recurrentes:
           1. [WhatsApp](https://web.whatsapp.com/)
           2. [OpenAI - ChatGPT](https://chat.openai.com/)
           3. [Maol - ChatGPT](https://chatgpt.maol.dev/)
           4. [Gemini](https://gemini.google.com/app/a49e6412839f4f59)
           5. [Gmail - luisarrieta796@gmail.com](https://mail.google.com/mail/u/1/#inbox)
  3. **Programación:**
     1. [XAMPP](https://www.apachefriends.org/es/download.html) con PHP
     2. [Composer-Setup.exe](https://getcomposer.org/download/)
     3. [NodeJS](https://nodejs.org/en/download/current)
     4. [Visual Studio Code](https://code.visualstudio.com/download)
        1. Instalar [mis extensiones favoritas](../vs-code/extensions.md)
        2. Sobreescribir [los ajustes de usuario](../vs-code/user-settings-json.md)
     5. [Git](https://git-scm.com/downloads) con Git Bash
        1. Configurar mi identidad:
           - `git config --global user.name "Luis Arrieta"`
           - `git config --global user.email luisarrieta796@gmail.com`
        2. Instalar los [Bash aliases](../terminal/bash-aliases.md)
     6. [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=es-es&gl=ES)
     7. [Postman](https://www.postman.com/downloads/)
  4. **Edición multimedia:**
     1. Adobe Photoshop 2021
     2. Adobe Illustrator 2020
     3. Adobe Affter effects 2019
  5. **Otros relevantes**
     1. [Notion](https://www.notion.so/es-es/desktop)
     2. [Lightshot](https://app.prntscr.com/es/download.html)
     3. Reproductor de audio y video (MPV y VLC)
     4. [ScreenToGif](https://www.screentogif.com/downloads)
     5. [Discord](https://discord.com/download)
     6. [OBS Studio](https://obsproject.com/es/download)

### 🗜️ Aplico configuraciones adicionales los programas

  1.

### ✅ Pasos finales

  1.
