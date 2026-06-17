// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserIPSWhitelistResponseBodyIpv6Whitelists extends $dara.Model {
  /**
   * @remarks
   * The direction of IPv6 traffic on the Internet Border.
   * 
   * @example
   * 1
   */
  direction?: number;
  /**
   * @remarks
   * The type of address in the IPv6 whitelist for the Internet.
   * 
   * @example
   * 0
   */
  listType?: number;
  /**
   * @remarks
   * The value of the IPv6 whitelist on the Internet Border.
   * 
   * - If the whitelist type is `custom input`: the name of the address book.
   * 
   * - If the whitelist type is `address book reference`: an IPv6 address.
   * 
   * @example
   * 2408:400a:81a:7900:a77d:ea36:fcbf:de40/128
   */
  listValue?: string;
  /**
   * @remarks
   * The list of IPv6 whitelists for the Internet.
   */
  whiteListValue?: string[];
  /**
   * @remarks
   * The type of source or destination for which the IPv6 whitelist on the Internet Border takes effect.
   * 
   * @example
   * 2
   */
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      listType: 'ListType',
      listValue: 'ListValue',
      whiteListValue: 'WhiteListValue',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'number',
      listType: 'number',
      listValue: 'string',
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

export class DescribeUserIPSWhitelistResponseBodyWhitelists extends $dara.Model {
  /**
   * @remarks
   * The direction of IPv4 traffic on the Internet Border.
   * 
   * @example
   * 1
   */
  direction?: number;
  /**
   * @remarks
   * The type of address in the IPv4 whitelist for the Internet.
   * 
   * @example
   * 1
   */
  listType?: number;
  /**
   * @remarks
   * The value of the IPv4 whitelist on the Internet Border.
   * 
   * - If the whitelist type is `custom input`: the name of the address book.
   * 
   * - If the whitelist type is `address book reference`: an IPv4 address.
   * 
   * @example
   * 10.10.200.4/32,10.10.200.25/32
   */
  listValue?: string;
  /**
   * @remarks
   * The list of IPv4 whitelists for the Internet.
   */
  whiteListValue?: string[];
  /**
   * @remarks
   * The type of source or destination for which the IPv4 whitelist on the Internet Border takes effect.
   * 
   * @example
   * 1
   */
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      listType: 'ListType',
      listValue: 'ListValue',
      whiteListValue: 'WhiteListValue',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'number',
      listType: 'number',
      listValue: 'string',
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

export class DescribeUserIPSWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of IPv6 whitelists for the IPS on the Internet Border.
   */
  ipv6Whitelists?: DescribeUserIPSWhitelistResponseBodyIpv6Whitelists[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F788A5-6A47-5EA9-AC30-CA4DB98AD520
   */
  requestId?: string;
  /**
   * @remarks
   * The list of IPv4 whitelists for the IPS on the Internet Border.
   */
  whitelists?: DescribeUserIPSWhitelistResponseBodyWhitelists[];
  static names(): { [key: string]: string } {
    return {
      ipv6Whitelists: 'Ipv6Whitelists',
      requestId: 'RequestId',
      whitelists: 'Whitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Whitelists: { 'type': 'array', 'itemType': DescribeUserIPSWhitelistResponseBodyIpv6Whitelists },
      requestId: 'string',
      whitelists: { 'type': 'array', 'itemType': DescribeUserIPSWhitelistResponseBodyWhitelists },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Whitelists)) {
      $dara.Model.validateArray(this.ipv6Whitelists);
    }
    if(Array.isArray(this.whitelists)) {
      $dara.Model.validateArray(this.whitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

