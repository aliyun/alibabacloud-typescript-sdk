// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesDefaultEndpoint extends $dara.Model {
  /**
   * @remarks
   * The endpoint address of the instance.
   * 
   * @example
   * example-xxx.aliyunidaas.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The endpoint status. Valid values:
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

export class ListInstancesResponseBodyInstancesReplicationConfiguration extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the backup instance.
   * 
   * @example
   * idaas_xxxxxx
   */
  backupInstanceId?: string;
  /**
   * @remarks
   * The region ID of the backup instance.
   * 
   * @example
   * cn-beijing
   */
  backupInstanceRegionId?: string;
  /**
   * @remarks
   * The instance ID of the primary instance.
   * 
   * @example
   * idaas_xxxxxx
   */
  primaryInstanceId?: string;
  /**
   * @remarks
   * The region ID of the primary instance.
   * 
   * @example
   * cn-hangzhou
   */
  primaryInstanceRegionId?: string;
  /**
   * @remarks
   * The time when the disaster recovery data replication was created. The value is a UNIX timestamp in milliseconds.
   * 
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

export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1550115455000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether cross-region replication is enabled. Valid values: enabled or disabled.
   * 
   * @example
   * enabled
   */
  crossRegionReplication?: string;
  /**
   * @remarks
   * The cross-region replication role. Valid values: primary (primary instance) or backup (backup instance).
   * 
   * @example
   * primary
   */
  crossRegionReplicationRole?: string;
  /**
   * @remarks
   * The default endpoint of the instance.
   */
  defaultEndpoint?: ListInstancesResponseBodyInstancesDefaultEndpoint;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * instance_for_test
   */
  description?: string;
  /**
   * @remarks
   * The instance failover activation status. Valid values: active (activated) or inactive (not activated).
   * 
   * @example
   * inactive
   */
  instanceFailoverStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_eypq6ljgyeuwmlw672sulxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The service code of the cloud service that manages the instance.
   * 
   * @example
   * sase
   */
  managedServiceCode?: string;
  /**
   * @remarks
   * The replication configuration. This parameter is returned only when CrossRegionReplication is set to enabled.
   */
  replicationConfiguration?: ListInstancesResponseBodyInstancesReplicationConfiguration;
  /**
   * @remarks
   * Indicates whether the instance is managed by a cloud service.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
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
      defaultEndpoint: ListInstancesResponseBodyInstancesDefaultEndpoint,
      description: 'string',
      instanceFailoverStatus: 'string',
      instanceId: 'string',
      managedServiceCode: 'string',
      replicationConfiguration: ListInstancesResponseBodyInstancesReplicationConfiguration,
      serviceManaged: 'boolean',
      status: 'string',
    };
  }

  validate() {
    if(this.defaultEndpoint && typeof (this.defaultEndpoint as any).validate === 'function') {
      (this.defaultEndpoint as any).validate();
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

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance information.
   */
  instances?: ListInstancesResponseBodyInstances[];
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
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

