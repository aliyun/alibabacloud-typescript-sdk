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
   * The additional security group IDs.
   * 
   * @example
   * ["sg-hp3abbae8lb6lmb1****"]
   */
  additionalSecurityGroupIds?: string[];
  /**
   * @remarks
   * Applies only when `NodeResizeStrategy` is set to `COST_OPTIMIZED`. If set to `true`, the system creates Pay-As-You-Go instances to meet the target capacity if it fails to create enough spot instances due to price or inventory constraints.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The configurations of the cost-optimized mode.
   */
  costOptimizedConfig?: CostOptimizedConfig;
  /**
   * @remarks
   * The data disks.
   */
  dataDisks?: DataDisk[];
  /**
   * @remarks
   * The Deployment Set strategy. Valid values:
   * 
   * - NONE: Does not use a Deployment Set.
   * 
   * - CLUSTER: Uses a cluster-level Deployment Set.
   * 
   * - NODE_GROUP: Uses a node group-level Deployment Set.
   * 
   * Default: `NONE`.
   * 
   * @example
   * NONE
   */
  deploymentSetStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable graceful shutdown for components deployed in the node group. Valid values:
   * 
   * - true: Enables graceful shutdown.
   * 
   * - false: Disables graceful shutdown.
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The instance types.
   * 
   * @example
   * ["ecs.g6.4xlarge"]
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The node group name.
   * 
   * @example
   * core-1
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The state of the node group.
   * 
   * @example
   * RESIZING
   */
  nodeGroupState?: string;
  /**
   * @remarks
   * The type of the node group. Valid values:
   * 
   * - MASTER: A master node.
   * 
   * - CORE: A core node.
   * 
   * - TASK: A task node.
   * 
   * - GATEWAY: A gateway node. This value is not applicable to DATALAKE, OLAP, or DATASERVING clusters.
   * 
   * @example
   * MASTER
   */
  nodeGroupType?: string;
  /**
   * @remarks
   * - COST_OPTIMIZED: The cost-optimized strategy.
   * 
   * - PRIORITY: The priority-based strategy.
   * 
   * @example
   * PRIORITY
   */
  nodeResizeStrategy?: string;
  /**
   * @remarks
   * The payment type. Valid values are `Subscription` for the subscription billing method and `PayAsYouGo` for the Pay-As-You-Go billing method.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The private pool options.
   */
  privatePoolOptions?: PrivatePoolOptions;
  /**
   * @remarks
   * The number of running nodes.
   * 
   * @example
   * 3
   */
  runningNodeCount?: number;
  /**
   * @remarks
   * The bid prices for the spot instances. This parameter is effective only when `SpotStrategy` is set to `SpotWithPriceLimit`. The array can contain 0 to 100 elements.
   */
  spotBidPrices?: SpotBidPrice[];
  /**
   * @remarks
   * Specifies whether to enable spot instance remedy. If enabled, the scaling group attempts to create a new instance to replace a spot instance that is about to be reclaimed. Valid values:
   * 
   * - true: Enables spot instance remedy.
   * 
   * - false: Disables spot instance remedy.
   * 
   * Default: `false`.
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The policy for using spot instances. Valid values:
   * 
   * - NoSpot: No spot instances are used.
   * 
   * - SpotWithPriceLimit: Spot instances are created with a user-defined maximum bid price.
   * 
   * - SpotAsPriceGo: The system automatically bids for spot instances. The bid price does not exceed the price of a Pay-As-You-Go instance.
   * 
   * Default: `NoSpot`.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The reason for the state change.
   * 
   * @example
   * 手动重启
   */
  stateChangeReason?: NodeGroupStateChangeReason;
  /**
   * @remarks
   * The node group state.
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * The system disk.
   */
  systemDisk?: SystemDisk;
  /**
   * @remarks
   * The VSwitch IDs.
   * 
   * @example
   * ["vsw-hp35g7ya5ymw68mmg****"]
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * Specifies whether to assign a public IP address.
   * 
   * @example
   * true
   */
  withPublicIp?: boolean;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou
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

