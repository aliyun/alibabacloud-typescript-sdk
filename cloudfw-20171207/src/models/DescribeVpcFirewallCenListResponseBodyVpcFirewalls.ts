// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallCenListResponseBodyVpcFirewallsAclConfig } from "./DescribeVpcFirewallCenListResponseBodyVpcFirewallsAclConfig";
import { DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig } from "./DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig";
import { DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc } from "./DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc";


export class DescribeVpcFirewallCenListResponseBodyVpcFirewalls extends $dara.Model {
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
   * Test CEN instance
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
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not configured.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The intrusion prevention system (IPS) configurations.
   */
  ipsConfig?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig;
  /**
   * @remarks
   * The details about the VPC.
   */
  localVpc?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc;
  /**
   * @remarks
   * The UID of the member that is manged by your Alibaba Cloud account. The member is also an Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * Indicates whether the VPC firewall can be automatically enabled to protect VPC traffic based on route learning. Valid values:
   * 
   * *   **passed**: The VPC firewall can be automatically enabled.
   * *   **failed**: The VPC firewall cannot be automatically enabled.
   * *   **unknown**: The VPC firewall is in an unknown state.
   * 
   * @example
   * failed
   */
  precheckStatus?: string;
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
   * *   **Unauthorized**: Cloud Firewall is not authorized to access the VPC for which the VPC firewall is created, and the VPC firewall cannot be created.
   * *   **RegionDisable**: VPC Firewall is not supported in the region of the VPC for which the VPC firewall is created, and the VPC firewall cannot be created.
   * *   **OpsDisable**: You are not allowed to create the VPC firewall.
   * *   **VbrNotSupport**: The VPC firewall cannot be created for a VBR that is attached to the CEN instance.
   * *   Empty string: You can create a VPC firewall for the network instance.
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
   * Test firewall
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

