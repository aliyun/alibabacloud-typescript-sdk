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
exports.GetAppInstanceEntitlementResponseBody = exports.GetAppInstanceEntitlementResponseBodyModule = exports.GetAppInstanceEntitlementResponseBodyModuleItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetAppInstanceEntitlementResponseBodyModuleItems extends $dara.Model {
    static names() {
        return {
            allocated: 'Allocated',
            available: 'Available',
            code: 'Code',
            configured: 'Configured',
            entitled: 'Entitled',
            featureType: 'FeatureType',
            instanceId: 'InstanceId',
            name: 'Name',
            pluginId: 'PluginId',
            quota: 'Quota',
            remaining: 'Remaining',
            resourceCode: 'ResourceCode',
            resourceType: 'ResourceType',
            running: 'Running',
            type: 'Type',
            usagePercent: 'UsagePercent',
            used: 'Used',
        };
    }
    static types() {
        return {
            allocated: 'boolean',
            available: 'boolean',
            code: 'string',
            configured: 'boolean',
            entitled: 'boolean',
            featureType: 'string',
            instanceId: 'string',
            name: 'string',
            pluginId: 'string',
            quota: 'number',
            remaining: 'number',
            resourceCode: 'string',
            resourceType: 'string',
            running: 'boolean',
            type: 'string',
            usagePercent: 'number',
            used: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceEntitlementResponseBodyModuleItems = GetAppInstanceEntitlementResponseBodyModuleItems;
class GetAppInstanceEntitlementResponseBodyModule extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            items: 'Items',
        };
    }
    static types() {
        return {
            bizId: 'string',
            items: { 'type': 'array', 'itemType': GetAppInstanceEntitlementResponseBodyModuleItems },
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
exports.GetAppInstanceEntitlementResponseBodyModule = GetAppInstanceEntitlementResponseBodyModule;
class GetAppInstanceEntitlementResponseBody extends $dara.Model {
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
            module: GetAppInstanceEntitlementResponseBodyModule,
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
exports.GetAppInstanceEntitlementResponseBody = GetAppInstanceEntitlementResponseBody;
//# sourceMappingURL=GetAppInstanceEntitlementResponseBody.js.map