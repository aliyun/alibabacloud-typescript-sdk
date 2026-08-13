// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallCenDetailResponseBodyFirewallVpc extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the firewall VPC CIDR block is allowed to be configured when you create a VPC firewall for CEN Basic Edition. Valid values:
   * - **1**: Allowed.
   * - **0**: Not allowed.
   * 
   * @example
   * 0
   */
  allowConfiguration?: number;
  /**
   * @remarks
   * The deployment mode of the VPC firewall service. Valid values: **PrimaryStandby** (active/standby mode) and **MultiPrimary** (active-active mode).
   * 
   * @example
   * PrimaryStandby
   */
  firewallServiceMode?: string;
  /**
   * @remarks
   * The zone IDs used by the VPC firewall service.
   */
  firewallServiceZones?: string[];
  /**
   * @remarks
   * The secondary zone ID of the firewall.
   * 
   * @example
   * cn-hangzhou-k
   * 
   * @deprecated
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
   * The VPC instance ID.
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
   * The zone ID of the vSwitch.
   * 
   * @example
   * cn-hangzhou-i
   */
  vswitchZoneId?: string;
  /**
   * @remarks
   * The primary zone ID of the firewall.
   * 
   * @example
   * cn-hangzhou-i
   * 
   * @deprecated
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allowConfiguration: 'AllowConfiguration',
      firewallServiceMode: 'FirewallServiceMode',
      firewallServiceZones: 'FirewallServiceZones',
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
      firewallServiceMode: 'string',
      firewallServiceZones: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.firewallServiceZones)) {
      $dara.Model.validateArray(this.firewallServiceZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the elastic network interface (ENI) that serves as the network interface controller (NIC) in the VPC.
   * 
   * @example
   * eni-8vbhfosfqv2rff42****
   */
  eniId?: string;
  /**
   * @remarks
   * The private IP of the elastic network interface (ENI) that serves as the network interface controller (NIC) in the VPC.
   * 
   * @example
   * 192.168.XX.XX
   */
  eniPrivateIpAddress?: string;
  /**
   * @remarks
   * The vSwitch ID of the elastic network interface (ENI) that serves as the network interface controller (NIC) in the VPC.
   * 
   * @example
   * vsw-wz9viido7j436b0n1****
   */
  eniVSwitchId?: string;
  /**
   * @remarks
   * The zone ID where the elastic network interface (ENI) that serves as the network interface controller (NIC) is active.
   * 
   * @example
   * cn-hangzhou-i
   */
  eniZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniPrivateIpAddress: 'EniPrivateIpAddress',
      eniVSwitchId: 'EniVSwitchId',
      eniZoneId: 'EniZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniPrivateIpAddress: 'string',
      eniVSwitchId: 'string',
      eniZoneId: 'string',
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
   * The next hop instance ID in the VPC.
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
   * The route entry list of the VPC.
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
   * The connection ID of the network instance.
   * 
   * @example
   * tr-attach-sxig7bye51fid5****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The connection name of the network instance.
   * 
   * @example
   * local-test
   */
  attachmentName?: string;
  /**
   * @remarks
   * The CIDR blocks protected by the virtual private cloud (VPC) firewall.
   */
  defendCidrList?: string[];
  /**
   * @remarks
   * The network interface controller (NIC) list.
   */
  eniList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList[];
  /**
   * @remarks
   * The ID of the vSwitch specified when the routing mode is manual.
   * 
   * @example
   * vsw-zeq4o875u****
   */
  manualVSwitchId?: string;
  /**
   * @remarks
   * The VPC instance ID used to create a VPC firewall.
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
   * test-vpc
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values: **VPC**.
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
   * The region ID of the VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode. Valid values:
   * 
   * - auto: automatic mode.
   * 
   * - manual: manual mode.
   * 
   * @example
   * auto
   */
  routeMode?: string;
  /**
   * @remarks
   * Indicates whether the routing mode supports manual mode. Valid values:
   * 
   * - **1**: Supported.
   * - **0**: Not supported.
   * 
   * @example
   * 0
   */
  supportManualMode?: string;
  /**
   * @remarks
   * The instance ID of the CEN-TR.
   * 
   * @example
   * tr-2zetwxskej633l3u1****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The version of the CEN transit router (CEN-TR). Valid values:
   * 
   * - **Basic**: Basic Edition.
   * 
   * - **Enterprise**: Enterprise Edition.
   * 
   * @example
   * Basic
   */
  transitRouterType?: string;
  /**
   * @remarks
   * The CIDR block list of the VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList[];
  /**
   * @remarks
   * The instance ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The instance name of the VPC.
   * 
   * @example
   * vpc-firewall-test
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
   * The connectivity type of the virtual private cloud (VPC) firewall. Valid values: **cen**, which indicates Cloud Enterprise Network.
   * 
   * @example
   * cen
   */
  connectType?: string;
  /**
   * @remarks
   * The switch status of the virtual private cloud (VPC) firewall. Valid values:
   * 
   * - **opened**: Enabled.
   * 
   * - **closed**: Shutdown.
   * 
   * - **notconfigured**: Not configured.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The VPC used by the firewall.
   */
  firewallVpc?: DescribeVpcFirewallCenDetailResponseBodyFirewallVpc;
  /**
   * @remarks
   * The VPC details.
   */
  localVpc?: DescribeVpcFirewallCenDetailResponseBodyLocalVpc;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125g4d2
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * vpc-firewall-test
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

