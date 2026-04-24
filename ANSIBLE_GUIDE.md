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

## Easiest Mode (No VM, No Cloud)

This project is already set to deploy on your own laptop using:

- `localhost` inventory
- local source path: `/mnt/d/project/cc`

So you do not need VM IP, SSH key, or cloud subscription.

## Prerequisites

1. Windows with WSL Ubuntu installed
2. Ansible installed inside WSL
3. Project available at `D:\project\cc`

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
localhost ansible_connection=local
```

### 2) Keep local-source mode enabled

Edit [ansible/group_vars/web.yml](/d:/project/cc/ansible/group_vars/web.yml):

```yaml
use_local_source: true
local_source_path: "/mnt/d/project/cc"
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

## Verify

1. Open browser: `http://localhost`
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
3. Explain auto tasks: install tools, sync code, build, configure Nginx.
4. Open `http://localhost` and show deployed app.
