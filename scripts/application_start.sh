#!/bin/bash

cd /home/ec2-user/kt-app

echo "Starting kt-app!"
pm2 start app.js --name kt-app