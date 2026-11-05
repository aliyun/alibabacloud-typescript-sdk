"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleNextComponentsValuePropertiesValue = exports.ModuleNextComponentsValuePropertiesValueValues = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModuleNextComponentsValuePropertiesValueValues extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            value: 'Value',
            name: 'Name',
        };
    }
    static types() {
        return {
            code: 'string',
            value: 'string',
            name: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModuleNextComponentsValuePropertiesValueValues = ModuleNextComponentsValuePropertiesValueValues;
class ModuleNextComponentsValuePropertiesValue extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            name: 'Name',
            value: 'Value',
            values: 'Values',
        };
    }
    static types() {
        return {
            code: 'string',
            name: 'string',
            value: 'string',
            values: { 'type': 'array', 'itemType': ModuleNextComponentsValuePropertiesValueValues },
        };
    }
    validate() {
        if (Array.isArray(this.values)) {
            $dara.Model.validateArray(this.values);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModuleNextComponentsValuePropertiesValue = ModuleNextComponentsValuePropertiesValue;
//# sourceMappingURL=ModuleNextComponentsValuePropertiesValue.js.map