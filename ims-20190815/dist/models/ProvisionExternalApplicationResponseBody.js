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
exports.ProvisionExternalApplicationResponseBody = exports.ProvisionExternalApplicationResponseBodyExternalApplication = exports.ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScope = exports.ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes = exports.ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
exports.ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope = ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope;
class ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes extends $dara.Model {
    static names() {
        return {
            predefinedScope: 'PredefinedScope',
        };
    }
    static types() {
        return {
            predefinedScope: { 'type': 'array', 'itemType': ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope },
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
exports.ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes = ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes;
class ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScope extends $dara.Model {
    static names() {
        return {
            predefinedScopes: 'PredefinedScopes',
        };
    }
    static types() {
        return {
            predefinedScopes: ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes,
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
exports.ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScope = ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScope;
class ProvisionExternalApplicationResponseBodyExternalApplication extends $dara.Model {
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
            delegatedScope: ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScope,
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
exports.ProvisionExternalApplicationResponseBodyExternalApplication = ProvisionExternalApplicationResponseBodyExternalApplication;
class ProvisionExternalApplicationResponseBody extends $dara.Model {
    static names() {
        return {
            externalApplication: 'ExternalApplication',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            externalApplication: ProvisionExternalApplicationResponseBodyExternalApplication,
            requestId: 'string',
        };
    }
    validate() {
        if (this.externalApplication && typeof this.externalApplication.validate === 'function') {
            this.externalApplication.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ProvisionExternalApplicationResponseBody = ProvisionExternalApplicationResponseBody;
//# sourceMappingURL=ProvisionExternalApplicationResponseBody.js.map