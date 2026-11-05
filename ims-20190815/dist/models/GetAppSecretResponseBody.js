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
exports.GetAppSecretResponseBody = exports.GetAppSecretResponseBodyAppSecret = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetAppSecretResponseBodyAppSecret extends $dara.Model {
    static names() {
        return {
            appId: 'AppId',
            appSecretId: 'AppSecretId',
            appSecretValue: 'AppSecretValue',
            createDate: 'CreateDate',
        };
    }
    static types() {
        return {
            appId: 'string',
            appSecretId: 'string',
            appSecretValue: 'string',
            createDate: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppSecretResponseBodyAppSecret = GetAppSecretResponseBodyAppSecret;
class GetAppSecretResponseBody extends $dara.Model {
    static names() {
        return {
            appSecret: 'AppSecret',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            appSecret: GetAppSecretResponseBodyAppSecret,
            requestId: 'string',
        };
    }
    validate() {
        if (this.appSecret && typeof this.appSecret.validate === 'function') {
            this.appSecret.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppSecretResponseBody = GetAppSecretResponseBody;
//# sourceMappingURL=GetAppSecretResponseBody.js.map