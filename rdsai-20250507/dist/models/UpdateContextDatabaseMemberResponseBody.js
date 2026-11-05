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
exports.UpdateContextDatabaseMemberResponseBody = exports.UpdateContextDatabaseMemberResponseBodyKeys = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateContextDatabaseMemberResponseBodyKeys extends $dara.Model {
    static names() {
        return {
            createdAt: 'CreatedAt',
            description: 'Description',
            expiresAt: 'ExpiresAt',
            keyDisplaySuffix: 'KeyDisplaySuffix',
            keyId: 'KeyId',
            keyPrefix: 'KeyPrefix',
            lastUsedAt: 'LastUsedAt',
            name: 'Name',
            revokedAt: 'RevokedAt',
            status: 'Status',
        };
    }
    static types() {
        return {
            createdAt: 'string',
            description: 'string',
            expiresAt: 'string',
            keyDisplaySuffix: 'string',
            keyId: 'number',
            keyPrefix: 'string',
            lastUsedAt: 'string',
            name: 'string',
            revokedAt: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateContextDatabaseMemberResponseBodyKeys = UpdateContextDatabaseMemberResponseBodyKeys;
class UpdateContextDatabaseMemberResponseBody extends $dara.Model {
    static names() {
        return {
            createdAt: 'CreatedAt',
            keys: 'Keys',
            memberId: 'MemberId',
            memberName: 'MemberName',
            requestId: 'RequestId',
            role: 'Role',
            status: 'Status',
        };
    }
    static types() {
        return {
            createdAt: 'string',
            keys: { 'type': 'array', 'itemType': UpdateContextDatabaseMemberResponseBodyKeys },
            memberId: 'string',
            memberName: 'string',
            requestId: 'string',
            role: 'string',
            status: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.keys)) {
            $dara.Model.validateArray(this.keys);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateContextDatabaseMemberResponseBody = UpdateContextDatabaseMemberResponseBody;
//# sourceMappingURL=UpdateContextDatabaseMemberResponseBody.js.map