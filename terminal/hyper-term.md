# ✨ Terminal Hyper

> Estas son las configuraciones para personalizar la apariencia de mi terminal.

## Añadir mis estilos personalizados

1. Descargar e instalar la terminar [Hyper](https://hyper.is/).

2. Ir a: `C:\Users\USERNAME_PC\AppData\Roaming\Hyper`.

3. Abrir el archivo **.hyper.js** y sobreescribir el contenido con el siguiente script:

    <details>
    <summary><strong>📜 .hyper.js</strong></summary>

      ```js
      "use strict";

      // Future versions of Hyper may add additional config options,
      // which will not automatically be merged into this file.
      // See <https://hyper.is#cfg> for all currently supported options.
      module.exports = {
        config: {
          // choose either `'stable'` for receiving highly polished,
          // or `'canary'` for less polished but more frequent updates
          updateChannel: "stable",
          // default font size in pixels for all tabs
          fontSize: 13,
          // font family with optional fallbacks
          fontFamily:
            'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
          // default font weight: 'normal' or 'bold'
          fontWeight: "normal",
          // font weight for bold characters: 'normal' or 'bold'
          fontWeightBold: "normal",
          // line height as a relative unit
          lineHeight: 1,
          // letter spacing as a relative unit
          letterSpacing: 0,
          // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
          cursorColor: "rgba(255, 106, 86,0.8)",
          // terminal text color under BLOCK cursor
          cursorAccentColor: "#000",
          // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
          cursorShape: "BLOCK",
          // set to `true` (without backticks and without quotes) for blinking cursor
          cursorBlink: false,
          // color of the text
          foregroundColor: "#fff",
          // terminal background color
          // opacity is only supported on macOS
          backgroundColor: "#000",
          // terminal selection color
          selectionColor: "rgba(255, 106, 86,0.3)",
          // border color (window, tabs)
          borderColor: "#333",
          // custom CSS to embed in the main window
          css: "",
          // custom CSS to embed in the terminal window
          termCSS: "",
          // set custom startup directory (must be an absolute path)
          workingDirectory: "",
          // if you're using a Linux setup which show native menus, set to false
          // default: `true` on Linux, `true` on Windows, ignored on macOS
          showHamburgerMenu: "",
          // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
          // additionally, set to `'left'` if you want them on the left, like in Ubuntu
          // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
          showWindowControls: "",
          // custom padding (CSS format, i.e.: `top right bottom left`)
          padding: "12px 14px",
          // the full list. if you're going to provide the full color palette,
          // including the 6 x 6 color cubes and the grayscale map, just provide
          // an array here instead of a color map object
          colors: {
            black: "#000000",
            red: "#C51E14",
            green: "#1DC121",
            yellow: "#C7C329",
            blue: "#0A2FC4",
            magenta: "#C839C5",
            cyan: "#20C5C6",
            white: "#C7C7C7",
            lightBlack: "#686868",
            lightRed: "#FD6F6B",
            lightGreen: "#67F86F",
            lightYellow: "#FFFA72",
            lightBlue: "#6A76FB",
            lightMagenta: "#FD7CFC",
            lightCyan: "#68FDFE",
            lightWhite: "#FFFFFF",
            limeGreen: "#32CD32",
            lightCoral: "#F08080",
          },
          // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
          // if left empty, your system's login shell will be used by default
          //
          // Windows
          // - Make sure to use a full path if the binary name doesn't work
          // - Remove `--login` in shellArgs
          //
          // Windows Subsystem for Linux (WSL) - previously Bash on Windows
          // - Example: `C:\\Windows\\System32\\wsl.exe`
          //
          // Git-bash on Windows
          // - Example: `C:\\Program Files\\Git\\bin\\bash.exe`
          //
          // PowerShell on Windows
          // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
          //
          // Cygwin
          // - Example: `C:\\cygwin64\\bin\\bash.exe`
          shell: "C:\\Program Files\\Git\\git-cmd.exe",

          // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
          // by default ['--login'] will be used
          shellArgs: ["--command=usr/bin/bash.exe", "-l", "-i"],

          // for environment variables
          env: { TERM: "cygwin" },
          // Supported Options:
          //  1. 'SOUND' -> Enables the bell as a sound
          //  2. false: turns off the bell
          bell: "SOUND",
          // An absolute file path to a sound file on the machine.
          // bellSoundURL: '/path/to/sound/file',
          // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
          copyOnSelect: false,
          // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
          defaultSSHApp: true,
          // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
          // selection is present (`true` by default on Windows and disables the context menu feature)
          quickEdit: false,
          // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
          // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
          // (inside tmux or vim with mouse mode enabled for example).
          macOptionSelectionMode: "vertical",
          // Whether to use the WebGL renderer. Set it to false to use canvas-based
          // rendering (slower, but supports transparent backgrounds)
          webGLRenderer: true,
          // keypress required for weblink activation: [ctrl|alt|meta|shift]
          // todo: does not pick up config changes automatically, need to restart terminal :/
          webLinksActivationKey: "",
          // if `false` (without backticks and without quotes), Hyper will use ligatures provided by some fonts
          disableLigatures: true,
          // set to true to disable auto updates
          disableAutoUpdates: false,
          // set to true to enable screen reading apps (like NVDA) to read the contents of the terminal
          screenReaderMode: false,
          // set to true to preserve working directory when creating splits or tabs
          preserveCWD: true,
          // for advanced config flags please refer to https://hyper.is/#cfg
        },
        // a list of plugins to fetch and install from npm
        // format: [@org/]project[#version]
        // examples:
        //   `hyperpower`
        //   `@company/project`
        //   `project#1.0.1`
        plugins: [
          "hyper-one-dark-vivid",
          "hyperlinks",
          "hyperterm-paste",
        ],
        // in development, you can create a directory under
        // `~/.hyper_plugins/local/` and include it here
        // to load it and avoid it being `npm install`ed
        localPlugins: [],
        keymaps: {
          // Example
          // 'window:devtools': 'cmd+alt+o',
        }
      };
      //# sourceMappingURL=config-default.js.map
      ```

    </details>

4. Abrir la terminal Hyper y esperar a que instale los plugins.

5. En la misma carpeta de Hyper, ir a: `\.hyper_plugins\node_modules\hyper-one-dark-vivid`.

6. Abrir el archivo **index.js** y sobreescribir el contenido con el siguiente script:

    <details>
    <summary><strong>📜 index.js</strong></summary>

      ```js
      const backgroundColor = '#292D3E';
      const foregroundColor = '#abb2bf';
      const cursorColor = foregroundColor;
      const borderColor = backgroundColor;

      const colors = {
        black: backgroundColor,
        red: '#ef596f', // red
        green: '#89ca78', // green
        yellow: '#d8985f', // yellow
        blue: '#52adf2', // blue
        magenta: '#d55fde', // pink
        cyan: '#52adf2', // cyan
        white: '#d0d0d0', // light gray
        lightBlack: '#808080', // medium gray
        lightRed: '#ef596f', // red
        lightGreen: '#89ca78', // green
        lightYellow: '#d8985f', // yellow
        lightBlue: '#52adf2', // blue
        lightMagenta: '#d55fde', // pink
        lightCyan: '#52adf2', // cyan
        colorCubes: '#ffffff', // white
        grayscale: foregroundColor
      };

      exports.decorateConfig = config => {
        return Object.assign({}, config, {
          foregroundColor,
          backgroundColor,
          borderColor,
          cursorColor,
          colors,
          termCSS: `
            ${config.termCSS || ''}
            .cursor-node {
              mix-blend-mode: difference;
              border-left-width: 2px;
            }
          `,
          css: `
            ${config.css || ''}
            .header_header {
              top: 0;
              right: 0;
              left: 0;
            }
            .tabs_list {
              background-color: #21252b !important;
              border-bottom-color: #181a1f !important;
            }
            .splitpane_divider {
              background-color: rgba(171, 178, 191, 0.15) !important;
            }
            .tab_tab {
              font-weight: 500;
              color: rgba(157, 165, 180, 0.6);
              border-width: 0 0 0 1px;
              border-image: linear-gradient(#21252b, #181a1f 1em) 0 0 0 1 stretch;
              border-style: solid;
            }
            .tab_tab:first-of-type {
              border-width: 0;
            }
            .tab_tab:hover {
              color: rgba(157, 165, 180, 0.6);
              transition: none;
            }
            .tab_tab::after {
              content: "";
              position: absolute;
              pointer-events: none;
              top: 0;
              bottom: -1px;
              left: 0;
              width: 2px;
              height: inherit;
              background: #528bff;
              opacity: 0;
              transition: opacity .16s;
              z-index: 1;
            }
            .tabs_title,
            .tab_tab.tab_active {
              font-weight: 500;
              color: #d7dae0;
            }
            .tab_tab.tab_active {
              background-color: ${backgroundColor};
            }
            .tab_tab.tab_active,
            .tab_tab.tab_active + .tab_tab {
              border-image: linear-gradient(transparent, transparent) 0 0 0 1 stretch;
            }
            .tab_tab.tab_active::before {
              content: "";
              z-index: 1;
              position: absolute;
              top: 0;
              left: -1px;
              bottom: -1px;
              right: 0;
              height: inherit;
              background-image: linear-gradient(rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
              box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
              border: 1px solid #181a1f;
              border-bottom-color: ${backgroundColor};
              border-top: 0;
            }
            .tab_tab.tab_active:last-of-type::before {
              border-right-width: 0;
            }
            .tab_tab.tab_active::after {
              opacity: 1;
              transition-duration: .32s;
            }
            .tab_icon {
              display: block;
              background: rgba(157, 165, 180, 0.6);
              -webkit-mask-image: url('${__dirname}/close.svg');
              mask-image: url('${__dirname}/close.svg');
              -webkit-mask-size: 7px;
              mask-size: 7px;
              -webkit-mask-repeat: no-repeat;
              mask-repeat: no-repeat;
              -webkit-mask-position-y: center;
              mask-position-y: center;
              -webkit-mask-position-x: 8px;
              mask-position-x: 8px;
              width: 26px;
              height: 100%;
              top: 0;
              right: 0;
              transform: scale(0);
              transition: transform .08s;
              opacity: 1;
              border-radius: 0;
              z-index: 2;
            }
            .tab_icon:hover {
              background: rgba(157, 165, 180, 0.6);
              opacity: .7;
            }
            .tab_tab.tab_active .tab_icon {
              background: #d7dae0;
            }
            .tab_tab.tab_active .tab_icon:hover {
              background: #d7dae0;
            }
            .tab_tab:hover .tab_icon {
              transform: scale(1);
              transition-duration: .16s;
            }
            .tab_icon svg {
              display: none;
            }
            .tab_icon::after {
              display: none;
            }
          `
        });
      };
      ```

    </details>

7. Ir a: `C:\Program Files\Git\etc\profile.d` y abrir el archivo **git-prompt.sh** y sobreescribir el contenido con el siguiente script:

    <details>
    <summary><strong>📼 git-prompt.sh</strong></summary>

    ```bash
    function git_branch {
        local branch_name
        branch_name=$(git symbolic-ref --short HEAD 2>/dev/null)
        if [ -n "$branch_name" ]; then
            echo " (git:$branch_name)"
        fi
    }

    function update_prompt {
        local repo_info
        repo_info=$(git_branch)
        local root_dir
        root_dir=$(git rev-parse --show-toplevel 2>/dev/null)
        local current_dir

        if [ -n "$root_dir" ]; then
            local common_dir
            common_dir=$(basename "$root_dir")
            current_dir=" /$common_dir${PWD#*$common_dir}"
        else
            current_dir="$current_dir"' \w'
        fi

        PS1="\[\e]0;$common_dir\007\]"
        PS1="$PS1"'\[\033[0m\]▲'
        PS1="$PS1"'\[\033[36m\]'
        PS1="$PS1$repo_info"
        PS1="$PS1\[\033[33m\]$current_dir\[\033[32m\] → \[\033[0m\]"
    }

    PROMPT_COMMAND=update_prompt

    if test -f ~/.config/git/git-prompt.sh
    then
        . ~/.config/git/git-prompt.sh
    fi

    update_prompt

    MSYS2_PS1="$PS1"               # for detection by MSYS2 SDK's bash.basrc

    # Evaluate all user-specific Bash completion scripts (if any)
    if test -z "$WINELOADERNOEXEC"
    then
        for c in "$HOME"/bash_completion.d/*.bash
        do
            # Handle absence of any scripts (or the folder) gracefully
            test ! -f "$c" ||
            . "$c"
        done
    fi

    ```

    </details>
