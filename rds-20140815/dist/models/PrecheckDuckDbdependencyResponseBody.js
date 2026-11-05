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
exports.PrecheckDuckDBDependencyResponseBody = exports.PrecheckDuckDBDependencyResponseBodyFailedCheckItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class PrecheckDuckDBDependencyResponseBodyFailedCheckItems extends $dara.Model {
    static names() {
        return {
            allowAutoModify: 'AllowAutoModify',
            currentValue: 'CurrentValue',
            name: 'Name',
            requiredValue: 'RequiredValue',
            type: 'Type',
        };
    }
    static types() {
        return {
            allowAutoModify: 'boolean',
            currentValue: 'string',
            name: 'string',
            requiredValue: 'string',
            type: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.PrecheckDuckDBDependencyResponseBodyFailedCheckItems = PrecheckDuckDBDependencyResponseBodyFailedCheckItems;
class PrecheckDuckDBDependencyResponseBody extends $dara.Model {
    static names() {
        return {
            failedCheckItems: 'FailedCheckItems',
            result: 'Result',
        };
    }
    static types() {
        return {
            failedCheckItems: { 'type': 'array', 'itemType': PrecheckDuckDBDependencyResponseBodyFailedCheckItems },
            result: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.failedCheckItems)) {
            $dara.Model.validateArray(this.failedCheckItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.PrecheckDuckDBDependencyResponseBody = PrecheckDuckDBDependencyResponseBody;
//# sourceMappingURL=PrecheckDuckDbdependencyResponseBody.js.map