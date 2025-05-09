// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallCenDetailResponseBodyFirewallVpc } from "./DescribeVpcFirewallCenDetailResponseBodyFirewallVpc";
import { DescribeVpcFirewallCenDetailResponseBodyLocalVpc } from "./DescribeVpcFirewallCenDetailResponseBodyLocalVpc";


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

