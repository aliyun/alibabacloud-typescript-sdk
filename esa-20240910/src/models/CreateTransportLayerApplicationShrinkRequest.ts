// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransportLayerApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable China mainland network access optimization, default is disabled. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * IP access rule switch. When enabled, the WAF\\"s IP access rules apply to the transport layer application.
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
   * off
   */
  ipv6?: string;
  /**
   * @remarks
   * Domain name of the transport layer application.
   * 
   * This parameter is required.
   * 
   * @example
   * aaa.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * List of forwarding rules.
   * 
   * This parameter is required.
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
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
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

