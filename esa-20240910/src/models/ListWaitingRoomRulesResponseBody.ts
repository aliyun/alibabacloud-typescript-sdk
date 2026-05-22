// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomRulesResponseBodyWaitingRoomRules extends $dara.Model {
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  waitingRoomRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      waitingRoomRuleId: 'WaitingRoomRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      waitingRoomRuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomRulesResponseBody extends $dara.Model {
  requestId?: string;
  waitingRoomRules?: ListWaitingRoomRulesResponseBodyWaitingRoomRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRoomRules: 'WaitingRoomRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRoomRules: { 'type': 'array', 'itemType': ListWaitingRoomRulesResponseBodyWaitingRoomRules },
    };
  }

  validate() {
    if(Array.isArray(this.waitingRoomRules)) {
      $dara.Model.validateArray(this.waitingRoomRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

