// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallIPSWhitelistResponseBodyWhitelists extends $dara.Model {
  /**
   * @remarks
   * The list type. Valid values:
   * - **1**: user-defined type
   * - **2**: address book type.
   * 
   * @example
   * 1
   */
  listType?: number;
  /**
   * @remarks
   * The value of the corresponding list type.
   * 
   * @example
   * 10.10.200.4/32,10.10.200.25/32
   */
  listValue?: string;
  /**
   * @remarks
   * The instance ID of the VPC border firewall.
   * 
   * @example
   * cen-l6t5yj5fi762******
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The content of the list type array.
   */
  whiteListValue?: string[];
  /**
   * @remarks
   * The whitelist type. Valid values:
   * - **1**: destination type
   * - **2**: source type.
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
   * The request ID.
   * 
   * @example
   * B5EE02F9****AA49****F9F8D69483C1
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the VPC border firewall IPS whitelist.
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

