// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetRiskListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IP addresses to query. Separate multiple IP addresses with commas (,). You can query up to 20 IP addresses at a time. This parameter is required in practice. If you do not specify this parameter, the API returns a 400 error.
   * 
   * >- IPv4 example: 47.97.XX.XX.
   * >- IPv6 example: 2001:db8:ffff:ffff:ffff:XXXX:ffff.
   */
  ipAddrList?: string[];
  /**
   * @remarks
   * The IP version of the assets protected by Cloud Firewall.
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
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
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

