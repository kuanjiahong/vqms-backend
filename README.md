# VQMS Backend

Backend server for [VQMS Frontend](https://github.com/kuanjiahong/vqms-frontend)

## Getting started

1. Install packages `npm install`

2. Set environment variables as shown in `env-var.sh`

3. Run development server `npm run dev`

## Deployment

```shell
npm run build
```

```shell
npm run start
```

For Docker:

```shell
docker build -t vqms-backend-image:1.0.0 .
```

```shell
docker run -p 8080:8080 --env.file .env backend-image
```
