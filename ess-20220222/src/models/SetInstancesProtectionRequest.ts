// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetInstancesProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ECS instances.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to protect ECS instances from being stopped or removed from the scaling group during scale-ins. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  protectedFromScaleIn?: boolean;
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
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      protectedFromScaleIn: 'ProtectedFromScaleIn',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      protectedFromScaleIn: 'boolean',
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

