// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyInstanceDefaultEndpoint extends $dara.Model {
  /**
   * @remarks
   * The domain name of the instance.
   * 
   * @example
   * example-xxx.aliyunidaas.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The status of the instance domain name. Valid values:
   * - resolved: Resolved.
   * - unresolved: Not resolved.
   * 
   * @example
   * resolved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceDomainConfig extends $dara.Model {
  /**
   * @remarks
   * The default domain name of the instance.
   * 
   * @example
   * login.example.com
   */
  defaultDomain?: string;
  /**
   * @remarks
   * The initialization domain name of the instance.
   * 
   * @example
   * rx72nxxx.example.com
   */
  initDomain?: string;
  /**
   * @remarks
   * The automatic redirect status of the initialization domain name. Valid values:
   * - enabled: Enabled.
   * 
   * - disabled: Disabled.
   * 
   * @example
   * disabled
   */
  initDomainAutoRedirectStatus?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomain: 'DefaultDomain',
      initDomain: 'InitDomain',
      initDomainAutoRedirectStatus: 'InitDomainAutoRedirectStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomain: 'string',
      initDomain: 'string',
      initDomainAutoRedirectStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceReplicationConfiguration extends $dara.Model {
  /**
   * @example
   * idaas_xxxx
   */
  backupInstanceId?: string;
  /**
   * @example
   * cn-beijing
   */
  backupInstanceRegionId?: string;
  /**
   * @example
   * idaas_xxxx
   */
  primaryInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  primaryInstanceRegionId?: string;
  /**
   * @example
   * 1778499337000
   */
  replicationCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupInstanceId: 'BackupInstanceId',
      backupInstanceRegionId: 'BackupInstanceRegionId',
      primaryInstanceId: 'PrimaryInstanceId',
      primaryInstanceRegionId: 'PrimaryInstanceRegionId',
      replicationCreateTime: 'ReplicationCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupInstanceId: 'string',
      backupInstanceRegionId: 'string',
      primaryInstanceId: 'string',
      primaryInstanceRegionId: 'string',
      replicationCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1550115455000
   */
  createTime?: number;
  /**
   * @example
   * enabled
   */
  crossRegionReplication?: string;
  /**
   * @example
   * primary
   */
  crossRegionReplicationRole?: string;
  /**
   * @remarks
   * The default domain name of the instance. This field is no longer maintained. Use the DomainConfig fields or refer to the query domain name list operation instead.
   */
  defaultEndpoint?: GetInstanceResponseBodyInstanceDefaultEndpoint;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * instance_for_test
   */
  description?: string;
  /**
   * @remarks
   * The domain name configuration of the instance.
   */
  domainConfig?: GetInstanceResponseBodyInstanceDomainConfig;
  /**
   * @remarks
   * The public egress CIDR blocks of the instance. For example, during Active Directory (AD) account synchronization, the EIAM instance accesses your AD server through these public CIDR blocks.
   */
  egressAddresses?: string[];
  /**
   * @example
   * inactive
   */
  instanceFailoverStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_abt3pfwojojcq323si6g5xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ServiceCode of the Alibaba Cloud service that manages the instance.
   * 
   * @example
   * sase
   * 
   * **if can be null:**
   * false
   */
  managedServiceCode?: string;
  replicationConfiguration?: GetInstanceResponseBodyInstanceReplicationConfiguration;
  /**
   * @remarks
   * Indicates whether the instance is managed by an Alibaba Cloud service.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The instance status. Valid values:
   * - creating: Being created.
   * - running: Running.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossRegionReplication: 'CrossRegionReplication',
      crossRegionReplicationRole: 'CrossRegionReplicationRole',
      defaultEndpoint: 'DefaultEndpoint',
      description: 'Description',
      domainConfig: 'DomainConfig',
      egressAddresses: 'EgressAddresses',
      instanceFailoverStatus: 'InstanceFailoverStatus',
      instanceId: 'InstanceId',
      managedServiceCode: 'ManagedServiceCode',
      replicationConfiguration: 'ReplicationConfiguration',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      crossRegionReplication: 'string',
      crossRegionReplicationRole: 'string',
      defaultEndpoint: GetInstanceResponseBodyInstanceDefaultEndpoint,
      description: 'string',
      domainConfig: GetInstanceResponseBodyInstanceDomainConfig,
      egressAddresses: { 'type': 'array', 'itemType': 'string' },
      instanceFailoverStatus: 'string',
      instanceId: 'string',
      managedServiceCode: 'string',
      replicationConfiguration: GetInstanceResponseBodyInstanceReplicationConfiguration,
      serviceManaged: 'boolean',
      status: 'string',
    };
  }

  validate() {
    if(this.defaultEndpoint && typeof (this.defaultEndpoint as any).validate === 'function') {
      (this.defaultEndpoint as any).validate();
    }
    if(this.domainConfig && typeof (this.domainConfig as any).validate === 'function') {
      (this.domainConfig as any).validate();
    }
    if(Array.isArray(this.egressAddresses)) {
      $dara.Model.validateArray(this.egressAddresses);
    }
    if(this.replicationConfiguration && typeof (this.replicationConfiguration as any).validate === 'function') {
      (this.replicationConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance information.
   */
  instance?: GetInstanceResponseBodyInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: GetInstanceResponseBodyInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

