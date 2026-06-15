// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushMessageToAndroidResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the message pushed.
   * 
   * @example
   * 501029
   */
  messageId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
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

