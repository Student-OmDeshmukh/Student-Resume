# Ansible Demo Guide (For Your Mini Project)

## Selected Topic

**Exploring Ansible for Automation and Configuration Management**  
Use this title in report:

`Automated Build and Deployment of Student Resume Builder Website using Ansible`

## What This Setup Does

The playbook automatically:

1. Connects to your Linux VM
2. Installs Node.js + Nginx + Git
3. Pulls your project from GitHub
4. Runs `npm install` and `npm run build`
5. Configures Nginx
6. Hosts your React app on port 80

## Prerequisites

1. One Linux VM (Ubuntu 22.04/24.04) with public IP
2. SSH access to VM
3. Project pushed to GitHub
4. Ansible installed on your control machine (WSL Ubuntu or Linux)

Install Ansible (Ubuntu/WSL):

```bash
sudo apt update
sudo apt install -y ansible
```

## One-Time File Edits

### 1) Update inventory

Edit [ansible/inventory.ini](/d:/project/cc/ansible/inventory.ini):

```ini
[web]
resume-vm ansible_host=YOUR_VM_PUBLIC_IP ansible_user=YOUR_VM_USERNAME ansible_ssh_private_key_file=~/.ssh/YOUR_KEY.pem
```

### 2) Update variables

Edit [ansible/group_vars/web.yml](/d:/project/cc/ansible/group_vars/web.yml):

```yaml
repo_url: "https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git"
repo_branch: "main"
app_root: "/opt/student-resume-builder"
node_major_version: "20"
nginx_server_name: "_"
```

## Run Deployment

From project root:

```bash
cd ansible
ansible-playbook deploy.yml --ask-become-pass
```

If your VM uses password SSH (not key), add:

```bash
ansible-playbook deploy.yml -k --ask-become-pass
```

## Verify

1. Open browser: `http://<YOUR_VM_PUBLIC_IP>`
2. Your Student Resume Builder site should load.

## Re-Deploy After Code Changes

Push updated code to GitHub, then run again:

```bash
cd ansible
ansible-playbook deploy.yml --ask-become-pass
```

## Viva Demo Script (Short)

1. Show Ansible inventory and playbook.
2. Run `ansible-playbook deploy.yml --ask-become-pass`.
3. Explain auto tasks: install tools, pull code, build, configure Nginx.
4. Open VM IP in browser and show deployed app.

