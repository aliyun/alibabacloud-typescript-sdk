// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRefreshesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instance refresh tasks to query.
   */
  instanceRefreshTaskIds?: string[];
  /**
   * @remarks
   * The maximum number of entries per page in a paging query. Valid values: 1 to 50.
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
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
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the scaling group.
   * > You must specify at least one of ScalingGroupId and InstanceRefreshTaskIds. If neither parameter is specified, an error is returned.
   * >.
   * 
   * @example
   * asg-bp1ffogfdauy0jw0****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceRefreshTaskIds: 'InstanceRefreshTaskIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRefreshTaskIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceRefreshTaskIds)) {
      $dara.Model.validateArray(this.instanceRefreshTaskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

