// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRewriteUrlRuleRequest extends $dara.Model {
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
   * The query string rewrite type. Valid values:
   * 
   * - static: static mode.
   * - dynamic: dynamic mode.
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
   * The URI rewrite type. Valid values:
   * 
   * - static: static mode.
   * - dynamic: dynamic mode.
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
   * The rule content, which uses conditional expressions to match user requests. This parameter does not need to be set when adding global configurations. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true.
   * - Match specified requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. This parameter does not need to be set when adding global configurations. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter does not need to be set when adding global configurations.
   * 
   * @example
   * rule_example
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
   * The site ID, which can be obtained by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with configuration version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. Default value: 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * The destination URI after rewriting.
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

