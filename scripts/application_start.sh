#!/bin/bash

cd /home/ec2-user/final-kt-app

echo "Starting final-kt-app!"
pm2 start app.js --name final-kt-app