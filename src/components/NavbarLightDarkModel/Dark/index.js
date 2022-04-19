/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
export default function IconDarkMode(props) {
    return (
        <svg viewBox="0 0 1024 1024" width={24} height={24} {...props}>
            <defs>
                <style type="text/css"></style>
            </defs>
            <path d="M512 1024c141.386 0 256-114.614 256-256s-114.614-256-256-256-256-114.614-256-256S370.614 0 512 0c282.77 0 512 229.23 512 512S794.77 1024 512 1024z"
                  fill="#FFFFFF">
            </path>
            <path d="M512 0c-141.386 0-256 114.614-256 256s114.614 256 256 256 256 114.614 256 256-114.614 256-256 256C229.23 1024 0 794.77 0 512S229.23 0 512 0z"
                  fill="#000000">
            </path>
            <path d="M512 768m-91.428 0a91.428 91.428 0 1 0 182.856 0 91.428 91.428 0 1 0-182.856 0Z"
                  fill="#FFFFFF">
            </path>
            <path d="M512 256m-91.428 0a91.428 91.428 0 1 0 182.856 0 91.428 91.428 0 1 0-182.856 0Z"
                  fill="#000000">
            </path>
        </svg>
    );
}