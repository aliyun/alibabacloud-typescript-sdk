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
exports.GetApplicationProvisionInfoResponseBody = exports.GetApplicationProvisionInfoResponseBodyApplicationProvisionInfo = exports.GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScope = exports.GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes = exports.GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
    static names() {
        return {
            description: 'Description',
            name: 'Name',
        };
    }
    static types() {
        return {
            description: 'string',
            name: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope = GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope;
class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes extends $dara.Model {
    static names() {
        return {
            predefinedScope: 'PredefinedScope',
        };
    }
    static types() {
        return {
            predefinedScope: { 'type': 'array', 'itemType': GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope },
        };
    }
    validate() {
        if (Array.isArray(this.predefinedScope)) {
            $dara.Model.validateArray(this.predefinedScope);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes = GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes;
class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScope extends $dara.Model {
    static names() {
        return {
            predefinedScopes: 'PredefinedScopes',
        };
    }
    static types() {
        return {
            predefinedScopes: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes,
        };
    }
    validate() {
        if (this.predefinedScopes && typeof this.predefinedScopes.validate === 'function') {
            this.predefinedScopes.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScope = GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScope;
class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfo extends $dara.Model {
    static names() {
        return {
            accountId: 'AccountId',
            appCategory: 'AppCategory',
            appId: 'AppId',
            appName: 'AppName',
            assignmentType: 'AssignmentType',
            createDate: 'CreateDate',
            delegatedScope: 'DelegatedScope',
            displayName: 'DisplayName',
            needPrincipalConsent: 'NeedPrincipalConsent',
            updateDate: 'UpdateDate',
        };
    }
    static types() {
        return {
            accountId: 'string',
            appCategory: 'string',
            appId: 'string',
            appName: 'string',
            assignmentType: 'string',
            createDate: 'string',
            delegatedScope: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScope,
            displayName: 'string',
            needPrincipalConsent: 'boolean',
            updateDate: 'string',
        };
    }
    validate() {
        if (this.delegatedScope && typeof this.delegatedScope.validate === 'function') {
            this.delegatedScope.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetApplicationProvisionInfoResponseBodyApplicationProvisionInfo = GetApplicationProvisionInfoResponseBodyApplicationProvisionInfo;
class GetApplicationProvisionInfoResponseBody extends $dara.Model {
    static names() {
        return {
            applicationProvisionInfo: 'ApplicationProvisionInfo',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            applicationProvisionInfo: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfo,
            requestId: 'string',
        };
    }
    validate() {
        if (this.applicationProvisionInfo && typeof this.applicationProvisionInfo.validate === 'function') {
            this.applicationProvisionInfo.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetApplicationProvisionInfoResponseBody = GetApplicationProvisionInfoResponseBody;
//# sourceMappingURL=GetApplicationProvisionInfoResponseBody.js.map