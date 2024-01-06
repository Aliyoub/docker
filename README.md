# DOCKER
## INSTALLATION SUR UNE DISTRIBUTION DEBIAN

### Intanciation de la machine virtuelle
> _sudo vagrant up_

![alt vagrant up](https[]()://aliyoub.github.io/docker/images/vagrant-up.png)


### Accès à la machine virtuelle par ssh
> _sudo vagrant ssh docker_

![alt vagrant ssh docker](https://aliyoub.github.io/docker/images/vagrant-ssh-docker.png)

### Suppression d’éventuelle installation Docker pour avoir un environnement sain lors de la nouvelle installation
> _sudo apt remove docker docker-engine docker.io containerd runc_

![alt docker installation](https://aliyoub.github.io/docker/images/remove-docker.png)

### Installation du dépôt Docker
> _sudo apt install ca-certificates curl gnupg lsb-release_

_gnupg pour les clés gpg_ <br/>
_lsb-release pour retrouver la version de notre système d’exploitation_

![alt docker installation](https://aliyoub.github.io/docker/images/ca-certificates_curl_gnupg%20_lsb-release.png)

### Creation du repertoire /etc/apt/keyrings pour le stockage de la clé gpg
> _sudo mkdir -m 0755 -p /etc/apt/keyrings_

![alt docker installation](https://aliyoub.github.io/docker/images/mkdir_keyrings.png)

### Récupération de la clé gpg depuis le site officiel de Docker, à l’adresse suivante: download.docker.com/linux/ubuntu/gpg,
### pour l’installer dans le répertoire préalablement crée: etc/apt/keyrings
### Nommons cette clé docker.gpg
> _curl -fsSL https[]()://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg_

![alt docker installation](https://aliyoub.github.io/docker/images/docker-gpg.png)

### Mise en place proprement dite, du dépôt Docker 
> _echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https[]()://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null_

### Mise à jour des paquets
> _sudo apt-get update_

![alt docker installation](https://aliyoub.github.io/docker/images/maj-caches.png)

### Installation de DOCKER
> _sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin_

![alt docker installation](https://aliyoub.github.io/docker/images/installation-docker.png)


## MISE EN PLACE D'UN CONTENEUR A PARTIR D'UNE IMAGE NGINX
![alt mise en place d'un conteneur](https://aliyoub.github.io/docker/images/docker-run.png)

### Affichage des conteneurs
> _docker ps -a_

![alt affichage conteneurs](https://aliyoub.github.io/docker/images/docker-ps-a.png)
 
