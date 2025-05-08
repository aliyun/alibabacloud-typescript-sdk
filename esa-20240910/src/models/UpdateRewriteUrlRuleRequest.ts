// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRewriteUrlRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID. It can be obtained by calling the [ListRewriteUrlRules](https://help.aliyun.com/document_detail/2867480.html) interface.
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
   * Query string rewrite type. Value range:
   * - static: Static mode.
   * - dynamic: Dynamic mode.
   * 
   * @example
   * static
   */
  rewriteQueryStringType?: string;
  /**
   * @remarks
   * URI rewrite type. Value range:
   * - static: Static mode.
   * - dynamic: Dynamic mode.
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
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Value range:
   * - on: Enable.
   * - off: Disable.
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
   * example=123
   */
  ruleName?: string;
  sequence?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
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

