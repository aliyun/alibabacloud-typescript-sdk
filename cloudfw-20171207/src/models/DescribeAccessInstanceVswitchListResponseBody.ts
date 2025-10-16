// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceVSwitchListResponseBodyZonesVSwitchList extends $dara.Model {
  /**
   * @example
   * 254
   */
  availableIpAddressCount?: number;
  /**
   * @example
   * 192.168.0.0/16
   */
  cidrBlock?: string;
  /**
   * @example
   * false
   */
  firewallVSwitch?: boolean;
  /**
   * @example
   * vsw-qzeaol304m***
   */
  vSwitchId?: string;
  /**
   * @example
   * ManagedVSW
   */
  vSwitchName?: string;
  /**
   * @example
   * vpc-uf6b5lyul0x******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      cidrBlock: 'CidrBlock',
      firewallVSwitch: 'FirewallVSwitch',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'number',
      cidrBlock: 'string',
      firewallVSwitch: 'boolean',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessInstanceVSwitchListResponseBodyZones extends $dara.Model {
  vSwitchList?: DescribeAccessInstanceVSwitchListResponseBodyZonesVSwitchList[];
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchList: 'VSwitchList',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchList: { 'type': 'array', 'itemType': DescribeAccessInstanceVSwitchListResponseBodyZonesVSwitchList },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchList)) {
      $dara.Model.validateArray(this.vSwitchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessInstanceVSwitchListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 450D47F5-956E-543E-8502-2F71C8C54E72
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  zones?: DescribeAccessInstanceVSwitchListResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      zones: { 'type': 'array', 'itemType': DescribeAccessInstanceVSwitchListResponseBodyZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

