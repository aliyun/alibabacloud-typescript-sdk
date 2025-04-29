// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScalingGroupsRequestTags } from "./DescribeScalingGroupsRequestTags";


export class DescribeScalingGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of instances that are managed by the scaling group. Valid values:
   * 
   * *   ECS: Elastic Compute Service (ECS) instances.
   * *   ECI: elastic container instances.
   * 
   * @example
   * ECS
   */
  groupType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * Default value: 1
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
   * The region ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the scaling group that you want to query belongs.
   * 
   * >  If no scaling group belongs to the specified resource group, the query result is empty and no error is reported.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the scaling groups that you want to query.
   * 
   * The IDs of inactive scaling groups are not included in the query results, and no error is returned.
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
   * The names of the scaling groups that you want to query.
   * 
   * The names of inactive scaling groups are not displayed in the query results, and no error is reported.
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

