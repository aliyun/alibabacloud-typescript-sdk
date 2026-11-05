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
exports.ListAppAssistantAgentsResponseBody = exports.ListAppAssistantAgentsResponseBodyModule = exports.ListAppAssistantAgentsResponseBodyModuleEmbedConfig = exports.ListAppAssistantAgentsResponseBodyModuleCredential = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListAppAssistantAgentsResponseBodyModuleCredential extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            apiSecret: 'ApiSecret',
            extra: 'Extra',
            password: 'Password',
            username: 'Username',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            apiSecret: 'string',
            extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            password: 'string',
            username: 'string',
        };
    }
    validate() {
        if (this.extra) {
            $dara.Model.validateMap(this.extra);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppAssistantAgentsResponseBodyModuleCredential = ListAppAssistantAgentsResponseBodyModuleCredential;
class ListAppAssistantAgentsResponseBodyModuleEmbedConfig extends $dara.Model {
    static names() {
        return {
            extra: 'Extra',
            rawScript: 'RawScript',
        };
    }
    static types() {
        return {
            extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            rawScript: 'string',
        };
    }
    validate() {
        if (this.extra) {
            $dara.Model.validateMap(this.extra);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppAssistantAgentsResponseBodyModuleEmbedConfig = ListAppAssistantAgentsResponseBodyModuleEmbedConfig;
class ListAppAssistantAgentsResponseBodyModule extends $dara.Model {
    static names() {
        return {
            agentId: 'AgentId',
            agentName: 'AgentName',
            bizId: 'BizId',
            credential: 'Credential',
            embedConfig: 'EmbedConfig',
            extraParams: 'ExtraParams',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            platformAppId: 'PlatformAppId',
            platformType: 'PlatformType',
            status: 'Status',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            agentId: 'string',
            agentName: 'string',
            bizId: 'string',
            credential: ListAppAssistantAgentsResponseBodyModuleCredential,
            embedConfig: ListAppAssistantAgentsResponseBodyModuleEmbedConfig,
            extraParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            gmtCreate: 'string',
            gmtModified: 'string',
            platformAppId: 'string',
            platformType: 'string',
            status: 'string',
            userId: 'string',
        };
    }
    validate() {
        if (this.credential && typeof this.credential.validate === 'function') {
            this.credential.validate();
        }
        if (this.embedConfig && typeof this.embedConfig.validate === 'function') {
            this.embedConfig.validate();
        }
        if (this.extraParams) {
            $dara.Model.validateMap(this.extraParams);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppAssistantAgentsResponseBodyModule = ListAppAssistantAgentsResponseBodyModule;
class ListAppAssistantAgentsResponseBody extends $dara.Model {
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
            module: { 'type': 'array', 'itemType': ListAppAssistantAgentsResponseBodyModule },
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
exports.ListAppAssistantAgentsResponseBody = ListAppAssistantAgentsResponseBody;
//# sourceMappingURL=ListAppAssistantAgentsResponseBody.js.map