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
  "editor.tabSize": 4,
  "window.zoomLevel": 0,
  "breadcrumbs.enabled": false,
  "editor.scrollbar.verticalScrollbarSize": 7,
  "editor.roundedSelection": true,
  "markdownlint.run": "onSave",
  "markdownlint.config": {
    "no-inline-html": false,
  },
  "workbench.iconTheme": "symbols",
  "window.menuBarVisibility": "compact",
  "workbench.layoutControl.enabled": false,
  "workbench.sideBar.location": "right",
  "editor.colorDecorators": true,
  "tailwindCSS.colorDecorators": true,

  // Formatters
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
  },
  "php.validate.executablePath": "c:\\php\\php.exe",
  "php.format.rules.newLineAfterImplements": false,
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features",
  },
  "php.codeLens.enabled": false,
  "php.inlayHints.parameters.enabled": false,
  "php.inlayHints.types.return": false,
  "workbench.statusBar.visible": false,
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features",
  },
  "claudeCode.preferredLocation": "panel",
  "[markdown]": {
    "editor.defaultFormatter": "DavidAnson.vscode-markdownlint",
  },
  "claudeCode.selectedModel": "default",
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode",
  },
  "laravel-pint.enable": true,
  "[php]": {
    "editor.defaultFormatter": "open-southeners.laravel-pint",
  },
  "workbench.colorTheme": "Dark Modern",
  "chat.disableAIFeatures": true,
}
```
