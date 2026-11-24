// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingActivitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance refresh task node. You can configure the Settings of this parameter to perform a parameter query for the scaling activity list related to the instance refresh task.
   * 
   * @example
   * ir-a12ds234fasd*****
   */
  instanceRefreshTaskId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the scaling activity list. Pages start from 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query. Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the scaling group to which the scaling activity belongs.
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
   * The ID of the scaling activity to be queried.
   * 
   * > When you invoke this API, you must specify either the ScalingGroupId or ScalingActivityIds parameter. If neither parameter is specified, an error occurs.
   */
  scalingActivityIds?: string[];
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * > When you call this operation, you must specify either ScalingGroupId or ScalingActivityIds. If neither is specified, an error occurs.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The status of the scaling activity. Valid values:
   *  
   * - Successful: The scaling activity is successful. 
   * - Warning: The scaling activity is partially successful. 
   * - Failed: The scaling activity failed. 
   * - InProgress: The scaling activity is in progress. 
   * - Rejected: The request to execute the scaling activity is rejected.
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

