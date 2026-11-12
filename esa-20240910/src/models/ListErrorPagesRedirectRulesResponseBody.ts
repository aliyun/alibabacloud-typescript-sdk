// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListErrorPagesRedirectRulesResponseBodyConfigsErrorPagesRedirect extends $dara.Model {
  /**
   * @remarks
   * The response status code used by the node when responding to the client with a redirect address. Valid values:
   * - 400
   * - 403
   * - 404
   * - 405
   * - 414
   * - 416
   * - 500
   * - 501
   * - 502
   * - 503
   * - 504
   * 
   * @example
   * 400
   */
  statusCode?: string;
  /**
   * @remarks
   * The target URL after redirection.
   * 
   * @example
   * http://example.com/test
   */
  targetURL?: string;
  static names(): { [key: string]: string } {
    return {
      statusCode: 'StatusCode',
      targetURL: 'TargetURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusCode: 'string',
      targetURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErrorPagesRedirectRulesResponseBodyConfigs extends $dara.Model {
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
   * The configuration type. Valid values:
   * - global: Global configuration.
   * - rule: Rule configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The error code redirection.
   */
  errorPagesRedirect?: ListErrorPagesRedirectRulesResponseBodyConfigsErrorPagesRedirect[];
  /**
   * @remarks
   * The rule content. Uses a conditional expression to match user requests. You do not need to set this parameter when adding a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. You do not need to set this parameter when adding a global configuration. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to set this parameter when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with configuration version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. Default value: 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      errorPagesRedirect: 'ErrorPagesRedirect',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
      errorPagesRedirect: { 'type': 'array', 'itemType': ListErrorPagesRedirectRulesResponseBodyConfigsErrorPagesRedirect },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errorPagesRedirect)) {
      $dara.Model.validateArray(this.errorPagesRedirect);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErrorPagesRedirectRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code redirection configurations.
   */
  configs?: ListErrorPagesRedirectRulesResponseBodyConfigs[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 500. Valid values: 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
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
      configs: { 'type': 'array', 'itemType': ListErrorPagesRedirectRulesResponseBodyConfigs },
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

