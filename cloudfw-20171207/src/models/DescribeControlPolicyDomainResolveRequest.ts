// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyDomainResolveRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The Cloud Firewall type.
   * 
   * @example
   * internet
   */
  firewallType?: string;
  /**
   * @remarks
   * The supported IP address version.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The language type. Valid values:
   * - **en**: English
   * - **zh**: Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID.
   * 
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

