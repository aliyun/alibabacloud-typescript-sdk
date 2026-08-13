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
   * The original next hop address of the NAT gateway.
   * 
   * @example
   * ngw-2ze0s284r9atg5******
   */
  nextHopId?: string;
  /**
   * @remarks
   * The network type of the next hop. Valid values: NatGateway.
   * 
   * @example
   * NatGateway
   */
  nextHopType?: string;
  /**
   * @remarks
   * The route table that contains the default route of the NAT gateway.
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
   * > The management account of the Cloud Firewall member accounts.
   * 
   * @example
   * 19106481******
   */
  aliUid?: number;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * Firewall creation failed
   */
  errorDetail?: string;
  /**
   * @remarks
   * The deployment mode of the NAT firewall service. Valid values: **PrimaryStandby** (active/standby mode) and **MultiPrimary** (active-active mode).
   * 
   * @example
   * PrimaryStandby
   */
  firewallServiceMode?: string;
  /**
   * @remarks
   * The list of zone IDs used by the NAT firewall service.
   */
  firewallServiceZones?: string[];
  /**
   * @remarks
   * The UID of the Cloud Firewall member accounts.
   * 
   * @example
   * 19106481******
   */
  memberUid?: number;
  /**
   * @remarks
   * The ID of the NAT gateway to query.
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
   * nat-gateway-test
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The list of default route entries for the NAT gateway.
   */
  natRouteEntryList?: DescribeNatFirewallListResponseBodyNatFirewallListNatRouteEntryList[];
  /**
   * @remarks
   * The NAT firewall ID.
   * 
   * @example
   * proxy-nat30******
   */
  proxyId?: string;
  /**
   * @remarks
   * The NAT firewall name.
   * 
   * @example
   * nat-firewall-test
   */
  proxyName?: string;
  /**
   * @remarks
   * The elastic network interface (ENI) ID used by the firewall.
   * 
   * @example
   * eni-bp127llmo4v5qju******
   */
  proxyNetworkInterfaceId?: string;
  /**
   * @remarks
   * The route table ID used by the firewall.
   * 
   * @example
   * vtb-bp1pmyga7p4j10a******
   */
  proxyRouteTableId?: string;
  /**
   * @remarks
   * The Cloud Firewall status. Valid values:
   * 
   * - configuring: being created
   * - deleting: being deleted
   * - normal: normal 
   * - abnormal: abnormal
   * - opening: being enabled
   * - closing: being disabled
   * - closed: disabled
   * 
   * @example
   * normal
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The vSwitch ID used by the firewall.
   * 
   * @example
   * vsw-bp1amn3t1ktjjy8******
   */
  proxyVSwitchId?: string;
  /**
   * @remarks
   * The region ID of the Cloud Firewall.
   * > For more information about the regions supported by Cloud Firewall, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether strict mode is enabled.
   * 
   * - 1: Strict mode is enabled. 
   * - 0: Strict mode is disabled.
   * 
   * @example
   * 0
   */
  strictMode?: number;
  /**
   * @remarks
   * The VPC-connected instance ID.
   * 
   * @example
   * vpc-2ze26ya******
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC instance.
   * 
   * @example
   * vpc-test-instance
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      errorDetail: 'ErrorDetail',
      firewallServiceMode: 'FirewallServiceMode',
      firewallServiceZones: 'FirewallServiceZones',
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
      firewallServiceMode: 'string',
      firewallServiceZones: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.firewallServiceZones)) {
      $dara.Model.validateArray(this.firewallServiceZones);
    }
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
   * The list of Cloud Firewalls.
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

