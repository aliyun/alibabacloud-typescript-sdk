// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomRulesResponseBodyWaitingRoomRules extends $dara.Model {
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter does not need to be set when adding global configuration. There are two usage scenarios:
   * - Match all incoming requests: set the value to true
   * - Match specific requests: set the value to a custom expression, e.g., (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.request.uri.path.file_name eq \\"jpg\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter does not need to be set when adding global configuration. Value range:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter does not need to be set when adding global configuration.
   * 
   * @example
   * ip
   */
  ruleName?: string;
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 37286782688****
   */
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
  /**
   * @remarks
   * Request ID, used for tracking the call status.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A123425345
   */
  requestId?: string;
  /**
   * @remarks
   * List of waiting room bypass rules.
   */
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

