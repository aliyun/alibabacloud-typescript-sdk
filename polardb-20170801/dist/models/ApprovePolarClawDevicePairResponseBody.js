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
exports.ApprovePolarClawDevicePairResponseBody = exports.ApprovePolarClawDevicePairResponseBodyDevice = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ApprovePolarClawDevicePairResponseBodyDevice extends $dara.Model {
    static names() {
        return {
            createdAtMs: 'CreatedAtMs',
            deviceFamily: 'DeviceFamily',
            deviceId: 'DeviceId',
            displayName: 'DisplayName',
            platform: 'Platform',
            role: 'Role',
            scopes: 'Scopes',
        };
    }
    static types() {
        return {
            createdAtMs: 'number',
            deviceFamily: 'string',
            deviceId: 'string',
            displayName: 'string',
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
exports.ApprovePolarClawDevicePairResponseBodyDevice = ApprovePolarClawDevicePairResponseBodyDevice;
class ApprovePolarClawDevicePairResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            code: 'Code',
            device: 'Device',
            message: 'Message',
            pairRequestId: 'PairRequestId',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            code: 'number',
            device: ApprovePolarClawDevicePairResponseBodyDevice,
            message: 'string',
            pairRequestId: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (this.device && typeof this.device.validate === 'function') {
            this.device.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ApprovePolarClawDevicePairResponseBody = ApprovePolarClawDevicePairResponseBody;
//# sourceMappingURL=ApprovePolarClawDevicePairResponseBody.js.map