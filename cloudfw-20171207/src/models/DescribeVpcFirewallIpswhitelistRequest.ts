// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallIPSWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member in Cloud Firewall.
   * 
   * @example
   * 1766185894104675
   */
  memberUid?: number;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-3547deab1c9b4190a53f
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'number',
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

