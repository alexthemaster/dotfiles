eval "$(starship init bash)"

alias ga="git add ."
alias gc="git commit -m "
alias gac="ga && gc"
alias gp="git push"
alias gy='gac "$(curl --silent --fail http://whatthecommit.com/index.txt)"'
alias gyp="gy && gp"
alias gr="git reset HEAD~1 --soft"
alias grh="git reset HEAD~1 --hard"
alias yt-mp3="ytdl --extract-audio --audio-format mp3"