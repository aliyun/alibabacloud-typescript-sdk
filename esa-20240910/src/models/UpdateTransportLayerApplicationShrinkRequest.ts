// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Layer 4 application ID. You can obtain the ID by calling the [ListTransportLayerApplications](~~ListTransportLayerApplications~~) API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 165503967****
   */
  applicationId?: number;
  /**
   * @remarks
   * Specifies whether to enable network access optimization for the Chinese mainland. Default value: off. Valid values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * Specifies whether to enable the IP access rule. After this feature is enabled, the IP access rules in WAF take effect for the Layer 4 application. Valid values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ipv6?: string;
  /**
   * @remarks
   * Specifies whether to enable connection keep-alive protection. Default value: off. Valid values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * off
   */
  keepAliveProtection?: string;
  /**
   * @remarks
   * The list of forwarding rules. For rule details, all parameters except the comment are required for each rule.
   */
  rulesShrink?: string;
  /**
   * @remarks
   * The site ID. You can obtain the ID by calling the [ListSites](~~ListSites~~) API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies whether to enable the static IP address feature. Default value: off. Valid values:
   * 
   * - on: Enable.
   * - off: Disable.
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

