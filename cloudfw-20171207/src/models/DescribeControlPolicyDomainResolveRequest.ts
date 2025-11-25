// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyDomainResolveRequest extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * internet
   */
  firewallType?: string;
  /**
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-beijing
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      firewallType: 'FirewallType',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      firewallType: 'string',
      ipVersion: 'number',
      lang: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

