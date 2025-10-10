"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Utils = require('./Utils');
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    //test case 1
    if (Utils.add(2, 4) === 6) {
    }
    else {
        console.log(1);
        return;
    }
    //test case 2
    if (Utils.add(-2, -3) === -5) {
    }
    else {
        console.log(2);
        return;
    }
});
unit_test();
