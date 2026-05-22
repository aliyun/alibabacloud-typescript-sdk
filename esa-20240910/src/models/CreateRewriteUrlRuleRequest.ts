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
   * Query string rewrite type. Value range:
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
   * URI rewrite type. Value range:
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
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: set the value to true
   * - Match specific requests: set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Value range:
   * - on: enable.
   * - off: disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter is not required when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  sequence?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with version management enabled, you can use this parameter to specify the effective version of the site configuration, defaulting to version 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
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

