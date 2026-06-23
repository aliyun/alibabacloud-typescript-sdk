// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomerGatewaysRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. If you specify this parameter, the value cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be up to 128 characters in length and can be an empty string. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * TagValue
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

export class DescribeCustomerGatewaysRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the customer gateway. 
   * 
   * > If you do not specify the instance ID of a customer gateway, the system queries information about all customer gateways in the current region by default.
   * 
   * @example
   * cgw-bp1pvpl9r9adju6l5****
   */
  customerGatewayId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the customer gateway. 
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the customer gateway belongs.
   * 
   * You can call [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) to query resource group IDs.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags bound to the customer gateway.
   */
  tag?: DescribeCustomerGatewaysRequestTag[];
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGatewayId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeCustomerGatewaysRequestTag },
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

