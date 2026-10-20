// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A123425345
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the waiting room event. You can obtain the waiting room event ID by calling the [ListWaitingRoomEvents](https://help.aliyun.com/document_detail/2850279.html) operation.
   * 
   * @example
   * 433277746085888
   */
  waitingRoomEventId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRoomEventId: 'WaitingRoomEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRoomEventId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

