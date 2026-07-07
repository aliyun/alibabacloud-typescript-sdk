// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRewriteUrlRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can call the [ListRewriteUrlRules](https://help.aliyun.com/document_detail/2867480.html) operation to obtain the configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3528160969****
   */
  configId?: number;
  /**
   * @remarks
   * The query string after rewriting.
   * 
   * @example
   * example=123
   */
  queryString?: string;
  /**
   * @remarks
   * The query character string rewrite type. Valid values:
   * - static: static pattern.
   * - dynamic: dynamic pattern.
   * 
   * @example
   * static
   */
  rewriteQueryStringType?: string;
  /**
   * @remarks
   * The path rewrite type. Valid values:
   * - static: static pattern.
   * - dynamic: dynamic pattern.
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
   * The rule content. A conditional expression is used to match user requests. This parameter is not required when you add a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specified requests: Set the value to a custom expression, for example, (http.host eq \\"video.example.com\\").
   * 
   * @example
   * (http.host eq "video.example.com")
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
   * example=123
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule execution order. A smaller value indicates a higher priority.
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
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The target URI after rewriting.
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

