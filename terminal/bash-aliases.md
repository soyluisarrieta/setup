# 🔥 Mis alias de Bash

> Estas son las configuraciones predefinidas en formato json para el editor de código.

Siga la guia de [Git Aliases](https://github.com/soyluisarrieta/git-aliases) para instalar o actualizar mis alias favoritos:

```bash
alias g='git'
alias ga='git add'
alias gaa='git add -A'
alias gb='git branch'
alias gba='git branch -a'
alias gc='git commit -m'
alias gca='git commit -v -a'
alias gcb='git switch -c '
alias gcl='git clone'
alias gcm='git checkout master'
alias gco='git checkout'
alias gcount='git shortlog -sn'
alias gcp='git cherry-pick'
alias gl='git pull'
alias glg='git log --oneline --max-count=5'
alias glgg='git log --graph --max-count=5'
alias gm='git merge'
alias gp='git push'
alias grh='git reset HEAD'
alias grhh='git reset HEAD --hard'
alias gss='git status -s'
alias gst='git status'
alias gup='git fetch && git rebase'
alias ll='ls -l'
alias ls='ls -F --color=auto --show-control-chars'
alias npmserve='npm run dev'
alias phphost='php artisan serve --host 192.168.1.105 --port 8000'
alias phpserve='php artisan serve'
alias phptest='php artisan serve --host test.com'
```

Para PowerShell:

```bash
function gs{git status}
function ga{git add @args}
function gaa{git add .}
function gfa{git fetch --all}

function grman{git rebase -i main}
function grmas{git rebase -i master}
function grdev{git rebase -i develop}

function commit{ git commit -m @args }
function gcommit{git add .;git commit -m @args}
function pushmas{git push origin master}
function pushman{git push origin main}
function pushdev{git push origin develop}

function pullman{git pull origin main}
function pullmas{git pull origin main}
function pulldev{git pull origin develop}

function pull{git pull @args}
function glog{git log --oneline}
function gch{git checkout @args}

function gman{git checkout main}
function gmas{git checkout master}
function gdev{git checkout develop}

function gb{git branch @args}
function gd{git diff}
```
