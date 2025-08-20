# Docker commands
build
```bash
docker build -t devops-final-web .
```

image security scanning
```bash
trivy image devops-final-web
```

run
```bash
docker run -d -p 3000:3000 --name devops_final_web --env-file .env devops-final-web
```

tag
```bash
docker tag devops-final-web denture8278/devops-final-web:v1.0
docker tag devops-final-web denture8278/devops-final-web:latest
```

push
```bash
docker push denture8278/devops-final-web:v1.0
docker push denture8278/devops-final-web:latest
```