// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAlertConfigurationRequest extends $dara.Model {
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
   * The status of the scaling activities that prompt text message or email notifications.
   */
  scaleStatuses?: string[];
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1eyv4qn8ssgv43****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scaleStatuses: 'ScaleStatuses',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scaleStatuses: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scaleStatuses)) {
      $dara.Model.validateArray(this.scaleStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

