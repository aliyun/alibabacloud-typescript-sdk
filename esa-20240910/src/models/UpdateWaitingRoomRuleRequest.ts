// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWaitingRoomRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  rule?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleEnable?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  waitingRoomRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      siteId: 'SiteId',
      waitingRoomRuleId: 'WaitingRoomRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      siteId: 'number',
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

