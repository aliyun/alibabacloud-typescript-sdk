// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Instance extends $dara.Model {
  /**
   * @remarks
   * The creation time of the instance.
   * 
   * @example
   * 2021-05-27T09:46:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The current hourly price of the spot instance.
   * 
   * @example
   * 0.444
   */
  currentAmount?: number;
  /**
   * @remarks
   * Indicates whether the instance is removed from active service rotation.
   * 
   * @example
   * false
   */
  detached?: boolean;
  /**
   * @remarks
   * The IP address of the instance in your VPC.
   * 
   * @example
   * 192.168.1.100
   */
  externalIP?: string;
  /**
   * @remarks
   * The port number of the instance in your VPC.
   * 
   * @example
   * 8080
   */
  externalInstancePort?: number;
  /**
   * @remarks
   * The IP address of the instance\\"s host.
   * 
   * @example
   * 11.0.XX.XX
   */
  hostIP?: string;
  /**
   * @remarks
   * The name of the instance\\"s host.
   * 
   * @example
   * smart-scene-cls-854dbdc99d-****
   */
  hostName?: string;
  /**
   * @remarks
   * The internal IP address of the instance.
   * 
   * @example
   * 172.17.0.17
   */
  innerIP?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * foo-5fc8946767-v****
   */
  instanceName?: string;
  /**
   * @remarks
   * The network port of the instance.
   * 
   * @example
   * 8080
   */
  instancePort?: number;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the instance is running the latest version.
   * 
   * @example
   * true
   */
  isLatest?: boolean;
  /**
   * @remarks
   * Indicates whether the instance is a replica.
   * 
   * @example
   * false
   */
  isReplica?: boolean;
  /**
   * @remarks
   * Indicates whether the instance is a spot instance.
   * 
   * @example
   * false
   */
  isSpot?: boolean;
  /**
   * @remarks
   * Indicates whether the instance accepts traffic.
   * 
   * @example
   * false
   */
  isolated?: boolean;
  /**
   * @remarks
   * The status of the instance when it last exited.
   */
  lastState?: { [key: string]: any }[];
  /**
   * @remarks
   * The namespace of the instance.
   * 
   * @example
   * foo
   */
  namespace?: string;
  /**
   * @remarks
   * The original price of the spot instance before discounts.
   * 
   * @example
   * 2.2
   */
  originalAmount?: number;
  /**
   * @remarks
   * The number of processes that have started in the instance.
   * 
   * @example
   * 1
   */
  readyProcesses?: number;
  /**
   * @remarks
   * The identifier for the current status of the instance.
   * 
   * @example
   * RUNNING
   */
  reason?: string;
  /**
   * @remarks
   * The name of the replica.
   * 
   * @example
   * xwq-sglang-dist-7dff0
   */
  replicaName?: string;
  /**
   * @remarks
   * The type of the resource group to which the instance belongs. Valid values include PublicResource and PrivateResource.
   * 
   * @example
   * PublicResource
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of times the instance has been restarted.
   * 
   * @example
   * 1
   */
  restartCount?: number;
  /**
   * @remarks
   * The server role of the instance. Valid values include Queue, DataLoader, and Standard.
   * 
   * @example
   * Standard
   */
  role?: string;
  /**
   * @remarks
   * The start time of the instance. (Deprecated. Use StartTime instead.)
   * 
   * @example
   * 2021-05-27T09:46:05Z
   * 
   * @deprecated
   */
  startAt?: string;
  /**
   * @remarks
   * The start time of the instance.
   * 
   * @example
   * 2021-05-27T09:46:05Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The IP address of the host in the dedicated network.
   * 
   * @example
   * 192.168.xx.xx
   */
  tenantHostIP?: string;
  /**
   * @remarks
   * The IP address of the instance in the dedicated network.
   * 
   * @example
   * 192.168.xx.xx
   */
  tenantInstanceIP?: string;
  /**
   * @remarks
   * The total number of processes for the instance.
   * 
   * @example
   * 1
   */
  totalProcesses?: number;
  /**
   * @remarks
   * The zone where the instance is located.
   * 
   * @example
   * cn-shanghai-a
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      currentAmount: 'CurrentAmount',
      detached: 'Detached',
      externalIP: 'ExternalIP',
      externalInstancePort: 'ExternalInstancePort',
      hostIP: 'HostIP',
      hostName: 'HostName',
      innerIP: 'InnerIP',
      instanceName: 'InstanceName',
      instancePort: 'InstancePort',
      instanceType: 'InstanceType',
      isLatest: 'IsLatest',
      isReplica: 'IsReplica',
      isSpot: 'IsSpot',
      isolated: 'Isolated',
      lastState: 'LastState',
      namespace: 'Namespace',
      originalAmount: 'OriginalAmount',
      readyProcesses: 'ReadyProcesses',
      reason: 'Reason',
      replicaName: 'ReplicaName',
      resourceType: 'ResourceType',
      restartCount: 'RestartCount',
      role: 'Role',
      startAt: 'StartAt',
      startTime: 'StartTime',
      status: 'Status',
      tenantHostIP: 'TenantHostIP',
      tenantInstanceIP: 'TenantInstanceIP',
      totalProcesses: 'TotalProcesses',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      currentAmount: 'number',
      detached: 'boolean',
      externalIP: 'string',
      externalInstancePort: 'number',
      hostIP: 'string',
      hostName: 'string',
      innerIP: 'string',
      instanceName: 'string',
      instancePort: 'number',
      instanceType: 'string',
      isLatest: 'boolean',
      isReplica: 'boolean',
      isSpot: 'boolean',
      isolated: 'boolean',
      lastState: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      namespace: 'string',
      originalAmount: 'number',
      readyProcesses: 'number',
      reason: 'string',
      replicaName: 'string',
      resourceType: 'string',
      restartCount: 'number',
      role: 'string',
      startAt: 'string',
      startTime: 'string',
      status: 'string',
      tenantHostIP: 'string',
      tenantInstanceIP: 'string',
      totalProcesses: 'number',
      zone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lastState)) {
      $dara.Model.validateArray(this.lastState);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

