// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsAclConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the strict mode is enabled. Valid values:
   * 
   * - 1: enabled
   * 
   * - 0: disabled
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

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether basic protection is enabled. Valid values:
   * 
   * - **1**: enabled.
   * 
   * - **0**: disabled.
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether virtual patching is enabled. Valid values:
   * 
   * - **1**: enabled.
   * 
   * - **0**: disabled.
   * 
   * @example
   * 1
   */
  enableAllPatch?: number;
  /**
   * @remarks
   * The type of the IPS rule group. Valid values:
   * 
   * - **1**: loose.
   * 
   * - **2**: medium.
   * 
   * - **3**: strict.
   * 
   * @example
   * 1
   */
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the IPS. Valid values:
   * 
   * - **1**: Block Mode.
   * 
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

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList extends $dara.Model {
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
   * The ID of the next hop instance in the VPC.
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

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList extends $dara.Model {
  /**
   * @remarks
   * The routes of the VPC.
   */
  routeEntryList?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList[];
  /**
   * @remarks
   * The ID of the route table for the VPC.
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
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList },
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

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc extends $dara.Model {
  /**
   * @remarks
   * The authorization status of the VPC. The value is fixed as **authorized**. This value indicates that the VPC is authorized.
   * 
   * @example
   * authorized
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * The CIDR blocks that are protected by the VPC firewall.
   */
  defendCidrList?: string[];
  /**
   * @remarks
   * The ID of the vSwitch that is specified for the manual routing mode.
   * 
   * @example
   * vsw-zeq4o875u****
   */
  manualVSwitchId?: string;
  /**
   * @remarks
   * The ID of the network instance.
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
   * network-instance-test
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **VPC**: Virtual Private Cloud.
   * 
   * - **VBR**: Virtual Border Router.
   * 
   * - **CCN**: Cloud Connect Network.
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
  ownerId?: number;
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
   * - **auto**: automatic.
   * 
   * - **manual**: manual.
   * 
   * @example
   * auto
   */
  routeMode?: string;
  /**
   * @remarks
   * Indicates whether the manual routing mode is supported. Valid values:
   * 
   * - **1**: yes.
   * 
   * - **0**: no.
   * 
   * @example
   * 0
   */
  supportManualMode?: string;
  /**
   * @remarks
   * The edition of the CEN transit router. Valid values:
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
   * The CIDR blocks of the VPC.
   */
  vpcCidrTableList?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList[];
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
   * vpc-instance
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'AuthorizationStatus',
      defendCidrList: 'DefendCidrList',
      manualVSwitchId: 'ManualVSwitchId',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceType: 'NetworkInstanceType',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      supportManualMode: 'SupportManualMode',
      transitRouterType: 'TransitRouterType',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      defendCidrList: { 'type': 'array', 'itemType': 'string' },
      manualVSwitchId: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      networkInstanceType: 'string',
      ownerId: 'number',
      regionNo: 'string',
      routeMode: 'string',
      supportManualMode: 'string',
      transitRouterType: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.defendCidrList)) {
      $dara.Model.validateArray(this.defendCidrList);
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

export class DescribeVpcFirewallCenListResponseBodyVpcFirewalls extends $dara.Model {
  /**
   * @remarks
   * The access control list (ACL) engine mode.
   */
  aclConfig?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsAclConfig;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-x5jayxou71ad73****
   */
  cenId?: string;
  /**
   * @remarks
   * The name of the CEN instance.
   * 
   * @example
   * cen-test
   */
  cenName?: string;
  /**
   * @remarks
   * The connection type of the VPC firewall. The value is fixed as cen, which indicates a CEN instance.
   * 
   * @example
   * cen
   */
  connectType?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * - **opened**: enabled.
   * 
   * - **closed**: disabled.
   * 
   * - **notconfigured**: not configured.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The intrusion prevention system (IPS) configuration.
   */
  ipsConfig?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig;
  /**
   * @remarks
   * The details of the VPC.
   */
  localVpc?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * Indicates whether the firewall can be automatically created. Cloud Firewall automatically creates a firewall and protects VPC traffic based on route learning. Valid values:
   * 
   * - **passed**: The firewall can be automatically created.
   * 
   * - **failed**: The firewall cannot be automatically created.
   * 
   * - **unknown**: The status is unknown.
   * 
   * @example
   * failed
   */
  precheckStatus?: string;
  /**
   * @remarks
   * The status of the region. Valid values:
   * 
   * - **enable**: VPC firewalls can be configured in the region.
   * 
   * - **disable**: VPC firewalls cannot be configured in the region.
   * 
   * @example
   * enable
   */
  regionStatus?: string;
  /**
   * @remarks
   * The result code of the operation to create the VPC firewall. Valid values:
   * 
   * - **Unauthorized**: The VPC firewall cannot be created because a network instance is not authorized.
   * 
   * - **RegionDisable**: The VPC firewall cannot be created because the region of the network instance is not supported.
   * 
   * - **OpsDisable**: The VPC firewall cannot be created.
   * 
   * - **VbrNotSupport**: The VPC firewall cannot be created because the VBR in the CEN instance is not supported.
   * 
   * - An empty string indicates that the VPC firewall can be created for the network instance.
   * 
   * @example
   * Unauthorized
   */
  resultCode?: string;
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
   * vpc-firewall-test
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      aclConfig: 'AclConfig',
      cenId: 'CenId',
      cenName: 'CenName',
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      ipsConfig: 'IpsConfig',
      localVpc: 'LocalVpc',
      memberUid: 'MemberUid',
      precheckStatus: 'PrecheckStatus',
      regionStatus: 'RegionStatus',
      resultCode: 'ResultCode',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclConfig: DescribeVpcFirewallCenListResponseBodyVpcFirewallsAclConfig,
      cenId: 'string',
      cenName: 'string',
      connectType: 'string',
      firewallSwitchStatus: 'string',
      ipsConfig: DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig,
      localVpc: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc,
      memberUid: 'string',
      precheckStatus: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBody extends $dara.Model {
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
   * The total number of VPC firewalls.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The details of the VPC firewalls.
   */
  vpcFirewalls?: DescribeVpcFirewallCenListResponseBodyVpcFirewalls[];
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
      vpcFirewalls: { 'type': 'array', 'itemType': DescribeVpcFirewallCenListResponseBodyVpcFirewalls },
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

