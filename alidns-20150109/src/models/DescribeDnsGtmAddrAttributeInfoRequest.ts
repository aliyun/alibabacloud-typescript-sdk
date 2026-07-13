// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAddrAttributeInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The list of addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *       "1.1.XX.XX"
   * ]
   */
  addrs?: string;
  /**
   * @remarks
   * The language of some returned parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The address type:
   * 
   * - IPV4: IPv4 address
   * 
   * - IPV6: IPv6 address
   * 
   * - DOMAIN: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * IPV4
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addrs: 'Addrs',
      lang: 'Lang',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrs: 'string',
      lang: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

