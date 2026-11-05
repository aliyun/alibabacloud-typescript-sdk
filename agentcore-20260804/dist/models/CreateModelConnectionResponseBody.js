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
exports.CreateModelConnectionResponseBody = exports.CreateModelConnectionResponseBodyData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateModelConnectionResponseBodyData extends $dara.Model {
    static names() {
        return {
            apiKeyCount: 'apiKeyCount',
            connectionId: 'connectionId',
            createdAt: 'createdAt',
            credentialConfigured: 'credentialConfigured',
            description: 'description',
            endpoint: 'endpoint',
            name: 'name',
            protocol: 'protocol',
            providerType: 'providerType',
            status: 'status',
            statusReason: 'statusReason',
            updatedAt: 'updatedAt',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            apiKeyCount: 'number',
            connectionId: 'string',
            createdAt: 'string',
            credentialConfigured: 'boolean',
            description: 'string',
            endpoint: 'string',
            name: 'string',
            protocol: 'string',
            providerType: 'string',
            status: 'string',
            statusReason: 'string',
            updatedAt: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateModelConnectionResponseBodyData = CreateModelConnectionResponseBodyData;
class CreateModelConnectionResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            data: 'data',
            httpStatusCode: 'httpStatusCode',
            message: 'message',
            requestId: 'requestId',
            success: 'success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: CreateModelConnectionResponseBodyData,
            httpStatusCode: 'number',
            message: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateModelConnectionResponseBody = CreateModelConnectionResponseBody;
//# sourceMappingURL=CreateModelConnectionResponseBody.js.map