// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the scaling group.
   * 
   * @example
   * Department
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the scaling group.
   * 
   * @example
   * Finance
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of instances managed by the scaling group. Valid values:
   * 
   * - ECS: The scaling group manages ECS instances.
   * 
   * - ECI: The scaling group manages ECI instances.
   * 
   * @example
   * ECS
   */
  groupType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The Settings for the number of entries per page during paging in a paged query. Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the scaling groups to query belong.
   * 
   * > If no scaling group belongs to the specified resource group, an empty result is returned and no error is returned.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the scaling groups to query.
   * 
   * Invalid scaling group IDs are ignored in the response and no error is returned.
   */
  scalingGroupIds?: string[];
  /**
   * @remarks
   * The name of the scaling group.
   * 
   * @example
   * scalinggroup****
   */
  scalingGroupName?: string;
  /**
   * @remarks
   * The names of the scaling groups to query.
   * 
   * Invalid scaling group names are ignored in the response and no error is returned.
   */
  scalingGroupNames?: string[];
  /**
   * @remarks
   * The tags of the scaling group.
   */
  tags?: DescribeScalingGroupsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      groupType: 'GroupType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupIds: 'ScalingGroupIds',
      scalingGroupName: 'ScalingGroupName',
      scalingGroupNames: 'ScalingGroupNames',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupIds: { 'type': 'array', 'itemType': 'string' },
      scalingGroupName: 'string',
      scalingGroupNames: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': DescribeScalingGroupsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.scalingGroupIds)) {
      $dara.Model.validateArray(this.scalingGroupIds);
    }
    if(Array.isArray(this.scalingGroupNames)) {
      $dara.Model.validateArray(this.scalingGroupNames);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

