// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteTableListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The value of tag N to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
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

export class DescribeRouteTableListRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the returned page. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the VPC to which the route table belongs.
   * 
   * You can call [DescribeRegions](https://www.alibabacloud.com/help/vpc/developer-reference/api-vpc-2016-04-28-describeregions) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-southeast-6
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the route table belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The name of the route table.
   * 
   * @example
   * doctest
   */
  routeTableName?: string;
  /**
   * @remarks
   * The type of the route table.
   * 
   * *   **System**
   * *   **Custom**
   * 
   * @example
   * System
   */
  routeTableType?: string;
  /**
   * @remarks
   * The ID of vRouter to which the route table belongs.
   * 
   * @example
   * vrt-bp1lhl0taikrteen8****
   */
  routerId?: string;
  /**
   * @remarks
   * The type of the router to which the route table belongs. Valid value:
   * 
   * *   **VRouter** (default): a vRouter
   * *   **VBR**: a VBR
   * 
   * @example
   * VRouter
   */
  routerType?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: DescribeRouteTableListRequestTag[];
  /**
   * @remarks
   * The ID of the VPC to which the route table belongs. 
   * 
   * When this parameter is set, the value of **RouterType** is automatically assigned to **VRouter**.
   * 
   * @example
   * vpc-bp15zckdt37pq72****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
      routeTableName: 'RouteTableName',
      routeTableType: 'RouteTableType',
      routerId: 'RouterId',
      routerType: 'RouterType',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
      routeTableName: 'string',
      routeTableType: 'string',
      routerId: 'string',
      routerType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeRouteTableListRequestTag },
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

