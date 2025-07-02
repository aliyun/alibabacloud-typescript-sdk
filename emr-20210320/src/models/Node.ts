// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Node extends $dara.Model {
  /**
   * @remarks
   * 节点是否自动续费。
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * 节点自动续费时长。
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * 节点自动续费时长单位。
   * 
   * @example
   * Month
   */
  autoRenewDurationUnit?: string;
  createTime?: number;
  /**
   * @remarks
   * 节点过期时间。
   * 
   * @example
   * 1603728394857
   */
  expireTime?: number;
  /**
   * @remarks
   * 实例类型。
   * 
   * @example
   * ecs.g6e.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * 运维模式状态。取值范围：
   * - ON：处于运维模式。
   * - OFF：处于非运维模式。
   * 
   * 为空表示处于非运维模式。
   */
  maintenanceStatus?: string;
  /**
   * @remarks
   * 节点组ID。
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * 节点组类型。
   * 
   * @example
   * CORE
   */
  nodeGroupType?: string;
  /**
   * @remarks
   * 节点ID。
   * 
   * @example
   * i-bp1cudc25w2bfwl5****
   */
  nodeId?: string;
  /**
   * @remarks
   * 节点名称。
   * 
   * @example
   * core1-1
   */
  nodeName?: string;
  /**
   * @remarks
   * 节点状态。取值范围：
   * - Pending：创建中。
   * - Starting：启动中。
   * - Running：运行中。
   * - Stopping：停止中。
   * - Stopped：已停止。
   * - Terminated：已终止。
   * 
   * @example
   * Running
   */
  nodeState?: string;
  /**
   * @remarks
   * 私网IP。
   * 
   * @example
   * 10.10.10.1
   */
  privateIp?: string;
  /**
   * @remarks
   * 公网IP。
   * 
   * @example
   * 42.120.75.***
   */
  publicIp?: string;
  /**
   * @remarks
   * 可用区ID。
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

