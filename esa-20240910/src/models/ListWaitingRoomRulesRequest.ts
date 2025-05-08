// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Rule name, optional, used for querying by the name of the waiting room bypass rule.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The ID of the waiting room to bypass, which can be obtained by calling the [ListWaitingRooms](https://help.aliyun.com/document_detail/2850279.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 6a51d5bc6460887abd129****
   */
  waitingRoomId?: string;
  /**
   * @remarks
   * The ID of the waiting room bypass rule to update, which can be obtained by calling the [ListWaitingRoomRules](https://help.aliyun.com/document_detail/2850279.html) interface.
   * 
   * @example
   * 37286782688****
   */
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

