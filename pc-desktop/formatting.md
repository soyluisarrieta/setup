# 🖥️ PC-Desktop

> Esta guía contiene los pasos sufientes para formatear, configurar y optimizar mi PC-Desktop.

## Pasos Previos al Formateo

### 🗃️ Hago copias de seguridad

   1. Definir donde guardar las copias de seguridad en el disco D o disco duro externo.
   2. Revisar carpetas: escritorio, documentos, imagenes, video, musica.
   3. Exportar bases de datos de phpmyadmin y guardar en el respectivo proyecto.
   4. Revisar htdocs que los proyectos relevantes se hallan hecho push a GitHub.
   5. Exportar lienzo de [Excalidraw](https://excalidraw.com/)
   6. Screenshot a los accesos directos anclados al menu.
   7. Verificar si toca actualizar los [alias de bash](../terminal/bash-aliases.md)
   8. **Navegador:**
      1. Exportar marcadores.
      2. Verificar si toca actualizar [lista de extensiones para el navegador](../browser/extensions.md).
   9. **VS Code:**
      1. Verificar si toca actualizar [lista de extensiones para el editor de código](../vs-code/extensions.md).
      2. Verificar si toca actualizar [ajustes de usuario en JSON](../vs-code/user-settings-json.md).
   10. **Drivers:**
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
   9. Seleccionar la versión de Windows 11 Home y presionar siguiente.
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
     1. Sin copia de seguridad:
         1. En el menú buscar "Buscar actualizaciones"
         2. Presionar el botón de buscar actualizaciones.
         3. Esperar que búsque, descargue e instale drivers.
     2. Con copia de seguridad, copiar y pegar los drivers al escritorio.
     3. Buscar en el menú "Administrador de dispositivos".
     4. Desplegar pestaña por ejemeplo "Adaptadores de pantalla".
     5. Clic derecho al controlador y presionar "Actualizar controlador"
     6. Presionar en "Buscar controladores en mi equipo".
     7. Examinar y seleccionar carpeta de backup que contiene: drivers y DriverStore.
     8. Presionar "Aceptar", verifica que la casilla "Incluir subcarpetas" esté verificada.
     9. Clic en "Siguiente" y cuando finalice presionar "Cerrar" para repetir el proceso con todos los drivers
  2. Microsoft Office
  3. Activar licencia de Microsoft Office y de Windows
  4. Presionar `Windows + v` y clic en el botón "Activar" para habilitar historial de portapapeles.
  5. Verificar la distribucion de teclado (Español España).
  6. Personalizar windows dark con ventana en light.
  7. Activar luz nocturna con intensidad a gusto (30%).
  8. Tiempos de espera 5min a 1h
  9. Suspención a nunca.
  10. Quitar accesos directos de la barra de tareas buscando "Configuración barra de tareas".
  11. Ocultar icono de buscar de la barra de tareas.
  12. Desanclar el resto de accesos directos de la barra de tareas.
  13. Quitar recientes del menú.
  14. En el explorador de archivos desplegar en "Ver" y "Mostrar:
     1. Activar mostrar "Extensiones de nombre de archivos".
     2. Activar mostrar "Elementos ocultos".
  15. Formatear y cambiar letra del disco de los archivos en el disco de unidad "D".
     1. Buscar "Crear y formatear particiones del disco duro".
     2. Clic derecho en la unidad y presionar en "Cambiar letra y ruta de acceso de unidad...".
     3. Presionar "Cambiar" y seleccionar "D".
     4. Presionar "Aceptar" y confirmar acción en "Si".
     5. Clic derecho nuevamente a la unidad y presionar "Formatear".
     6. En etiqueta introducir "ARCHIVOS".
     7. En sistema de archivos en "NTFS".
     8. Presionar "Aceptar" y confirmar accion en "Acetar".
  16. Cambiar ubicación de las carpetas generales al disco D.
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
     8. Si no funciona siga los siguientes pasos:
        1. Presionar `Windows + R` para abrir el ejecutar.
        2. Introduzca "regedit", presionar enter y presionar "Si" en la ventana como administrador.
        3. Ir a la ruta: `Equipo\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders`
        4. Estando en User Shell Folders, hay una columna llamada "Datos". Búsque las rutas que terminen en la carpeta por ejemplo: "...\\Documentos"
        5. Dar doble clic en la celda de la columna "Nombre"
        6. Edite la ubicación en el campo "Información de valor" por ejemplo cambiar "C:\Users\USUARIO\OneDrive\Documentos" a "D:\Mi PC\Documentos"
        7. Reiniciar el ordenador y volver a intentar el proceso de cambiar ubicación de carpeta.
  14. Reiniciar y volver a entrar la la BIOS para bajar la prioridad de arranque al USB.

### ⬇️ Descargo e instalo los programas

  1. WinRar
  2. **Navegadores:**
     1. Google Chrome
     2. Firefox
     3. Brave
        1. Crear tres perfiles en las opciones de Brave está "Más herramientas/Crear un nuevo perfil":
           1. SoyLuisArrieta
           2. Jessi
           3. Invitado
        2. Cambiar a modo oscuro en `brave://settings/appearance`
        3. Cambiar motor de búsqueda de Brave a Google en `brave://settings/search`
        4. Importar [mis marcadores](../browser/bookmarks_06_04_24.html).
        5. Instalar [mis extensiones favoritas](../browser/extensions.md).
        6. Configurar buscador de YouTube por URL:
           1. Ir a `brave://settings/searchEngines`
           2. En la sección "Búsqueda en sitios", presionar en "Agregar".
           3. Nombre: `Youtube`
           4. Atajo: `you`
           5. URL: `https://www.youtube.com/results?search_query=%s`
           6. Presionar en "Guardar"
           7. Probar en la url poniendo "you" y presionando la tecla `Tab`
        7. Iniciar sesión de cuentas Gmail en el siguiente orden:
           1. <louise.avilez.7@gmail.com>
           2. <luisarrieta796@gmail.com>
           3. <paylusestudio@gmail.com>
           4. <jpaola1017@gmail.com>
        8. Fijar páginas recurrentes:
           1. [WhatsApp](https://web.whatsapp.com/)
           2. [OpenAI - ChatGPT](https://chat.openai.com/)
           3. [Maol - ChatGPT](https://chatgpt.maol.dev/)
           4. [Gemini](https://gemini.google.com/app/a49e6412839f4f59)
           5. [Gmail - luisarrieta796@gmail.com](https://mail.google.com/mail/u/1/#inbox)
           6. [Youtube](https://www.youtube.com/)
  3. **Programación:**
     1. [XAMPP](https://www.apachefriends.org/es/download.html) con PHP
     2. [Composer-Setup.exe](https://getcomposer.org/download/)
     3. [NodeJS](https://nodejs.org/en/download/current)
     4. [Visual Studio Code](https://code.visualstudio.com/download)
     5. [Git](https://git-scm.com/downloads) con Git Bash
     6. [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=es-es&gl=ES)
     7. [Postman](https://www.postman.com/downloads/)
  4. **Edición multimedia:**
     1. Adobe Photoshop 2021
     2. Adobe Illustrator 2020
     3. Adobe Affter effects 2019
  5. **Otros relevantes**
     1. [Notion](https://www.notion.so/es-es/desktop)
     2. [Lightshot](https://app.prntscr.com/es/download.html)
     3. [ScreenToGif](https://www.screentogif.com/downloads)
     4. [Discord](https://discord.com/download)
     5. [OBS Studio](https://obsproject.com/es/download)
     6. Audacity
     7. Reproductor de audio y video (MPV y VLC)
        1. Para MVC copiar la carpeta MPV
        2. Ir a `C:\Program Files\` y pegar
        3. Ingresar a la carpeta pegada MPV y de la carpeta "installer"
        4. Ejecutar como administrador el archivo "mpv-install.bat"

### ⚙️ Ajustes y configuraciones

  1. Actualizar instaladores de los programas descargados en el disco duro externo.
  2. Menú de inicio de Windows:
     1. Desanclar todo los programas del menú de inicio.
     2. Ir a `Configuración > Personalización > Inicio`.
     3. Diseño: Más elementos anclados.
     4. Todo desactivado.
     5. Carpetas solo activar "Configuración" y "Explorador de archivos".
  3. Anclar los siguientes programas en el menú de inicio:
     1. Brave
     2. VS Code
     3. Notion
     4. Discord
     5. Reloj
     6. Calculadora
     7. Grupo "NAVEGADORES"
         1. Google Chrome
         2. Firefox
         3. Edge
     8. Grupo "ADOBE"
         1. Illustrator
         2. Photoshop
         3. Affter Effects
     9. Grupo "OFFICE"
         1. Microsoft World
         2. Power Point
         3. Excel
     10. Grupo "TERMINALES"
         1. Git Bash
         2. Terminal de Windows
         3. Power Shell
         4. Símbolo del sistema 
     11. Grupo "UTILIDADES"
         1. Bloc de Notas
         2. OBS Studio
         3. ScreenToGif
         4. Audacity
     12. ARCHIVOS (D)
  4. Quitar pin de acceso de inicio de sesión de Windows.
     1. Ir a `Configuración > Cuentas > Tu información`.
     2. En Cuenta de Microsoft presionar en "Iniciar sesión con una cuenta local en su lugar".
     3. Seguir los pasos pero en **el formulario de información de tu cuenta local** únicamente introducir el **Nombre de usuario**.
     4. Para cambiar la imagen de perfil nuevamente ir a `Configuración > Cuentas > Tu información` y clic en el botón "Examinar archivos".
  5. Configurar Lightshot:
     1. Ir a `Configuración > Accesibilidad > Teclado`.
     2. Desactivar la opción que dice: "Usar la tecla de Imprimir pantalla para abrir la captura de pantalla".
     3. Ahora vamos a las opciones de Lightshot.
     4. El proceso termina con "Cerrar sesión y acabar" dentro de la pestaña de "Teclas de acceso rápido".
     5. Dar clic en el campo que dice "IMP PANT" y presionar la tecla `ImpPnt`.
     6. Con esto se actualizará la configuración y presionar "Aceptar".
  6. Configurar Zona horaria:
     1. Buscar en el menú de inicio "Cambiar la Zona horaria".
     2. En Zona horaria seleccionar "(UTC-05:00) Bogotá, Lima, Quito, Branco".
  7. Configurar Git:
     1. Abrir una teminar de Git Bash.
     2. Configurar mi identidad:
        - `git config --global user.name "Luis Arrieta"`
        - `git config --global user.email luisarrieta796@gmail.com`
     3. Instalar los [Bash aliases](../terminal/bash-aliases.md).
     4. Abrir una terminal de Git Bash y ejecutar: `cd ~`.
     5. Ejecutar el siguiente comando: `ssh-keygen -t ed25519 -C luisarrieta796@gmail.com`.
     6. Presionar `Enter`, luego digitar una contraseña y repetir la contraseña.
     7. Ejecutar `eval "$(ssh-agent -s)"` para inicializar Agente SSH.
     8. Ejecutar `notepad ~/.ssh/config` para verifica si existe, de lo contrario, presionar en crear.
     9. Introducimos este bloque de código:
         ```bash
         Host github.com
           AddKeysToAgent yes
           UseKeychain yes
           IdentityFile ~/.ssh/id_ed25519
         ```
     10. Abrimos la llave pública ejecutando `notepad .ssh/id_ed25519.pub`
     11. Ir a la lista de [llaves SSH de Github](https://github.com/settings/keys) de mi cuenta.
     12. Verificar si toca eliminar llaves que ya no utilizo.
     13. Presionar botón "New SSH key".
     14. Rellenar el formulario: `Title`="PC-Desktop-2024" y en `Key` pegar llave pública.
     15. Presionar "Add SSH key"
     16. Para hacer la prueba de conexión, en la terminal de Git Bash ejecutar `ssh -T git@github.com`
     17. La terminal preguntará "Are you sure you want to continue connecting (yes/no/[fingerprint])?"
     18. Escribir "yes" y presionar "Enter", finalmente digitar la contraseña y "Enter"
  8. Configurar OBS:
     1. Abrir OBS e ir a `Archivos > Ajustes`.
     2. Ingresar en la pestaña de "Salida".
     3. En Formato de salida seleccionar a `MPEG-4 (.mp4)`.
     4. Ingresar en la pestaña de "Atajos".
     5. Clic en el campo "Iniciar Grabación" y añadir un atajo de teclado por ejemplo: `CTRL + SHIFT + 1`.
     6. El mismo atajo configurarlo para el campo "Detener Grabación".
     7. Aplicar y Aceptar.
  9. Configurar Visual Studio Code:
     1. Instalar [mis extensiones favoritas](../vs-code/extensions.md).
     2. Sobreescribir [los ajustes de usuario](../vs-code/user-settings-json.md).
  10. Cambiar brillo de Illustrator y Photoshop en `Edición > Preferencias > Interfaz de usuario`.
  11. Preferencias en XAMPP:
     1. Ir a `C:\xampp\.htdocs` y presionar clic derecho y en "Anclar a acceso rápido".
     2. Ingresar a la carpeta y crear una carpeta con el nombre `XAMPP_DASHBOARD`
     3. Mover todo el contenido de .htdocs a esa misma carpeta.
     4. Arrastrar la carpeta .htdocs de acceso rápido hasta arriba.
      
### 💫 Optimización

  1. 
