![](./img/home.png)

### Manual action required before firing up the services

- Modyfying the compose files themselves to point at your desired directories, user id, disabling unneeded services etc
- Modifying `caddy/Caddyfile` and `homepage/services.yaml` to point to your desired domain(s) and to disable unused services
- Creating three `.env` files inside the `env` folder:
  - `homepage.env`:
    - `HOMEPAGE_VAR_JELLYFIN`: API key for Jellyfin (Found under Administration Dashboard -> Advanced -> API Keys)
    - `HOMEPAGE_VAR_AUDIOBOOKSHELF`: API key for Audiobookshelf (Found under Settings -> API Keys)
    - `HOMEPAGE_VAR_SONARR`: API key for Sonarr (Found under Settings -> General -> Security -> API Key)
    - `HOMEPAGE_VAR_RADARR`: API key for Radarr (Found under Settings -> General -> Security -> API Key)
    - `HOMEPAGE_VAR_BAZARR`: API key for Bazarr (Found under Settings -> General -> Security -> API Key)
    - `HOMEPAGE_VAR_PROWLARR`: API key for Prowlarr (Found under Settings -> General -> Security -> API Key)
    - `HOMEPAGE_VAR_BESZEL_PASS`: Configured password when first setting up Beszel through the Web UI
    - `HOMEPAGE_VAR_PORTAINER`: Acess token for Portainer (Found under Account Settings -> Access tokens)
  - `sharex-server.env`:
    - `PASSWORD`: The password that will be used to secure file uploads to ShareX-Server
  - `vaultwarden.env` (optional): Follow the (SMTP Configuration)[https://github.com/dani-garcia/vaultwarden/wiki/SMTP-Configuration] and (Enabling Mobile Client push notification)[https://github.com/dani-garcia/vaultwarden/wiki/Enabling-Mobile-Client-push-notification] guides

### Start all script (`./start_all.sh`)

I ship a simple script that creates a Docker network with the "home" name (all compose files rely on it) and then starts the `media_compose.yml` and `utilities_compose.yml` stacks.

## Services running via the Docker Compose files and the ports they're each assigned on the host machine

### Media stack

- qBittorrent [:8080] - download [vuetorrent](https://github.com/VueTorrent/VueTorrent) and place in this folder if you want to use it as an alternative UI
- Sonarr [:8989]
- Radarr [:7878]
- Prowlarr [:9696]
- Navidrome [:4553]
- Audiobookshelf [:13378]
- PiGallery2 [:8087]

### Utilities stack

- Caddy [:80, :443]
- Portainer [:9443]
- Homepage [:3001]
- AdGuard Home [:3000, :81]
- File Browser [:8112]
- Docker Proxy [:2375]
- Beszel [:8090]
- Vaultwarden [:8088]
- Syncthing [:8384]
- Scrutiny [:8081, :8086]
- OpenSpeedTest [:3002]
- What's Up Docker [:3003]
- ShareX Server [:8089]
- Backrest [:9898]

> Note: Caddy also reverse proxies Cockpit, so make sure to install it and [allow reverse proxying](https://garrett.github.io/cockpit-project.github.io/external/wiki/Proxying-Cockpit-over-NGINX) for it to function properly
