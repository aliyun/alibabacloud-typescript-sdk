// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAutoProvisioningGroupRequestLaunchTemplateConfig } from "./ModifyAutoProvisioningGroupRequestLaunchTemplateConfig";


export class ModifyAutoProvisioningGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The auto-provisioning group ID.
   * 
   * @example
   * apg-bp67acfmxazb4ph****
   */
  autoProvisioningGroupId?: string;
  /**
   * @remarks
   * The name of the auto-provisioning group. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://.[ It can contain letters, digits, colons (:), underscores (_), and hyphens (-).](http://https://。、（:）、（_）（-）。)
   * 
   * @example
   * apg-test
   */
  autoProvisioningGroupName?: string;
  /**
   * @remarks
   * The type of supplemental instances. When the sum of the PayAsYouGoTargetCapacity and SpotTargetCapacity values is smaller than the TotalTargetCapacity value, the auto-provisioning group creates instances of the specified type to meet the target capacity. Valid values:
   * 
   * *   PayAsYouGo: pay-as-you-go instances
   * *   Spot: preemptible instances
   * 
   * @example
   * Spot
   */
  defaultTargetCapacityType?: string;
  /**
   * @remarks
   * Specifies whether to release the removed instances when the real-time capacity of the auto-provisioning group exceeds the target capacity and a scale-in event is triggered. Valid values:
   * 
   * *   termination: releases the removed instances.
   * *   no-termination: removes the instances from the auto-provisioning group but does not release them.
   * 
   * @example
   * no-termination
   */
  excessCapacityTerminationPolicy?: string;
  /**
   * @remarks
   * The extended configurations of the launch template.
   */
  launchTemplateConfig?: ModifyAutoProvisioningGroupRequestLaunchTemplateConfig[];
  /**
   * @remarks
   * The maximum price of preemptible instances in the auto-provisioning group.
   * 
   * > When both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the smaller one of the two parameter values is used. The LaunchTemplateConfig.N.MaxPrice parameter is specified when the auto-provisioning group is created, and cannot be modified.
   * 
   * @example
   * 0.5
   */
  maxSpotPrice?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The target capacity of pay-as-you-go instances in the auto-provisioning group. Valid values: Set this parameter to a value smaller than the TotalTargetCapacity value.
   * 
   * @example
   * 30
   */
  payAsYouGoTargetCapacity?: string;
  /**
   * @remarks
   * The region ID of the auto-provisioning group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The target capacity of preemptible instances in the auto-provisioning group. Valid values: Set this parameter to a value smaller than the TotalTargetCapacity value.
   * 
   * @example
   * 30
   */
  spotTargetCapacity?: string;
  /**
   * @remarks
   * Specifies whether to release instances that are located in the auto-provisioning group after the group expires. Valid values:
   * 
   * *   true: releases instances that are located in the auto-provisioning group.
   * *   false: removes instances from the auto-provisioning group but does not release them.
   * 
   * @example
   * false
   */
  terminateInstancesWithExpiration?: boolean;
  /**
   * @remarks
   * The total target capacity of the auto-provisioning group. The value must be a positive integer.
   * 
   * The total target capacity of the auto-provisioning group must be greater than or equal to the sum of the target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter as well as the target capacity of preemptible instances specified by the SpotTargetCapacity parameter.
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

