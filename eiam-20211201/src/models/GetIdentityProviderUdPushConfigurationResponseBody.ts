// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationLdapUdPushConfig extends $dara.Model {
  /**
   * @remarks
   * The organization object class.
   * 
   * @example
   * ou,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * The organization RDN.
   * 
   * @example
   * ou
   */
  organizationalUnitRdn?: string;
  /**
   * @remarks
   * Specifies whether to synchronize passwords.
   * 
   * @example
   * enabled
   */
  passwordSyncStatus?: string;
  /**
   * @remarks
   * The user object class.
   * 
   * @example
   * user,top
   */
  userObjectClass?: string;
  /**
   * @remarks
   * The user RDN.
   * 
   * @example
   * cn
   */
  userRdn?: string;
  static names(): { [key: string]: string } {
    return {
      organizationUnitObjectClass: 'OrganizationUnitObjectClass',
      organizationalUnitRdn: 'OrganizationalUnitRdn',
      passwordSyncStatus: 'PasswordSyncStatus',
      userObjectClass: 'UserObjectClass',
      userRdn: 'UserRdn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationUnitObjectClass: 'string',
      organizationalUnitRdn: 'string',
      passwordSyncStatus: 'string',
      userObjectClass: 'string',
      userRdn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationPeriodicSyncConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  /**
   * @remarks
   * The collection of time points.
   */
  periodicSyncTimes?: string[];
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
      periodicSyncTimes: { 'type': 'array', 'itemType': 'string' },
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

export class GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationUdSyncScopeConfigs extends $dara.Model {
  /**
   * @remarks
   * The source synchronization node.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * The target synchronization node.
   * 
   * @example
   * 604352338
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

export class GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfiguration extends $dara.Model {
  /**
   * @remarks
   * The identity provider ID.
   * 
   * @example
   * idp_na2rzpyc67zr7ixdfy35zgrxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * Indicates whether to process incremental callback data from the IdP.
   * 
   * @example
   * enabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_7vdv3olzk36gymwtlaq6fixxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The LDAP synchronization configuration information.
   */
  ldapUdPushConfig?: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationLdapUdPushConfig;
  /**
   * @remarks
   * The periodic verification configuration.
   */
  periodicSyncConfig?: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationPeriodicSyncConfig;
  /**
   * @remarks
   * The periodic verification status.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * The outbound synchronization configuration information.
   */
  udSyncScopeConfigs?: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationUdSyncScopeConfigs[];
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      instanceId: 'InstanceId',
      ldapUdPushConfig: 'LdapUdPushConfig',
      periodicSyncConfig: 'PeriodicSyncConfig',
      periodicSyncStatus: 'PeriodicSyncStatus',
      udSyncScopeConfigs: 'UdSyncScopeConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      incrementalCallbackStatus: 'string',
      instanceId: 'string',
      ldapUdPushConfig: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationLdapUdPushConfig,
      periodicSyncConfig: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationPeriodicSyncConfig,
      periodicSyncStatus: 'string',
      udSyncScopeConfigs: { 'type': 'array', 'itemType': GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationUdSyncScopeConfigs },
    };
  }

  validate() {
    if(this.ldapUdPushConfig && typeof (this.ldapUdPushConfig as any).validate === 'function') {
      (this.ldapUdPushConfig as any).validate();
    }
    if(this.periodicSyncConfig && typeof (this.periodicSyncConfig as any).validate === 'function') {
      (this.periodicSyncConfig as any).validate();
    }
    if(Array.isArray(this.udSyncScopeConfigs)) {
      $dara.Model.validateArray(this.udSyncScopeConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPushConfigurationResponseBody extends $dara.Model {
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
   * The outbound synchronization configuration.
   */
  udPushConfiguration?: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      udPushConfiguration: 'UdPushConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      udPushConfiguration: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfiguration,
    };
  }

  validate() {
    if(this.udPushConfiguration && typeof (this.udPushConfiguration as any).validate === 'function') {
      (this.udPushConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

