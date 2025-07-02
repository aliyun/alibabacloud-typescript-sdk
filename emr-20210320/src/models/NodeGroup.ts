// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CostOptimizedConfig } from "./CostOptimizedConfig";
import { DataDisk } from "./DataDisk";
import { PrivatePoolOptions } from "./PrivatePoolOptions";
import { SpotBidPrice } from "./SpotBidPrice";
import { NodeGroupStateChangeReason } from "./NodeGroupStateChangeReason";
import { SystemDisk } from "./SystemDisk";


export class NodeGroup extends $dara.Model {
  /**
   * @remarks
   * 安全组ID。
   * 
   * @example
   * ["sg-hp3abbae8lb6lmb1****"]
   */
  additionalSecurityGroupIds?: string[];
  /**
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * 成本优化模式配置。
   */
  costOptimizedConfig?: CostOptimizedConfig;
  /**
   * @remarks
   * 数据盘列表。
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * 部署集策略。取值范围：
   * - NONE：不适用部署集。
   * - CLUSTER：使用集群级别部署集。
   * - NODE_GROUP：使用节点组级别部署集。
   * 
   * 默认值：NONE。
   * 
   * @example
   * NONE
   */
  deploymentSetStrategy?: string;
  /**
   * @remarks
   * 节点组上部署的组件是否开启优雅下线。取值范围：
   * - true：开启优雅下线。
   * - false：不开启优雅下线。
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * 实例类型列表。
   * 
   * @example
   * ["ecs.g6.4xlarge"]
   */
  instanceTypes?: string[];
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
   * 节点组名称。最大长度128个字符。
   * 
   * @example
   * core-1
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * 节点组状态。
   * 
   * @example
   * CREATED
   */
  nodeGroupState?: string;
  /**
   * @remarks
   * 节点组类型。取值范围：
   * - MASTER：管理类型节点组。
   * - CORE：存储类型节点组。
   * - TASK：计算类型节点组。
   * 
   * @example
   * CORE
   */
  nodeGroupType?: string;
  /**
   * @remarks
   * - COST_OPTIMIZED：成本优化策略。
   * - PRIORITY：优先级策略。
   * 
   * @example
   * PRIORITY
   */
  nodeResizeStrategy?: string;
  /**
   * @remarks
   * 节点组付费类型。取值范围：
   * - PayAsYouGo：后付费，按量付费。
   * - Subscription：预付费，包年包月。
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  privatePoolOptions?: PrivatePoolOptions;
  /**
   * @remarks
   * 存活节点数量。
   * 
   * @example
   * 3
   */
  runningNodeCount?: number;
  spotBidPrices?: SpotBidPrice[];
  /**
   * @remarks
   * 开启补齐抢占式实例后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。取值范围：
   * - true：开启补齐抢占式实例。
   * - false：不开启补齐抢占式实例。
   * 
   * 默认值：false。
   * 
   * @example
   * true
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * 是否支持竞价实例。
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * 状态变化原因。
   */
  stateChangeReason?: NodeGroupStateChangeReason;
  /**
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * 系统盘信息。
   */
  systemDisk?: SystemDisk;
  /**
   * @remarks
   * 虚拟机交换机ID列表。
   * 
   * @example
   * ["vsw-hp35g7ya5ymw68mmg****"]
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * 是否开公网IP。取值范围：
   * - true：开公网。
   * - false：不开公网。
   * 
   * @example
   * false
   */
  withPublicIp?: boolean;
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
      additionalSecurityGroupIds: 'AdditionalSecurityGroupIds',
      compensateWithOnDemand: 'CompensateWithOnDemand',
      costOptimizedConfig: 'CostOptimizedConfig',
      dataDisks: 'DataDisks',
      deploymentSetStrategy: 'DeploymentSetStrategy',
      gracefulShutdown: 'GracefulShutdown',
      instanceTypes: 'InstanceTypes',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeGroupState: 'NodeGroupState',
      nodeGroupType: 'NodeGroupType',
      nodeResizeStrategy: 'NodeResizeStrategy',
      paymentType: 'PaymentType',
      privatePoolOptions: 'PrivatePoolOptions',
      runningNodeCount: 'RunningNodeCount',
      spotBidPrices: 'SpotBidPrices',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      spotStrategy: 'SpotStrategy',
      stateChangeReason: 'StateChangeReason',
      status: 'Status',
      systemDisk: 'SystemDisk',
      vSwitchIds: 'VSwitchIds',
      withPublicIp: 'WithPublicIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalSecurityGroupIds: { 'type': 'array', 'itemType': 'string' },
      compensateWithOnDemand: 'boolean',
      costOptimizedConfig: CostOptimizedConfig,
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentSetStrategy: 'string',
      gracefulShutdown: 'boolean',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeGroupState: 'string',
      nodeGroupType: 'string',
      nodeResizeStrategy: 'string',
      paymentType: 'string',
      privatePoolOptions: PrivatePoolOptions,
      runningNodeCount: 'number',
      spotBidPrices: { 'type': 'array', 'itemType': SpotBidPrice },
      spotInstanceRemedy: 'boolean',
      spotStrategy: 'string',
      stateChangeReason: NodeGroupStateChangeReason,
      status: 'string',
      systemDisk: SystemDisk,
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      withPublicIp: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalSecurityGroupIds)) {
      $dara.Model.validateArray(this.additionalSecurityGroupIds);
    }
    if(this.costOptimizedConfig && typeof (this.costOptimizedConfig as any).validate === 'function') {
      (this.costOptimizedConfig as any).validate();
    }
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    if(Array.isArray(this.spotBidPrices)) {
      $dara.Model.validateArray(this.spotBidPrices);
    }
    if(this.stateChangeReason && typeof (this.stateChangeReason as any).validate === 'function') {
      (this.stateChangeReason as any).validate();
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

