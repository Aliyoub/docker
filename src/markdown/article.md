<br /><br />
### INTRODUCTION
<p class="introduction"> lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.lorem Veniam ipsum do deserunt exercitation irure ea aute aliqua reprehenderit sit id laborum quis deserunt.</p>

### 1. INSTALLATION
<span style="color:#E6522B; font-size:22px"> Mise à jour des paquets </span>
<Code language="bash">
sudo apt-get update
</Code>

<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/apt-get-update.png" style="width:100%; "/>


<span style="color:#E6522B; font-size:22px"> Installation de Prometheus </span>
<Code language="bash">
sudo apt-get install prometheus
</Code>

<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/apt-get-install-prometheus.png" style="width:100%; "/>


<span style="color:#E6522B; font-size:22px">Instanciation de la machine virtuelle (sur Virtualbox)</span>
<Code language="bash">
sudo vagrant up
</Code>

<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/vagrant-up.png" style="width:100%; "/>

<span style="color:#E6522B; font-size:22px">Affichage de la machine virtuelle définie depuis le fichier Vagrantfile</span>
<Code language="bash">
sudo vagrant virtualbox
</Code>
<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-in-virtualbox.png" style="width:100%; "/>


<span style="color:#E6522B; font-size:22px">Accès à la machine virtuelle par ssh</span>
<Code language="bash">
sudo vagrant ssh prometheus
</Code>
<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/vagrant-ssh-prometheus.png" style="width:100%;"/>


<span style="color:#E6522B; font-size:22px">Démarrage de Prometheus</span>
<Code language="bash">
sudo systemctl start prometheus
</Code>
<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-start.png" style="width:100%;"/>

<span style="color:#E6522B; font-size:22px">Vérification de l'état du service Prometheus</span>
<Code language="bash">
sudo systemctl status prometheus
</Code>
<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-status.png" style="width:100%;"/>

<span style="color:#E6522B; font-size:22px">Affichage de l'interface Prometheus</span><br /><br />
<img src="https://raw.githubusercontent.com/Aliyoub/prometheus-blog/main/src/components/assets/images/prometheus-interface.png" style="width:100%;"/>
