// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallIPSWhitelistResponseBodyWhitelists } from "./DescribeVpcFirewallIpswhitelistResponseBodyWhitelists";


export class DescribeVpcFirewallIPSWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B5EE02F9-4F21-56CA-AA49-F9F8D69483C1
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the IPS whitelist of the VPC firewall.
   */
  whitelists?: DescribeVpcFirewallIPSWhitelistResponseBodyWhitelists[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      whitelists: 'Whitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      whitelists: { 'type': 'array', 'itemType': DescribeVpcFirewallIPSWhitelistResponseBodyWhitelists },
    };
  }

  validate() {
    if(Array.isArray(this.whitelists)) {
      $dara.Model.validateArray(this.whitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

