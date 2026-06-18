// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRedirectRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. To get this ID, call the [ListRedirectRules](https://help.aliyun.com/document_detail/2867474.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 3528160969****
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to preserve the query string of the original request. Valid values:
   * 
   * - `on`: Preserves the query string.
   * 
   * - `off`: Does not preserve the query string.
   * 
   * @example
   * on
   */
  reserveQueryString?: string;
  /**
   * @remarks
   * The conditional expression that matches user requests. This parameter is not required for a global configuration. Two scenarios are supported:
   * 
   * - To match all requests, set the value to `true`.
   * 
   * - To match specific requests, use a custom expression, such as `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq "video.example.com")
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
   * The name of the rule. This parameter is not required for a global configuration.
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
   * The ID of the site. To get this ID, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The response status code that the edge node returns to the client for the redirect. Valid values:
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
   * @example
   * 301
   */
  statusCode?: string;
  /**
   * @remarks
   * The URL to which requests are redirected.
   * 
   * @example
   * http://www.exapmle.com/index.html
   */
  targetUrl?: string;
  /**
   * @remarks
   * The redirection type. Valid values:
   * 
   * - `static`: Static mode.
   * 
   * - `dynamic`: Dynamic mode.
   * 
   * @example
   * static
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      reserveQueryString: 'ReserveQueryString',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      statusCode: 'StatusCode',
      targetUrl: 'TargetUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      reserveQueryString: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
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

