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
exports.CreateMemoryStoreRequest = exports.CreateMemoryStoreRequestBody = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateMemoryStoreRequestBody extends $dara.Model {
    static names() {
        return {
            description: 'description',
            extractInstructions: 'extractInstructions',
            memoryStoreName: 'memoryStoreName',
        };
    }
    static types() {
        return {
            description: 'string',
            extractInstructions: 'string',
            memoryStoreName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMemoryStoreRequestBody = CreateMemoryStoreRequestBody;
class CreateMemoryStoreRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
            clientToken: 'clientToken',
        };
    }
    static types() {
        return {
            body: CreateMemoryStoreRequestBody,
            clientToken: 'string',
        };
    }
    validate() {
        if (this.body && typeof this.body.validate === 'function') {
            this.body.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMemoryStoreRequest = CreateMemoryStoreRequest;
//# sourceMappingURL=CreateMemoryStoreRequest.js.map