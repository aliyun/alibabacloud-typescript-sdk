// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSchedulerRulesResponseBodySchedulerRulesParam } from "./DescribeSchedulerRulesResponseBodySchedulerRulesParam";
import { DescribeSchedulerRulesResponseBodySchedulerRulesRules } from "./DescribeSchedulerRulesResponseBodySchedulerRulesRules";


export class DescribeSchedulerRulesResponseBodySchedulerRules extends $dara.Model {
  /**
   * @example
   * 4eru5229a843****.aliyunddos0001.com
   */
  cname?: string;
  param?: DescribeSchedulerRulesResponseBodySchedulerRulesParam;
  /**
   * @example
   * doctest
   */
  ruleName?: string;
  ruleType?: string;
  rules?: DescribeSchedulerRulesResponseBodySchedulerRulesRules[];
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      param: 'Param',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      param: DescribeSchedulerRulesResponseBodySchedulerRulesParam,
      ruleName: 'string',
      ruleType: 'string',
      rules: { 'type': 'array', 'itemType': DescribeSchedulerRulesResponseBodySchedulerRulesRules },
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

