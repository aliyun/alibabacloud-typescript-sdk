// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesShrinkRequestTag } from "./DescribeDbinstancesShrinkRequestTag";


export class DescribeDBInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The edition of the instance. Separate multiple values with commas (,).
   */
  DBInstanceCategoriesShrink?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID. Separate multiple values with commas (,).
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceIds?: string;
  /**
   * @remarks
   * The resource type of the instance. Separate multiple values with commas (,).
   */
  DBInstanceModesShrink?: string;
  /**
   * @remarks
   * The state of the instance.
   */
  DBInstanceStatusesShrink?: string;
  /**
   * @remarks
   * This parameter is no longer used.
   */
  instanceDeployTypesShrink?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **VPC**: virtual private cloud (VPC).
   * *   **Classic**: classic network.
   * 
   * > If you do not specify this parameter, instances of all network types are returned.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeDBInstancesShrinkRequestTag[];
  /**
   * @remarks
   * The VPC ID. You can use this parameter to filter instances that reside in the specified VPC.
   * 
   * @example
   * vpc-t4nqyp3tc5mx7vy6****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceCategoriesShrink: 'DBInstanceCategories',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceIds: 'DBInstanceIds',
      DBInstanceModesShrink: 'DBInstanceModes',
      DBInstanceStatusesShrink: 'DBInstanceStatuses',
      instanceDeployTypesShrink: 'InstanceDeployTypes',
      instanceNetworkType: 'InstanceNetworkType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceCategoriesShrink: 'string',
      DBInstanceDescription: 'string',
      DBInstanceIds: 'string',
      DBInstanceModesShrink: 'string',
      DBInstanceStatusesShrink: 'string',
      instanceDeployTypesShrink: 'string',
      instanceNetworkType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesShrinkRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

