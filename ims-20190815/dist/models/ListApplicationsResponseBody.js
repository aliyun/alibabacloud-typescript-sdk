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
exports.ListApplicationsResponseBody = exports.ListApplicationsResponseBodyApplications = exports.ListApplicationsResponseBodyApplicationsApplication = exports.ListApplicationsResponseBodyApplicationsApplicationRedirectUris = exports.ListApplicationsResponseBodyApplicationsApplicationDelegatedScope = exports.ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes = exports.ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
    static names() {
        return {
            description: 'Description',
            name: 'Name',
            required: 'Required',
        };
    }
    static types() {
        return {
            description: 'string',
            name: 'string',
            required: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope = ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope;
class ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes extends $dara.Model {
    static names() {
        return {
            predefinedScope: 'PredefinedScope',
        };
    }
    static types() {
        return {
            predefinedScope: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope },
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
exports.ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes = ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes;
class ListApplicationsResponseBodyApplicationsApplicationDelegatedScope extends $dara.Model {
    static names() {
        return {
            predefinedScopes: 'PredefinedScopes',
        };
    }
    static types() {
        return {
            predefinedScopes: ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes,
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
exports.ListApplicationsResponseBodyApplicationsApplicationDelegatedScope = ListApplicationsResponseBodyApplicationsApplicationDelegatedScope;
class ListApplicationsResponseBodyApplicationsApplicationRedirectUris extends $dara.Model {
    static names() {
        return {
            redirectUri: 'RedirectUri',
        };
    }
    static types() {
        return {
            redirectUri: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.redirectUri)) {
            $dara.Model.validateArray(this.redirectUri);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApplicationsResponseBodyApplicationsApplicationRedirectUris = ListApplicationsResponseBodyApplicationsApplicationRedirectUris;
class ListApplicationsResponseBodyApplicationsApplication extends $dara.Model {
    static names() {
        return {
            accessTokenValidity: 'AccessTokenValidity',
            accountId: 'AccountId',
            appId: 'AppId',
            appName: 'AppName',
            appType: 'AppType',
            assignmentType: 'AssignmentType',
            createDate: 'CreateDate',
            delegatedScope: 'DelegatedScope',
            displayName: 'DisplayName',
            isMultiTenant: 'IsMultiTenant',
            needPrincipalConsent: 'NeedPrincipalConsent',
            protocolVersion: 'ProtocolVersion',
            redirectUris: 'RedirectUris',
            refreshTokenValidity: 'RefreshTokenValidity',
            secretRequired: 'SecretRequired',
            updateDate: 'UpdateDate',
        };
    }
    static types() {
        return {
            accessTokenValidity: 'number',
            accountId: 'string',
            appId: 'string',
            appName: 'string',
            appType: 'string',
            assignmentType: 'string',
            createDate: 'string',
            delegatedScope: ListApplicationsResponseBodyApplicationsApplicationDelegatedScope,
            displayName: 'string',
            isMultiTenant: 'boolean',
            needPrincipalConsent: 'boolean',
            protocolVersion: 'string',
            redirectUris: ListApplicationsResponseBodyApplicationsApplicationRedirectUris,
            refreshTokenValidity: 'number',
            secretRequired: 'boolean',
            updateDate: 'string',
        };
    }
    validate() {
        if (this.delegatedScope && typeof this.delegatedScope.validate === 'function') {
            this.delegatedScope.validate();
        }
        if (this.redirectUris && typeof this.redirectUris.validate === 'function') {
            this.redirectUris.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApplicationsResponseBodyApplicationsApplication = ListApplicationsResponseBodyApplicationsApplication;
class ListApplicationsResponseBodyApplications extends $dara.Model {
    static names() {
        return {
            application: 'Application',
        };
    }
    static types() {
        return {
            application: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplication },
        };
    }
    validate() {
        if (Array.isArray(this.application)) {
            $dara.Model.validateArray(this.application);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApplicationsResponseBodyApplications = ListApplicationsResponseBodyApplications;
class ListApplicationsResponseBody extends $dara.Model {
    static names() {
        return {
            applications: 'Applications',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            applications: ListApplicationsResponseBodyApplications,
            requestId: 'string',
        };
    }
    validate() {
        if (this.applications && typeof this.applications.validate === 'function') {
            this.applications.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApplicationsResponseBody = ListApplicationsResponseBody;
//# sourceMappingURL=ListApplicationsResponseBody.js.map