// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallVswitchResourcesResponseBodyVswitchListFirewallList extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall instance.
   * 
   * @example
   * vfw-tr-37145c8f5ede45e9****
   */
  firewallId?: string;
  /**
   * @remarks
   * The name of the Cloud Firewall.
   * 
   * @example
   * test-Firewall
   */
  firewallName?: string;
  /**
   * @remarks
   * The type of the Cloud Firewall.
   * 
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
   * @remarks
   * The number of available IP addresses in the zone.
   * 
   * @example
   * 10
   */
  availableIpCount?: string;
  /**
   * @remarks
   * The IPv4 CIDR block.
   * 
   * @example
   * 192.168.0.XX/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The details of the event.
   * 
   * @example
   * []
   */
  detail?: string;
  /**
   * @remarks
   * The list of firewalls.
   */
  firewallList?: DescribeFirewallVswitchResourcesResponseBodyVswitchListFirewallList[];
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-uf6ml7rgw5gzzdr****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * - **Custom**: a custom route table.
   * 
   * - **System**: a system route table.
   * 
   * @example
   * Custom
   */
  routeTableType?: string;
  /**
   * @remarks
   * The configuration status.
   * 
   * @example
   * open
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp10qla9mgi42eo****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vsw-test
   */
  vswitchName?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
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
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A81E99DF-07CF-5EE4-966A-9FF9F2F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of vSwitches.
   */
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

