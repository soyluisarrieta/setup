# Abrir este archivo
function aliases {notepad $PROFILE}

# Atajos
function xampp {cd C:\xampp\htdocs\}
function dev {cd D:\DEV}
function art {php artisan @args}

function npmserve {npm run dev @args}
function phphost{
  $ipAddress = (Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias "Ethernet" | Where-Object { $_.PrefixOrigin -eq "Dhcp" }).IPAddress
  php artisan serve --host $ipAddress --port 8000
}
function phpserve {php artisan serve}
function phptest {php artisan serve --host test.com}

# Git aliases
function gs {git status}
function ga {git add @args}
function gaa {git add .}
function gaac {git add . && git commit -m @args}
function gfa {git fetch --all}

function grman {git rebase -i main}
function grmas {git rebase -i master}
function grdev {git rebase -i develop}

function commit { git commit -m @args }
function gcommit {git add .;git commit -m @args}
function pushman {git push origin main}
function pushmas {git push origin master}
function pushdev {git push origin develop}

function pullman {git pull origin main}
function pullmas {git pull origin master}
function pulldev {git pull origin develop}

function push {git push @args}
function pull {git pull @args}
function glog {git log --oneline}
function gch {git checkout @args}

function gman {git checkout main}
function gmas {git checkout master}
function gdev {git checkout develop}

function grh {git reset HEAD @args}
function grhh {git reset HEAD --hard @args}
function gback {git reset --hard "HEAD~$args"}

function gr {git restore @args}

function gb {git branch @args}
function gd {git diff}
function clone {git clone @args}

function gclean {git clean -f; git clean -fd}

# Preferencias generales
Set-PSReadLineOption -PredictionViewStyle ListView


# Personalización del prompt
function prompt {
    $gitBranch = & {
        if ((Get-Command git -ErrorAction SilentlyContinue)) {
            git rev-parse --abbrev-ref HEAD 2>$null
        }
    }
    
    $gitRoot = & {
        if ((Get-Command git -ErrorAction SilentlyContinue)) {
            git rev-parse --show-toplevel 2>$null
        }
    }

    $currentDir = if ($gitRoot) {
        $repoName = Split-Path $gitRoot -Leaf
        $relativePath = (Get-Location).Path.Substring($gitRoot.Length)
        "\$repoName$relativePath"
    } else {
        (Get-Location).Path
    }

    Write-Host "▲ " -NoNewline

    if ($gitBranch) {
        Write-Host "(git:$gitBranch) " -NoNewline -ForegroundColor Cyan
    }

    Write-Host $currentDir -NoNewline -ForegroundColor Yellow

    Write-Host " → " -NoNewline -ForegroundColor Green

    return " "
}
