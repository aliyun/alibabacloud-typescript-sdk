// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallManualVSwitchListResponseBodyVSwitchList extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * > The root account of the Cloud Firewall member account.
   * 
   * @example
   * 122167357026****
   */
  aliUid?: number;
  /**
   * @remarks
   * The number of available IP addresses in the vSwitch.
   * 
   * @example
   * 10
   */
  availableIpAddressCount?: number;
  /**
   * @remarks
   * The IPv4 CIDR block.
   * 
   * @example
   * 10.0.31.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The ID of the owner.
   * 
   * @example
   * 137578716100****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the associated route table.
   * 
   * @example
   * vtb-2zet3gyk01o07so****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp10d0kcp907721z****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vsw-test
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The ID of the VPC instance.
   * 
   * @example
   * vpc-uf62kq7c364sil2z2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      availableIpAddressCount: 'AvailableIpAddressCount',
      cidrBlock: 'CidrBlock',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      routeTableId: 'RouteTableId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      availableIpAddressCount: 'number',
      cidrBlock: 'string',
      ownerId: 'number',
      regionNo: 'string',
      routeTableId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallManualVSwitchListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6EED3674-74E7-54DC-8FD4-6A374133****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of vSwitches.
   */
  vSwitchList?: DescribeVpcFirewallManualVSwitchListResponseBodyVSwitchList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitchList: 'VSwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vSwitchList: { 'type': 'array', 'itemType': DescribeVpcFirewallManualVSwitchListResponseBodyVSwitchList },
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

