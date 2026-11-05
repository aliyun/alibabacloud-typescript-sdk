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
exports.GetMiniAppBindingResponseBody = exports.GetMiniAppBindingResponseBodyData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetMiniAppBindingResponseBodyData extends $dara.Model {
    static names() {
        return {
            authStatus: 'AuthStatus',
            bizId: 'BizId',
            icpFiled: 'IcpFiled',
            platformAppid: 'PlatformAppid',
            previewQrCodeUrl: 'PreviewQrCodeUrl',
            productionQrCodeUrl: 'ProductionQrCodeUrl',
            settingValues: 'SettingValues',
        };
    }
    static types() {
        return {
            authStatus: 'string',
            bizId: 'string',
            icpFiled: 'boolean',
            platformAppid: 'string',
            previewQrCodeUrl: 'string',
            productionQrCodeUrl: 'string',
            settingValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    }
    validate() {
        if (this.settingValues) {
            $dara.Model.validateMap(this.settingValues);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMiniAppBindingResponseBodyData = GetMiniAppBindingResponseBodyData;
class GetMiniAppBindingResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: GetMiniAppBindingResponseBodyData,
            requestId: 'string',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMiniAppBindingResponseBody = GetMiniAppBindingResponseBody;
//# sourceMappingURL=GetMiniAppBindingResponseBody.js.map