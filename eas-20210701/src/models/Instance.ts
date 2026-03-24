// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Instance extends $dara.Model {
  /**
   * @remarks
   * The current hourly price of the spot instance.
   * 
   * @example
   * 0.444
   */
  currentAmount?: number;
  detached?: boolean;
  /**
   * @remarks
   * The IP address of the instance in the user-created VPC.
   * 
   * @example
   * 192.168.1.100
   */
  externalIP?: string;
  /**
   * @remarks
   * The port number of the instance in the user-created VPC.
   * 
   * @example
   * 8080
   */
  externalInstancePort?: number;
  /**
   * @remarks
   * The IP address of the host where the instance resides.
   * 
   * @example
   * 11.0.XX.XX
   */
  hostIP?: string;
  /**
   * @remarks
   * The name of the host where the instance resides.
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
   * The instance name.
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
   * The instance specification.
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  isLatest?: boolean;
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
   * Indicates whether the instance is isolated.
   * 
   * @example
   * false
   */
  isolated?: boolean;
  /**
   * @remarks
   * The last state of the instance.
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
   * The original hourly price of the spot instance before a discount is used.
   * 
   * @example
   * 2.2
   */
  originalAmount?: number;
  /**
   * @remarks
   * The number of processes that have started for the instance.
   * 
   * @example
   * 1
   */
  readyProcesses?: number;
  /**
   * @remarks
   * The reason for which the instance is in the current state.
   * 
   * @example
   * RUNNING
   */
  reason?: string;
  replicaName?: string;
  /**
   * @remarks
   * The type of the resource group to which the instance belongs. Valid values: PublicResource and PrivateResource.
   * 
   * @example
   * PublicResource
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of times for which the instance is restarted.
   * 
   * @example
   * 1
   */
  restartCount?: number;
  /**
   * @remarks
   * The service role of the instance. Valid values: Queue, DataLoader, and Standard.
   * 
   * @example
   * Standard
   */
  role?: string;
  /**
   * @remarks
   * The time when the instance was started. This parameter is deprecated. StartTime is used instead.
   * 
   * @example
   * 2021-05-27T09:46:05Z
   * 
   * @deprecated
   */
  startAt?: string;
  /**
   * @remarks
   * The time when the instance was started.
   * 
   * @example
   * 2021-05-27T09:46:05Z
   */
  startTime?: string;
  /**
   * @remarks
   * The current state of the instance.
   * 
   * Valid values:
   * 
   * *   Terminating
   * *   Succeeded
   * *   Unknown
   * *   Failed
   * *   Running
   * *   Pending
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The IP address of the host in the VPC.
   * 
   * @example
   * 192.168.xx.xx
   */
  tenantHostIP?: string;
  /**
   * @remarks
   * The IP address of the instance in the VPC.
   * 
   * @example
   * 192.168.xx.xx
   */
  tenantInstanceIP?: string;
  /**
   * @remarks
   * The total number of processes that the instance contains.
   * 
   * @example
   * 1
   */
  totalProcesses?: number;
  /**
   * @remarks
   * The zone to which the instance belongs.
   * 
   * @example
   * cn-shanghai-a
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
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

