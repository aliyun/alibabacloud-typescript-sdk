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
   * The status of the instance endpoint. Valid values:
   * - resolved: Resolved.
   * - unresolved: Unresolved.
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
   * @example
   * idaas_xxxxxx
   */
  backupInstanceId?: string;
  /**
   * @example
   * cn-beijing
   */
  backupInstanceRegionId?: string;
  /**
   * @example
   * idaas_xxxxxx
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
   * The default endpoint of the instance.
   */
  defaultEndpoint?: ListInstancesResponseBodyInstancesDefaultEndpoint;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * instance_for_test
   */
  description?: string;
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
   * idaas_eypq6ljgyeuwmlw672sulxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The service code of the Alibaba Cloud service that manages the instance.
   * 
   * @example
   * sase
   */
  managedServiceCode?: string;
  replicationConfiguration?: ListInstancesResponseBodyInstancesReplicationConfiguration;
  /**
   * @remarks
   * Indicates whether the instance is managed by an Alibaba Cloud service.
   * 
   * @example
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
   * The total number of entries in the list.
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

