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
exports.CreatePermissionRulesRequest = exports.CreatePermissionRulesRequestBody = exports.CreatePermissionRulesRequestBodyRules = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreatePermissionRulesRequestBodyRules extends $dara.Model {
    static names() {
        return {
            effect: 'effect',
            enforcementMode: 'enforcementMode',
            principalId: 'principalId',
            principalType: 'principalType',
            resourceId: 'resourceId',
            resourceType: 'resourceType',
            source: 'source',
            targetScope: 'targetScope',
            targets: 'targets',
        };
    }
    static types() {
        return {
            effect: 'string',
            enforcementMode: 'string',
            principalId: 'string',
            principalType: 'string',
            resourceId: 'string',
            resourceType: 'string',
            source: 'string',
            targetScope: 'string',
            targets: { 'type': 'array', 'itemType': 'string' },
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
exports.CreatePermissionRulesRequestBodyRules = CreatePermissionRulesRequestBodyRules;
class CreatePermissionRulesRequestBody extends $dara.Model {
    static names() {
        return {
            rules: 'rules',
        };
    }
    static types() {
        return {
            rules: { 'type': 'array', 'itemType': CreatePermissionRulesRequestBodyRules },
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
exports.CreatePermissionRulesRequestBody = CreatePermissionRulesRequestBody;
class CreatePermissionRulesRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
            clientToken: 'clientToken',
        };
    }
    static types() {
        return {
            body: CreatePermissionRulesRequestBody,
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
exports.CreatePermissionRulesRequest = CreatePermissionRulesRequest;
//# sourceMappingURL=CreatePermissionRulesRequest.js.map