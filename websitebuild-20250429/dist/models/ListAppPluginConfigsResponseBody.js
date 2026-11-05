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
exports.ListAppPluginConfigsResponseBody = exports.ListAppPluginConfigsResponseBodyModule = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListAppPluginConfigsResponseBodyModule extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            display: 'Display',
            enabled: 'Enabled',
            extend: 'Extend',
            gmtCreateTime: 'GmtCreateTime',
            gmtModifiedTime: 'GmtModifiedTime',
            id: 'Id',
            pluginConfig: 'PluginConfig',
            pluginDesc: 'PluginDesc',
            pluginId: 'PluginId',
            pluginName: 'PluginName',
            siteName: 'SiteName',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            bizId: 'string',
            display: 'number',
            enabled: 'number',
            extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            gmtCreateTime: 'string',
            gmtModifiedTime: 'string',
            id: 'number',
            pluginConfig: 'string',
            pluginDesc: 'string',
            pluginId: 'string',
            pluginName: 'string',
            siteName: 'string',
            userId: 'string',
        };
    }
    validate() {
        if (this.extend) {
            $dara.Model.validateMap(this.extend);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppPluginConfigsResponseBodyModule = ListAppPluginConfigsResponseBodyModule;
class ListAppPluginConfigsResponseBody extends $dara.Model {
    static names() {
        return {
            accessDeniedDetail: 'AccessDeniedDetail',
            allowRetry: 'AllowRetry',
            appName: 'AppName',
            dynamicCode: 'DynamicCode',
            dynamicMessage: 'DynamicMessage',
            errorArgs: 'ErrorArgs',
            maxResults: 'MaxResults',
            module: 'Module',
            nextToken: 'NextToken',
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
            maxResults: 'number',
            module: { 'type': 'array', 'itemType': ListAppPluginConfigsResponseBodyModule },
            nextToken: 'string',
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
        if (Array.isArray(this.module)) {
            $dara.Model.validateArray(this.module);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppPluginConfigsResponseBody = ListAppPluginConfigsResponseBody;
//# sourceMappingURL=ListAppPluginConfigsResponseBody.js.map