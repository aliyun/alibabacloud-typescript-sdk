// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsAclConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the strict mode is enabled.
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

export class DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsIpsConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to enable the basic protection feature. Valid values:
   * 
   * - **1**: enabled
   * 
   * - **0**: disabled
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether to enable virtual patching. Valid values:
   * 
   * - **1**: enabled
   * 
   * - **0**: disabled
   * 
   * @example
   * 1
   */
  enableAllPatch?: number;
  /**
   * @remarks
   * The IPS rule group. Valid values:
   * 
   * - **1**: loose
   * 
   * - **2**: medium
   * 
   * - **3**: strict
   * 
   * @example
   * 3
   */
  ruleClass?: number;
  /**
   * @remarks
   * The IPS mode. Valid values:
   * 
   * - **1**: block mode
   * 
   * - **0**: monitor mode
   * 
   * @example
   * 1
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

export class DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsProtectedResource extends $dara.Model {
  /**
   * @remarks
   * The number of protected resources.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of protected Express Connect Router (ECR) instances.
   */
  ecrList?: string[];
  /**
   * @remarks
   * The list of protected peer transit routers.
   */
  peerTrList?: string[];
  /**
   * @remarks
   * The list of protected virtual border routers (VBRs).
   */
  vbrList?: string[];
  /**
   * @remarks
   * The list of protected VPCs.
   */
  vpcList?: string[];
  /**
   * @remarks
   * The list of protected VPN gateways.
   */
  vpnList?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ecrList: 'EcrList',
      peerTrList: 'PeerTrList',
      vbrList: 'VbrList',
      vpcList: 'VpcList',
      vpnList: 'VpnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ecrList: { 'type': 'array', 'itemType': 'string' },
      peerTrList: { 'type': 'array', 'itemType': 'string' },
      vbrList: { 'type': 'array', 'itemType': 'string' },
      vpcList: { 'type': 'array', 'itemType': 'string' },
      vpnList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ecrList)) {
      $dara.Model.validateArray(this.ecrList);
    }
    if(Array.isArray(this.peerTrList)) {
      $dara.Model.validateArray(this.peerTrList);
    }
    if(Array.isArray(this.vbrList)) {
      $dara.Model.validateArray(this.vbrList);
    }
    if(Array.isArray(this.vpcList)) {
      $dara.Model.validateArray(this.vpcList);
    }
    if(Array.isArray(this.vpnList)) {
      $dara.Model.validateArray(this.vpnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsUnprotectedResource extends $dara.Model {
  /**
   * @remarks
   * The number of unprotected resources.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of unprotected Express Connect Router (ECR) instances.
   */
  ecrList?: string[];
  /**
   * @remarks
   * The list of unprotected peer transit routers.
   */
  peerTrList?: string[];
  /**
   * @remarks
   * The list of unprotected virtual border routers (VBRs).
   */
  vbrList?: string[];
  /**
   * @remarks
   * The list of unprotected VPCs.
   */
  vpcList?: string[];
  /**
   * @remarks
   * The list of unprotected VPN gateways.
   */
  vpnList?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ecrList: 'EcrList',
      peerTrList: 'PeerTrList',
      vbrList: 'VbrList',
      vpcList: 'VpcList',
      vpnList: 'VpnList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ecrList: { 'type': 'array', 'itemType': 'string' },
      peerTrList: { 'type': 'array', 'itemType': 'string' },
      vbrList: { 'type': 'array', 'itemType': 'string' },
      vpcList: { 'type': 'array', 'itemType': 'string' },
      vpnList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ecrList)) {
      $dara.Model.validateArray(this.ecrList);
    }
    if(Array.isArray(this.peerTrList)) {
      $dara.Model.validateArray(this.peerTrList);
    }
    if(Array.isArray(this.vbrList)) {
      $dara.Model.validateArray(this.vbrList);
    }
    if(Array.isArray(this.vpcList)) {
      $dara.Model.validateArray(this.vpcList);
    }
    if(Array.isArray(this.vpnList)) {
      $dara.Model.validateArray(this.vpnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2ListResponseBodyVpcTrFirewalls extends $dara.Model {
  /**
   * @remarks
   * The mode of the access control list (ACL) engine.
   */
  aclConfig?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsAclConfig;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-03f8s0z052ka3v****
   */
  cenId?: string;
  /**
   * @remarks
   * The name of the CEN instance.
   * 
   * @example
   * cen_swas
   */
  cenName?: string;
  /**
   * @remarks
   * The payer for the transit router (TR) instance that is created for the VPC firewall. Valid values:
   * 
   * - **PayByCloudFirewall**: Cloud Firewall
   * 
   * - **PayByCenOwner**: The account that owns the CEN instance
   * 
   * @example
   * PayByCenOwner
   */
  cloudFirewallVpcOrderType?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-99bc4f0fc88b4d00****
   */
  firewallId?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * - **opened**: Enabled
   * 
   * - **closed**: Disabled
   * 
   * - **notconfigured**: The VPC firewall is not configured.
   * 
   * - **configured**: The VPC firewall is configured.
   * 
   * - **creating**: The VPC firewall is being created.
   * 
   * - **opening**: The VPC firewall is being enabled.
   * 
   * - **deleting**: The VPC firewall is being deleted.
   * 
   * > If you do not specify this parameter, VPC firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The configurations of the intrusion prevention system (IPS).
   */
  ipsConfig?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsIpsConfig;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VPC.
   * 
   * @example
   * 171761785151****
   */
  ownerId?: number;
  /**
   * @remarks
   * Indicates whether the VPC firewall can be automatically created. Valid values:
   * 
   * - **passed**: The VPC firewall can be automatically created.
   * 
   * - **failed**: The VPC firewall cannot be automatically created.
   * 
   * - **unknown**: The status is unknown.
   * 
   * @example
   * passed
   */
  precheckStatus?: string;
  /**
   * @remarks
   * The list of protected resources.
   */
  protectedResource?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsProtectedResource;
  /**
   * @remarks
   * The region ID of the transit router instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The status of the region. Valid values:
   * 
   * - **enable**: The VPC firewall is available in the region.
   * 
   * - **disable**: The VPC firewall is not available in the region.
   * 
   * @example
   * enable
   */
  regionStatus?: string;
  /**
   * @remarks
   * The result code of the operation to create the VPC firewall. Valid values:
   * 
   * - **RegionDisable**: The VPC firewall is not supported in the region where the network instance resides. The VPC firewall cannot be created.
   * 
   * - An empty string: The VPC firewall can be created for the network instance.
   * 
   * @example
   * RegionDisable
   */
  resultCode?: string;
  /**
   * @remarks
   * The routing mode. Valid values:
   * 
   * - **managed**: automatic mode
   * 
   * - **manual**: manual mode
   * 
   * @example
   * managed
   */
  routeMode?: string;
  /**
   * @remarks
   * The instance ID of the transit router.
   * 
   * @example
   * tr-2vcmhjs88nil55fvu****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The list of unprotected resources.
   */
  unprotectedResource?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsUnprotectedResource;
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
      cloudFirewallVpcOrderType: 'CloudFirewallVpcOrderType',
      firewallId: 'FirewallId',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      ipsConfig: 'IpsConfig',
      ownerId: 'OwnerId',
      precheckStatus: 'PrecheckStatus',
      protectedResource: 'ProtectedResource',
      regionNo: 'RegionNo',
      regionStatus: 'RegionStatus',
      resultCode: 'ResultCode',
      routeMode: 'RouteMode',
      transitRouterId: 'TransitRouterId',
      unprotectedResource: 'UnprotectedResource',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclConfig: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsAclConfig,
      cenId: 'string',
      cenName: 'string',
      cloudFirewallVpcOrderType: 'string',
      firewallId: 'string',
      firewallSwitchStatus: 'string',
      ipsConfig: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsIpsConfig,
      ownerId: 'number',
      precheckStatus: 'string',
      protectedResource: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsProtectedResource,
      regionNo: 'string',
      regionStatus: 'string',
      resultCode: 'string',
      routeMode: 'string',
      transitRouterId: 'string',
      unprotectedResource: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsUnprotectedResource,
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
    if(this.protectedResource && typeof (this.protectedResource as any).validate === 'function') {
      (this.protectedResource as any).validate();
    }
    if(this.unprotectedResource && typeof (this.unprotectedResource as any).validate === 'function') {
      (this.unprotectedResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrFirewallsV2ListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1471E2EC-F706-5F11-A79B-BD583ACB8297
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: string;
  /**
   * @remarks
   * The list of VPC firewalls.
   */
  vpcTrFirewalls?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewalls[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcTrFirewalls: 'VpcTrFirewalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'string',
      vpcTrFirewalls: { 'type': 'array', 'itemType': DescribeTrFirewallsV2ListResponseBodyVpcTrFirewalls },
    };
  }

  validate() {
    if(Array.isArray(this.vpcTrFirewalls)) {
      $dara.Model.validateArray(this.vpcTrFirewalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

