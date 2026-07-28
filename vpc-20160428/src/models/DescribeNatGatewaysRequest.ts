// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the NAT gateway instance. You can specify up to 20 tag keys.
   * 
   * The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the NAT gateway instance. You can specify up to 20 tag values.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * valueTest
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

export class DescribeNatGatewaysRequest extends $dara.Model {
  availabilityMode?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM user authorization, and missing parameter values. If the request fails the dry run, the corresponding error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the request. After the request passes the dry run, a 2xx HTTP status code is returned and the resource status is queried. This is the Normal request behavior.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * <props="china">The billing method of the NAT gateway instance that you want to query. Valid values:
   * 
   * <props="china">
   * - **PostPaid**: pay-as-you-go.
   * - **PrePaid**: the legacy subscription billing method. New purchases under the subscription billing method are no longer supported.
   * 
   * 
   * 
   * <props="intl">The billing method of the NAT gateway instance that you want to query. Valid value: **PostPaid** (pay-as-you-go).
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the NAT gateway that you want to query.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the NAT gateway that you want to query.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The type of the NAT gateway. Valid value: **Enhanced** (enhanced NAT gateway).
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  /**
   * @remarks
   * The type of the NAT gateway that you want to query. Valid values:
   * 
   * - **internet**: Internet NAT gateway.
   * - **intranet**: VPC NAT gateway.
   * 
   * @example
   * internet
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway that you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the NAT gateway that you want to query belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * <props="china">The specification of the Internet NAT gateway. This parameter is supported only when **InstanceChargeType** is set to **PrePaid** (legacy subscription Internet NAT gateway) to create a NAT gateway with defined specifications. Valid values:
   * 
   * <props="china">
   * - **Small** (default): small.
   * - **Middle**: medium.
   * - **Large**: large.
   * 
   * 
   * <props="intl">The specification of the NAT gateway. Leave this parameter empty.
   * 
   * @example
   * 中国站示例值：Small，国际站示例值：无需填写
   */
  spec?: string;
  /**
   * @remarks
   * The status of the NAT gateway that you want to query. Valid values:
   * - **Creating**: The NAT gateway is being created. Creating a NAT gateway is an asynchronous operation. The NAT gateway remains in the **Creating** state until the operation is complete.
   * 
   * - **Available**: The NAT gateway is available. This is a stable state after the NAT gateway is created.
   * 
   * - **Modifying**: The NAT gateway is being modified. Modifying a NAT gateway is an asynchronous operation. The NAT gateway remains in the **Modifying** state until the operation is complete.
   * 
   * - **Deleting**: The NAT gateway is being deleted. Deleting a NAT gateway is an asynchronous operation. The NAT gateway remains in the **Deleting** state until the operation is complete.
   * 
   * - **Converting**: The NAT gateway is being upgraded from a standard NAT gateway to an enhanced NAT gateway. This is an asynchronous operation. The NAT gateway remains in the **Converting** state until the operation is complete.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeNatGatewaysRequestTag[];
  /**
   * @remarks
   * The ID of the VPC to which the NAT gateway that you want to query belongs.
   * 
   * @example
   * vpc-bp15zckdt37pq72z****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the NAT gateway.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availabilityMode: 'AvailabilityMode',
      dryRun: 'DryRun',
      instanceChargeType: 'InstanceChargeType',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      natType: 'NatType',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spec: 'Spec',
      status: 'Status',
      tag: 'Tag',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabilityMode: 'string',
      dryRun: 'boolean',
      instanceChargeType: 'string',
      name: 'string',
      natGatewayId: 'string',
      natType: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spec: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeNatGatewaysRequestTag },
      vpcId: 'string',
      zoneId: 'string',
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

