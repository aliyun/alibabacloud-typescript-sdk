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
exports.ListExternalApplicationsResponseBody = exports.ListExternalApplicationsResponseBodyExternalApplications = exports.ListExternalApplicationsResponseBodyExternalApplicationsExternalApplication = exports.ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScope = exports.ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopes = exports.ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopesPredefinedScope = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
exports.ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopesPredefinedScope = ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopesPredefinedScope;
class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopes extends $dara.Model {
    static names() {
        return {
            predefinedScope: 'PredefinedScope',
        };
    }
    static types() {
        return {
            predefinedScope: { 'type': 'array', 'itemType': ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopesPredefinedScope },
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
exports.ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopes = ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopes;
class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScope extends $dara.Model {
    static names() {
        return {
            predefinedScopes: 'PredefinedScopes',
        };
    }
    static types() {
        return {
            predefinedScopes: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopes,
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
exports.ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScope = ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScope;
class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplication extends $dara.Model {
    static names() {
        return {
            appPrincipalName: 'AppPrincipalName',
            createDate: 'CreateDate',
            delegatedScope: 'DelegatedScope',
            displayName: 'DisplayName',
            foreignAppId: 'ForeignAppId',
            tenantId: 'TenantId',
            updateDate: 'UpdateDate',
        };
    }
    static types() {
        return {
            appPrincipalName: 'string',
            createDate: 'string',
            delegatedScope: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScope,
            displayName: 'string',
            foreignAppId: 'string',
            tenantId: 'string',
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
exports.ListExternalApplicationsResponseBodyExternalApplicationsExternalApplication = ListExternalApplicationsResponseBodyExternalApplicationsExternalApplication;
class ListExternalApplicationsResponseBodyExternalApplications extends $dara.Model {
    static names() {
        return {
            externalApplication: 'ExternalApplication',
        };
    }
    static types() {
        return {
            externalApplication: { 'type': 'array', 'itemType': ListExternalApplicationsResponseBodyExternalApplicationsExternalApplication },
        };
    }
    validate() {
        if (Array.isArray(this.externalApplication)) {
            $dara.Model.validateArray(this.externalApplication);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListExternalApplicationsResponseBodyExternalApplications = ListExternalApplicationsResponseBodyExternalApplications;
class ListExternalApplicationsResponseBody extends $dara.Model {
    static names() {
        return {
            externalApplications: 'ExternalApplications',
            isTruncated: 'IsTruncated',
            marker: 'Marker',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            externalApplications: ListExternalApplicationsResponseBodyExternalApplications,
            isTruncated: 'boolean',
            marker: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (this.externalApplications && typeof this.externalApplications.validate === 'function') {
            this.externalApplications.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListExternalApplicationsResponseBody = ListExternalApplicationsResponseBody;
//# sourceMappingURL=ListExternalApplicationsResponseBody.js.map