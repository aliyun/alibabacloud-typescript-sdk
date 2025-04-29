// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingConfigurationsRequest extends $dara.Model {
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
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the scaling group to which the scaling configuration that you want to query belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the scaling configurations that you want to query.
   * 
   * The IDs of active and inactive scaling configurations are displayed in the query results. You can differentiate between active and inactive scaling configurations based on the value of the `LifecycleState` parameter.
   */
  scalingConfigurationIds?: string[];
  /**
   * @remarks
   * The names of the scaling configurations that you want to query.
   * 
   * The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
   */
  scalingConfigurationNames?: string[];
  /**
   * @remarks
   * The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
   * 
   * @example
   * asg-bp17pelvl720x3v7****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingConfigurationIds: 'ScalingConfigurationIds',
      scalingConfigurationNames: 'ScalingConfigurationNames',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingConfigurationIds: { 'type': 'array', 'itemType': 'string' },
      scalingConfigurationNames: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scalingConfigurationIds)) {
      $dara.Model.validateArray(this.scalingConfigurationIds);
    }
    if(Array.isArray(this.scalingConfigurationNames)) {
      $dara.Model.validateArray(this.scalingConfigurationNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

