// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRedirectRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to preserve the query string from the original request. Valid values:
   * 
   * - `on`: Preserves the query string.
   * 
   * - `off`: Discards the query string.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  reserveQueryString?: string;
  /**
   * @remarks
   * The rule content, which is a conditional expression used to match user requests. Do not set this parameter when adding a global configuration. The following use cases are supported:
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, set the value to a custom expression, such as `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. Do not set this parameter when adding a global configuration. Valid values:
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
   * The rule name. Do not set this parameter when adding a global configuration.
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
   * The site ID. To get this value, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * For sites with configuration version management enabled, specify the version to which this configuration applies.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * The status code that the edge node returns to the client for the redirect. Valid values:
   * 
   * - 301
   * 
   * - 302
   * 
   * - 303
   * 
   * - 307
   * 
   * - 308
   * 
   * This parameter is required.
   * 
   * @example
   * 301
   */
  statusCode?: string;
  /**
   * @remarks
   * The target URL for the redirect.
   * 
   * This parameter is required.
   * 
   * @example
   * http://www.exapmle.com/index.html
   */
  targetUrl?: string;
  /**
   * @remarks
   * The redirect type. Valid values:
   * 
   * - `static`: Static mode.
   * 
   * - `dynamic`: Dynamic mode.
   * 
   * This parameter is required.
   * 
   * @example
   * static
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      reserveQueryString: 'ReserveQueryString',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      statusCode: 'StatusCode',
      targetUrl: 'TargetUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reserveQueryString: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
      siteVersion: 'number',
      statusCode: 'string',
      targetUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

