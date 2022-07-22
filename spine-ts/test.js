const spine = require("./build/spine-core")
const fs = require("fs")

let scaler = new spine.SpineScaler()
let buffer = fs.readFileSync("./catgirl.skel")
let atlas = fs.readFileSync("./catgirl.atlas", { encoding: "utf-8" })
let s = scaler.readSkelScale(buffer, atlas)
console.log(s)