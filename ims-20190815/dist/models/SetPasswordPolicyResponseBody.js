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
exports.SetPasswordPolicyResponseBody = exports.SetPasswordPolicyResponseBodyPasswordPolicy = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class SetPasswordPolicyResponseBodyPasswordPolicy extends $dara.Model {
    static names() {
        return {
            hardExpire: 'HardExpire',
            initialPasswordAge: 'InitialPasswordAge',
            interceptRiskPasswordOnApi: 'InterceptRiskPasswordOnApi',
            maxLoginAttemps: 'MaxLoginAttemps',
            maxPasswordAge: 'MaxPasswordAge',
            minimumPasswordDifferentCharacter: 'MinimumPasswordDifferentCharacter',
            minimumPasswordLength: 'MinimumPasswordLength',
            passwordNotContainUserName: 'PasswordNotContainUserName',
            passwordReusePrevention: 'PasswordReusePrevention',
            requireLowercaseCharacters: 'RequireLowercaseCharacters',
            requireNumbers: 'RequireNumbers',
            requireSymbols: 'RequireSymbols',
            requireUppercaseCharacters: 'RequireUppercaseCharacters',
        };
    }
    static types() {
        return {
            hardExpire: 'boolean',
            initialPasswordAge: 'number',
            interceptRiskPasswordOnApi: 'boolean',
            maxLoginAttemps: 'number',
            maxPasswordAge: 'number',
            minimumPasswordDifferentCharacter: 'number',
            minimumPasswordLength: 'number',
            passwordNotContainUserName: 'boolean',
            passwordReusePrevention: 'number',
            requireLowercaseCharacters: 'boolean',
            requireNumbers: 'boolean',
            requireSymbols: 'boolean',
            requireUppercaseCharacters: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SetPasswordPolicyResponseBodyPasswordPolicy = SetPasswordPolicyResponseBodyPasswordPolicy;
class SetPasswordPolicyResponseBody extends $dara.Model {
    static names() {
        return {
            passwordPolicy: 'PasswordPolicy',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            passwordPolicy: SetPasswordPolicyResponseBodyPasswordPolicy,
            requestId: 'string',
        };
    }
    validate() {
        if (this.passwordPolicy && typeof this.passwordPolicy.validate === 'function') {
            this.passwordPolicy.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SetPasswordPolicyResponseBody = SetPasswordPolicyResponseBody;
//# sourceMappingURL=SetPasswordPolicyResponseBody.js.map