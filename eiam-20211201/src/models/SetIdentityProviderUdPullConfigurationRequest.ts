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
   * The group ObjectClass.
   * 
   * @example
   * group
   */
  groupObjectClass?: string;
  /**
   * @remarks
   * The custom filter for groups.
   * 
   * @example
   * (|(cn=test)(group=test@test.com))
   */
  groupObjectClassCustomFilter?: string;
  /**
   * @remarks
   * The organizational unit ObjectClass.
   * 
   * @example
   * organizationUnit,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * The user ObjectClass.
   * 
   * @example
   * userPrincipalName, mail
   */
  userObjectClass?: string;
  /**
   * @remarks
   * The custom filter for users.
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
   * The execution time points. This parameter is required when periodicSyncType is set to time. For example, [3, 5] indicates that the task runs once between 3:00 and 4:00 and once between 5:00 and 6:00.
   */
  periodicSyncTimes?: number[];
  /**
   * @remarks
   * The type of periodic synchronization.
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
   * The threshold for the number of deleted groups. If the number of deleted groups exceeds this value, the synchronization task is terminated.
   * 
   * @example
   * 10
   */
  groupDeletedThreshold?: number;
  /**
   * @remarks
   * The threshold for the number of deleted organizational units. If the number of deleted organizational units exceeds this value, the synchronization task is terminated.
   * 
   * @example
   * 10
   */
  organizationalUnitDeletedThreshold?: number;
  /**
   * @remarks
   * The threshold for the number of deleted accounts. If the number of deleted users exceeds this value, the synchronization task is terminated.
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
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
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
   * Specifies whether to process incremental callback data from the IdP. Valid values:
   * 
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
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
   * The LDAP synchronization configuration.
   */
  ldapUdPullConfig?: SetIdentityProviderUdPullConfigurationRequestLdapUdPullConfig;
  /**
   * @remarks
   * The periodic synchronization configuration.
   */
  periodicSyncConfig?: SetIdentityProviderUdPullConfigurationRequestPeriodicSyncConfig;
  /**
   * @remarks
   * Specifies whether to periodically verify data differences between IDaaS and the identity provider. Valid values:
   * 
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
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
   * The inbound synchronization scope configuration.
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

