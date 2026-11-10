// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpsApplicationConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The feature switch. Default value: off. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  altSvc?: string;
  /**
   * @remarks
   * Specifies whether the Alt-Svc header includes the clear parameter. Default value: off. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  altSvcClear?: string;
  /**
   * @remarks
   * The validity period of the Alt-Svc header, in seconds. Default value: 86400.
   * 
   * @example
   * 86400
   */
  altSvcMa?: string;
  /**
   * @remarks
   * Specifies whether the Alt-Svc header includes the persist parameter. Default value: off. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  altSvcPersist?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to enable HTTP Strict Transport Security (HSTS). Default value: off. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  hsts?: string;
  /**
   * @remarks
   * Specifies whether to include subdomains in HSTS. Default value: off. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  hstsIncludeSubdomains?: string;
  /**
   * @remarks
   * The expiration time of HSTS, in seconds.
   * 
   * @example
   * 3600
   */
  hstsMaxAge?: string;
  /**
   * @remarks
   * Specifies whether to enable HSTS preload. Default value: off. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  hstsPreload?: string;
  /**
   * @remarks
   * Specifies whether to enable forced HTTPS. Default value: off. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  httpsForce?: string;
  /**
   * @remarks
   * The HTTP status code for forced HTTPS redirection. Valid values:
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
   * Specifies whether to reject TLS handshake requests without SNI. Default value: off. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  httpsNoSniDeny?: string;
  /**
   * @remarks
   * Specifies whether to enable Server Name Indication (SNI) verification. Default value: off. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  httpsSniVerify?: string;
  /**
   * @remarks
   * The SNI whitelist. Separate multiple SNI values with spaces.
   * 
   * @example
   * abc edf
   */
  httpsSniWhitelist?: string;
  /**
   * @remarks
   * The rule content. A conditional expression is used to match user requests. Settings for this parameter are not required when you add a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. This parameter is not required when you add a global configuration. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter is not required when you add a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution sequence of the rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to query the site ID.
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
      httpsNoSniDeny: 'HttpsNoSniDeny',
      httpsSniVerify: 'HttpsSniVerify',
      httpsSniWhitelist: 'HttpsSniWhitelist',
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
      httpsNoSniDeny: 'string',
      httpsSniVerify: 'string',
      httpsSniWhitelist: 'string',
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

