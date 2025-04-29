// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLifecycleHookRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the lifecycle hook.
   * 
   * @example
   * ash-bp14g3ee6bt3sc98****
   */
  lifecycleHookId?: string;
  /**
   * @remarks
   * The name of the lifecycle hook.
   * 
   * @example
   * lifecyclehook****
   */
  lifecycleHookName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
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
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      lifecycleHookId: 'LifecycleHookId',
      lifecycleHookName: 'LifecycleHookName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleHookId: 'string',
      lifecycleHookName: 'string',
      ownerAccount: 'string',
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

