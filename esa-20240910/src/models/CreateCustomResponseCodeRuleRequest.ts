// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomResponseCodeRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Response page.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  pageId?: string;
  /**
   * @remarks
   * Response code.
   * 
   * This parameter is required.
   * 
   * @example
   * 400
   */
  returnCode?: string;
  /**
   * @remarks
   * Rule content. Use a conditional expression to match user requests. Do not set this parameter when adding a global configuration. There are two scenarios:
   * 
   * - Match all incoming requests: Set the value to true.
   * 
   * - Match specific requests: Set the value to a custom expression, such as: (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. Do not set this parameter when adding a global configuration. Valid values:
   * 
   * - on: Enable.
   * 
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. Do not set this parameter when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * Rule execution order. A smaller value indicates higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Site ID. Call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API to get it.
   * 
   * This parameter is required.
   * 
   * @example
   * 805864735361584
   */
  siteId?: number;
  /**
   * @remarks
   * Site configuration version number. For sites with version management enabled, use this parameter to specify the site version where the configuration takes effect. The default is version 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      pageId: 'PageId',
      returnCode: 'ReturnCode',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageId: 'string',
      returnCode: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
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

