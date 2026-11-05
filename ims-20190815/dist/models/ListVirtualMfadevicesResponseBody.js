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
exports.ListVirtualMFADevicesResponseBody = exports.ListVirtualMFADevicesResponseBodyVirtualMFADevices = exports.ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice = exports.ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser extends $dara.Model {
    static names() {
        return {
            displayName: 'DisplayName',
            userId: 'UserId',
            userPrincipalName: 'UserPrincipalName',
        };
    }
    static types() {
        return {
            displayName: 'string',
            userId: 'string',
            userPrincipalName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser = ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser;
class ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice extends $dara.Model {
    static names() {
        return {
            activateDate: 'ActivateDate',
            serialNumber: 'SerialNumber',
            user: 'User',
        };
    }
    static types() {
        return {
            activateDate: 'string',
            serialNumber: 'string',
            user: ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser,
        };
    }
    validate() {
        if (this.user && typeof this.user.validate === 'function') {
            this.user.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice = ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice;
class ListVirtualMFADevicesResponseBodyVirtualMFADevices extends $dara.Model {
    static names() {
        return {
            virtualMFADevice: 'VirtualMFADevice',
        };
    }
    static types() {
        return {
            virtualMFADevice: { 'type': 'array', 'itemType': ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice },
        };
    }
    validate() {
        if (Array.isArray(this.virtualMFADevice)) {
            $dara.Model.validateArray(this.virtualMFADevice);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListVirtualMFADevicesResponseBodyVirtualMFADevices = ListVirtualMFADevicesResponseBodyVirtualMFADevices;
class ListVirtualMFADevicesResponseBody extends $dara.Model {
    static names() {
        return {
            isTruncated: 'IsTruncated',
            marker: 'Marker',
            requestId: 'RequestId',
            virtualMFADevices: 'VirtualMFADevices',
        };
    }
    static types() {
        return {
            isTruncated: 'boolean',
            marker: 'string',
            requestId: 'string',
            virtualMFADevices: ListVirtualMFADevicesResponseBodyVirtualMFADevices,
        };
    }
    validate() {
        if (this.virtualMFADevices && typeof this.virtualMFADevices.validate === 'function') {
            this.virtualMFADevices.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListVirtualMFADevicesResponseBody = ListVirtualMFADevicesResponseBody;
//# sourceMappingURL=ListVirtualMfadevicesResponseBody.js.map