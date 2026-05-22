// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomResponseCodeRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @example
   * global
   */
  configType?: string;
  /**
   * @example
   * 0
   */
  pageId?: string;
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  returnCode?: string;
  /**
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      pageId: 'PageId',
      requestId: 'RequestId',
      returnCode: 'ReturnCode',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
      pageId: 'string',
      requestId: 'string',
      returnCode: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
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

