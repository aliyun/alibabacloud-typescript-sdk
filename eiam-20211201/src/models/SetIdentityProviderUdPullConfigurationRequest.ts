// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdentityProviderUdPullConfigurationRequestLdapUdPullConfig extends $dara.Model {
  /**
   * @remarks
   * The group member identifier.
   * 
   * @example
   * member
   */
  groupMemberAttributeName?: string;
  /**
   * @remarks
   * The group objectClass.
   * 
   * @example
   * group
   */
  groupObjectClass?: string;
  /**
   * @remarks
   * The custom group filter.
   * 
   * @example
   * (|(cn=test)(group=test@test.com))
   */
  groupObjectClassCustomFilter?: string;
  /**
   * @remarks
   * The organizational unit objectClass.
   * 
   * @example
   * organizationUnit,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * The user objectClass.
   * 
   * @example
   * userPrincipalName, mail
   */
  userObjectClass?: string;
  /**
   * @remarks
   * The custom user filter.
   * 
   * @example
   * (|(cn=test)(mail=test@test.com))
   */
  userObjectClassCustomFilter?: string;
  static names(): { [key: string]: string } {
    return {
      groupMemberAttributeName: 'GroupMemberAttributeName',
      groupObjectClass: 'GroupObjectClass',
      groupObjectClassCustomFilter: 'GroupObjectClassCustomFilter',
      organizationUnitObjectClass: 'OrganizationUnitObjectClass',
      userObjectClass: 'UserObjectClass',
      userObjectClassCustomFilter: 'UserObjectClassCustomFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMemberAttributeName: 'string',
      groupObjectClass: 'string',
      groupObjectClassCustomFilter: 'string',
      organizationUnitObjectClass: 'string',
      userObjectClass: 'string',
      userObjectClassCustomFilter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationRequestPeriodicSyncConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression. This parameter is required when periodicSyncType is set to cron.
   * 
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  /**
   * @remarks
   * The time points for synchronization. This parameter is required when periodicSyncType is set to time. For example, if you set this parameter to [3, 5], the synchronization is performed from 03:00 to 04:00 and from 05:00 to 06:00.
   */
  periodicSyncTimes?: number[];
  /**
   * @remarks
   * The type.
   * 
   * @example
   * cron
   */
  periodicSyncType?: string;
  static names(): { [key: string]: string } {
    return {
      periodicSyncCron: 'PeriodicSyncCron',
      periodicSyncTimes: 'PeriodicSyncTimes',
      periodicSyncType: 'PeriodicSyncType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodicSyncCron: 'string',
      periodicSyncTimes: { 'type': 'array', 'itemType': 'number' },
      periodicSyncType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.periodicSyncTimes)) {
      $dara.Model.validateArray(this.periodicSyncTimes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationRequestPullProtectedRule extends $dara.Model {
  /**
   * @remarks
   * The threshold for the number of groups to be deleted. If the number of groups to be deleted exceeds this value, the synchronization task is stopped.
   * 
   * @example
   * 10
   */
  groupDeletedThreshold?: number;
  /**
   * @remarks
   * The threshold for the number of organizational units to be deleted. If the number of organizational units to be deleted exceeds this value, the synchronization task is stopped.
   * 
   * @example
   * 10
   */
  organizationalUnitDeletedThreshold?: number;
  /**
   * @remarks
   * The threshold for the number of users to be deleted. If the number of users to be deleted exceeds this value, the synchronization task is stopped.
   * 
   * @example
   * 30
   */
  userDeletedThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      groupDeletedThreshold: 'GroupDeletedThreshold',
      organizationalUnitDeletedThreshold: 'OrganizationalUnitDeletedThreshold',
      userDeletedThreshold: 'UserDeletedThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupDeletedThreshold: 'number',
      organizationalUnitDeletedThreshold: 'number',
      userDeletedThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationRequestUdSyncScopeConfig extends $dara.Model {
  /**
   * @remarks
   * The list of source nodes for synchronization.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * The target node for synchronization.
   * 
   * @example
   * ou_asdaq1addsxzdq1XXX
   */
  targetScope?: string;
  static names(): { [key: string]: string } {
    return {
      sourceScopes: 'SourceScopes',
      targetScope: 'TargetScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceScopes: { 'type': 'array', 'itemType': 'string' },
      targetScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceScopes)) {
      $dara.Model.validateArray(this.sourceScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The group synchronization status. Valid values:
   * 
   * - disabled: The feature is disabled.
   * 
   * - enabled: The feature is enabled.
   * 
   * @example
   * disabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * The identity provider ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * The status of incremental callback. This parameter specifies whether to process incremental callback data from the IdP. Valid values:
   * 
   * - disabled: The feature is disabled.
   * 
   * - enabled: The feature is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The configurations of LDAP synchronization.
   */
  ldapUdPullConfig?: SetIdentityProviderUdPullConfigurationRequestLdapUdPullConfig;
  /**
   * @remarks
   * The scheduled synchronization configuration.
   */
  periodicSyncConfig?: SetIdentityProviderUdPullConfigurationRequestPeriodicSyncConfig;
  /**
   * @remarks
   * The status of scheduled check. This parameter specifies whether to periodically check for data inconsistencies between IDaaS and the IdP. Valid values:
   * 
   * - disabled: The feature is disabled.
   * 
   * - enabled: The feature is enabled.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * The inbound synchronization protection rule.
   */
  pullProtectedRule?: SetIdentityProviderUdPullConfigurationRequestPullProtectedRule;
  /**
   * @remarks
   * The inbound synchronization configuration.
   */
  udSyncScopeConfig?: SetIdentityProviderUdPullConfigurationRequestUdSyncScopeConfig;
  static names(): { [key: string]: string } {
    return {
      groupSyncStatus: 'GroupSyncStatus',
      identityProviderId: 'IdentityProviderId',
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      instanceId: 'InstanceId',
      ldapUdPullConfig: 'LdapUdPullConfig',
      periodicSyncConfig: 'PeriodicSyncConfig',
      periodicSyncStatus: 'PeriodicSyncStatus',
      pullProtectedRule: 'PullProtectedRule',
      udSyncScopeConfig: 'UdSyncScopeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupSyncStatus: 'string',
      identityProviderId: 'string',
      incrementalCallbackStatus: 'string',
      instanceId: 'string',
      ldapUdPullConfig: SetIdentityProviderUdPullConfigurationRequestLdapUdPullConfig,
      periodicSyncConfig: SetIdentityProviderUdPullConfigurationRequestPeriodicSyncConfig,
      periodicSyncStatus: 'string',
      pullProtectedRule: SetIdentityProviderUdPullConfigurationRequestPullProtectedRule,
      udSyncScopeConfig: SetIdentityProviderUdPullConfigurationRequestUdSyncScopeConfig,
    };
  }

  validate() {
    if(this.ldapUdPullConfig && typeof (this.ldapUdPullConfig as any).validate === 'function') {
      (this.ldapUdPullConfig as any).validate();
    }
    if(this.periodicSyncConfig && typeof (this.periodicSyncConfig as any).validate === 'function') {
      (this.periodicSyncConfig as any).validate();
    }
    if(this.pullProtectedRule && typeof (this.pullProtectedRule as any).validate === 'function') {
      (this.pullProtectedRule as any).validate();
    }
    if(this.udSyncScopeConfig && typeof (this.udSyncScopeConfig as any).validate === 'function') {
      (this.udSyncScopeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

