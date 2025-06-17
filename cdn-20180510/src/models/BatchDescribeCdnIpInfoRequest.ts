// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDescribeCdnIpInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IP addresses to query. Separate IP addresses with commas (,). You can specify up to 20 IP addresses at a time.
   * 
   * > *   Example of an IPv4 address: 192.0.2.1
   * >*   Example of an IPv6 address: 2001:db8:ffff:ffff:ffff:\\*\\*\\*\\*:ffff.
   * 
   * This parameter is required.
   * 
   * @example
   * 111.XXX.XXX.230,47.XXX.XXX.243
   */
  ipAddrList?: string;
  /**
   * @remarks
   * The language of the query results. Valid values:
   * 
   * *   **zh** (default): Simplified Chinese.
   * *   **en**: English.
   * 
   * @example
   * en
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddrList: 'IpAddrList',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddrList: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

