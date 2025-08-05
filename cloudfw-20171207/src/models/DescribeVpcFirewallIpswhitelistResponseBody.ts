// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallIPSWhitelistResponseBodyWhitelists extends $dara.Model {
  /**
   * @remarks
   * The type of the list. Valid values:
   * 
   * *   **1**: user-defined
   * *   **2**: address book
   * 
   * @example
   * 1
   */
  listType?: number;
  /**
   * @remarks
   * The entries in the list.
   * 
   * @example
   * 10.10.200.4/32,10.10.200.25/32
   */
  listValue?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-57431e9abe424852a578
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * An array of entries in the list.
   */
  whiteListValue?: string[];
  /**
   * @remarks
   * The type of the whitelist. Valid values:
   * 
   * *   **1**: destination
   * *   **2**: source
   * 
   * @example
   * 1
   */
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      listType: 'ListType',
      listValue: 'ListValue',
      vpcFirewallId: 'VpcFirewallId',
      whiteListValue: 'WhiteListValue',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listType: 'number',
      listValue: 'string',
      vpcFirewallId: 'string',
      whiteListValue: { 'type': 'array', 'itemType': 'string' },
      whiteType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.whiteListValue)) {
      $dara.Model.validateArray(this.whiteListValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

