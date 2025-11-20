# Docker Guide - Running Your Node.js Web App

## Prerequisites

- Docker Desktop installed on Windows
- Docker Desktop running (check system tray for Docker icon)

## Step-by-Step Guide

### Step 1: Open Terminal
Open PowerShell or Command Prompt in the project directory:
```powershell
cd c:\app-location
```

### Step 2: Build the Docker Image
Build your Docker image with a tag name:
```powershell
docker build -t basicapp .
```

**What this does:**
- `docker build` - Builds a Docker image from the Dockerfile
- `-t basicapp` - Tags the image with the name "basicapp"
- `.` - Uses the current directory as the build context

**Expected output:** You'll see Docker executing each step in the Dockerfile.

### Step 3: Verify the Image Was Created
Check that your image was built successfully:
```powershell
docker images
```

You should see `basicapp` in the list.

### Step 4: Run the Container
Start a container from your image:
```powershell
docker run -d -p 8000:8000 --name basicapp basicapp
```

**What this does:**
- `docker run` - Creates and starts a new container
- `-d` - Runs in detached mode (background)
- `-p 8000:8000` - Maps port 8000 on your computer to port 8000 in the container
- `--name basicapp` - Names the container "basicapp"
- `basicapp` - The image to use

### Step 5: Verify the Container is Running
Check the status of your container:
```powershell
docker ps
```

You should see your `basicapp` container with status "Up".

### Step 6: Access Your Web App
Open your web browser and go to:
```
http://localhost:8000
```

You should see your Node.js web application!

### Step 7: View Container Logs
To see what's happening inside your container:
```powershell
docker logs basicapp
```

## Useful Commands

### Stop the Container
```powershell
docker stop basicapp
```

### Start the Container Again
```powershell
docker start basicapp
```

### Remove the Container
```powershell
docker rm basicapp
```

*Note: Container must be stopped first*

### Remove the Image
```powershell
docker rmi basicapp
```

*Note: All containers using this image must be removed first*

### View All Containers (Including Stopped)
```powershell
docker ps -a
```

### Access Container Shell
To open a shell inside the running container:
```powershell
docker exec -it basicapp sh
```

Type `exit` to leave the shell.

## Troubleshooting

### Error: "port is already allocated"
Another process is using port 8000. Either:
- Stop the other process, or
- Use a different port: `docker run -d -p 8080:8000 --name basicapp basicapp`
- Then access at `http://localhost:8080`

### Error: "name is already in use"
A container with that name exists. Either:
- Remove it: `docker rm basicapp`
- Or use a different name: `docker run -d -p 8000:8000 --name basicapp2 basicapp`

### Error: "Docker daemon not running"
Start Docker Desktop from the Start menu and wait for it to fully start.

## Complete Workflow Example

```powershell
# Build the image
docker build -t basicapp .

# Run the container
docker run -d -p 8000:8000 --name basicapp basicapp

# Check it's running
docker ps

# View logs
docker logs basicapp

# Stop when done
docker stop basicapp

# Remove container
docker rm basicapp
```

## Making Changes to Your App

If you modify `server.js` or `package.json`:

1. Stop and remove the old container:
   ```powershell
   docker stop basicapp
   docker rm basicapp
   ```

2. Rebuild the image:
   ```powershell
   docker build -t basicapp .
   ```

3. Run the new container:
   ```powershell
   docker run -d -p 8000:8000 --name basicapp basicapp
   ```
