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
