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
exports.CreateLoginProfileResponseBody = exports.CreateLoginProfileResponseBodyLoginProfile = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateLoginProfileResponseBodyLoginProfile extends $dara.Model {
    static names() {
        return {
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
exports.CreateLoginProfileResponseBodyLoginProfile = CreateLoginProfileResponseBodyLoginProfile;
class CreateLoginProfileResponseBody extends $dara.Model {
    static names() {
        return {
            loginProfile: 'LoginProfile',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            loginProfile: CreateLoginProfileResponseBodyLoginProfile,
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
exports.CreateLoginProfileResponseBody = CreateLoginProfileResponseBody;
//# sourceMappingURL=CreateLoginProfileResponseBody.js.map