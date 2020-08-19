#!/usr/bin/env node

const fs = require("fs-extra");
const ejs = require("ejs");
const argsv = require("yargs-parser")(process.argv.slice(2));

main = () => {
  try{
      console.log(argsv);
  }catch (e) {
      console.log(e);
  }
};

main();