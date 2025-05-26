// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReceiverResponseBody extends $dara.Model {
  /**
   * @remarks
   * Receiver list ID
   * 
   * @example
   * 7312e09b8fffc5c7b2e2fbf5b6dc2073
   */
  receiverId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      receiverId: 'ReceiverId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiverId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

