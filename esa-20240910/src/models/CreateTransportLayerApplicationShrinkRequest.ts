// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransportLayerApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Enables or disables network optimization for access from the Chinese mainland. This feature is disabled by default. Valid values:
   * 
   * - `on`: Enables the optimization.
   * 
   * - `off`: Disables the optimization.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * Applies IP access rules from Web Application Firewall (WAF) to this Transport Layer Application. Valid values:
   * 
   * - `on`: Enables the feature.
   * 
   * - `off`: Disables the feature.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * Enables or disables IPv6 support.
   * 
   * @example
   * off
   */
  ipv6?: string;
  /**
   * @remarks
   * Enables or disables keep-alive protection.
   */
  keepAliveProtection?: string;
  /**
   * @remarks
   * The domain name of the Transport Layer Application.
   * 
   * This parameter is required.
   * 
   * @example
   * aaa.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The list of forwarding rules.
   * 
   * This parameter is required.
   */
  rulesShrink?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  staticIp?: string;
  static names(): { [key: string]: string } {
    return {
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      keepAliveProtection: 'KeepAliveProtection',
      recordName: 'RecordName',
      rulesShrink: 'Rules',
      siteId: 'SiteId',
      staticIp: 'StaticIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      keepAliveProtection: 'string',
      recordName: 'string',
      rulesShrink: 'string',
      siteId: 'number',
      staticIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

