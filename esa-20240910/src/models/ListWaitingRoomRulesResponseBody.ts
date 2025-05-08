// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWaitingRoomRulesResponseBodyWaitingRoomRules } from "./ListWaitingRoomRulesResponseBodyWaitingRoomRules";


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

