// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWaitingRoomRuleRequest extends $dara.Model {
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
      siteId: 'SiteId',
      waitingRoomRuleId: 'WaitingRoomRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

