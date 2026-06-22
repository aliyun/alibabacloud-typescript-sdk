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
   * The IDs of the additional security groups. In addition to the security group of the cluster, you can specify additional security groups for the node group. You can specify up to two security group IDs.
   * 
   * @example
   * ["sg-hp3abbae8lb6lmb1****"]
   */
  additionalSecurityGroupIds?: string[];
  /**
   * @remarks
   * The auto scaling policy.
   */
  autoScalingPolicy?: AutoScalingPolicy;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go instances to meet the required capacity when the number of preemptible instances is insufficient. This parameter is effective only when `nodeResizeStrategy` is set to `COST_OPTIMIZED`.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * A list of custom component tags.
   */
  componentTags?: string[];
  /**
   * @remarks
   * The cost optimization settings.
   */
  costOptimizedConfig?: CostOptimizedConfig;
  /**
   * @remarks
   * The data disks. Currently, the array can contain only one data disk.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The deployment set strategy. Valid values:
   * 
   * - `NONE`: No deployment sets are used.
   * 
   * - `CLUSTER`: The cluster-level deployment set is used.
   * 
   * - `NODE_GROUP`: The node group-level deployment set is used.
   * 
   * Default value: `NONE`.
   * 
   * @example
   * NONE
   */
  deploymentSetStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable graceful shutdown for the components in the node group. Valid values:
   * 
   * - `true`: Enables graceful shutdown.
   * 
   * - `false`: Disables graceful shutdown.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The instance types. You can specify 1 to 100 instance types.
   * 
   * @example
   * ["ecs.g6.xlarge"]
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The number of nodes in the node group. Valid values: 1 to 1,000.
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * The name of the node group. The name can be up to 128 characters in length and must be unique within the cluster.
   * 
   * @example
   * core-1
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The type of the node group. Valid values:
   * 
   * - `MASTER`: a master node group.
   * 
   * - `CORE`: a core node group.
   * 
   * - `TASK`: a task node group.
   * 
   * This parameter is required.
   * 
   * @example
   * CORE
   */
  nodeGroupType?: string;
  /**
   * @remarks
   * The node scale-out strategy. Valid values:
   * 
   * - `COST_OPTIMIZED`: The cost-optimized strategy.
   * 
   * - `PRIORITY`: The priority-based strategy.
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * PRIORITY
   */
  nodeResizeStrategy?: string;
  /**
   * @remarks
   * The billing method of the node group. If you do not specify this parameter, the billing method of the cluster is used. Valid values:
   * 
   * - `PayAsYouGo`: pay-as-you-go.
   * 
   * - `Subscription`: subscription.
   * 
   * Default value: `PayAsYouGo`.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The private pool options. This parameter is effective only when you create pay-as-you-go instances.
   */
  privatePoolOptions?: PrivatePoolOptions;
  /**
   * @remarks
   * The bid prices for the preemptible instances. This parameter is effective only when `SpotStrategy` is set to `SpotWithPriceLimit`. You can specify up to 100 bid prices.
   */
  spotBidPrices?: SpotBidPrice[];
  /**
   * @remarks
   * If enabled, the auto scaling group attempts to create a new instance to replace a spot instance that is about to be reclaimed. This process is triggered when the auto scaling group receives a system message about the impending reclamation. Valid values:
   * 
   * - `true`: The auto scaling group attempts to replace a spot instance that is about to be reclaimed.
   * 
   * - `false`: The auto scaling group does not attempt to replace a spot instance that is about to be reclaimed.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The preemption strategy for preemptible instances. Valid values:
   * 
   * - `NoSpot`: pay-as-you-go instances.
   * 
   * - `SpotWithPriceLimit`: preemptible instances with a user-defined maximum hourly price.
   * 
   * - `SpotAsPriceGo`: preemptible instances that are automatically bid at the pay-as-you-go price.
   * 
   * Default value: `NoSpot`.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The subscription settings of the node group. If you do not specify this parameter, the subscription settings of the cluster are used.
   */
  subscriptionConfig?: SubscriptionConfig;
  /**
   * @remarks
   * The system disk.
   */
  systemDisk?: SystemDisk;
  /**
   * @remarks
   * The vSwitch IDs. You can specify 1 to 20 vSwitch IDs.
   * 
   * @example
   * ["vsw-hp35g7ya5ymw68mmg****"]
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * Specifies whether to assign a public IP address to the instances. Valid values:
   * 
   * - `true`: Assigns a public IP address.
   * 
   * - `false`: Does not assign a public IP address.
   * 
   * Default value: `false`.
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

