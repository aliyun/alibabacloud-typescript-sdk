// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecycleHooksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the lifecycle hooks.
   * > Conditionally required: You must specify at least one of LifecycleHookIds or ScalingGroupId when you query lifecycle hooks. If you specify both parameters, LifecycleHookIds takes precedence. If you specify only RegionId without specifying either of the two parameters, a 400 InvalidParameter error is returned.
   */
  lifecycleHookIds?: string[];
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
   * The page number of the instance status list. Pages start from 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 50.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * > Conditionally required: You must specify at least one of LifecycleHookIds or ScalingGroupId when you query lifecycle hooks. If you specify only RegionId without specifying either of the two parameters, a 400 InvalidParameter error is returned.
   * 
   * @example
   * asg-bp1igpak5ft1flyp****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      lifecycleHookIds: 'LifecycleHookIds',
      lifecycleHookName: 'LifecycleHookName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleHookIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleHookName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lifecycleHookIds)) {
      $dara.Model.validateArray(this.lifecycleHookIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

