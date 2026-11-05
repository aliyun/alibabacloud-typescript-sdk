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
exports.CreateImageCacheResponseBody = exports.CreateImageCacheResponseBodyData = exports.CreateImageCacheResponseBodyDataError = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateImageCacheResponseBodyDataError extends $dara.Model {
    static names() {
        return {
            code: 'code',
            message: 'message',
        };
    }
    static types() {
        return {
            code: 'string',
            message: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateImageCacheResponseBodyDataError = CreateImageCacheResponseBodyDataError;
class CreateImageCacheResponseBodyData extends $dara.Model {
    static names() {
        return {
            acrInstanceId: 'acrInstanceId',
            agentCount: 'agentCount',
            cacheSizeBytes: 'cacheSizeBytes',
            canDelete: 'canDelete',
            createdAt: 'createdAt',
            deleteBlockReason: 'deleteBlockReason',
            digest: 'digest',
            error: 'error',
            imageId: 'imageId',
            registry: 'registry',
            repository: 'repository',
            status: 'status',
            tag: 'tag',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            acrInstanceId: 'string',
            agentCount: 'number',
            cacheSizeBytes: 'number',
            canDelete: 'boolean',
            createdAt: 'string',
            deleteBlockReason: 'string',
            digest: 'string',
            error: CreateImageCacheResponseBodyDataError,
            imageId: 'string',
            registry: 'string',
            repository: 'string',
            status: 'string',
            tag: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.error && typeof this.error.validate === 'function') {
            this.error.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateImageCacheResponseBodyData = CreateImageCacheResponseBodyData;
class CreateImageCacheResponseBody extends $dara.Model {
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
            data: CreateImageCacheResponseBodyData,
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
exports.CreateImageCacheResponseBody = CreateImageCacheResponseBody;
//# sourceMappingURL=CreateImageCacheResponseBody.js.map