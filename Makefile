start:
	@echo Initializing application
	yarn run start || npm start

install:
	@echo Installing dependencies
	yarn install || npm install

init:
	@echo Installing dependencies
	yarn install && yarn run start || npm install && npm start

test:
	yarn run test || npm run test

build:
	yarn run build || npm run build

.PHONY: start install init test build
