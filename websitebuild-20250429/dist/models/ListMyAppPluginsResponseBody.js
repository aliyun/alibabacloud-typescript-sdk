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
exports.ListMyAppPluginsResponseBody = exports.ListMyAppPluginsResponseBodyModule = exports.ListMyAppPluginsResponseBodyModuleNext = exports.ListMyAppPluginsResponseBodyModuleData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListMyAppPluginsResponseBodyModuleData extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            description: 'Description',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            hotCount: 'HotCount',
            icon: 'Icon',
            pluginId: 'PluginId',
            pluginName: 'PluginName',
            status: 'Status',
            version: 'Version',
            visibility: 'Visibility',
        };
    }
    static types() {
        return {
            category: 'string',
            description: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            hotCount: 'number',
            icon: 'string',
            pluginId: 'string',
            pluginName: 'string',
            status: 'string',
            version: 'string',
            visibility: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListMyAppPluginsResponseBodyModuleData = ListMyAppPluginsResponseBodyModuleData;
class ListMyAppPluginsResponseBodyModuleNext extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            description: 'Description',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            icon: 'Icon',
            pluginId: 'PluginId',
            pluginName: 'PluginName',
            status: 'Status',
            version: 'Version',
            visibility: 'Visibility',
        };
    }
    static types() {
        return {
            category: 'string',
            description: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            icon: 'string',
            pluginId: 'string',
            pluginName: 'string',
            status: 'string',
            version: 'string',
            visibility: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListMyAppPluginsResponseBodyModuleNext = ListMyAppPluginsResponseBodyModuleNext;
class ListMyAppPluginsResponseBodyModule extends $dara.Model {
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
            data: { 'type': 'array', 'itemType': ListMyAppPluginsResponseBodyModuleData },
            next: ListMyAppPluginsResponseBodyModuleNext,
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
exports.ListMyAppPluginsResponseBodyModule = ListMyAppPluginsResponseBodyModule;
class ListMyAppPluginsResponseBody extends $dara.Model {
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
            module: ListMyAppPluginsResponseBodyModule,
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
exports.ListMyAppPluginsResponseBody = ListMyAppPluginsResponseBody;
//# sourceMappingURL=ListMyAppPluginsResponseBody.js.map