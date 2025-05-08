// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpsApplicationConfigurationsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * Alt-Svc feature switch, default is off. Value range: 
   * - on: enabled. 
   * - off: disabled.
   * 
   * @example
   * on
   */
  altSvc?: string;
  /**
   * @remarks
   * Whether the Alt-Svc header includes the clear parameter, default is off. Values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  altSvcClear?: string;
  /**
   * @remarks
   * The validity period of Alt-Svc in seconds, default is 86400 seconds.
   * 
   * @example
   * 86400
   */
  altSvcMa?: string;
  /**
   * @remarks
   * Whether the Alt-Svc header includes the persist parameter, default is off. Values:
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
   * @example
   * 395386449776640
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule-based configurations. Possible values:
   * - global: Query global configuration.
   * - rule: Query rule-based configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Whether HSTS is enabled, default is off. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  hsts?: string;
  /**
   * @remarks
   * Whether to include subdomains in HSTS, default is off. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  hstsIncludeSubdomains?: string;
  /**
   * @remarks
   * The expiration time of HSTS in seconds.
   * 
   * @example
   * 3600
   */
  hstsMaxAge?: string;
  /**
   * @remarks
   * Whether HSTS preloading is enabled, default is off. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  hstsPreload?: string;
  /**
   * @remarks
   * Whether to enable forced HTTPS, default is disabled. Possible values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  httpsForce?: string;
  /**
   * @remarks
   * Forced HTTPS redirect status code. Possible values:
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
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, e.g., (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Possible values:
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
  /**
   * @remarks
   * Rule execution order. The smaller the value, the higher the priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Site configuration version number. For sites with version management enabled, this parameter can specify the site version for which the configuration is effective, default is version 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      altSvc: 'AltSvc',
      altSvcClear: 'AltSvcClear',
      altSvcMa: 'AltSvcMa',
      altSvcPersist: 'AltSvcPersist',
      configId: 'ConfigId',
      configType: 'ConfigType',
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
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      altSvc: 'string',
      altSvcClear: 'string',
      altSvcMa: 'string',
      altSvcPersist: 'string',
      configId: 'number',
      configType: 'string',
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
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

