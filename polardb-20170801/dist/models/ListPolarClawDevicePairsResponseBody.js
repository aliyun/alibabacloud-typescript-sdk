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
exports.ListPolarClawDevicePairsResponseBody = exports.ListPolarClawDevicePairsResponseBodyPending = exports.ListPolarClawDevicePairsResponseBodyPaired = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListPolarClawDevicePairsResponseBodyPaired extends $dara.Model {
    static names() {
        return {
            clientId: 'ClientId',
            clientMode: 'ClientMode',
            createdAtMs: 'CreatedAtMs',
            deviceFamily: 'DeviceFamily',
            deviceId: 'DeviceId',
            displayName: 'DisplayName',
            lastSeenAtMs: 'LastSeenAtMs',
            platform: 'Platform',
            role: 'Role',
            scopes: 'Scopes',
        };
    }
    static types() {
        return {
            clientId: 'string',
            clientMode: 'string',
            createdAtMs: 'number',
            deviceFamily: 'string',
            deviceId: 'string',
            displayName: 'string',
            lastSeenAtMs: 'number',
            platform: 'string',
            role: 'string',
            scopes: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.scopes)) {
            $dara.Model.validateArray(this.scopes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListPolarClawDevicePairsResponseBodyPaired = ListPolarClawDevicePairsResponseBodyPaired;
class ListPolarClawDevicePairsResponseBodyPending extends $dara.Model {
    static names() {
        return {
            clientId: 'ClientId',
            clientMode: 'ClientMode',
            deviceFamily: 'DeviceFamily',
            deviceId: 'DeviceId',
            displayName: 'DisplayName',
            isRepair: 'IsRepair',
            pairRequestId: 'PairRequestId',
            platform: 'Platform',
            publicKey: 'PublicKey',
            remoteIp: 'RemoteIp',
            role: 'Role',
            roles: 'Roles',
            scopes: 'Scopes',
            silent: 'Silent',
            ts: 'Ts',
        };
    }
    static types() {
        return {
            clientId: 'string',
            clientMode: 'string',
            deviceFamily: 'string',
            deviceId: 'string',
            displayName: 'string',
            isRepair: 'boolean',
            pairRequestId: 'string',
            platform: 'string',
            publicKey: 'string',
            remoteIp: 'string',
            role: 'string',
            roles: { 'type': 'array', 'itemType': 'string' },
            scopes: { 'type': 'array', 'itemType': 'string' },
            silent: 'boolean',
            ts: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.roles)) {
            $dara.Model.validateArray(this.roles);
        }
        if (Array.isArray(this.scopes)) {
            $dara.Model.validateArray(this.scopes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListPolarClawDevicePairsResponseBodyPending = ListPolarClawDevicePairsResponseBodyPending;
class ListPolarClawDevicePairsResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            code: 'Code',
            message: 'Message',
            paired: 'Paired',
            pending: 'Pending',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            code: 'number',
            message: 'string',
            paired: { 'type': 'array', 'itemType': ListPolarClawDevicePairsResponseBodyPaired },
            pending: { 'type': 'array', 'itemType': ListPolarClawDevicePairsResponseBodyPending },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.paired)) {
            $dara.Model.validateArray(this.paired);
        }
        if (Array.isArray(this.pending)) {
            $dara.Model.validateArray(this.pending);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListPolarClawDevicePairsResponseBody = ListPolarClawDevicePairsResponseBody;
//# sourceMappingURL=ListPolarClawDevicePairsResponseBody.js.map