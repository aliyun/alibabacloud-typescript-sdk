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
exports.GetAppPluginResponseBody = exports.GetAppPluginResponseBodyModule = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetAppPluginResponseBodyModule extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            configItems: 'ConfigItems',
            createdBy: 'CreatedBy',
            description: 'Description',
            display: 'Display',
            enabled: 'Enabled',
            extend: 'Extend',
            gitRef: 'GitRef',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            hooks: 'Hooks',
            hotCount: 'HotCount',
            icon: 'Icon',
            pluginId: 'PluginId',
            pluginName: 'PluginName',
            repositoryUrl: 'RepositoryUrl',
            skillHeader: 'SkillHeader',
            status: 'Status',
            tags: 'Tags',
            version: 'Version',
            visibility: 'Visibility',
        };
    }
    static types() {
        return {
            category: 'string',
            configItems: 'string',
            createdBy: 'string',
            description: 'string',
            display: 'number',
            enabled: 'number',
            extend: 'string',
            gitRef: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            hooks: 'string',
            hotCount: 'number',
            icon: 'string',
            pluginId: 'string',
            pluginName: 'string',
            repositoryUrl: 'string',
            skillHeader: 'string',
            status: 'string',
            tags: 'string',
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
exports.GetAppPluginResponseBodyModule = GetAppPluginResponseBodyModule;
class GetAppPluginResponseBody extends $dara.Model {
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
            module: GetAppPluginResponseBodyModule,
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
exports.GetAppPluginResponseBody = GetAppPluginResponseBody;
//# sourceMappingURL=GetAppPluginResponseBody.js.map