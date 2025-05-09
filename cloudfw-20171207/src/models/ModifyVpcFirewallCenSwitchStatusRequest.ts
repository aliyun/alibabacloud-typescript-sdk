// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallCenSwitchStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the VPC firewall. Valid values:
   * 
   * *   **open**: yes
   * *   **close**: no
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
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
   * The instance ID of the VPC firewall.
   * 
   * > You can call the [DescribeVpcFirewallCenList](https://help.aliyun.com/document_detail/345777.html) operation to query the instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallSwitch: 'string',
      lang: 'string',
      memberUid: 'string',
      vpcFirewallId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

