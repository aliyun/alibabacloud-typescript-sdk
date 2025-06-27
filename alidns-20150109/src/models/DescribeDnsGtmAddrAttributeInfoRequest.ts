// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAddrAttributeInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1.1.1.1"]
   */
  addrs?: string;
  /**
   * @remarks
   * The language of the values for specific response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The type of addresses. Valid values:
   * 
   * *   IPV4: IPv4 address
   * *   IPv6: IPv6 address
   * *   DOMAIN: domain name
   * 
   * This parameter is required.
   * 
   * @example
   * ipv4
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

