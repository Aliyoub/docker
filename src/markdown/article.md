<br /><br />
### INTRODUCTION
<p class="introduction"> lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.</p>


<span class="sub-title">Intanciation de la machine virtuelle</span>
<Code language="bash">
sudo vagrant up
</Code>
<img src="/docker/images/vagrant-up.png" style="width:100%; "/>


<span class="sub-title">Accès à la machine virtuelle par ssh</span>
<Code language="bash">
sudo vagrant ssh docker
</Code>
<img src="/docker/images/vagrant-ssh-docker.png" style="width:100%; "/>




<span class="sub-title">Suppression d’éventuelle installation Docker pour avoir un environnement sain lors de la nouvelle installation</span>
<Code language="bash">
sudo apt remove docker docker-engine docker.io containerd runc
</Code>
<img src="/docker/images/remove-docker.png" style="width:100%; "/>


<span class="sub-title">Installation du dépôt Docker</span>
<Code language="bash">
sudo apt install ca-certificates curl gnupg lsb-release
</Code>
<p class="description">
*gnupg* pour les clés gpg<br>
*lsb-release* pour retrouver la version de notre système d’exploitation</p>
<img src="/docker/images/ca-certificates_curl_gnupg _lsb-release.png" style="width:100%;"/>



<span class="sub-title">Creation du repertoire /etc/apt/keyrings pour le stockage de la clé gpg</span>
<Code language="bash">
sudo mkdir -m 0755 -p /etc/apt/keyrings
</Code>
<img src="/docker/images/mkdir_keyrings.png" style="width:100%; "/>


<span class="sub-title">Récupération de la clé gpg depuis le site officiel de Docker, à l’adresse suivante:  download.docker.com/linux/ubuntu/gpg, 
<br />pour l’installer dans le répertoire préalablement crée: etc/apt/keyrings
<br />Nommons cette clé docker.gpg</span>
<Code language="bash">
curl -fsSL download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor \
-o /etc/apt/keyrings/docker.gpg
</Code>
<img src="/docker/images/docker-gpg.png" style="width:100%;"/>




<span class="sub-title">Mise en place du dépôt Docker proprement dite</span>
<Code language="bash">
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
</Code>

<br />
<br />
<br />
<span class="sub-title"> Mise à jour des paquets </span>
<Code language="bash">
sudo apt-get update
</Code>
<img src="/docker/images/maj-caches.png" style="width:100%;"/>


<span class="sub-title">Installation de DOCKER</span>
<Code language="bash">
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</Code>
<img src="/docker/images/installation-docker.png" style="width:100%;"/>



<span class="sub-title"></span>
<Code language="bash">
</Code>
<img src="/docker/images/docker-ps-a.png" style="width:100%;"/>


<span class="sub-title"></span>
<Code language="bash">
</Code>
<img src="/docker/images/docker-run.png" style="width:100%;"/>


<span class="sub-title">INSTALLATION DE DOCKER</span>
<Code language="bash">

</Code>
<img src="/docker/images/docker-ps-output.png" style="width:100%;"/>


<span class="sub-title"></span>
<Code language="bash">
</Code>
<img src="/docker/images/docker-run-d.png" style="width:100%;"/>








