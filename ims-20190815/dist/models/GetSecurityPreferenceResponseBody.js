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
exports.GetSecurityPreferenceResponseBody = exports.GetSecurityPreferenceResponseBodySecurityPreference = exports.GetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference = exports.GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference = exports.GetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays = exports.GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference = exports.GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference = exports.GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference extends $dara.Model {
    static names() {
        return {
            allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
            allowUserToManageServiceCredentials: 'AllowUserToManageServiceCredentials',
        };
    }
    static types() {
        return {
            allowUserToManageAccessKeys: 'boolean',
            allowUserToManageServiceCredentials: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference = GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
class GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference extends $dara.Model {
    static names() {
        return {
            allowUserToChangePassword: 'AllowUserToChangePassword',
            allowUserToLoginWithPasskey: 'AllowUserToLoginWithPasskey',
            enableSaveMFATicket: 'EnableSaveMFATicket',
            loginNetworkMasks: 'LoginNetworkMasks',
            loginSessionDuration: 'LoginSessionDuration',
            MFAOperationForLogin: 'MFAOperationForLogin',
            operationForRiskLogin: 'OperationForRiskLogin',
        };
    }
    static types() {
        return {
            allowUserToChangePassword: 'boolean',
            allowUserToLoginWithPasskey: 'boolean',
            enableSaveMFATicket: 'boolean',
            loginNetworkMasks: 'string',
            loginSessionDuration: 'number',
            MFAOperationForLogin: 'string',
            operationForRiskLogin: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference = GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
class GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference extends $dara.Model {
    static names() {
        return {
            allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
        };
    }
    static types() {
        return {
            allowUserToManageMFADevices: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference = GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
class GetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays extends $dara.Model {
    static names() {
        return {
            maxIdleDaysForAccessKeys: 'MaxIdleDaysForAccessKeys',
            maxIdleDaysForUsers: 'MaxIdleDaysForUsers',
        };
    }
    static types() {
        return {
            maxIdleDaysForAccessKeys: 'number',
            maxIdleDaysForUsers: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays = GetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays;
class GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference extends $dara.Model {
    static names() {
        return {
            allowUserToManagePersonalDingTalk: 'AllowUserToManagePersonalDingTalk',
        };
    }
    static types() {
        return {
            allowUserToManagePersonalDingTalk: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference = GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference;
class GetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference extends $dara.Model {
    static names() {
        return {
            verificationTypes: 'VerificationTypes',
        };
    }
    static types() {
        return {
            verificationTypes: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.verificationTypes)) {
            $dara.Model.validateArray(this.verificationTypes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference = GetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference;
class GetSecurityPreferenceResponseBodySecurityPreference extends $dara.Model {
    static names() {
        return {
            accessKeyPreference: 'AccessKeyPreference',
            loginProfilePreference: 'LoginProfilePreference',
            MFAPreference: 'MFAPreference',
            maxIdleDays: 'MaxIdleDays',
            personalInfoPreference: 'PersonalInfoPreference',
            verificationPreference: 'VerificationPreference',
        };
    }
    static types() {
        return {
            accessKeyPreference: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
            loginProfilePreference: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
            MFAPreference: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
            maxIdleDays: GetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays,
            personalInfoPreference: GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference,
            verificationPreference: GetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference,
        };
    }
    validate() {
        if (this.accessKeyPreference && typeof this.accessKeyPreference.validate === 'function') {
            this.accessKeyPreference.validate();
        }
        if (this.loginProfilePreference && typeof this.loginProfilePreference.validate === 'function') {
            this.loginProfilePreference.validate();
        }
        if (this.MFAPreference && typeof this.MFAPreference.validate === 'function') {
            this.MFAPreference.validate();
        }
        if (this.maxIdleDays && typeof this.maxIdleDays.validate === 'function') {
            this.maxIdleDays.validate();
        }
        if (this.personalInfoPreference && typeof this.personalInfoPreference.validate === 'function') {
            this.personalInfoPreference.validate();
        }
        if (this.verificationPreference && typeof this.verificationPreference.validate === 'function') {
            this.verificationPreference.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetSecurityPreferenceResponseBodySecurityPreference = GetSecurityPreferenceResponseBodySecurityPreference;
class GetSecurityPreferenceResponseBody extends $dara.Model {
    static names() {
        return {
            requestId: 'RequestId',
            securityPreference: 'SecurityPreference',
        };
    }
    static types() {
        return {
            requestId: 'string',
            securityPreference: GetSecurityPreferenceResponseBodySecurityPreference,
        };
    }
    validate() {
        if (this.securityPreference && typeof this.securityPreference.validate === 'function') {
            this.securityPreference.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetSecurityPreferenceResponseBody = GetSecurityPreferenceResponseBody;
//# sourceMappingURL=GetSecurityPreferenceResponseBody.js.map