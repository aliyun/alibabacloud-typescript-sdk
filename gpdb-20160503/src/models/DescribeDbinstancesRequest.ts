// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesRequestTag extends $dara.Model {
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

export class DescribeDBInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance edition. You can specify multiple editions. Separate multiple editions with a comma (,).
   */
  DBInstanceCategories?: string[];
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
  DBInstanceModes?: string[];
  /**
   * @remarks
   * The state of the instance.
   */
  DBInstanceStatuses?: string[];
  /**
   * @remarks
   * This parameter is deprecated. Do not specify this parameter.
   */
  instanceDeployTypes?: string[];
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
  tag?: DescribeDBInstancesRequestTag[];
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
      DBInstanceCategories: 'DBInstanceCategories',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceIds: 'DBInstanceIds',
      DBInstanceModes: 'DBInstanceModes',
      DBInstanceStatuses: 'DBInstanceStatuses',
      instanceDeployTypes: 'InstanceDeployTypes',
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
      DBInstanceCategories: { 'type': 'array', 'itemType': 'string' },
      DBInstanceDescription: 'string',
      DBInstanceIds: 'string',
      DBInstanceModes: { 'type': 'array', 'itemType': 'string' },
      DBInstanceStatuses: { 'type': 'array', 'itemType': 'string' },
      instanceDeployTypes: { 'type': 'array', 'itemType': 'string' },
      instanceNetworkType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceCategories)) {
      $dara.Model.validateArray(this.DBInstanceCategories);
    }
    if(Array.isArray(this.DBInstanceModes)) {
      $dara.Model.validateArray(this.DBInstanceModes);
    }
    if(Array.isArray(this.DBInstanceStatuses)) {
      $dara.Model.validateArray(this.DBInstanceStatuses);
    }
    if(Array.isArray(this.instanceDeployTypes)) {
      $dara.Model.validateArray(this.instanceDeployTypes);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

