---
title: Note has now been released
authors: piercebrands
tags: [Version]
---

# Note has now been released

![npm](https://img.shields.io/npm/v/@obiscr/note) ![npm](https://img.shields.io/npm/dt/@obiscr/note)

It's a small tool to temporarily record something in the terminal.
Of course, you can also record it permanently.

## Build

If you need to run note on a machine without nodejs environment, you can:

+ [Download](http://github.com/obiscr/note) compiled files directly

If you have nodejs environment on your machine

```
npm install @obiscr/note -g
```

## Usage

```
# initialization
note -i

# check note
note

# add note
note -a key value

# edit note
note -e key newValue

# delete note
note -d name

# search note
note -s key
```

You can also `note -h` or `note -help` to show usage.

```
Usage: 
    note               --show all notes
    note -i            --initialization
    note -a key value  --add note
    note -d key        --delete note
    note -e key value  --edit note value
    note -s keyword    --search in notes
    note -h            --show help
```
