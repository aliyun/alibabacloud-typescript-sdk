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
exports.ListApplicationProvisionInfosResponseBody = exports.ListApplicationProvisionInfosResponseBodyApplicationProvisionInfos = exports.ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfo = exports.ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScope = exports.ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopes = exports.ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
exports.ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope = ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope;
class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopes extends $dara.Model {
    static names() {
        return {
            predefinedScope: 'PredefinedScope',
        };
    }
    static types() {
        return {
            predefinedScope: { 'type': 'array', 'itemType': ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope },
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
exports.ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopes = ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopes;
class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScope extends $dara.Model {
    static names() {
        return {
            predefinedScopes: 'PredefinedScopes',
        };
    }
    static types() {
        return {
            predefinedScopes: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopes,
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
exports.ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScope = ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScope;
class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfo extends $dara.Model {
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
            delegatedScope: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScope,
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
exports.ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfo = ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfo;
class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfos extends $dara.Model {
    static names() {
        return {
            applicationProvisionInfo: 'ApplicationProvisionInfo',
        };
    }
    static types() {
        return {
            applicationProvisionInfo: { 'type': 'array', 'itemType': ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfo },
        };
    }
    validate() {
        if (Array.isArray(this.applicationProvisionInfo)) {
            $dara.Model.validateArray(this.applicationProvisionInfo);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApplicationProvisionInfosResponseBodyApplicationProvisionInfos = ListApplicationProvisionInfosResponseBodyApplicationProvisionInfos;
class ListApplicationProvisionInfosResponseBody extends $dara.Model {
    static names() {
        return {
            applicationProvisionInfos: 'ApplicationProvisionInfos',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            applicationProvisionInfos: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfos,
            requestId: 'string',
        };
    }
    validate() {
        if (this.applicationProvisionInfos && typeof this.applicationProvisionInfos.validate === 'function') {
            this.applicationProvisionInfos.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListApplicationProvisionInfosResponseBody = ListApplicationProvisionInfosResponseBody;
//# sourceMappingURL=ListApplicationProvisionInfosResponseBody.js.map