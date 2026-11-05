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
exports.SetSecurityPreferenceRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class SetSecurityPreferenceRequest extends $dara.Model {
    static names() {
        return {
            allowUserToChangePassword: 'AllowUserToChangePassword',
            allowUserToLoginWithPasskey: 'AllowUserToLoginWithPasskey',
            allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
            allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
            allowUserToManagePersonalDingTalk: 'AllowUserToManagePersonalDingTalk',
            allowUserToManageServiceCredentials: 'AllowUserToManageServiceCredentials',
            enableSaveMFATicket: 'EnableSaveMFATicket',
            loginNetworkMasks: 'LoginNetworkMasks',
            loginSessionDuration: 'LoginSessionDuration',
            MFAOperationForLogin: 'MFAOperationForLogin',
            maxIdleDaysForAccessKeys: 'MaxIdleDaysForAccessKeys',
            maxIdleDaysForUsers: 'MaxIdleDaysForUsers',
            operationForRiskLogin: 'OperationForRiskLogin',
            verificationTypes: 'VerificationTypes',
        };
    }
    static types() {
        return {
            allowUserToChangePassword: 'boolean',
            allowUserToLoginWithPasskey: 'boolean',
            allowUserToManageAccessKeys: 'boolean',
            allowUserToManageMFADevices: 'boolean',
            allowUserToManagePersonalDingTalk: 'boolean',
            allowUserToManageServiceCredentials: 'boolean',
            enableSaveMFATicket: 'boolean',
            loginNetworkMasks: 'string',
            loginSessionDuration: 'number',
            MFAOperationForLogin: 'string',
            maxIdleDaysForAccessKeys: 'number',
            maxIdleDaysForUsers: 'number',
            operationForRiskLogin: 'string',
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
exports.SetSecurityPreferenceRequest = SetSecurityPreferenceRequest;
//# sourceMappingURL=SetSecurityPreferenceRequest.js.map