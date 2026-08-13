// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyDomainResolveRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. This parameter is required and must be specified when you call this operation.
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
   * The IP address version. Valid values: **4** (IPv4) and **6** (IPv6).
   * 
   * > This parameter is unconditionally required and has no dependency on RegionNo. If this parameter is not specified, the error MissingParameter.IpVersion is returned (-200157). If the value is invalid, the error ErrorParameterIpVersion is returned (-200135).
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
   * The region ID. This parameter is required. If this parameter is not specified, the error MissingParameter.RegionNo is returned (-200155, The required parameter \\"RegionNo\\" is not provided.).
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

