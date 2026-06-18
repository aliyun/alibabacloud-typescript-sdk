// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The transport layer application ID. You can obtain this ID by calling the [ListTransportLayerApplications](~~ListTransportLayerApplications~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 165503967****
   */
  applicationId?: number;
  /**
   * @remarks
   * Specifies whether to enable cross-border optimization for network access from the Chinese mainland. This feature is disabled by default. Valid values:
   * 
   * - on: Enables the feature.
   * 
   * - off: Disables the feature.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * Specifies whether to enable IP access rules. If enabled, the IP access rules in WAF apply to the transport layer application. Valid values:
   * 
   * - on: Enables the feature.
   * 
   * - off: Disables the feature.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values: `on` and `off`.
   * 
   * @example
   * on
   */
  ipv6?: string;
  keepAliveProtection?: string;
  /**
   * @remarks
   * A list of forwarding rules. For each rule, all parameters are required except for `Comment`.
   */
  rulesShrink?: string;
  /**
   * @remarks
   * The site ID. You can obtain this ID by calling the [ListSites](~~ListSites~~) operation.
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

