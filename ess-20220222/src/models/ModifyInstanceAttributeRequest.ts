// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the lifecycle (epoch) of an instance manually added to the scaling group is managed by the scaling group. Valid values:
   * 
   * - true: Managed. The lifecycle (epoch) of the instance is managed by Auto Scaling, which is consistent with that of instances automatically created in the scaling group. The instance is automatically released when it is removed from the scaling group, excluding instances removed when you invoke the DetachInstances operation.
   * - false: Unmanaged. The instance is not released when it is removed from the scaling group.
   * 
   * > This parameter applies only to instances manually added to the scaling group, not to instances created within the scaling group.
   * 
   * @example
   * true
   */
  entrusted?: boolean;
  /**
   * @remarks
   * The ID of the ECS instance in the scaling group.
   * 
   * @example
   * i-bp109k5j3dum1ce6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the scaling group belongs.
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

