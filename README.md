# Sobomarket - eCommerce Microservice App

## About Sobomarket

Sobomarket is simple backend eCommerce app, this project is built with Microservice architecture. don't worry man, tasks are separated by each service. 

Software and Language: Sobomarket is using [Docker](https://www.docker.com/) Software to easily build and run some service. 

## Service

api-gateway: Sobomarket is using [PHP](https://www.php.net/) and [Laravel](https://laravel.com/) Framework to build API-Gateway

product-service: Backend API for CURD and connect each service. will be using [Nodejs](https://nodejs.org/en/) and [Express](https://expressjs.com/). The database for this service is using NoSQL database [Mongodb](https://www.mongodb.com/).

member-service: updated soon

## Features

- Using Docker
- Microservice architecture
- Nodejs, Laravel
- Standart coding style and readable
- More language and service implement


## Installation

- Run `git clone https://github.com/zuhrrl/sobomarket.git`
- Move Project Dir `cd sobomarket`
- Update `.env` Environment variable

## Endpoint Usage 

---
**product-service** : `https://product-service/api`

| Endpoint | Usage | Params | Response
|----------|-------|---------|---------|
| add product | `/api/add` |```{"name":"","price":,"brand":""}```|```{"message" : "", "data" : ""}```|
| update product | `/api/update` |```{"product_id" : "id", "name":"","price":,"brand":""}```|```{"message" : "", "data" : ""}```|
| delete product | `/api/delete` |```{"product_id" : "id"}```|```{"message" : "", "data" : ""}```|