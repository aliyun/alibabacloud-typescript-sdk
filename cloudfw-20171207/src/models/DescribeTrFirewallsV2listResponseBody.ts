// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsAclConfig extends $dara.Model {
  /**
   * @remarks
   * Whether to enable strict mode
   * - 1: Enable strict mode
   * - 0: Disable strict mode
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
   * Indicates whether basic protection is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * Indicates whether virtual patching is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  enableAllPatch?: number;
  /**
   * @remarks
   * The level of the rule group for the IPS. Valid values:
   * 
   * *   **1**: loose.
   * *   **2**: medium.
   * *   **3**: strict.
   * 
   * @example
   * 3
   */
  ruleClass?: number;
  /**
   * @remarks
   * The mode of the IPS. Valid values:
   * 
   * *   **1**: block mode
   * *   **0**: monitor mode
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
   * The protected express connect routers.
   */
  ecrList?: string[];
  /**
   * @remarks
   * The protected peer transit routers.
   */
  peerTrList?: string[];
  /**
   * @remarks
   * The protected virtual border routers (VBRs).
   */
  vbrList?: string[];
  /**
   * @remarks
   * The protected VPCs.
   */
  vpcList?: string[];
  /**
   * @remarks
   * The protected VPN gateways.
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
   * The unprotected express connect routers.
   */
  ecrList?: string[];
  /**
   * @remarks
   * The unprotected peer transit routers.
   */
  peerTrList?: string[];
  /**
   * @remarks
   * The unprotected VBRs.
   */
  vbrList?: string[];
  /**
   * @remarks
   * The unprotected VPCs.
   */
  vpcList?: string[];
  /**
   * @remarks
   * The unprotected VPN gateways.
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
   * ACL engine mode.
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
   * The party responsible for the TR fees generated by the VPC firewall. Values:
   * 
   * - **PayByCloudFirewall**: Fees are borne by the Cloud Firewall.
   * - **PayByCenOwner**: Fees are borne by the account to which the CEN instance belongs.
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
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not created.
   * *   **configured**: The VPC firewall is created but is not enabled.
   * *   **creating**: The VPC firewall is being created.
   * *   **opening**: The VPC firewall is being enabled.
   * *   **deleting**: The VPC firewall is being deleted.
   * 
   * >  If you do not specify this parameter, VPC firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The intrusion prevention system (IPS) configurations.
   */
  ipsConfig?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsIpsConfig;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 171761785151****
   */
  ownerId?: number;
  /**
   * @remarks
   * Indicates whether the VPC firewall can be automatically enabled. Valid values:
   * 
   * *   **passed**: yes
   * *   **failed**: no
   * *   **unknown**
   * 
   * @example
   * passed
   */
  precheckStatus?: string;
  /**
   * @remarks
   * The protected resources.
   */
  protectedResource?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsProtectedResource;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * Indicates whether you can create a VPC firewall in a specified region. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * @example
   * enable
   */
  regionStatus?: string;
  /**
   * @remarks
   * The result code of the operation that creates the VPC firewall. Valid values:
   * 
   * *   **RegionDisable**: VPC Firewall is not supported in the region of the network instance. You cannot create a VPC firewall for the network instance.
   * *   **Empty string**: You can create a VPC firewall for the network instance.
   * 
   * @example
   * RegionDisable
   */
  resultCode?: string;
  /**
   * @remarks
   * The routing mode of the VPC firewall. Valid values:
   * 
   * *   **managed**: automatic mode
   * *   **manual**: manual mode
   * 
   * @example
   * managed
   */
  routeMode?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-2vcmhjs88nil55fvu****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The unprotected resources.
   */
  unprotectedResource?: DescribeTrFirewallsV2ListResponseBodyVpcTrFirewallsUnprotectedResource;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * @example
   * test
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
   * The VPC firewalls.
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

