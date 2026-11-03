// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallListResponseBodyVpcFirewallsAclConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether strict mode is enabled. Valid values:
   * 
   * - **1**: Enabled. 
   * - **0**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  strictMode?: number;
  static names(): { [key: string]: string } {
    return {
      strictMode: 'StrictMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strictMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig extends $dara.Model {
  /**
   * @remarks
   * The switch for Basic Policies. Valid values:
   * 
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * The switch for virtual patches. Valid values:
   * 
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  enableAllPatch?: number;
  /**
   * @remarks
   * The IPS rules group. Valid values:
   * 
   * - **1**: Loose rule group.
   * 
   * - **2**: Medium rule group.
   * 
   * - **3**: Strict rule group.
   * 
   * @example
   * 1
   */
  ruleClass?: number;
  /**
   * @remarks
   * The IPS defense mode. Valid values:
   * 
   * - **1**: Block mode.
   * - **0**: Monitor mode.
   * 
   * @example
   * 0
   */
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      enableAllPatch: 'number',
      ruleClass: 'number',
      runMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the local VPC.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The next hop instance ID of the local VPC.
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

export class DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList extends $dara.Model {
  /**
   * @remarks
   * The routing entry list of the local VPC.
   */
  routeEntryList?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The ID of the route table of the local VPC.
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
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList },
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

export class DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc extends $dara.Model {
  /**
   * @remarks
   * The authorization status of the local VPC. Valid values: **authorized**, which indicates that the VPC is authorized.
   * 
   * @example
   * authorized
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the local VPC belongs.
   * 
   * @example
   * 158039427902****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the local VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The CIDR block list of the local VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList[];
  /**
   * @remarks
   * The instance ID of the local VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the local VPC.
   * 
   * @example
   * test-vpc1
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'AuthorizationStatus',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      ownerId: 'number',
      regionNo: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vpcCidrTableList)) {
      $dara.Model.validateArray(this.vpcCidrTableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the peer VPC.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The next hop instance ID of the peer VPC.
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

export class DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList extends $dara.Model {
  /**
   * @remarks
   * The routing entry list of the peer VPC.
   */
  routeEntryList?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The ID of the route table of the peer VPC.
   * 
   * @example
   * vtb-1256
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
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList },
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

export class DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc extends $dara.Model {
  /**
   * @remarks
   * The authorization status of the peer VPC. Valid values: **authorized**, which indicates that the VPC is authorized.
   * 
   * @example
   * authorized
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the peer VPC belongs.
   * 
   * @example
   * 158039427902****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the peer VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The CIDR block list of the peer VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList[];
  /**
   * @remarks
   * The instance ID of the peer VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the peer VPC.
   * 
   * @example
   * test-vpc2
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'AuthorizationStatus',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      ownerId: 'number',
      regionNo: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vpcCidrTableList)) {
      $dara.Model.validateArray(this.vpcCidrTableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewalls extends $dara.Model {
  /**
   * @remarks
   * The ACL engine mode.
   */
  aclConfig?: DescribeVpcFirewallListResponseBodyVpcFirewallsAclConfig;
  /**
   * @remarks
   * The bandwidth of the Express Connect circuit. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The connection subtype. Valid values:
   * 
   * - **vpc2vpc**: Express Connect.
   * - **vpcpeer**: VPC peering connection.
   * 
   * @example
   * vpcpeer
   */
  connectSubType?: string;
  /**
   * @remarks
   * The interconnection type of the virtual private cloud (VPC) border firewall. Valid values: **expressconnect**, which indicates Express Connect.
   * 
   * @example
   * expressconnect
   */
  connectType?: string;
  /**
   * @remarks
   * The switch status of the virtual private cloud (VPC) border firewall. Valid values:
   * 
   * - **opened**: Enabled.
   * - **closed**: Disabled.
   * - **notconfigured**: The virtual private cloud (VPC) border firewall is not configured.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The IPS configuration.
   */
  ipsConfig?: DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig;
  /**
   * @remarks
   * The details of the local VPC.
   */
  localVpc?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc;
  /**
   * @remarks
   * The UID of the member accounts.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The details of the peer VPC.
   */
  peerVpc?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc;
  /**
   * @remarks
   * The availability status of the region. Valid values:
   * 
   * - **enable**: Available. The region supports virtual private cloud (VPC) border firewalls.
   * - **disable**: Unavailable. The region does not support virtual private cloud (VPC) border firewalls.
   * 
   * @example
   * enable
   */
  regionStatus?: string;
  /**
   * @remarks
   * The operation result code when you create a VPC border firewall. Valid values:
   * 
   * - **Unauthorized**: Indicates that a VPC without authorization exists, and you are not allowed to create a VPC border firewall.
   * - **RegionDisable**: Indicates that the region where the VPC resides does not support VPC border firewalls, and you are not allowed to create a VPC border firewall.
   * - **Empty string**: Indicates that you can normally create a VPC border firewall for this network instance.
   * 
   * @example
   * Unauthorized
   */
  resultCode?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) border firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the virtual private cloud (VPC) border firewall.
   * 
   * @example
   * test-firewall
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      aclConfig: 'AclConfig',
      bandwidth: 'Bandwidth',
      connectSubType: 'ConnectSubType',
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      ipsConfig: 'IpsConfig',
      localVpc: 'LocalVpc',
      memberUid: 'MemberUid',
      peerVpc: 'PeerVpc',
      regionStatus: 'RegionStatus',
      resultCode: 'ResultCode',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclConfig: DescribeVpcFirewallListResponseBodyVpcFirewallsAclConfig,
      bandwidth: 'number',
      connectSubType: 'string',
      connectType: 'string',
      firewallSwitchStatus: 'string',
      ipsConfig: DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig,
      localVpc: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc,
      memberUid: 'string',
      peerVpc: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc,
      regionStatus: 'string',
      resultCode: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  validate() {
    if(this.aclConfig && typeof (this.aclConfig as any).validate === 'function') {
      (this.aclConfig as any).validate();
    }
    if(this.ipsConfig && typeof (this.ipsConfig as any).validate === 'function') {
      (this.ipsConfig as any).validate();
    }
    if(this.localVpc && typeof (this.localVpc as any).validate === 'function') {
      (this.localVpc as any).validate();
    }
    if(this.peerVpc && typeof (this.peerVpc as any).validate === 'function') {
      (this.peerVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125k8g2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of virtual private cloud (VPC) border firewalls.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The details of the virtual private cloud (VPC) border firewalls.
   */
  vpcFirewalls?: DescribeVpcFirewallListResponseBodyVpcFirewalls[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcFirewalls: 'VpcFirewalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vpcFirewalls: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewalls },
    };
  }

  validate() {
    if(Array.isArray(this.vpcFirewalls)) {
      $dara.Model.validateArray(this.vpcFirewalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

