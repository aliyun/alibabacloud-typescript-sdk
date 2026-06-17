// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetRiskListRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses to query. Separate multiple IP addresses with commas (,). You can query a maximum of 20 IP addresses at a time.
   * 
   * > - Example of an IPv4 address: 47.97.XX.XX.
   * >
   * > - Example of an IPv6 address: 2001:db8:ffff:ffff:ffff:XXXX:ffff.
   */
  ipAddrList?: string[];
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall.
   * 
   * Valid values:
   * 
   * - **4** (default): IPv4
   * 
   * - **6**: IPv6
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 47.100.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddrList: 'IpAddrList',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddrList: { 'type': 'array', 'itemType': 'string' },
      ipVersion: 'number',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddrList)) {
      $dara.Model.validateArray(this.ipAddrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

