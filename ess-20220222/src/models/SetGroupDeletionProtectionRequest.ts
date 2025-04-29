// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetGroupDeletionProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the scaling group. Valid values:
   * 
   * *   true: enables deletion protection. In this case, you cannot delete the scaling group by using the Auto Scaling console or calling an API operation. You must disable deletion protection before you can delete the scaling group.
   * *   false: disables deletion protection.
   * 
   * Default value: false.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  groupDeletionProtection?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-qingdao
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
   * asg-bp1igpak5ft1flyp****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupDeletionProtection: 'GroupDeletionProtection',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupDeletionProtection: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

