// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSIntelligentAclRulesResponseBodyRuleInfos extends $dara.Model {
  /**
   * @remarks
   * The protection action.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The rule trigger condition.
   * 
   * @example
   * {"$and":[{"key":"URI","opValue":"prefix-match","values":"/"}]}
   */
  condition?: string;
  /**
   * @remarks
   * The ID of the protection rule for log records.
   * 
   * @example
   * 1000030
   */
  logRuleId?: number;
  /**
   * @remarks
   * The action duration. Unit: seconds.
   * 
   * @example
   * 1800
   */
  punishTime?: number;
  /**
   * @remarks
   * The record name.
   * 
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 20569929
   */
  ruleId?: number;
  /**
   * @remarks
   * The rule name.
   * 
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
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
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
  /**
   * @remarks
   * The list of rules.
   */
  ruleInfos?: DescribeHttpDDoSIntelligentAclRulesResponseBodyRuleInfos[];
  /**
   * @remarks
   * The total number of rules.
   * 
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

