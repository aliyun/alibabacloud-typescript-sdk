// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRedirectRuleResponseBody extends $dara.Model {
  configId?: number;
  configType?: string;
  requestId?: string;
  reserveQueryString?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
  siteVersion?: number;
  statusCode?: string;
  targetUrl?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      requestId: 'RequestId',
      reserveQueryString: 'ReserveQueryString',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
      statusCode: 'StatusCode',
      targetUrl: 'TargetUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
      requestId: 'string',
      reserveQueryString: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
      statusCode: 'string',
      targetUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

