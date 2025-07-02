// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AutoScalingPolicy } from "./AutoScalingPolicy";
import { CostOptimizedConfig } from "./CostOptimizedConfig";
import { DataDisk } from "./DataDisk";
import { PrivatePoolOptions } from "./PrivatePoolOptions";
import { SpotBidPrice } from "./SpotBidPrice";
import { SubscriptionConfig } from "./SubscriptionConfig";
import { SystemDisk } from "./SystemDisk";


export class NodeGroupConfig extends $dara.Model {
  /**
   * @remarks
   * 附加安全组。除集群设置的安全组外，为节点组单独设置的附加安全组。数组元数个数N的取值范围：0~2。
   * 
   * @example
   * ["sg-hp3abbae8lb6lmb1****"]
   */
  additionalSecurityGroupIds?: string[];
  autoScalingPolicy?: AutoScalingPolicy;
  /**
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  componentTags?: string[];
  /**
   * @remarks
   * 成本优化模式配置。
   */
  costOptimizedConfig?: CostOptimizedConfig;
  /**
   * @remarks
   * 数据盘。当前数据盘只支持一种磁盘类型，即数组元数个数N的取值范围：1~1。
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
   * 默认值：false。
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * 节点实例类型列表。数组元数个数N的取值范围：1~100。
   * 
   * @example
   * ["ecs.g6.xlarge"]
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * 节点数量。取值范围：1~1000。
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * 节点组名称。最大长度128个字符。集群内要求节点组名称唯一。
   * 
   * @example
   * core-1
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * 节点组类型。取值范围：
   * - MASTER：管理类型节点组。
   * - CORE：存储类型节点组。
   * - TASK：计算类型节点组。
   * 
   * This parameter is required.
   * 
   * @example
   * CORE
   */
  nodeGroupType?: string;
  /**
   * @remarks
   * 节点扩容策略。取值范围：
   * - COST_OPTIMIZED：成本优化策略。
   * - PRIORITY：优先级策略。
   * 
   * 默认值：PRIORITY。
   * 
   * @example
   * PRIORITY
   */
  nodeResizeStrategy?: string;
  /**
   * @remarks
   * 节点组付费类型。不传入时默认和集群付费类型一致。取值范围：
   * - PayAsYouGo：后付费，按量付费。
   * - Subscription：预付费，包年包月。
   * 
   * 默认值：PayAsYouGo。
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  privatePoolOptions?: PrivatePoolOptions;
  /**
   * @remarks
   * 抢占式Spot实例出价价格。参数SpotStrategy取值为SpotWithPriceLimit时生效。数组元数个数N的取值范围：0~100。
   */
  spotBidPrices?: SpotBidPrice[];
  /**
   * @remarks
   * 开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。取值范围：
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
   * 抢占式Spot实例策略。取值范围：
   * - NoSpot：正常按量付费实例。
   * - SpotWithPriceLimit：设置最高出价的抢占式实例。
   * - SpotAsPriceGo：系统自动出价，最高按量付费价格的抢占式实例。
   * 
   * 默认值：NoSpot。
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * 节点组预付费配置。不传入时默认和集群预付费配置一致。
   */
  subscriptionConfig?: SubscriptionConfig;
  /**
   * @remarks
   * 系统盘。
   */
  systemDisk?: SystemDisk;
  /**
   * @remarks
   * 虚拟机交换机ID列表。数组元数个数N的取值范围：1~20。
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
   * 默认值：false。
   * 
   * @example
   * false
   */
  withPublicIp?: boolean;
  static names(): { [key: string]: string } {
    return {
      additionalSecurityGroupIds: 'AdditionalSecurityGroupIds',
      autoScalingPolicy: 'AutoScalingPolicy',
      compensateWithOnDemand: 'CompensateWithOnDemand',
      componentTags: 'ComponentTags',
      costOptimizedConfig: 'CostOptimizedConfig',
      dataDisks: 'DataDisks',
      deploymentSetStrategy: 'DeploymentSetStrategy',
      gracefulShutdown: 'GracefulShutdown',
      instanceTypes: 'InstanceTypes',
      nodeCount: 'NodeCount',
      nodeGroupName: 'NodeGroupName',
      nodeGroupType: 'NodeGroupType',
      nodeResizeStrategy: 'NodeResizeStrategy',
      paymentType: 'PaymentType',
      privatePoolOptions: 'PrivatePoolOptions',
      spotBidPrices: 'SpotBidPrices',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      spotStrategy: 'SpotStrategy',
      subscriptionConfig: 'SubscriptionConfig',
      systemDisk: 'SystemDisk',
      vSwitchIds: 'VSwitchIds',
      withPublicIp: 'WithPublicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalSecurityGroupIds: { 'type': 'array', 'itemType': 'string' },
      autoScalingPolicy: AutoScalingPolicy,
      compensateWithOnDemand: 'boolean',
      componentTags: { 'type': 'array', 'itemType': 'string' },
      costOptimizedConfig: CostOptimizedConfig,
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentSetStrategy: 'string',
      gracefulShutdown: 'boolean',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      nodeCount: 'number',
      nodeGroupName: 'string',
      nodeGroupType: 'string',
      nodeResizeStrategy: 'string',
      paymentType: 'string',
      privatePoolOptions: PrivatePoolOptions,
      spotBidPrices: { 'type': 'array', 'itemType': SpotBidPrice },
      spotInstanceRemedy: 'boolean',
      spotStrategy: 'string',
      subscriptionConfig: SubscriptionConfig,
      systemDisk: SystemDisk,
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      withPublicIp: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.additionalSecurityGroupIds)) {
      $dara.Model.validateArray(this.additionalSecurityGroupIds);
    }
    if(this.autoScalingPolicy && typeof (this.autoScalingPolicy as any).validate === 'function') {
      (this.autoScalingPolicy as any).validate();
    }
    if(Array.isArray(this.componentTags)) {
      $dara.Model.validateArray(this.componentTags);
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
    if(this.subscriptionConfig && typeof (this.subscriptionConfig as any).validate === 'function') {
      (this.subscriptionConfig as any).validate();
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

