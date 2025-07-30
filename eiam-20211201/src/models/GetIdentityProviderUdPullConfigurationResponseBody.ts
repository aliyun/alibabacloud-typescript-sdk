// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationLdapUdPullConfig extends $dara.Model {
  /**
   * @remarks
   * Group Member Identifier
   * 
   * @example
   * group
   */
  groupMemberAttributeName?: string;
  /**
   * @remarks
   * Group ObjectClass
   * 
   * @example
   * member
   */
  groupObjectClass?: string;
  /**
   * @remarks
   * Group Custom Filter
   * 
   * @example
   * (|(cn=test)(group=test@test.com))
   */
  groupObjectClassCustomFilter?: string;
  /**
   * @remarks
   * Organization ObjectClass
   * 
   * @example
   * ou,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * User ObjectClass
   * 
   * @example
   * ou,top
   */
  userObjectClass?: string;
  /**
   * @remarks
   * User ObjectClass Custom Filter
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

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPeriodicSyncConfig extends $dara.Model {
  /**
   * @remarks
   * Cron expression
   * 
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  /**
   * @remarks
   * Execution time slots, for example 3,5, meaning the task runs once between 03:00–04:00 and once between 05:00–06:00.
   * 
   * @example
   * [3,5]
   */
  periodicSyncTimes?: number;
  /**
   * @remarks
   * type
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
      periodicSyncTimes: 'number',
      periodicSyncType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPullProtectedRule extends $dara.Model {
  /**
   * @remarks
   * Group Deletion Threshold: If the number of deleted groups exceeds this value, the synchronization task will be terminated.
   * 
   * @example
   * 10
   */
  groupDeletedThreshold?: number;
  /**
   * @remarks
   * Organization Deletion Threshold: If the number of deleted organizations exceeds this value, the synchronization task will be terminated.
   * 
   * @example
   * 10
   */
  organizationalUnitDeletedThreshold?: number;
  /**
   * @remarks
   * Account Deletion Threshold: If the number of deleted users exceeds this value, the synchronization task will be terminated.
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

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationUdSyncScopeConfig extends $dara.Model {
  /**
   * @remarks
   * Synchronization Source Node
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * Synchronization Target Node
   * 
   * @example
   * ou_asjdfhaskfhw213mnsj33sXXX
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

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfiguration extends $dara.Model {
  /**
   * @remarks
   * Group Synchronization Status
   * Possible values:
   * 
   * Disabled: disabled
   * 
   * Enabled: enabled
   * 
   * @example
   * enabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * Identity provider ID
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * Incremental Callback Status: Whether to process incremental callback data from the IdP
   * 
   * @example
   * enabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * LDAP Synchronization Side Related Configuration Information
   */
  ldapUdPullConfig?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationLdapUdPullConfig;
  /**
   * @remarks
   * Scheduled sync configuration
   */
  periodicSyncConfig?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPeriodicSyncConfig;
  /**
   * @remarks
   * Scheduled Validation Status: Whether to periodically validate data discrepancies between IDaaS and the Identity Provider. Possible values:
   * 
   * Disabled: disabled
   * 
   * Enabled: enabled
   * 
   * @example
   * enabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * Inbound Synchronization Protection Rule Configuration
   */
  pullProtectedRule?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPullProtectedRule;
  /**
   * @remarks
   * Synchronization Scope Configuration Information
   */
  udSyncScopeConfig?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationUdSyncScopeConfig;
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
      ldapUdPullConfig: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationLdapUdPullConfig,
      periodicSyncConfig: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPeriodicSyncConfig,
      periodicSyncStatus: 'string',
      pullProtectedRule: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPullProtectedRule,
      udSyncScopeConfig: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationUdSyncScopeConfig,
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

export class GetIdentityProviderUdPullConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * Inbound Synchronization Configuration Information
   */
  udPullConfiguration?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      udPullConfiguration: 'UdPullConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      udPullConfiguration: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfiguration,
    };
  }

  validate() {
    if(this.udPullConfiguration && typeof (this.udPullConfiguration as any).validate === 'function') {
      (this.udPullConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

