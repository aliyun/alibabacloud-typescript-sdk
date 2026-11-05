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
exports.GetLoginTokenResponseBody = exports.GetLoginTokenResponseBodyRiskVerifyInfo = exports.GetLoginTokenResponseBodyPasswordStrategy = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetLoginTokenResponseBodyPasswordStrategy extends $dara.Model {
    static names() {
        return {
            tenantAlternativeChars: 'TenantAlternativeChars',
            tenantPasswordLength: 'TenantPasswordLength',
        };
    }
    static types() {
        return {
            tenantAlternativeChars: { 'type': 'array', 'itemType': 'string' },
            tenantPasswordLength: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.tenantAlternativeChars)) {
            $dara.Model.validateArray(this.tenantAlternativeChars);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetLoginTokenResponseBodyPasswordStrategy = GetLoginTokenResponseBodyPasswordStrategy;
class GetLoginTokenResponseBodyRiskVerifyInfo extends $dara.Model {
    static names() {
        return {
            email: 'Email',
            lastLockDuration: 'LastLockDuration',
            locked: 'Locked',
            phone: 'Phone',
        };
    }
    static types() {
        return {
            email: 'string',
            lastLockDuration: 'number',
            locked: 'string',
            phone: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetLoginTokenResponseBodyRiskVerifyInfo = GetLoginTokenResponseBodyRiskVerifyInfo;
class GetLoginTokenResponseBody extends $dara.Model {
    static names() {
        return {
            email: 'Email',
            endUserId: 'EndUserId',
            industry: 'Industry',
            keepAliveToken: 'KeepAliveToken',
            label: 'Label',
            loginToken: 'LoginToken',
            nextStage: 'NextStage',
            nickName: 'NickName',
            officeSiteId: 'OfficeSiteId',
            officeSiteName: 'OfficeSiteName',
            passwordStrategy: 'PasswordStrategy',
            phone: 'Phone',
            props: 'Props',
            qrCodePng: 'QrCodePng',
            reason: 'Reason',
            requestId: 'RequestId',
            riskVerifyInfo: 'RiskVerifyInfo',
            secret: 'Secret',
            sessionId: 'SessionId',
            tenantId: 'TenantId',
            windowDisplayMode: 'WindowDisplayMode',
            wyId: 'WyId',
        };
    }
    static types() {
        return {
            email: 'string',
            endUserId: 'string',
            industry: 'string',
            keepAliveToken: 'string',
            label: 'string',
            loginToken: 'string',
            nextStage: 'string',
            nickName: 'string',
            officeSiteId: 'string',
            officeSiteName: 'string',
            passwordStrategy: GetLoginTokenResponseBodyPasswordStrategy,
            phone: 'string',
            props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            qrCodePng: 'string',
            reason: 'string',
            requestId: 'string',
            riskVerifyInfo: GetLoginTokenResponseBodyRiskVerifyInfo,
            secret: 'string',
            sessionId: 'string',
            tenantId: 'number',
            windowDisplayMode: 'string',
            wyId: 'string',
        };
    }
    validate() {
        if (this.passwordStrategy && typeof this.passwordStrategy.validate === 'function') {
            this.passwordStrategy.validate();
        }
        if (this.props) {
            $dara.Model.validateMap(this.props);
        }
        if (this.riskVerifyInfo && typeof this.riskVerifyInfo.validate === 'function') {
            this.riskVerifyInfo.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetLoginTokenResponseBody = GetLoginTokenResponseBody;
//# sourceMappingURL=GetLoginTokenResponseBody.js.map