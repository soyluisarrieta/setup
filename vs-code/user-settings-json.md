# 👨‍💻 Mis ajustes de usuario para VS Code

> Estas son las configuraciones predefinidas en formato json para el editor de código.

Abra la linea de comandos con `F1` y ejecute:

```bash
Preferences: Open User Settings (JSON)
```

Pegue todas las configuraciones teniendo en cuenta que ya instaló [todas las extensiones](extensions.md).

```json
{
  // Ajustes generales
  "security.workspace.trust.untrustedFiles": "open",
  "workbench.colorTheme": "One Dark Pro",
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "window.zoomLevel": 0,
  "breadcrumbs.enabled": false,
  "editor.scrollbar.verticalScrollbarSize": 10,
  "editor.roundedSelection": true,
  "terminal.external.windowsExec": "C:\\Program Files\\Git\\git-bash.exe",
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "javascript.preferences.importModuleSpecifier": "non-relative",
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "git.openRepositoryInParentFolders": "always",
  "markdownlint.run": "onSave",
  "markdownlint.config": { "no-inline-html": false },
  "symbols.hidesExplorerArrows": false,
  "workbench.iconTheme": "symbols",
  "window.menuBarVisibility": "compact",
  "window.commandCenter": false,
  "workbench.layoutControl.enabled": false,
  "workbench.sideBar.location": "right",

  // Auto formateadores
  "[css]": {
    "editor.defaultFormatter": "vscode.css-language-features",
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll": "explicit"
    },
  },
  "[typescript]": {
    "editor.defaultFormatter": "YoavBls.pretty-ts-errors",
    "editor.formatOnSave": true
  },
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode",
  },
  "[php]": {
    "editor.defaultFormatter": "amiralizadeh9480.laravel-extra-intellisense",
    "editor.formatOnSave": true
  },
  "[markdown]": {
    "editor.defaultFormatter": "DavidAnson.vscode-markdownlint",
    "editor.formatOnSave": true,
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features",
    "editor.formatOnSave": true
  },
  
  // Tema
  "workbench.colorCustomizations": {
    "[One Dark Pro]": {
      // Marcar los errores con un rojo vivo
      "editorError.foreground": "#ff0000",
      "editorHint.foreground": "#ff0000",
      "editorInfo.foreground": "#ff0000",
      "editorWarning.foreground": "#ff0000",
      // Otras personalizaciones
      "titleBar.activeBackground": "#292929",
      "scrollbar.shadow": "#11111170",
    }
  },
}
```
