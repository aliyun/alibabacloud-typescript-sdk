// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingActivitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance refresh task. If you specify this parameter, this operation returns the list of scaling activities associated with the instance refresh task.
   * 
   * @example
   * ir-a12ds234fasd*****
   */
  instanceRefreshTaskId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the scaling group to which the scaling activity that you want to query belongs.
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
   * The IDs of the scaling activities that you want to query.
   * 
   * >  When you call this operation, you must specify one of the following parameters: `ScalingGroupId` and `ScalingActivityIds`. You cannot specify both of them at the same time. If you specify neither of them, an error is reported.
   */
  scalingActivityIds?: string[];
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * >  When you call this operation, you must specify one of the following parameters: `ScalingGroupId` and `ScalingActivityIds`. You cannot specify both of them at the same time. If you specify neither of them, an error is reported.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The status of the scaling activity. Valid values:
   * 
   * *   Successful: The scaling activity is successful.
   * *   Warning: The scaling activity is partially successful.
   * *   Failed: The scaling activity failed.
   * *   InProgress: The scaling activity is in progress.
   * *   Rejected: The request to trigger the scaling activity is rejected.
   * 
   * @example
   * Successful
   */
  statusCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceRefreshTaskId: 'InstanceRefreshTaskId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingActivityIds: 'ScalingActivityIds',
      scalingGroupId: 'ScalingGroupId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRefreshTaskId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingActivityIds: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
      statusCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scalingActivityIds)) {
      $dara.Model.validateArray(this.scalingActivityIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

