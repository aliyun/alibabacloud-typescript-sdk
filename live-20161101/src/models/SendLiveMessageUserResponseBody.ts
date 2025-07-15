// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLiveMessageUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the message, which is a unique identifier that can be used to delete the message. The ID can be up to 64 bytes in length and can contain letters and digits.
   * 
   * @example
   * 169830****
   */
  msgTid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CFDE7AB-571A-14EA-B072-989FF753****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      msgTid: 'MsgTid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgTid: 'string',
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

