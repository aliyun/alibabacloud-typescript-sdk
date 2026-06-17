// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallVSwitchResponseBodyVswitchListFirewallList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the firewall.
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
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      firewallName: 'FirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      firewallName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallVSwitchResponseBodyVswitchList extends $dara.Model {
  /**
   * @remarks
   * The number of available IP addresses.
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
   * The number of intrusion prevention events.
   * 
   * @example
   * 10
   */
  firewallCount?: string;
  /**
   * @remarks
   * The list of firewalls.
   */
  firewallList?: DescribeFirewallVSwitchResponseBodyVswitchListFirewallList[];
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 184480249330****
   */
  memberUid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the VPC instance.
   * 
   * @example
   * vpc-2zeez7gymz5r4pi****am
   */
  vpcId?: string;
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
   * The zone ID.
   * 
   * @example
   * cn-shanghai-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpCount: 'AvailableIpCount',
      cidrBlock: 'CidrBlock',
      firewallCount: 'FirewallCount',
      firewallList: 'FirewallList',
      memberUid: 'MemberUid',
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      vswitchName: 'VswitchName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpCount: 'string',
      cidrBlock: 'string',
      firewallCount: 'string',
      firewallList: { 'type': 'array', 'itemType': DescribeFirewallVSwitchResponseBodyVswitchListFirewallList },
      memberUid: 'string',
      regionNo: 'string',
      vpcId: 'string',
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

export class DescribeFirewallVSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A1562A68-99FA-5D6B-BD5B-2F959F25****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of vSwitches.
   */
  vswitchList?: DescribeFirewallVSwitchResponseBodyVswitchList[];
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
      vswitchList: { 'type': 'array', 'itemType': DescribeFirewallVSwitchResponseBodyVswitchList },
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

