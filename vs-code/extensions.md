# 🔗 Mis extensiones de VS Code

> Esta es la lista de las extensiones favoritas para el editor y tecnologías en orden de importancia.

| Nombre de la Extensión | Descripción en Español | Autor |
| --- | --- | --- |
| [Fluent UI for VSCode](https://marketplace.visualstudio.com/items?itemName=leandro-rodrigues.fluent-ui-vscode) (⚠️ Ejecutar VS-Code como Admin) | Fluent UI para VSCode basado en diseños conceptuales de u/zeealeidahmad | Leandro Rodrigues |
| [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) | El icónico tema One Dark de Atom para Visual Studio Code | binaryify |
| [Symbols](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols) | Un simple tema de iconos de archivos para VS Code | Miguel Solorio |
| [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) | Todo lo que necesitas para escribir Markdown (atajos de teclado, tabla de contenidos, vista previa automática y más) | Yu Zhang |
| [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) | Resaltado de sintaxis y comprobación de estilo de Markdown para Visual Studio Code | David Anson |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | Integra ESLint JavaScript en VS Code | Microsoft |
| [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) | Mejora el resaltado de errores, advertencias y otros diagnósticos de lenguaje | Alexander |
| [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) | Extensiones para React, React-Native y Redux en JS/TS con sintaxis ES7+. Personalizable. Integración incorporada con prettier | dsznajder |
| [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) | Hace que los errores de TypeScript sean más bonitos y legibles en VSCode | yoavbls |
| [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) | Soporte de lenguaje para Astro | Astro |
| [Laravel Extra Intellisense](https://marketplace.visualstudio.com/items?itemName=amiralizadeh9480.laravel-extra-intellisense) | Mejor intellisense para proyectos laravel | amir |
| [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) | Herramientas inteligentes de Tailwind CSS para VS Code | Tailwind Labs |
| [Inline fold](https://marketplace.visualstudio.com/items?itemName=moalamri.inline-fold) | Un decorador personalizado que "pliega" el contenido coincidente en una sola línea | Mohammed Alamri |
| [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) | Muestra el tamaño del paquete de importación/require en el editor | Wix |
| [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) | Muestra la vista previa de la imagen en el margen y al pasar el ratón | Kiss Tamás |
| [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) | Resaltado de sintaxis para CSS moderno y experimental en VSCode | csstools |
| [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) | Desarrollo colaborativo en tiempo real desde la comodidad de tus herramientas favoritas | Microsoft |

## Evitar que se combinen los colores de Fluent UI y One Dark Pro

  1. Borrar propiedad Colors y su contenido en: `C:\Users\USUARIO\.vscode\extensions\zhuangtongfa.material-theme-3.17.0\themes\OneDark-Pro.json`

      ```json
      {
        "name": "One Dark Pro",
        "type": "dark",
        "semanticHighlighting": true,
        "semanticTokenColors": { ... },
        "tokenColors": { ... },
        // "colors": { ... }, <-- Borrar todo
      }
      ```

  2. Comentar propiedad background en: `C:\Users\USUARIO\.vscode\extensions\zhuangtongfa.material-theme-3.17.0\themes\markdown-inside.css`

      ```css
      .vscode-dark[data-vscode-theme-name="One Dark Pro Mix"].vscode-body, .vscode-dark[data-vscode-theme-name="One Dark Pro Flat"].vscode-body, .vscode-dark[data-vscode-theme-name="One Dark Pro Darker"].vscode-body, .vscode-dark[data-vscode-theme-name="One Dark Pro"].vscode-body {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          line-height: 1.5;
          color: rgb(171, 178, 191);
          line-height: 1.5;
          word-wrap: break-word;
          /* background: #282c34; */
          padding-top: 20px;
        }
      ```
