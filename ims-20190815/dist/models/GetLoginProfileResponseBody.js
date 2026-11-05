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
exports.GetLoginProfileResponseBody = exports.GetLoginProfileResponseBodyLoginProfile = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetLoginProfileResponseBodyLoginProfile extends $dara.Model {
    static names() {
        return {
            autoDisableLoginStatus: 'AutoDisableLoginStatus',
            lastLoginTime: 'LastLoginTime',
            MFABindRequired: 'MFABindRequired',
            passwordResetRequired: 'PasswordResetRequired',
            passwordStatus: 'PasswordStatus',
            status: 'Status',
            updateDate: 'UpdateDate',
            userPrincipalName: 'UserPrincipalName',
        };
    }
    static types() {
        return {
            autoDisableLoginStatus: 'string',
            lastLoginTime: 'string',
            MFABindRequired: 'boolean',
            passwordResetRequired: 'boolean',
            passwordStatus: 'string',
            status: 'string',
            updateDate: 'string',
            userPrincipalName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetLoginProfileResponseBodyLoginProfile = GetLoginProfileResponseBodyLoginProfile;
class GetLoginProfileResponseBody extends $dara.Model {
    static names() {
        return {
            loginProfile: 'LoginProfile',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            loginProfile: GetLoginProfileResponseBodyLoginProfile,
            requestId: 'string',
        };
    }
    validate() {
        if (this.loginProfile && typeof this.loginProfile.validate === 'function') {
            this.loginProfile.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetLoginProfileResponseBody = GetLoginProfileResponseBody;
//# sourceMappingURL=GetLoginProfileResponseBody.js.map