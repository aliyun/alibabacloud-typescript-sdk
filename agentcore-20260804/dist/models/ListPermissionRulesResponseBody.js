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
exports.ListPermissionRulesResponseBody = exports.ListPermissionRulesResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListPermissionRulesResponseBodyItems extends $dara.Model {
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
exports.ListPermissionRulesResponseBodyItems = ListPermissionRulesResponseBodyItems;
class ListPermissionRulesResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            httpStatusCode: 'httpStatusCode',
            items: 'items',
            maxResults: 'maxResults',
            message: 'message',
            nextToken: 'nextToken',
            requestId: 'requestId',
            success: 'success',
            totalCount: 'totalCount',
        };
    }
    static types() {
        return {
            code: 'string',
            httpStatusCode: 'number',
            items: { 'type': 'array', 'itemType': ListPermissionRulesResponseBodyItems },
            maxResults: 'number',
            message: 'string',
            nextToken: 'string',
            requestId: 'string',
            success: 'boolean',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListPermissionRulesResponseBody = ListPermissionRulesResponseBody;
//# sourceMappingURL=ListPermissionRulesResponseBody.js.map