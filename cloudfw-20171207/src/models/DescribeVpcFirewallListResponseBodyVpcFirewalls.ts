// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallListResponseBodyVpcFirewallsAclConfig } from "./DescribeVpcFirewallListResponseBodyVpcFirewallsAclConfig";
import { DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig } from "./DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig";
import { DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc } from "./DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc";
import { DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc } from "./DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc";


export class DescribeVpcFirewallListResponseBodyVpcFirewalls extends $dara.Model {
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
   * The sub-type of the connection. Valid values:
   * 
   * *   **vpc2vpc**: Express Connect connection
   * *   **vpcpeer**: peer connection
   * 
   * @example
   * vpcpeer
   */
  connectSubType?: string;
  /**
   * @remarks
   * The connection type of the VPC firewall. The value is fixed as **expressconnect**, which indicates an Express Connect connection.
   * 
   * @example
   * expressconnect
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
  ipsConfig?: DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig;
  /**
   * @remarks
   * The details about the local VPC.
   */
  localVpc?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The details about the peer VPC.
   */
  peerVpc?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc;
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
   * *   **Unauthorized**: Cloud Firewall is not authorized to access a VPC for which the VPC firewall is created, and the VPC firewall cannot be created.
   * *   **RegionDisable**: VPC Firewall is not supported in the region of a VPC for which the VPC firewall is created, and the VPC firewall cannot be created.
   * *   **Empty string**: You can create a VPC firewall for the network instance.
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

