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
exports.GetAccountSummaryResponseBody = exports.GetAccountSummaryResponseBodySummaryMap = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetAccountSummaryResponseBodySummaryMap extends $dara.Model {
    static names() {
        return {
            accessKeysPerUserQuota: 'AccessKeysPerUserQuota',
            accountAccessKeysPerAccountQuota: 'AccountAccessKeysPerAccountQuota',
            attachedPoliciesPerGroupQuota: 'AttachedPoliciesPerGroupQuota',
            attachedPoliciesPerRoleQuota: 'AttachedPoliciesPerRoleQuota',
            attachedPoliciesPerUserQuota: 'AttachedPoliciesPerUserQuota',
            attachedSystemPoliciesPerGroupQuota: 'AttachedSystemPoliciesPerGroupQuota',
            attachedSystemPoliciesPerRoleQuota: 'AttachedSystemPoliciesPerRoleQuota',
            attachedSystemPoliciesPerUserQuota: 'AttachedSystemPoliciesPerUserQuota',
            authorizedClientPerUserQuota: 'AuthorizedClientPerUserQuota',
            conditionsPerAKPolicyQuota: 'ConditionsPerAKPolicyQuota',
            groups: 'Groups',
            groupsPerUserQuota: 'GroupsPerUserQuota',
            groupsQuota: 'GroupsQuota',
            IPItemsPerAKPolicyQuota: 'IPItemsPerAKPolicyQuota',
            MFADevices: 'MFADevices',
            MFADevicesInUse: 'MFADevicesInUse',
            policies: 'Policies',
            policiesQuota: 'PoliciesQuota',
            policySizeQuota: 'PolicySizeQuota',
            roles: 'Roles',
            rolesQuota: 'RolesQuota',
            serviceCredentialsPerUserPerServiceQuota: 'ServiceCredentialsPerUserPerServiceQuota',
            users: 'Users',
            usersQuota: 'UsersQuota',
            versionsPerPolicyQuota: 'VersionsPerPolicyQuota',
            virtualMFADevicesQuota: 'VirtualMFADevicesQuota',
        };
    }
    static types() {
        return {
            accessKeysPerUserQuota: 'number',
            accountAccessKeysPerAccountQuota: 'number',
            attachedPoliciesPerGroupQuota: 'number',
            attachedPoliciesPerRoleQuota: 'number',
            attachedPoliciesPerUserQuota: 'number',
            attachedSystemPoliciesPerGroupQuota: 'number',
            attachedSystemPoliciesPerRoleQuota: 'number',
            attachedSystemPoliciesPerUserQuota: 'number',
            authorizedClientPerUserQuota: 'number',
            conditionsPerAKPolicyQuota: 'number',
            groups: 'number',
            groupsPerUserQuota: 'number',
            groupsQuota: 'number',
            IPItemsPerAKPolicyQuota: 'number',
            MFADevices: 'number',
            MFADevicesInUse: 'number',
            policies: 'number',
            policiesQuota: 'number',
            policySizeQuota: 'number',
            roles: 'number',
            rolesQuota: 'number',
            serviceCredentialsPerUserPerServiceQuota: 'number',
            users: 'number',
            usersQuota: 'number',
            versionsPerPolicyQuota: 'number',
            virtualMFADevicesQuota: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAccountSummaryResponseBodySummaryMap = GetAccountSummaryResponseBodySummaryMap;
class GetAccountSummaryResponseBody extends $dara.Model {
    static names() {
        return {
            requestId: 'RequestId',
            summaryMap: 'SummaryMap',
        };
    }
    static types() {
        return {
            requestId: 'string',
            summaryMap: GetAccountSummaryResponseBodySummaryMap,
        };
    }
    validate() {
        if (this.summaryMap && typeof this.summaryMap.validate === 'function') {
            this.summaryMap.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAccountSummaryResponseBody = GetAccountSummaryResponseBody;
//# sourceMappingURL=GetAccountSummaryResponseBody.js.map