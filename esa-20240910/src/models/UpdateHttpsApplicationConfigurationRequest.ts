// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpsApplicationConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the `Alt-Svc` header. This feature is disabled by default. Valid values:
   * 
   * - `on`: Enables the Alt-Svc header.
   * 
   * - `off`: Disables the Alt-Svc header.
   * 
   * @example
   * on
   */
  altSvc?: string;
  /**
   * @remarks
   * Specifies whether to include the `clear` directive in the `Alt-Svc` header. The directive is not included by default. Valid values:
   * 
   * - `on`: Includes the directive.
   * 
   * - `off`: Does not include the directive.
   * 
   * @example
   * on
   */
  altSvcClear?: string;
  /**
   * @remarks
   * The max-age for the Alt-Svc header, in seconds. The default is 86400.
   * 
   * @example
   * 86400
   */
  altSvcMa?: string;
  /**
   * @remarks
   * Specifies whether to include the `persist` directive in the `Alt-Svc` header. The directive is not included by default. Valid values:
   * 
   * - `on`: Includes the directive.
   * 
   * - `off`: Does not include the directive.
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
   * Specifies whether to enable HTTP Strict Transport Security (HSTS). This feature is disabled by default. Valid values:
   * 
   * - `on`: Enables HSTS.
   * 
   * - `off`: Disables HSTS.
   * 
   * @example
   * on
   */
  hsts?: string;
  /**
   * @remarks
   * Specifies whether to include subdomains in the HSTS policy. Subdomains are not included by default. Valid values:
   * 
   * - `on`: Includes subdomains.
   * 
   * - `off`: Does not include subdomains.
   * 
   * @example
   * on
   */
  hstsIncludeSubdomains?: string;
  /**
   * @remarks
   * The HSTS max-age in seconds.
   * 
   * @example
   * 3600
   */
  hstsMaxAge?: string;
  /**
   * @remarks
   * Specifies whether to enable HSTS Preload. HSTS Preload is disabled by default. Valid values:
   * 
   * - `on`: Enables Preload.
   * 
   * - `off`: Disables Preload.
   * 
   * @example
   * on
   */
  hstsPreload?: string;
  /**
   * @remarks
   * Specifies whether to enable Force HTTPS. This feature is disabled by default. Valid values:
   * 
   * - `on`: Enables Force HTTPS.
   * 
   * - `off`: Disables Force HTTPS.
   * 
   * @example
   * on
   */
  httpsForce?: string;
  /**
   * @remarks
   * The redirect status code for Force HTTPS. Valid values:
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
   * Specifies whether to deny TLS handshake requests that do not include an SNI. This feature is disabled by default. Valid values:
   * 
   * - `on`: Denies requests without an SNI.
   * 
   * - `off`: Allows requests without an SNI.
   * 
   * @example
   * on
   */
  httpsNoSniDeny?: string;
  /**
   * @remarks
   * Specifies whether to enable Server Name Indication (SNI) verification. This feature is disabled by default. Valid values:
   * 
   * - `on`: Enables SNI verification.
   * 
   * - `off`: Disables SNI verification.
   * 
   * @example
   * on
   */
  httpsSniVerify?: string;
  /**
   * @remarks
   * The SNI allowlist. Separate multiple hostnames with spaces.
   * 
   * @example
   * abc edf
   */
  httpsSniWhitelist?: string;
  /**
   * @remarks
   * The conditional expression that the rule uses to match requests. This parameter is not required for a global configuration.
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, provide a custom expression, such as `(http.host eq "video.example.com")`
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. This parameter is not required for a global configuration. Valid values:
   * 
   * - `on`: Enables the rule.
   * 
   * - `off`: Disables the rule.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter is not required for a global configuration.
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
   * The site ID. To obtain this ID, call the [ListSites](~~ListSites~~) API.
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

