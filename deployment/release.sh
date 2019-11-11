#!/usr/bin/env bash

RELEASE_DIR=$( dirname ${BASH_SOURCE[0]} )/release

bash ${RELEASE_DIR}/build_content.sh
bash ${RELEASE_DIR}/upload_build_to_cdn.sh
bash ${RELEASE_DIR}/remove_build.sh
