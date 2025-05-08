// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateWafRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of rules.
   */
  configsShrink?: string;
  /**
   * @remarks
   * The WAF rule category.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @remarks
   * The configurations shared by multiple rules.
   * 
   * @example
   * 10000001
   */
  sharedShrink?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The version of the website.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configsShrink: 'Configs',
      phase: 'Phase',
      rulesetId: 'RulesetId',
      sharedShrink: 'Shared',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configsShrink: 'string',
      phase: 'string',
      rulesetId: 'number',
      sharedShrink: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

