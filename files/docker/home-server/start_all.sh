#! /bin/bash

docker network create home || true

echo "Starting Media stack..."
docker compose -f media_compose.yml up -d

echo "Starting Utilities stack..."
docker compose -f utilities_compose.yml up -d
