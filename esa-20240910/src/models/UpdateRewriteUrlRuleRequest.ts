// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRewriteUrlRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can get this ID by calling the [ListRewriteUrlRules](https://help.aliyun.com/document_detail/2867480.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 3528160969****
   */
  configId?: number;
  /**
   * @remarks
   * The query string after the rewrite.
   * 
   * @example
   * example=123
   */
  queryString?: string;
  /**
   * @remarks
   * The query string rewrite type. Valid values:
   * 
   * - static: Static Mode.
   * 
   * - dynamic: Dynamic Mode.
   * 
   * @example
   * static
   */
  rewriteQueryStringType?: string;
  /**
   * @remarks
   * The URI rewrite type. Valid values:
   * 
   * - static: Static Mode.
   * 
   * - dynamic: Dynamic Mode.
   * 
   * @example
   * static
   * 
   * **if can be null:**
   * false
   */
  rewriteUriType?: string;
  /**
   * @remarks
   * The content of the rule, a conditional expression that matches user requests. This parameter is not required for a Global Configuration. Two use cases are supported:
   * 
   * - To match all incoming requests, set the value to true.
   * 
   * - To match specific requests, set the value to a custom expression, for example, (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. This parameter is not required for a Global Configuration. Valid values:
   * 
   * - on: The rule is enabled.
   * 
   * - off: The rule is disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter is not required for a Global Configuration.
   * 
   * @example
   * example=123
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
   * The site ID. You can get this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The destination URI after the rewrite.
   * 
   * @example
   * /image/example.jpg
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      queryString: 'QueryString',
      rewriteQueryStringType: 'RewriteQueryStringType',
      rewriteUriType: 'RewriteUriType',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      queryString: 'string',
      rewriteQueryStringType: 'string',
      rewriteUriType: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

