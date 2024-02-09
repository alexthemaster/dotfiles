eval "$(starship init bash)"
neofetch

# Git related aliasees
alias ga="git add ."
alias gc="git commit -m "
alias gac="ga && gc"
alias gp="git push"
alias gy='gac "$(curl --silent --fail http://whatthecommit.com/index.txt)"'
alias gyp="gy && gp"
alias gr="git reset HEAD~1 --soft"
alias grh="git reset HEAD~1 --hard"

alias yt-mp3="ytdl --extract-audio --audio-format mp3"
alias yt-mp4="ytdl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4'"
alias ytmp3="yt-mp3"
alias ytmp4="yt-mp4"

alias ls="ls --color=auto"

# NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
