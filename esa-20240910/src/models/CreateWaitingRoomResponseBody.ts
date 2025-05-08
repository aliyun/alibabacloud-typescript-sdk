// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 85H66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  waitingRoomId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRoomId: 'WaitingRoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRoomId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

