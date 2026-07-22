// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyDomainResolveRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The type of the cloud firewall.
   * 
   * @example
   * internet
   */
  firewallType?: string;
  /**
   * @remarks
   * The supported IP address version. This parameter is required.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID. This parameter is required.
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

