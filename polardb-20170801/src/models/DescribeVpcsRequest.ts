// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the integer data type. Default value: **1**.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the cloud product.
   * 
   * @example
   * VPN
   */
  product?: string;
  /**
   * @remarks
   * The ID of the resource group to which the VPC belongs.
   * 
   * @example
   * rg-acfmzh544n3j3bi
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * > You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query the details of VPCs.
   * 
   * @example
   * vpc-*************
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query zones.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

