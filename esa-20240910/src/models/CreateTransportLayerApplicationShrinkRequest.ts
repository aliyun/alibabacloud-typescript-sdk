// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransportLayerApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable network access optimization for the Chinese mainland. This feature is disabled by default. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * The IP access rule switch. When enabled, IP access rules in WAF take effect for the Layer 4 application. Valid values:
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. This feature is disabled by default. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * off
   */
  ipv6?: string;
  /**
   * @remarks
   * Specifies whether to enable keep-alive protection. This feature is disabled by default. Valid values:
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * off
   */
  keepAliveProtection?: string;
  /**
   * @remarks
   * The domain name of the Layer 4 application.
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
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID. The site must be activated.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies whether to enable static IP. This feature is disabled by default. Valid values:
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * off
   */
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

