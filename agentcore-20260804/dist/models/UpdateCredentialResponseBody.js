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
exports.UpdateCredentialResponseBody = exports.UpdateCredentialResponseBodyData = exports.UpdateCredentialResponseBodyDataResourceRefs = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateCredentialResponseBodyDataResourceRefs extends $dara.Model {
    static names() {
        return {
            resourceId: 'resourceId',
            resourceName: 'resourceName',
            resourceType: 'resourceType',
        };
    }
    static types() {
        return {
            resourceId: 'string',
            resourceName: 'string',
            resourceType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateCredentialResponseBodyDataResourceRefs = UpdateCredentialResponseBodyDataResourceRefs;
class UpdateCredentialResponseBodyData extends $dara.Model {
    static names() {
        return {
            createdAt: 'createdAt',
            credentialId: 'credentialId',
            credentialMetadata: 'credentialMetadata',
            credentialType: 'credentialType',
            description: 'description',
            name: 'name',
            regionId: 'regionId',
            resourceRefs: 'resourceRefs',
            resourceScope: 'resourceScope',
            updatedAt: 'updatedAt',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            createdAt: 'string',
            credentialId: 'string',
            credentialMetadata: 'string',
            credentialType: 'string',
            description: 'string',
            name: 'string',
            regionId: 'string',
            resourceRefs: { 'type': 'array', 'itemType': UpdateCredentialResponseBodyDataResourceRefs },
            resourceScope: 'string',
            updatedAt: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.resourceRefs)) {
            $dara.Model.validateArray(this.resourceRefs);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateCredentialResponseBodyData = UpdateCredentialResponseBodyData;
class UpdateCredentialResponseBody extends $dara.Model {
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
            data: UpdateCredentialResponseBodyData,
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
exports.UpdateCredentialResponseBody = UpdateCredentialResponseBody;
//# sourceMappingURL=UpdateCredentialResponseBody.js.map