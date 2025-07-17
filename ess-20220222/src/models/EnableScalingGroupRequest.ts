// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableScalingGroupRequestLaunchTemplateOverrides extends $dara.Model {
  /**
   * @remarks
   * The instance type. If you want to scale instances based on instance type weights in the scaling group, you must specify `LaunchTemplateOverrides.WeightedCapacity` after you specify this parameter.
   * 
   * The instance type specified by using this parameter overwrites the instance type of the launch template.
   * 
   * >  This parameter takes effect only if you specify LaunchTemplateId.
   * 
   * You can use this parameter to specify any instance types that are available for purchase.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The weight of the instance type. If you want to scale instances based on instance type weights in the scaling group, you must specify this parameter after you specify `LaunchTemplateOverrides.InstanceType`.
   * 
   * The weight specifies the capacity of an instance of the specified instance type in the scaling group. A higher weight specifies that a smaller number of instances of the specified instance type are required to meet the expected capacity requirement.
   * 
   * Performance metrics such as the number of vCPUs and the memory size of each instance type may vary. You can specify different weights for different instance types based on your business requirements.
   * 
   * Example:
   * 
   * *   Current capacity: 0
   * *   Expected capacity: 6
   * *   Capacity of ecs.c5.xlarge: 4
   * 
   * To reach the expected capacity, Auto Scaling must scale out two instances of ecs.c5.xlarge.
   * 
   * >  The total capacity of the scaling group is constrained and cannot surpass the combined total of the maximum group size defined by MaxSize and the highest weight assigned to any instance type.
   * 
   * Valid values of WeightedCapacity: 1 to 500.
   * 
   * @example
   * 4
   */
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      weightedCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableScalingGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the scaling configuration that you want to enable in the scaling group.
   * 
   * @example
   * asc-bp1ffogfdauy0nu5****
   */
  activeScalingConfigurationId?: string;
  /**
   * @remarks
   * The IDs of the ECS instances that you want to add to the scaling group after the scaling group is enabled.
   * 
   * Before you add ECS instances to the scaling group, make sure that the instances meet the following requirements:
   * 
   * *   The instances must reside in the same region as the scaling group.
   * *   The instances must be in the Running state.
   * *   The instances do not belong to another scaling group.
   * *   The instances are billed on a subscription or pay-as-you-go basis, or the instances are preemptible instances.
   * *   If you specify VswitchID for the scaling group, the instances must share the same VPC as the scaling group.
   * *   If you do not specify VswitchID for the scaling group, the instances must use the classic network.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the launch template that is used by Auto Scaling to create ECS instances.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The information about the instance types that you want to extend in the launch template.
   */
  launchTemplateOverrides?: EnableScalingGroupRequestLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version number of the launch template. Valid values:
   * 
   * *   A fixed template version number.
   * *   Default: The default template version is always used.
   * *   Latest: The latest template version is always used.
   * 
   * @example
   * Default
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The weights of ECS instances or elastic container instances as backend servers.
   * 
   * Default value: 50.
   */
  loadBalancerWeights?: number[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp14wlu85wrpchm0****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      instanceIds: 'InstanceIds',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateOverrides: 'LaunchTemplateOverrides',
      launchTemplateVersion: 'LaunchTemplateVersion',
      loadBalancerWeights: 'LoadBalancerWeights',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeScalingConfigurationId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      launchTemplateId: 'string',
      launchTemplateOverrides: { 'type': 'array', 'itemType': EnableScalingGroupRequestLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      loadBalancerWeights: { 'type': 'array', 'itemType': 'number' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.launchTemplateOverrides)) {
      $dara.Model.validateArray(this.launchTemplateOverrides);
    }
    if(Array.isArray(this.loadBalancerWeights)) {
      $dara.Model.validateArray(this.loadBalancerWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

