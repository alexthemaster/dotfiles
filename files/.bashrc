eval "$(starship init bash)"
neofetch

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