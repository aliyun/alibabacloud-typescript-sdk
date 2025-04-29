// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the scaling group to manage the lifecycles of the manually added ECS instances. Valid values:
   * 
   * *   true: allows the scaling group to manage the lifecycles of the manually added ECS instances. The scaling group manages the lifecycles of manually added instances and automatically created instances in the same manner. In this case, Auto Scaling releases the instances when they are removed from the scaling group. This rule does not apply to instances that are removed by calling the DetachInstances operation.
   * *   false: does not allow the scaling group to manage the lifecycles of the manually added ECS instances. In this case, Auto Scaling does not release the instances when they are removed from the scaling group.
   * 
   * >  You can specify this parameter only for ECS instances that are manually added to the scaling group.
   * 
   * @example
   * true
   */
  entrusted?: boolean;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp109k5j3dum1ce6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      entrusted: 'Entrusted',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrusted: 'boolean',
      instanceId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

