// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRewriteUrlRuleRequest extends $dara.Model {
  queryString?: string;
  /**
   * **if can be null:**
   * false
   */
  rewriteQueryStringType?: string;
  /**
   * **if can be null:**
   * false
   */
  rewriteUriType?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  siteVersion?: number;
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

