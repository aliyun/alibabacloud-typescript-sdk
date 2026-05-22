// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomResponseCodeRuleResponseBody extends $dara.Model {
  configId?: number;
  configType?: string;
  pageId?: string;
  requestId?: string;
  returnCode?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
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

