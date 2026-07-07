// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRedirectRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can call the [ListRedirectRules](https://help.aliyun.com/document_detail/2867474.html) operation to obtain the configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3528160969****
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to preserve the query string. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  reserveQueryString?: string;
  /**
   * @remarks
   * The rule content. A conditional expression is used to match user requests. This parameter is not required when you add a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specified requests: Set the value to a custom expression, such as (http.host eq \\"video.example.com\\").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. This parameter is not required when you add a global configuration. Valid values:
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
   * The execution order of the rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The HTTP status code used when the node responds to the client with the redirect address. Valid values:
   * 
   * - 301
   * - 302
   * - 303
   * - 307
   * - 308
   * 
   * @example
   * 301
   */
  statusCode?: string;
  /**
   * @remarks
   * The target URL after the redirect.
   * 
   * @example
   * http://www.exapmle.com/index.html
   */
  targetUrl?: string;
  /**
   * @remarks
   * The redirect type. Valid values:
   * 
   * - static: static pattern.
   * - dynamic: dynamic pattern.
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

