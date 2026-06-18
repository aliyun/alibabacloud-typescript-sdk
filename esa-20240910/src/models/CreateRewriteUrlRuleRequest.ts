// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRewriteUrlRuleRequest extends $dara.Model {
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
   * The query string rewrite mode. Valid values:
   * 
   * - `static`: Static mode.
   * 
   * - `dynamic`: Dynamic mode.
   * 
   * @example
   * static
   * 
   * **if can be null:**
   * false
   */
  rewriteQueryStringType?: string;
  /**
   * @remarks
   * The URI rewrite mode. Valid values:
   * 
   * - `static`: Static mode.
   * 
   * - `dynamic`: Dynamic mode.
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
   * The conditional expression used to match user requests. This parameter is not required when you add a global configuration. Two use cases are supported:
   * 
   * - To match all inbound requests, set the value to `true`.
   * 
   * - To match specific requests, set the value to a custom expression, such as `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * This parameter is not required when you add a global configuration. Valid values:
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
   * The rule name. This parameter is not required when you add a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution priority of the rule. A lower value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The site ID. Obtain it by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * If configuration versioning is enabled for the site, this parameter specifies the target version. The default value is 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * The target URI after the rewrite.
   * 
   * @example
   * /image/example.jpg
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      queryString: 'QueryString',
      rewriteQueryStringType: 'RewriteQueryStringType',
      rewriteUriType: 'RewriteUriType',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryString: 'string',
      rewriteQueryStringType: 'string',
      rewriteUriType: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
      siteVersion: 'number',
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

