// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallDetailResponseBodyLocalVpc } from "./DescribeVpcFirewallDetailResponseBodyLocalVpc";
import { DescribeVpcFirewallDetailResponseBodyPeerVpc } from "./DescribeVpcFirewallDetailResponseBodyPeerVpc";


export class DescribeVpcFirewallDetailResponseBody extends $dara.Model {
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
   * The connection type of the VPC firewall. The value is fixed as **expressconnect**, which indicates Express Connect circuits.
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
   * *   **configured**: The VPC firewall is configured.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The details about the local VPC.
   */
  localVpc?: DescribeVpcFirewallDetailResponseBodyLocalVpc;
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
  peerVpc?: DescribeVpcFirewallDetailResponseBodyPeerVpc;
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
   * tf-test
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      localVpc: 'LocalVpc',
      memberUid: 'MemberUid',
      peerVpc: 'PeerVpc',
      requestId: 'RequestId',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      connectType: 'string',
      firewallSwitchStatus: 'string',
      localVpc: DescribeVpcFirewallDetailResponseBodyLocalVpc,
      memberUid: 'string',
      peerVpc: DescribeVpcFirewallDetailResponseBodyPeerVpc,
      requestId: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  validate() {
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

