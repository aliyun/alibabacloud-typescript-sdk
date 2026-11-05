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
exports.UpdateApplicationRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateApplicationRequest extends $dara.Model {
    static names() {
        return {
            appId: 'AppId',
            newAccessTokenValidity: 'NewAccessTokenValidity',
            newAssignmentType: 'NewAssignmentType',
            newDisplayName: 'NewDisplayName',
            newIsMultiTenant: 'NewIsMultiTenant',
            newNeedPrincipalConsent: 'NewNeedPrincipalConsent',
            newPredefinedScopes: 'NewPredefinedScopes',
            newRedirectUris: 'NewRedirectUris',
            newRefreshTokenValidity: 'NewRefreshTokenValidity',
            newRequiredScopes: 'NewRequiredScopes',
            newSecretRequired: 'NewSecretRequired',
        };
    }
    static types() {
        return {
            appId: 'string',
            newAccessTokenValidity: 'number',
            newAssignmentType: 'string',
            newDisplayName: 'string',
            newIsMultiTenant: 'boolean',
            newNeedPrincipalConsent: 'boolean',
            newPredefinedScopes: 'string',
            newRedirectUris: 'string',
            newRefreshTokenValidity: 'number',
            newRequiredScopes: 'string',
            newSecretRequired: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateApplicationRequest = UpdateApplicationRequest;
//# sourceMappingURL=UpdateApplicationRequest.js.map