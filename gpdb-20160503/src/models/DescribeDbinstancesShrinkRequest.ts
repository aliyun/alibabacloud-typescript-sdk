// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * test-value
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

export class DescribeDBInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance edition. You can specify multiple editions. Separate multiple editions with a comma (,).
   */
  DBInstanceCategoriesShrink?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceIds?: string;
  /**
   * @remarks
   * The resource type of the instance. You can specify multiple resource types. Separate multiple resource types with a comma (,).
   */
  DBInstanceModesShrink?: string;
  /**
   * @remarks
   * The state of the instance.
   */
  DBInstanceStatusesShrink?: string;
  /**
   * @remarks
   * This parameter is deprecated. Do not specify this parameter.
   */
  instanceDeployTypesShrink?: string;
  /**
   * @remarks
   * The instance network type. Valid values:
   * 
   * - **VPC**: VPC
   * 
   * - **Classic**: classic network
   * 
   * > If you omit this parameter, the operation returns instances of all network types.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the available region IDs.
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
   * The tags of the instance.
   */
  tag?: DescribeDBInstancesShrinkRequestTag[];
  /**
   * @remarks
   * The VPC ID. You can specify this parameter to query instances in a VPC.
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

