// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountSummaryResponseBodySummaryMap extends $dara.Model {
  /**
   * @remarks
   * The maximum number of AccessKey pairs that a Resource Access Management (RAM) user can have.
   * 
   * @example
   * 2
   */
  accessKeysPerUserQuota?: number;
  /**
   * @remarks
   * The maximum number of custom policies that can be added to a RAM user group.
   * 
   * @example
   * 5
   */
  attachedPoliciesPerGroupQuota?: number;
  /**
   * @remarks
   * The maximum number of custom policies that can be added to a RAM role.
   * 
   * @example
   * 5
   */
  attachedPoliciesPerRoleQuota?: number;
  /**
   * @remarks
   * The maximum number of custom policies that can be added to a RAM user.
   * 
   * @example
   * 10
   */
  attachedPoliciesPerUserQuota?: number;
  /**
   * @remarks
   * The maximum number of system policies that can be added to a RAM user group.
   * 
   * @example
   * 20
   */
  attachedSystemPoliciesPerGroupQuota?: number;
  /**
   * @remarks
   * The maximum number of system policies that can be added to a RAM role.
   * 
   * @example
   * 20
   */
  attachedSystemPoliciesPerRoleQuota?: number;
  /**
   * @remarks
   * The maximum number of system policies that can be added to a RAM user.
   * 
   * @example
   * 20
   */
  attachedSystemPoliciesPerUserQuota?: number;
  /**
   * @remarks
   * The maximum number of network access control policies that can be configured for an Alibaba Cloud account or AccessKey pair.
   * 
   * @example
   * 8
   */
  conditionsPerAKPolicyQuota?: number;
  /**
   * @remarks
   * The number of RAM user groups.
   * 
   * @example
   * 7
   */
  groups?: number;
  /**
   * @remarks
   * The maximum number of RAM user groups to which a RAM user can be added.
   * 
   * @example
   * 5
   */
  groupsPerUserQuota?: number;
  /**
   * @remarks
   * The maximum number of RAM user groups that can be created.
   * 
   * @example
   * 50
   */
  groupsQuota?: number;
  /**
   * @remarks
   * The maximum number of IP addresses that can be specified in an account-level AccessKey pair-based or AccessKey pair-level policy for network access control.
   * 
   * @example
   * 50
   */
  IPItemsPerAKPolicyQuota?: number;
  /**
   * @remarks
   * The number of virtual multi-factor authentication (MFA) devices.
   * 
   * @example
   * 13
   */
  MFADevices?: number;
  /**
   * @remarks
   * The number of virtual MFA devices in use.
   * 
   * @example
   * 2
   */
  MFADevicesInUse?: number;
  /**
   * @remarks
   * The number of custom policies.
   * 
   * @example
   * 13
   */
  policies?: number;
  /**
   * @remarks
   * The maximum number of custom policies that can be created.
   * 
   * @example
   * 1500
   */
  policiesQuota?: number;
  /**
   * @remarks
   * The maximum length of the policy content.
   * 
   * @example
   * 2048
   */
  policySizeQuota?: number;
  /**
   * @remarks
   * The number of RAM roles.
   * 
   * @example
   * 19
   */
  roles?: number;
  /**
   * @remarks
   * The maximum number of RAM roles that can be created.
   * 
   * @example
   * 1000
   */
  rolesQuota?: number;
  /**
   * @remarks
   * The number of RAM users.
   * 
   * @example
   * 9
   */
  users?: number;
  /**
   * @remarks
   * The maximum number of RAM users that can be created.
   * 
   * @example
   * 1000
   */
  usersQuota?: number;
  /**
   * @remarks
   * The maximum number of policy versions.
   * 
   * @example
   * 5
   */
  versionsPerPolicyQuota?: number;
  /**
   * @remarks
   * The maximum number of virtual MFA devices that can be created.
   * 
   * @example
   * 1000
   */
  virtualMFADevicesQuota?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeysPerUserQuota: 'AccessKeysPerUserQuota',
      attachedPoliciesPerGroupQuota: 'AttachedPoliciesPerGroupQuota',
      attachedPoliciesPerRoleQuota: 'AttachedPoliciesPerRoleQuota',
      attachedPoliciesPerUserQuota: 'AttachedPoliciesPerUserQuota',
      attachedSystemPoliciesPerGroupQuota: 'AttachedSystemPoliciesPerGroupQuota',
      attachedSystemPoliciesPerRoleQuota: 'AttachedSystemPoliciesPerRoleQuota',
      attachedSystemPoliciesPerUserQuota: 'AttachedSystemPoliciesPerUserQuota',
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
      users: 'Users',
      usersQuota: 'UsersQuota',
      versionsPerPolicyQuota: 'VersionsPerPolicyQuota',
      virtualMFADevicesQuota: 'VirtualMFADevicesQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeysPerUserQuota: 'number',
      attachedPoliciesPerGroupQuota: 'number',
      attachedPoliciesPerRoleQuota: 'number',
      attachedPoliciesPerUserQuota: 'number',
      attachedSystemPoliciesPerGroupQuota: 'number',
      attachedSystemPoliciesPerRoleQuota: 'number',
      attachedSystemPoliciesPerUserQuota: 'number',
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
      users: 'number',
      usersQuota: 'number',
      versionsPerPolicyQuota: 'number',
      virtualMFADevicesQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 81313F5E-3C85-478F-BCC9-E1B70E4556DB
   */
  requestId?: string;
  /**
   * @remarks
   * The overview information about the Alibaba Cloud account.
   */
  summaryMap?: GetAccountSummaryResponseBodySummaryMap;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      summaryMap: 'SummaryMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      summaryMap: GetAccountSummaryResponseBodySummaryMap,
    };
  }

  validate() {
    if(this.summaryMap && typeof (this.summaryMap as any).validate === 'function') {
      (this.summaryMap as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

