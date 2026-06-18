// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpsApplicationConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Alt-Svc header. Disabled by default. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  altSvc?: string;
  /**
   * @remarks
   * Specifies whether to include the `clear` parameter in the Alt-Svc header. Disabled by default. Valid values:
   * 
   * - `on`: The parameter is included.
   * 
   * - `off`: The parameter is not included.
   * 
   * @example
   * on
   */
  altSvcClear?: string;
  /**
   * @remarks
   * The Max Age for the Alt-Svc header, in seconds. The default is 86400.
   * 
   * @example
   * 86400
   */
  altSvcMa?: string;
  /**
   * @remarks
   * Specifies whether to include the `persist` parameter in the Alt-Svc header. Disabled by default. Valid values:
   * 
   * - `on`: The parameter is included.
   * 
   * - `off`: The parameter is not included.
   * 
   * @example
   * on
   */
  altSvcPersist?: string;
  /**
   * @remarks
   * Specifies whether to enable HTTP Strict Transport Security (HSTS). Disabled by default. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  hsts?: string;
  /**
   * @remarks
   * Specifies whether to include the `includeSubDomains` directive in the HSTS header. Disabled by default. Valid values:
   * 
   * - `on`: The directive is included.
   * 
   * - `off`: The directive is not included.
   * 
   * @example
   * on
   */
  hstsIncludeSubdomains?: string;
  /**
   * @remarks
   * The value of the `max-age` directive for the HSTS header, in seconds.
   * 
   * @example
   * 3600
   */
  hstsMaxAge?: string;
  /**
   * @remarks
   * Specifies whether to enable HSTS Preload by including the `preload` directive in the HSTS header. Disabled by default. Valid values:
   * 
   * - `on`: The directive is included.
   * 
   * - `off`: The directive is not included.
   * 
   * @example
   * on
   */
  hstsPreload?: string;
  /**
   * @remarks
   * Specifies whether to enable Force HTTPS. Disabled by default. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  httpsForce?: string;
  /**
   * @remarks
   * The Redirection Status Code to use when Force HTTPS is enabled. Valid values:
   * 
   * - `301`
   * 
   * - `302`
   * 
   * - `307`
   * 
   * - `308`
   * 
   * @example
   * 301
   */
  httpsForceCode?: string;
  /**
   * @remarks
   * Specifies whether to reject TLS Handshake Requests that do not include an SNI. Disabled by default. Valid values:
   * 
   * - `on`: Rejects requests without an SNI.
   * 
   * - `off`: Allows requests without an SNI.
   * 
   * @example
   * on
   */
  httpsNoSniDeny?: string;
  /**
   * @remarks
   * Specifies whether to enable Server Name Indication (SNI) verification. Disabled by default. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  httpsSniVerify?: string;
  /**
   * @remarks
   * Specifies the allowlist of SNI values. Separate multiple values with a space.
   * 
   * @example
   * abc edf
   */
  httpsSniWhitelist?: string;
  /**
   * @remarks
   * The content of the Rule, which is a Conditional Expression that matches user Requests. This parameter is optional when adding a Global Configuration. Supported use cases include:
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, use a custom expression. For example: `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. This parameter is optional when adding a Global Configuration. Valid values:
   * 
   * - `on`: The rule is enabled.
   * 
   * - `off`: The rule is disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the Rule. This parameter is optional when adding a Global Configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule. A lower value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The ID of the Site. You can get this ID by calling the [ListSites](~~ListSites~~) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The Site\\"s configuration Version. For Sites with version management enabled, this parameter specifies the Version to which the configuration applies. The default is 0.
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
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      altSvc: 'string',
      altSvcClear: 'string',
      altSvcMa: 'string',
      altSvcPersist: 'string',
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

