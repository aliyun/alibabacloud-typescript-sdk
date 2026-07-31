// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoProvisioningGroupRequestLaunchTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The instance type specified in the extension launch template. Valid values of N: 1 to 20. For more information, see [Instance family](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum price of the spot instance in the extended launch template.
   * 
   * @example
   * 3
   */
  maxPrice?: number;
  /**
   * @remarks
   * The priority of the extended launch template. A value of 0 indicates the highest priority. Valid values: greater than 0.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the ECS instance belongs in the extended launch template. The zone of the ECS instance launched from the extended template is determined by the vSwitch.
   * 
   * @example
   * vsw-sn5bsitu4lfzgc5o7****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The weight of the instance type specified in the extended launch template. A higher value indicates that a single instance can meet more computing requirements, which means fewer instances are required. Valid values: greater than 0.
   * 
   * You can calculate the weight based on the computing power of the specified instance type and the minimum computing power of a single node in the cluster. For example, if the minimum computing power of a single node is 8 vCPUs and 60 GiB:
   * 
   * - The weight of an instance type with 8 vCPUs and 60 GiB can be set to 1.
   * - The weight of an instance type with 16 vCPUs and 120 GiB can be set to 2.
   * 
   * @example
   * 2
   */
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      maxPrice: 'MaxPrice',
      priority: 'Priority',
      vSwitchId: 'VSwitchId',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      maxPrice: 'number',
      priority: 'number',
      vSwitchId: 'string',
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

export class ModifyAutoProvisioningGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the auto provisioning group.
   * 
   * @example
   * apg-bp67acfmxazb4ph****
   */
  autoProvisioningGroupId?: string;
  /**
   * @remarks
   * The name of the auto provisioning group. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with http:// or https://. The name can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * apg-test
   */
  autoProvisioningGroupName?: string;
  /**
   * @remarks
   * The billing method of the capacity difference when the sum of PayAsYouGoTargetCapacity and SpotTargetCapacity is less than TotalTargetCapacity. Valid values:
   * 
   * - PayAsYouGo: pay-as-you-go instance.
   * - Spot: spot instance.
   * 
   * @example
   * Spot
   */
  defaultTargetCapacityType?: string;
  /**
   * @remarks
   * Specifies whether to release instances when the real-time capacity of the auto provisioning group exceeds the target capacity and a scale-in event is triggered. Valid values:
   * 
   * - termination: Releases the scaled-in instances.
   * - no-termination: Only removes the scaled-in instances from the auto provisioning group.
   * 
   * @example
   * no-termination
   */
  excessCapacityTerminationPolicy?: string;
  /**
   * @remarks
   * The extended launch template list.
   */
  launchTemplateConfig?: ModifyAutoProvisioningGroupRequestLaunchTemplateConfig[];
  /**
   * @remarks
   * The maximum price of spot instances in the auto provisioning group.
   * 
   * > If both MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice are specified, the lower value is used. LaunchTemplateConfig.N.MaxPrice is specified in Settings when the auto provisioning group is created and cannot be modified.
   * 
   * @example
   * 0.5
   */
  maxSpotPrice?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The target capacity of pay-as-you-go instances in the auto provisioning group. Valid values: less than the parameter value of TotalTargetCapacity.
   * 
   * @example
   * 30
   */
  payAsYouGoTargetCapacity?: string;
  /**
   * @remarks
   * The region ID of the auto provisioning group. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The target capacity of spot instances in the auto provisioning group. Valid values: less than the parameter value of TotalTargetCapacity.
   * 
   * @example
   * 30
   */
  spotTargetCapacity?: string;
  /**
   * @remarks
   * Specifies whether to release instances in the auto provisioning group when the group expires. Valid values:
   * 
   * - true: Releases the instances in the group.
   * - false: Only removes the instances from the auto provisioning group.
   * 
   * @example
   * false
   */
  terminateInstancesWithExpiration?: boolean;
  /**
   * @remarks
   * The total target capacity of the auto provisioning group. Valid values: positive integers.
   * 
   * The total capacity must be greater than or equal to the sum of PayAsYouGoTargetCapacity (the target capacity of pay-as-you-go instances) and SpotTargetCapacity (the target capacity of spot instances).
   * 
   * @example
   * 70
   */
  totalTargetCapacity?: string;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
      defaultTargetCapacityType: 'DefaultTargetCapacityType',
      excessCapacityTerminationPolicy: 'ExcessCapacityTerminationPolicy',
      launchTemplateConfig: 'LaunchTemplateConfig',
      maxSpotPrice: 'MaxSpotPrice',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payAsYouGoTargetCapacity: 'PayAsYouGoTargetCapacity',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spotTargetCapacity: 'SpotTargetCapacity',
      terminateInstancesWithExpiration: 'TerminateInstancesWithExpiration',
      totalTargetCapacity: 'TotalTargetCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupId: 'string',
      autoProvisioningGroupName: 'string',
      defaultTargetCapacityType: 'string',
      excessCapacityTerminationPolicy: 'string',
      launchTemplateConfig: { 'type': 'array', 'itemType': ModifyAutoProvisioningGroupRequestLaunchTemplateConfig },
      maxSpotPrice: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      payAsYouGoTargetCapacity: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spotTargetCapacity: 'string',
      terminateInstancesWithExpiration: 'boolean',
      totalTargetCapacity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.launchTemplateConfig)) {
      $dara.Model.validateArray(this.launchTemplateConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

