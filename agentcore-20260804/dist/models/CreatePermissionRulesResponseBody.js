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
exports.CreatePermissionRulesResponseBody = exports.CreatePermissionRulesResponseBodyData = exports.CreatePermissionRulesResponseBodyDataRules = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreatePermissionRulesResponseBodyDataRules extends $dara.Model {
    static names() {
        return {
            createdAt: 'createdAt',
            effect: 'effect',
            enforcementMode: 'enforcementMode',
            permissionRuleId: 'permissionRuleId',
            principalId: 'principalId',
            principalName: 'principalName',
            principalType: 'principalType',
            resourceId: 'resourceId',
            resourceType: 'resourceType',
            source: 'source',
            sourceDetail: 'sourceDetail',
            targetScope: 'targetScope',
            targets: 'targets',
            updatedAt: 'updatedAt',
        };
    }
    static types() {
        return {
            createdAt: 'string',
            effect: 'string',
            enforcementMode: 'string',
            permissionRuleId: 'string',
            principalId: 'string',
            principalName: 'string',
            principalType: 'string',
            resourceId: 'string',
            resourceType: 'string',
            source: 'string',
            sourceDetail: 'string',
            targetScope: 'string',
            targets: { 'type': 'array', 'itemType': 'string' },
            updatedAt: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.targets)) {
            $dara.Model.validateArray(this.targets);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreatePermissionRulesResponseBodyDataRules = CreatePermissionRulesResponseBodyDataRules;
class CreatePermissionRulesResponseBodyData extends $dara.Model {
    static names() {
        return {
            rules: 'rules',
        };
    }
    static types() {
        return {
            rules: { 'type': 'array', 'itemType': CreatePermissionRulesResponseBodyDataRules },
        };
    }
    validate() {
        if (Array.isArray(this.rules)) {
            $dara.Model.validateArray(this.rules);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreatePermissionRulesResponseBodyData = CreatePermissionRulesResponseBodyData;
class CreatePermissionRulesResponseBody extends $dara.Model {
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
            data: CreatePermissionRulesResponseBodyData,
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
exports.CreatePermissionRulesResponseBody = CreatePermissionRulesResponseBody;
//# sourceMappingURL=CreatePermissionRulesResponseBody.js.map