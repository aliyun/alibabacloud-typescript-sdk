// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallVswitchResourcesResponseBodyVswitchListFirewallList extends $dara.Model {
  /**
   * @example
   * vfw-tr-37145c8f5ede45e9****
   */
  firewallId?: string;
  /**
   * @example
   * test-Firewall
   */
  firewallName?: string;
  /**
   * @example
   * NatFirewall
   */
  firewallType?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      firewallName: 'FirewallName',
      firewallType: 'FirewallType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      firewallName: 'string',
      firewallType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallVswitchResourcesResponseBodyVswitchList extends $dara.Model {
  /**
   * @example
   * 10
   */
  availableIpCount?: string;
  /**
   * @example
   * 192.168.0.XX/16
   */
  cidrBlock?: string;
  /**
   * @example
   * []
   */
  detail?: string;
  firewallList?: DescribeFirewallVswitchResourcesResponseBodyVswitchListFirewallList[];
  /**
   * @example
   * vtb-uf6ml7rgw5gzzdr****
   */
  routeTableId?: string;
  /**
   * @example
   * Custom
   */
  routeTableType?: string;
  /**
   * @example
   * open
   */
  status?: string;
  /**
   * @example
   * vsw-bp10qla9mgi42eo****
   */
  vswitchId?: string;
  /**
   * @example
   * vsw-test
   */
  vswitchName?: string;
  /**
   * @example
   * cn-shanghai-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpCount: 'AvailableIpCount',
      cidrBlock: 'CidrBlock',
      detail: 'Detail',
      firewallList: 'FirewallList',
      routeTableId: 'RouteTableId',
      routeTableType: 'RouteTableType',
      status: 'Status',
      vswitchId: 'VswitchId',
      vswitchName: 'VswitchName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpCount: 'string',
      cidrBlock: 'string',
      detail: 'string',
      firewallList: { 'type': 'array', 'itemType': DescribeFirewallVswitchResourcesResponseBodyVswitchListFirewallList },
      routeTableId: 'string',
      routeTableType: 'string',
      status: 'string',
      vswitchId: 'string',
      vswitchName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallList)) {
      $dara.Model.validateArray(this.firewallList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallVswitchResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * A81E99DF-07CF-5EE4-966A-9FF9F2F****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  vswitchList?: DescribeFirewallVswitchResourcesResponseBodyVswitchList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vswitchList: 'VswitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vswitchList: { 'type': 'array', 'itemType': DescribeFirewallVswitchResourcesResponseBodyVswitchList },
    };
  }

  validate() {
    if(Array.isArray(this.vswitchList)) {
      $dara.Model.validateArray(this.vswitchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

