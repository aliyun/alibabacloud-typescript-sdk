// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnGatewaysRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
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

export class DescribeVpnGatewaysRequest extends $dara.Model {
  /**
   * @remarks
   * The billing status of the VPN gateway. Valid values:
   * 
   * - **Normal**: Normal.
   * 
   * - **FinancialLocked**: locked due to overdue payment.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The type of the VPN gateway. Valid values:
   * - Traditional: a traditional VPN gateway that supports both IPsec-VPN and SSL-VPN features.
   * - Enhanced.SiteToSite: an enhanced site-to-cloud VPN gateway that supports only the IPsec-VPN feature.
   * 
   * @example
   * Enhanced.SiteToSite
   */
  gatewayType?: string;
  /**
   * @remarks
   * Specifies whether to include pending order data. Valid values:
   * 
   * - **false** (default): does not include pending order data.
   * 
   * - **true**: includes pending order data.
   * 
   * @example
   * true
   */
  includeReservationData?: boolean;
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
   * The number of entries per page for paging queries. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the VPN gateway. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the VPN gateway belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource group IDs.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the VPN gateway. Valid values:
   * 
   * - **init**: initializing.
   * 
   * - **provisioning**: preparing.
   * 
   * - **active**: Normal.
   * 
   * - **updating**: updating.
   * 
   * - **deleting**: deleting.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The list of tags bound to the VPN gateway.
   */
  tag?: DescribeVpnGatewaysRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the VPN gateway belongs.
   * 
   * @example
   * vpc-bp1m3i0kn1nd4wiw9****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp17lofy9fd0dnvzv****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      gatewayType: 'GatewayType',
      includeReservationData: 'IncludeReservationData',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      vpcId: 'VpcId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      gatewayType: 'string',
      includeReservationData: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVpnGatewaysRequestTag },
      vpcId: 'string',
      vpnGatewayId: 'string',
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

