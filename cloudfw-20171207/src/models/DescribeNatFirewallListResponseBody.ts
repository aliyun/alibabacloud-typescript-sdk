// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallListResponseBodyNatFirewallListNatRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the default route.
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The next hop of the original NAT gateway.
   * 
   * @example
   * ngw-2ze0s284r9atg5******
   */
  nextHopId?: string;
  /**
   * @remarks
   * The network type of the next hop. The value is fixed as NatGateway.
   * 
   * @example
   * NatGateway
   */
  nextHopType?: string;
  /**
   * @remarks
   * The route table to which the default route of the NAT gateway belongs.
   * 
   * @example
   * vtb-bp18o0gb******
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      routeTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallListResponseBodyNatFirewallList extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * >  The value of this parameter indicates the management account to which the member is added.
   * 
   * @example
   * 19106481******
   */
  aliUid?: number;
  /**
   * @remarks
   * The cause of the error.
   * 
   * @example
   * Create Failed.
   */
  errorDetail?: string;
  /**
   * @remarks
   * The UID of the member in Cloud Firewall.
   * 
   * @example
   * 19106481******
   */
  memberUid?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-uf6tnblxip4qcxg******
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * @example
   * nat-******
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The default route entries of the NAT gateway.
   */
  natRouteEntryList?: DescribeNatFirewallListResponseBodyNatFirewallListNatRouteEntryList[];
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * @example
   * proxy-nat30******
   */
  proxyId?: string;
  /**
   * @remarks
   * The name of the NAT firewall.
   * 
   * @example
   * proxy-******
   */
  proxyName?: string;
  proxyNetworkInterfaceId?: string;
  proxyRouteTableId?: string;
  /**
   * @remarks
   * The status of the NAT firewall. Valid values:
   * 
   * *   configuring
   * *   deleting
   * *   normal
   * *   abnormal
   * *   opening
   * *   closing
   * *   closed
   * 
   * @example
   * normal
   */
  proxyStatus?: string;
  proxyVSwitchId?: string;
  /**
   * @remarks
   * The region ID of your Cloud Firewall.
   * 
   * >  For more information about the supported regions of Cloud Firewall, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the strict mode is enabled. Valid values: 1, which specifies yes, and 0, which specifies no.
   * 
   * @example
   * 0
   */
  strictMode?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-2ze26ya******
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * vpc-******
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      errorDetail: 'ErrorDetail',
      memberUid: 'MemberUid',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
      natRouteEntryList: 'NatRouteEntryList',
      proxyId: 'ProxyId',
      proxyName: 'ProxyName',
      proxyNetworkInterfaceId: 'ProxyNetworkInterfaceId',
      proxyRouteTableId: 'ProxyRouteTableId',
      proxyStatus: 'ProxyStatus',
      proxyVSwitchId: 'ProxyVSwitchId',
      regionId: 'RegionId',
      strictMode: 'StrictMode',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      errorDetail: 'string',
      memberUid: 'number',
      natGatewayId: 'string',
      natGatewayName: 'string',
      natRouteEntryList: { 'type': 'array', 'itemType': DescribeNatFirewallListResponseBodyNatFirewallListNatRouteEntryList },
      proxyId: 'string',
      proxyName: 'string',
      proxyNetworkInterfaceId: 'string',
      proxyRouteTableId: 'string',
      proxyStatus: 'string',
      proxyVSwitchId: 'string',
      regionId: 'string',
      strictMode: 'number',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natRouteEntryList)) {
      $dara.Model.validateArray(this.natRouteEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The NAT firewalls.
   */
  natFirewallList?: DescribeNatFirewallListResponseBodyNatFirewallList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15FCCC52-1E23-57AE-B5EF-3E00A3******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of NAT firewalls.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      natFirewallList: 'NatFirewallList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natFirewallList: { 'type': 'array', 'itemType': DescribeNatFirewallListResponseBodyNatFirewallList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.natFirewallList)) {
      $dara.Model.validateArray(this.natFirewallList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

