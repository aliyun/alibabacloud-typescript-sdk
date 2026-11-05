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
exports.BindAppDomainResponseBody = exports.BindAppDomainResponseBodyModule = exports.BindAppDomainResponseBodyModuleDnsConflict = exports.BindAppDomainResponseBodyModuleDnsConflictRecords = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class BindAppDomainResponseBodyModuleDnsConflictRecords extends $dara.Model {
    static names() {
        return {
            host: 'Host',
            recordType: 'RecordType',
            status: 'Status',
            value: 'Value',
        };
    }
    static types() {
        return {
            host: 'string',
            recordType: 'string',
            status: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.BindAppDomainResponseBodyModuleDnsConflictRecords = BindAppDomainResponseBodyModuleDnsConflictRecords;
class BindAppDomainResponseBodyModuleDnsConflict extends $dara.Model {
    static names() {
        return {
            canAutoResolve: 'CanAutoResolve',
            hasConflict: 'HasConflict',
            message: 'Message',
            records: 'Records',
        };
    }
    static types() {
        return {
            canAutoResolve: 'boolean',
            hasConflict: 'boolean',
            message: 'string',
            records: { 'type': 'array', 'itemType': BindAppDomainResponseBodyModuleDnsConflictRecords },
        };
    }
    validate() {
        if (Array.isArray(this.records)) {
            $dara.Model.validateArray(this.records);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.BindAppDomainResponseBodyModuleDnsConflict = BindAppDomainResponseBodyModuleDnsConflict;
class BindAppDomainResponseBodyModule extends $dara.Model {
    static names() {
        return {
            dnsConflict: 'DnsConflict',
            success: 'Success',
        };
    }
    static types() {
        return {
            dnsConflict: BindAppDomainResponseBodyModuleDnsConflict,
            success: 'boolean',
        };
    }
    validate() {
        if (this.dnsConflict && typeof this.dnsConflict.validate === 'function') {
            this.dnsConflict.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.BindAppDomainResponseBodyModule = BindAppDomainResponseBodyModule;
class BindAppDomainResponseBody extends $dara.Model {
    static names() {
        return {
            accessDeniedDetail: 'AccessDeniedDetail',
            allowRetry: 'AllowRetry',
            appName: 'AppName',
            dynamicCode: 'DynamicCode',
            dynamicMessage: 'DynamicMessage',
            errorArgs: 'ErrorArgs',
            module: 'Module',
            requestId: 'RequestId',
            rootErrorCode: 'RootErrorCode',
            rootErrorMsg: 'RootErrorMsg',
            synchro: 'Synchro',
        };
    }
    static types() {
        return {
            accessDeniedDetail: 'string',
            allowRetry: 'boolean',
            appName: 'string',
            dynamicCode: 'string',
            dynamicMessage: 'string',
            errorArgs: { 'type': 'array', 'itemType': 'any' },
            module: BindAppDomainResponseBodyModule,
            requestId: 'string',
            rootErrorCode: 'string',
            rootErrorMsg: 'string',
            synchro: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.errorArgs)) {
            $dara.Model.validateArray(this.errorArgs);
        }
        if (this.module && typeof this.module.validate === 'function') {
            this.module.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.BindAppDomainResponseBody = BindAppDomainResponseBody;
//# sourceMappingURL=BindAppDomainResponseBody.js.map