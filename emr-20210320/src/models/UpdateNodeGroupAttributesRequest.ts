// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AckConfig } from "./AckConfig";
import { CostOptimizedConfig } from "./CostOptimizedConfig";
import { SpotBidPrice } from "./SpotBidPrice";


export class UpdateNodeGroupAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The ACK cluster configuration.
   */
  ackConfig?: AckConfig;
  /**
   * @remarks
   * The list of security group IDs.
   * 
   * @example
   * ["sg-hp3abbae8lb6lmb1****"]
   * 
   * @deprecated
   */
  additionalSecurityGroupIds?: string[];
  /**
   * @remarks
   * The automatic compensation state.
   * 
   * @example
   * false
   */
  autoCompensateState?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cost-optimized mode configuration.
   */
  costOptimizedConfig?: CostOptimizedConfig;
  /**
   * @remarks
   * The node group description.
   * 
   * @example
   * emr-core-1
   */
  description?: string;
  /**
   * @remarks
   * The spot instance strategy.
   * 
   * @example
   * SpotWithPriceLimit
   */
  ecsSpotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable graceful decommission. When a cluster is created in V303, graceful decommission is disabled by default for task groups.
   * 
   * @example
   * true
   */
  enableGracefulDecommission?: boolean;
  /**
   * @remarks
   * The list of ECS instance types.
   * 
   * @example
   * null
   */
  instanceTypeList?: string[];
  /**
   * @remarks
   * The key pair for ECS logon.
   * 
   * @example
   * test_pair
   * 
   * @deprecated
   */
  keyPairName?: string;
  /**
   * @remarks
   * The maximum number of instances in the node group.
   * 
   * @example
   * 200
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum number of instances in the node group.
   * 
   * @example
   * 0
   */
  minSize?: number;
  /**
   * @remarks
   * The target number of nodes in the node group.
   * 
   * @example
   * 8
   */
  nodeCount?: number;
  /**
   * @remarks
   * The node group ID.
   * 
   * This parameter is required.
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
   * CORE1
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The node scale-out strategy. Valid values: COST_OPTIMIZED and PRIORITY. Default value: PRIORITY.
   * 
   * @example
   * PRIORITY
   */
  nodeResizeStrategy?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The maximum bid prices for spot instances. This parameter takes effect only when spotStrategy is set to SpotWithPriceLimit.
   */
  spotBidPrices?: SpotBidPrice[];
  /**
   * @remarks
   * Specifies whether to enable spot instance supplementation. If this feature is enabled, the scaling group attempts to create new instances to replace spot instances that are about to be reclaimed when the system sends a reclamation notification. Default value: false.
   * 
   * @example
   * true
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-hp35g7ya5ymw68mmg****
   * 
   * @deprecated
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ackConfig: 'AckConfig',
      additionalSecurityGroupIds: 'AdditionalSecurityGroupIds',
      autoCompensateState: 'AutoCompensateState',
      clusterId: 'ClusterId',
      costOptimizedConfig: 'CostOptimizedConfig',
      description: 'Description',
      ecsSpotStrategy: 'EcsSpotStrategy',
      enableGracefulDecommission: 'EnableGracefulDecommission',
      instanceTypeList: 'InstanceTypeList',
      keyPairName: 'KeyPairName',
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      nodeCount: 'NodeCount',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeResizeStrategy: 'NodeResizeStrategy',
      regionId: 'RegionId',
      spotBidPrices: 'SpotBidPrices',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackConfig: AckConfig,
      additionalSecurityGroupIds: { 'type': 'array', 'itemType': 'string' },
      autoCompensateState: 'boolean',
      clusterId: 'string',
      costOptimizedConfig: CostOptimizedConfig,
      description: 'string',
      ecsSpotStrategy: 'string',
      enableGracefulDecommission: 'boolean',
      instanceTypeList: { 'type': 'array', 'itemType': 'string' },
      keyPairName: 'string',
      maxSize: 'number',
      minSize: 'number',
      nodeCount: 'number',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeResizeStrategy: 'string',
      regionId: 'string',
      spotBidPrices: { 'type': 'array', 'itemType': SpotBidPrice },
      spotInstanceRemedy: 'boolean',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.ackConfig && typeof (this.ackConfig as any).validate === 'function') {
      (this.ackConfig as any).validate();
    }
    if(Array.isArray(this.additionalSecurityGroupIds)) {
      $dara.Model.validateArray(this.additionalSecurityGroupIds);
    }
    if(this.costOptimizedConfig && typeof (this.costOptimizedConfig as any).validate === 'function') {
      (this.costOptimizedConfig as any).validate();
    }
    if(Array.isArray(this.instanceTypeList)) {
      $dara.Model.validateArray(this.instanceTypeList);
    }
    if(Array.isArray(this.spotBidPrices)) {
      $dara.Model.validateArray(this.spotBidPrices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

