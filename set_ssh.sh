#!/bin/bash
mkdir /var/run/sshd
echo "root:25448132" | chpasswd
sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config
sed -i 's/#PubkeyAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
service ssh start
systemctl restart ssh
apache2-foreground