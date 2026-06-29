// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Layer 4 application ID. You can call the [ListTransportLayerApplications](~~ListTransportLayerApplications~~) operation to obtain the application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 165503967****
   */
  applicationId?: number;
  /**
   * @remarks
   * Specifies whether to enable network access optimization for the Chinese mainland. This feature is disabled by default. Valid values:
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * The IP access rule switch. When enabled, WAF IP access rules take effect for the Layer 4 application. Valid values:
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
   * The IPv6 switch. Valid values:
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
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
   * The list of forwarding rules. For each rule, all parameters except the comment are required.
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
      applicationId: 'ApplicationId',
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      keepAliveProtection: 'KeepAliveProtection',
      rulesShrink: 'Rules',
      siteId: 'SiteId',
      staticIp: 'StaticIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      keepAliveProtection: 'string',
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

