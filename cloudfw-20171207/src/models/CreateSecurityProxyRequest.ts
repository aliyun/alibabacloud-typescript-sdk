// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityProxyRequestNatRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the default route.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The next hop of the original NAT Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1okz6******
   */
  nextHopId?: string;
  /**
   * @remarks
   * The network type of the next hop. Set the value to NatGateway.
   * 
   * This parameter is required.
   * 
   * @example
   * NatGateway
   */
  nextHopType?: string;
  /**
   * @remarks
   * The route table that contains the default route of the NAT Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-2ze1******
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

export class CreateSecurityProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The security protection switch. Valid values:
   * 
   * - **open**: on
   * 
   * - **close**: off
   * 
   * @example
   * close
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1okz6k7******
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The list of routes of the NAT Gateway that you want to switch.
   * 
   * This parameter is required.
   */
  natRouteEntryList?: CreateSecurityProxyRequestNatRouteEntryList[];
  /**
   * @remarks
   * The name of the NAT firewall. The name must be 4 to 50 characters in length. It can contain letters, digits, Chinese characters, and underscores (_). The name cannot start with an underscore (_).
   * 
   * This parameter is required.
   * 
   * @example
   * nat-firewall
   */
  proxyName?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * > For more information about the regions where Cloud Firewall is available, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * Specifies whether to enable strict mode.
   * 
   * - 1: enables strict mode
   * 
   * - 0: disables strict mode
   * 
   * @example
   * 0
   */
  strictMode?: number;
  /**
   * @remarks
   * The ID of the VPC instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6b5lyul0x******
   */
  vpcId?: string;
  /**
   * @remarks
   * Specifies whether to use the automatic vSwitch selection feature. Valid values:
   * 
   * - **true**: automatic mode
   * 
   * - **false**: manual mode
   * 
   * @example
   * true
   */
  vswitchAuto?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch. This parameter is required if you use the automatic vSwitch selection feature.
   * 
   * @example
   * 0.0.0.0/0
   */
  vswitchCidr?: string;
  /**
   * @remarks
   * The ID of the vSwitch. This parameter is required if you use the manual vSwitch selection feature.
   * 
   * @example
   * vsw-bp1sqg9w******
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      natGatewayId: 'NatGatewayId',
      natRouteEntryList: 'NatRouteEntryList',
      proxyName: 'ProxyName',
      regionNo: 'RegionNo',
      strictMode: 'StrictMode',
      vpcId: 'VpcId',
      vswitchAuto: 'VswitchAuto',
      vswitchCidr: 'VswitchCidr',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallSwitch: 'string',
      lang: 'string',
      natGatewayId: 'string',
      natRouteEntryList: { 'type': 'array', 'itemType': CreateSecurityProxyRequestNatRouteEntryList },
      proxyName: 'string',
      regionNo: 'string',
      strictMode: 'number',
      vpcId: 'string',
      vswitchAuto: 'string',
      vswitchCidr: 'string',
      vswitchId: 'string',
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

