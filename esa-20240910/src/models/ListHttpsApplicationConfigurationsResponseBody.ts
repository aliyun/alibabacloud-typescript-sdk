// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpsApplicationConfigurationsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * Whether to enable the Alt-Svc feature. Default: `off`. Valid values:
   * 
   * - `on`: The Alt-Svc feature is enabled.
   * 
   * - `off`: The Alt-Svc feature is disabled.
   * 
   * @example
   * on
   */
  altSvc?: string;
  /**
   * @remarks
   * Whether the Alt-Svc header includes the `clear` parameter. Default: `off`. Valid values:
   * 
   * - `on`: The `clear` parameter is included.
   * 
   * - `off`: The `clear` parameter is not included.
   * 
   * @example
   * on
   */
  altSvcClear?: string;
  /**
   * @remarks
   * The Alt-Svc max-age in seconds. Default: `86400`.
   * 
   * @example
   * 86400
   */
  altSvcMa?: string;
  /**
   * @remarks
   * Whether the Alt-Svc header includes the `persist` parameter. Default: `off`. Valid values:
   * 
   * - `on`: The `persist` parameter is included.
   * 
   * - `off`: The `persist` parameter is not included.
   * 
   * @example
   * on
   */
  altSvcPersist?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 395386449776640
   */
  configId?: number;
  /**
   * @remarks
   * The type of the configuration. Valid values:
   * 
   * - `global`: A global configuration.
   * 
   * - `rule`: A rule-based configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Whether to enable HSTS. Default: `off`. Valid values:
   * 
   * - `on`: HSTS is enabled.
   * 
   * - `off`: HSTS is disabled.
   * 
   * @example
   * on
   */
  hsts?: string;
  /**
   * @remarks
   * Whether the HSTS header includes the `includeSubDomains` directive. Default: `off`. Valid values:
   * 
   * - `on`: The `includeSubDomains` directive is included.
   * 
   * - `off`: The `includeSubDomains` directive is not included.
   * 
   * @example
   * on
   */
  hstsIncludeSubdomains?: string;
  /**
   * @remarks
   * The HSTS `max-age`, in seconds.
   * 
   * @example
   * 3600
   */
  hstsMaxAge?: string;
  /**
   * @remarks
   * Whether the HSTS header includes the `preload` directive. Default: `off`. Valid values:
   * 
   * - `on`: The `preload` directive is included.
   * 
   * - `off`: The `preload` directive is not included.
   * 
   * @example
   * on
   */
  hstsPreload?: string;
  /**
   * @remarks
   * Whether to enable HTTPS redirection. Default: `off`. Valid values:
   * 
   * - `on`: HTTPS redirection is enabled.
   * 
   * - `off`: HTTPS redirection is disabled.
   * 
   * @example
   * on
   */
  httpsForce?: string;
  /**
   * @remarks
   * The status code for HTTPS redirection. Valid values:
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
   * Whether to reject TLS handshake requests that lack an SNI. Default: `off`. Valid values:
   * 
   * - `on`: Requests that lack an SNI are rejected.
   * 
   * - `off`: Requests that lack an SNI are not rejected.
   * 
   * @example
   * on
   */
  httpsNoSniDeny?: string;
  /**
   * @remarks
   * Whether to enable SNI verification. Default: `off`. Valid values:
   * 
   * - `on`: SNI verification is enabled.
   * 
   * - `off`: SNI verification is disabled.
   * 
   * @example
   * on
   */
  httpsSniVerify?: string;
  /**
   * @remarks
   * The SNI allowlist. Separate multiple values with a space.
   * 
   * @example
   * abc edf
   */
  httpsSniWhitelist?: string;
  /**
   * @remarks
   * The content of the rule, a conditional expression that matches user requests. This parameter is not required for a global configuration. The following use cases are supported:
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, set the value to a custom expression, such as `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Whether the rule is enabled. This parameter is not required for a global configuration. Valid values:
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
   * The name of the rule. This parameter is not required for a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution priority of the rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The site configuration version. For sites with version management, this specifies the version to which the configuration applies. Default: `0`.
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

export class ListHttpsApplicationConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of HTTPS application configurations.
   */
  configs?: ListHttpsApplicationConfigurationsResponseBodyConfigs[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListHttpsApplicationConfigurationsResponseBodyConfigs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

