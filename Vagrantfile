Vagrant.configure("2") do |config|
    config.vm.box = "debian/bullseye64"
    config.vm.synced_folder "./", "/home/vagrant/docker/"
      NODES = [
        { :hostname => "docker", :ip => "192.168.56.16", :cpus => 2, :mem => 3072, :type => "docker" },
        ]
    
        NODES.each do |node|
          config.vm.define node[:hostname] do |cfg|
            cfg.vm.hostname = node[:hostname]
            cfg.vm.network "private_network", ip: node[:ip]
            # cfg.vm.network "forwarded_port", guest: 80, host: 9090
            cfg.vm.provider "virtualbox" do |v|
              v.customize [ "modifyvm", :id, "--cpus", node[:cpus] ]
              v.customize [ "modifyvm", :id, "--memory", node[:mem] ]
              v.customize [ "modifyvm", :id, "--natdnshostresolver1", "on" ]
              v.customize [ "modifyvm", :id, "--natdnsproxy1", "on" ]
              v.customize [ "modifyvm", :id, "--name", node[:hostname] ]
            end
          end
        end
  end
  