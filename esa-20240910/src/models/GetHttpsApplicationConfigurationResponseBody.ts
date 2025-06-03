// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpsApplicationConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Alt-Svc feature switch. Default is disabled. Possible values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  altSvc?: string;
  /**
   * @remarks
   * Whether the Alt-Svc header includes the clear parameter. Default is disabled. Possible values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  altSvcClear?: string;
  /**
   * @remarks
   * Alt-Svc validity period in seconds. The default is 86400 seconds.
   * 
   * @example
   * 86400
   */
  altSvcMa?: string;
  /**
   * @remarks
   * Whether the Alt-Svc header includes the persist parameter. Default is disabled. Possible values:
   * 
   * - on: Enable.
   * - off: Disable.
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
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule configurations. Possible values:
   * 
   * - global: Query global configuration.
   * - rule: Query rule configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Whether to enable HSTS. Default is disabled. Possible values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  hsts?: string;
  /**
   * @remarks
   * Whether to include subdomains in HSTS, default is off. Value range:
   * - on: enabled. 
   * - off: disabled.
   * 
   * @example
   * on
   */
  hstsIncludeSubdomains?: string;
  /**
   * @remarks
   * HSTS expiration time in seconds.
   * 
   * @example
   * 3600
   */
  hstsMaxAge?: string;
  /**
   * @remarks
   * Whether to enable HSTS preload, default is off. Value range:
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  hstsPreload?: string;
  /**
   * @remarks
   * Whether to enable forced HTTPS. Default is disabled. Possible values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  httpsForce?: string;
  /**
   * @remarks
   * Status code for forced HTTPS redirection. Possible values:
   * 
   * - 301
   * - 302
   * - 307
   * - 308
   * 
   * @example
   * 301
   */
  httpsForceCode?: string;
  httpsNoSniDeny?: string;
  httpsSniVerify?: string;
  httpsSniWhitelist?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A3790430-3A06-535F-A424-0998BD9A6C9F
   */
  requestId?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter does not need to be set when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, for example: (http.host eq "video.example.com")
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter does not need to be set when adding a global configuration. Possible values:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter does not need to be set when adding a global configuration.
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
   * Version number of the site configuration. For sites with version management enabled, you can use this parameter to specify the version of the site for which the configuration takes effect. The default is version 0.
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
      httpsNoSniDeny: 'HttpsNoSniDeny',
      httpsSniVerify: 'HttpsSniVerify',
      httpsSniWhitelist: 'HttpsSniWhitelist',
      requestId: 'RequestId',
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
      httpsNoSniDeny: 'string',
      httpsSniVerify: 'string',
      httpsSniWhitelist: 'string',
      requestId: 'string',
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

