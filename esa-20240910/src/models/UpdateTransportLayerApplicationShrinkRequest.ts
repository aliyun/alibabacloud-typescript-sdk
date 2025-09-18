// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Transport layer application ID, which can be obtained by calling the [ListTransportLayerApplications](~~ListTransportLayerApplications~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 165503967****
   */
  applicationId?: number;
  /**
   * @remarks
   * Whether to enable China mainland network access optimization, default is disabled. Value range:
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * IP access rule switch. When enabled, the IP access rules in WAF will take effect on the transport layer application.
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * IPv6 switch.
   * 
   * @example
   * on
   */
  ipv6?: string;
  /**
   * @remarks
   * Forwarding rule list. Details of each rule. Except for the comment, all other parameters are required.
   */
  rulesShrink?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
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

