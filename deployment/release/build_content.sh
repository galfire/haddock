#!/usr/bin/env bash

echo Starting bundle of JS content...

cd $CONTENT_DIR
node node_modules/react-360/scripts/bundle.js

echo Bundle of JS content complete.
