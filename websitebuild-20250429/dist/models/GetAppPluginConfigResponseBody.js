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
exports.GetAppPluginConfigResponseBody = exports.GetAppPluginConfigResponseBodyModule = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetAppPluginConfigResponseBodyModule extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            id: 'Id',
            pluginConfig: 'PluginConfig',
            pluginDesc: 'PluginDesc',
            pluginId: 'PluginId',
            pluginName: 'PluginName',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            bizId: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            id: 'number',
            pluginConfig: 'string',
            pluginDesc: 'string',
            pluginId: 'string',
            pluginName: 'string',
            userId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppPluginConfigResponseBodyModule = GetAppPluginConfigResponseBodyModule;
class GetAppPluginConfigResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            message: 'Message',
            module: 'Module',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            code: 'string',
            message: 'string',
            module: GetAppPluginConfigResponseBodyModule,
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.module && typeof this.module.validate === 'function') {
            this.module.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppPluginConfigResponseBody = GetAppPluginConfigResponseBody;
//# sourceMappingURL=GetAppPluginConfigResponseBody.js.map