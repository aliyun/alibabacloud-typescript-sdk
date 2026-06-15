// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteContinuouslyPushResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message ID for the push request.
   * 
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  messageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 500131
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

