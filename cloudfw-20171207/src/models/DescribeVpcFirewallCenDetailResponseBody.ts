// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallCenDetailResponseBodyFirewallVpc extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you can specify a CIDR block when you create a VPC firewall for a Basic Edition transit router of a CEN instance. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  allowConfiguration?: number;
  /**
   * @remarks
   * Firewall backup availability zone ID.
   * 
   * @example
   * cn-hangzhou-k
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The CIDR block of the VPC.
   * 
   * @example
   * 10.0.0.0/8
   */
  vpcCidr?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1245k5oagy2bp74****
   */
  vpcId?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch.
   * 
   * @example
   * 10.0.0.1/24
   */
  vswitchCidr?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1sqg9wms9wxcs1****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The availability zone ID of the virtual switch.
   * 
   * @example
   * cn-hangzhou-i
   */
  vswitchZoneId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allowConfiguration: 'AllowConfiguration',
      standbyZoneId: 'StandbyZoneId',
      vpcCidr: 'VpcCidr',
      vpcId: 'VpcId',
      vswitchCidr: 'VswitchCidr',
      vswitchId: 'VswitchId',
      vswitchZoneId: 'VswitchZoneId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowConfiguration: 'number',
      standbyZoneId: 'string',
      vpcCidr: 'string',
      vpcId: 'string',
      vswitchCidr: 'string',
      vswitchId: 'string',
      vswitchZoneId: 'string',
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

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENI that belongs to the VPC.
   * 
   * @example
   * eni-8vbhfosfqv2rff42****
   */
  eniId?: string;
  /**
   * @remarks
   * The private IP address of the ENI that belongs to the VPC.
   * 
   * @example
   * 192.168.XX.XX
   */
  eniPrivateIpAddress?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI is connected.
   * 
   * @example
   * vsw-wz9viido7j436b0n1****
   */
  eniVSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniPrivateIpAddress: 'EniPrivateIpAddress',
      eniVSwitchId: 'EniVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniPrivateIpAddress: 'string',
      eniVSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the VPC.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The instance ID of the next hop for the VPC.
   * 
   * @example
   * vrt-m5eb5me6c3l5sezae****
   */
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList extends $dara.Model {
  /**
   * @remarks
   * The route entries for the VPC.
   */
  routeEntryList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The route table ID of the VPC.
   * 
   * @example
   * vtb-1234
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routeEntryList)) {
      $dara.Model.validateArray(this.routeEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpc extends $dara.Model {
  /**
   * @remarks
   * The ID of the connection between two network instances.
   * 
   * @example
   * tr-attach-sxig7bye51fid5****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The name of the connection between two network instances.
   * 
   * @example
   * Local test
   */
  attachmentName?: string;
  /**
   * @remarks
   * An array consisting of the CIDR blocks that are protected by the VPC firewall.
   */
  defendCidrList?: string[];
  /**
   * @remarks
   * The Elastic Network Interfaces (ENIs).
   */
  eniList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList[];
  /**
   * @remarks
   * The ID of the specified vSwitch when the routing mode is manual.
   * 
   * @example
   * vsw-zeq4o875u****
   */
  manualVSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC for which the VPC firewall is created.
   * 
   * @example
   * vpc-2zefk9fbn8j7v585g****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the network instance.
   * 
   * @example
   * Test VPC
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The type of the network instance. The value is fixed as **VPC**.
   * 
   * @example
   * VPC
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 158039427902****
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region in which the VPC resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode. Valid values:
   * 
   * *   auto: automatic mode
   * *   manual: manual mode
   * 
   * @example
   * auto
   */
  routeMode?: string;
  /**
   * @remarks
   * Indicates whether the manual routing mode is supported. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  supportManualMode?: string;
  /**
   * @remarks
   * The instance ID of the CEN transit router.
   * 
   * @example
   * tr-2zetwxskej633l3u1****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The edition of the CEN transit router. Valid values:
   * 
   * *   **Basic**: Basic Edition
   * *   **Enterprise**: Enterprise Edition
   * 
   * @example
   * Basic
   */
  transitRouterType?: string;
  /**
   * @remarks
   * An array that consists of the CIDR blocks of the VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * Test instance
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentId: 'AttachmentId',
      attachmentName: 'AttachmentName',
      defendCidrList: 'DefendCidrList',
      eniList: 'EniList',
      manualVSwitchId: 'ManualVSwitchId',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceType: 'NetworkInstanceType',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      supportManualMode: 'SupportManualMode',
      transitRouterId: 'TransitRouterId',
      transitRouterType: 'TransitRouterType',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      attachmentName: 'string',
      defendCidrList: { 'type': 'array', 'itemType': 'string' },
      eniList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList },
      manualVSwitchId: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      networkInstanceType: 'string',
      ownerId: 'string',
      regionNo: 'string',
      routeMode: 'string',
      supportManualMode: 'string',
      transitRouterId: 'string',
      transitRouterType: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.defendCidrList)) {
      $dara.Model.validateArray(this.defendCidrList);
    }
    if(Array.isArray(this.eniList)) {
      $dara.Model.validateArray(this.eniList);
    }
    if(Array.isArray(this.vpcCidrTableList)) {
      $dara.Model.validateArray(this.vpcCidrTableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The connection type of the VPC firewall. The value is fixed as **cen**, which indicates CEN instances.
   * 
   * @example
   * cen
   */
  connectType?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: enabled
   * *   **closed**: disabled
   * *   **notconfigured**: not configured
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The firewall VPC.
   */
  firewallVpc?: DescribeVpcFirewallCenDetailResponseBodyFirewallVpc;
  /**
   * @remarks
   * The details about the VPC.
   */
  localVpc?: DescribeVpcFirewallCenDetailResponseBodyLocalVpc;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125g4d2
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * @example
   * Test firewall
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      firewallVpc: 'FirewallVpc',
      localVpc: 'LocalVpc',
      requestId: 'RequestId',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectType: 'string',
      firewallSwitchStatus: 'string',
      firewallVpc: DescribeVpcFirewallCenDetailResponseBodyFirewallVpc,
      localVpc: DescribeVpcFirewallCenDetailResponseBodyLocalVpc,
      requestId: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  validate() {
    if(this.firewallVpc && typeof (this.firewallVpc as any).validate === 'function') {
      (this.firewallVpc as any).validate();
    }
    if(this.localVpc && typeof (this.localVpc as any).validate === 'function') {
      (this.localVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

