// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @remarks
   * Waiting room bypass rule ID.
   * 
   * @example
   * 420072638347264
   */
  waitingRoomRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRoomRuleId: 'WaitingRoomRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

