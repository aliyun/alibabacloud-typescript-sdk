// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSIntelligentAclRulesResponseBodyRuleInfos extends $dara.Model {
  /**
   * @example
   * deny
   */
  action?: string;
  /**
   * @example
   * {"$and":[{"key":"URI","opValue":"prefix-match","values":"/"}]}
   */
  condition?: string;
  /**
   * @example
   * 1000030
   */
  logRuleId?: number;
  /**
   * @example
   * 1800
   */
  punishTime?: number;
  /**
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @example
   * 20569929
   */
  ruleId?: number;
  /**
   * @example
   * smart_cc_***
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      condition: 'Condition',
      logRuleId: 'LogRuleId',
      punishTime: 'PunishTime',
      recordName: 'RecordName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      condition: 'string',
      logRuleId: 'number',
      punishTime: 'number',
      recordName: 'string',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpDDoSIntelligentAclRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  ruleInfos?: DescribeHttpDDoSIntelligentAclRulesResponseBodyRuleInfos[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      ruleInfos: 'RuleInfos',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      ruleInfos: { 'type': 'array', 'itemType': DescribeHttpDDoSIntelligentAclRulesResponseBodyRuleInfos },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleInfos)) {
      $dara.Model.validateArray(this.ruleInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

