// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpsApplicationConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * Feature switch, default is disabled. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  altSvc?: string;
  /**
   * @remarks
   * Whether the Alt-Svc header includes the clear parameter, default is disabled. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  altSvcClear?: string;
  /**
   * @remarks
   * Alt-Svc validity period, in seconds, default is 86400 seconds.
   * 
   * @example
   * 86400
   */
  altSvcMa?: string;
  /**
   * @remarks
   * Whether the Alt-Svc header includes the persist parameter, default is disabled. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  altSvcPersist?: string;
  /**
   * @remarks
   * Configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * Whether to enable HSTS, default is disabled. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  hsts?: string;
  /**
   * @remarks
   * Whether to include subdomains in HSTS, default is disabled. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  hstsIncludeSubdomains?: string;
  /**
   * @remarks
   * HSTS expiration time, in seconds.
   * 
   * @example
   * 3600
   */
  hstsMaxAge?: string;
  /**
   * @remarks
   * Whether to enable HSTS preload, default is disabled. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  hstsPreload?: string;
  /**
   * @remarks
   * Whether to enable forced HTTPS, default is disabled. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  httpsForce?: string;
  /**
   * @remarks
   * Forced HTTPS redirect status code, value range:
   * - 301
   * - 302
   * - 307
   * - 308
   * 
   * @example
   * 301
   */
  httpsForceCode?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter is not required when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  sequence?: number;
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
  static names(): { [key: string]: string } {
    return {
      altSvc: 'AltSvc',
      altSvcClear: 'AltSvcClear',
      altSvcMa: 'AltSvcMa',
      altSvcPersist: 'AltSvcPersist',
      configId: 'ConfigId',
      hsts: 'Hsts',
      hstsIncludeSubdomains: 'HstsIncludeSubdomains',
      hstsMaxAge: 'HstsMaxAge',
      hstsPreload: 'HstsPreload',
      httpsForce: 'HttpsForce',
      httpsForceCode: 'HttpsForceCode',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      altSvc: 'string',
      altSvcClear: 'string',
      altSvcMa: 'string',
      altSvcPersist: 'string',
      configId: 'number',
      hsts: 'string',
      hstsIncludeSubdomains: 'string',
      hstsMaxAge: 'string',
      hstsPreload: 'string',
      httpsForce: 'string',
      httpsForceCode: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

