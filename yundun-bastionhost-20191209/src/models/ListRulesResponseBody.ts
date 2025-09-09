// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The remarks of the authorization rule.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The end time of the validity period of the authorization rule. The value is a timestamp. Unit: seconds.
   * 
   * @example
   * 1709258400
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The start time of the validity period of the authorization rule. The value is a timestamp. Unit: seconds.
   * 
   * @example
   * 1685499134
   */
  effectiveStartTime?: number;
  /**
   * @remarks
   * The authorization rule ID.
   * 
   * @example
   * 13
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the authorization rule.
   * 
   * @example
   * rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The state of the authorization rule.
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Enabled
   */
  ruleState?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleState: 'RuleState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      ruleId: 'string',
      ruleName: 'string',
      ruleState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The authorization rules that are returned.
   */
  rules?: ListRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of authorization rules that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

