# Food Truck API

This repository contains the source code for a Food Truck API, built using the NestJS framework.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed [Node.js](https://nodejs.org/)
* You have a MySQL server running. If not, you can download and install from [MySQL official website](https://dev.mysql.com/downloads/mysql/)
* Alternatively, you can use [Docker](https://www.docker.com/) to run Node.js and MySQL in containers. Docker can simplify the setup and teardown process, and it can help ensure that the application runs in the same environment across different machines.


## Overview

The Food Truck API provides a robust set of endpoints for managing food trucks and their associated data. It allows users to create, read, update, and delete food truck records, as well as manage menus, locations, and schedules.



## Environment Setup

This project uses environment variables for configuration. You need to create a `.env` file in the root directory of the project. Here is a template for the `.env` file:

```dotenv
#MySQL database
DB_HOST=<your-database-host>
DB_PORT=<your-database-port>
DB_USERNAME=<your-database-username>
DB_PASSWORD=<your-database-password>
DB_NAME=<your-database-name>


#jwt secret
JWT_SECRET=<your-jwt-secret>
```
Please replace <your-...> with your actual data. Do not share this file or commit it to your repository, as it contains sensitive information.

## Getting Started

To get started with the Food Truck API, clone this repository to your local machine and install the necessary dependencies.

```bash
git clone https://github.com/EasonQwQ/foodTruck
cd foodTruck
npm install
```