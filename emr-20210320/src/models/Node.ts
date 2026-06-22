// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Node extends $dara.Model {
  /**
   * @remarks
   * Whether auto-renewal is enabled for the node. Valid values:
   * 
   * - true: Auto-renewal is enabled.
   * 
   * - false: Auto-renewal is disabled.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration for the node.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * The unit of the auto-renewal duration.
   * 
   * @example
   * Month
   */
  autoRenewDurationUnit?: string;
  /**
   * @remarks
   * The creation time of the node.
   * 
   * @example
   * 1603728394857
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time of the node.
   * 
   * @example
   * 1603728394857
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance type of the node. This corresponds to an ECS instance type. You can call the ECS [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the available instance types.
   * 
   * @example
   * ecs.g7.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The maintenance status of the node. Valid values:
   * 
   * - ON: The node is in maintenance mode.
   * 
   * - OFF: The node is not in maintenance mode.
   * 
   * If this parameter is empty, the node is not in maintenance mode.
   */
  maintenanceStatus?: string;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The type of the node group. Valid values:
   * 
   * - MASTER: A master node group.
   * 
   * - CORE: A core node group.
   * 
   * - TASK: A task node group.
   * 
   * @example
   * CORE
   */
  nodeGroupType?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * i-bp1cudc25w2bfwl5****
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * core1-1
   */
  nodeName?: string;
  /**
   * @remarks
   * The state of the node. Valid values:
   * 
   * - Pending: The node is being created.
   * 
   * - Starting: The node is starting up.
   * 
   * - Running: The node is operational and running services.
   * 
   * - Stopping: The node is shutting down.
   * 
   * - Stopped: The node is powered off.
   * 
   * - Terminated: The node has been permanently deleted.
   * 
   * @example
   * Running
   */
  nodeState?: string;
  /**
   * @remarks
   * The private IP address of the node.
   * 
   * @example
   * ``10.10.**.**``
   */
  privateIp?: string;
  /**
   * @remarks
   * The public IP address of the node.
   * 
   * @example
   * 42.1.1.**
   */
  publicIp?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      instanceType: 'InstanceType',
      maintenanceStatus: 'MaintenanceStatus',
      nodeGroupId: 'NodeGroupId',
      nodeGroupType: 'NodeGroupType',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeState: 'NodeState',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      createTime: 'number',
      expireTime: 'number',
      instanceType: 'string',
      maintenanceStatus: 'string',
      nodeGroupId: 'string',
      nodeGroupType: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeState: 'string',
      privateIp: 'string',
      publicIp: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

