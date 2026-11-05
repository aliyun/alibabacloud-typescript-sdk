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
exports.QueryRbacRolePermissionsResponseBody = exports.QueryRbacRolePermissionsResponseBodyModule = exports.QueryRbacRolePermissionsResponseBodyModuleNext = exports.QueryRbacRolePermissionsResponseBodyModuleData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class QueryRbacRolePermissionsResponseBodyModuleData extends $dara.Model {
    static names() {
        return {
            action: 'Action',
            description: 'Description',
            id: 'Id',
            resource: 'Resource',
        };
    }
    static types() {
        return {
            action: 'string',
            description: 'string',
            id: 'string',
            resource: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.QueryRbacRolePermissionsResponseBodyModuleData = QueryRbacRolePermissionsResponseBodyModuleData;
class QueryRbacRolePermissionsResponseBodyModuleNext extends $dara.Model {
    static names() {
        return {
            action: 'Action',
            description: 'Description',
            id: 'Id',
            resource: 'Resource',
        };
    }
    static types() {
        return {
            action: 'string',
            description: 'string',
            id: 'string',
            resource: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.QueryRbacRolePermissionsResponseBodyModuleNext = QueryRbacRolePermissionsResponseBodyModuleNext;
class QueryRbacRolePermissionsResponseBodyModule extends $dara.Model {
    static names() {
        return {
            currentPageNum: 'CurrentPageNum',
            data: 'Data',
            next: 'Next',
            nextPage: 'NextPage',
            pageSize: 'PageSize',
            prePage: 'PrePage',
            resultLimit: 'ResultLimit',
            totalItemNum: 'TotalItemNum',
            totalPageNum: 'TotalPageNum',
        };
    }
    static types() {
        return {
            currentPageNum: 'number',
            data: { 'type': 'array', 'itemType': QueryRbacRolePermissionsResponseBodyModuleData },
            next: QueryRbacRolePermissionsResponseBodyModuleNext,
            nextPage: 'boolean',
            pageSize: 'number',
            prePage: 'boolean',
            resultLimit: 'boolean',
            totalItemNum: 'number',
            totalPageNum: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.data)) {
            $dara.Model.validateArray(this.data);
        }
        if (this.next && typeof this.next.validate === 'function') {
            this.next.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.QueryRbacRolePermissionsResponseBodyModule = QueryRbacRolePermissionsResponseBodyModule;
class QueryRbacRolePermissionsResponseBody extends $dara.Model {
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
            module: QueryRbacRolePermissionsResponseBodyModule,
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
exports.QueryRbacRolePermissionsResponseBody = QueryRbacRolePermissionsResponseBody;
//# sourceMappingURL=QueryRbacRolePermissionsResponseBody.js.map