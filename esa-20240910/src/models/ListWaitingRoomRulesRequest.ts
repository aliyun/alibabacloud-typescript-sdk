// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomRulesRequest extends $dara.Model {
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
  waitingRoomId?: string;
  waitingRoomRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      siteId: 'SiteId',
      waitingRoomId: 'WaitingRoomId',
      waitingRoomRuleId: 'WaitingRoomRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      siteId: 'number',
      waitingRoomId: 'string',
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

