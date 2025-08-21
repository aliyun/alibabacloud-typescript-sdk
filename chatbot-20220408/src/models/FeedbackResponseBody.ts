// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeedbackResponseBody extends $dara.Model {
  /**
   * @example
   * good
   */
  feedback?: string;
  /**
   * @example
   * 5ca40988-4f99-47ad-ac96-9060d0f81db9
   */
  messageId?: string;
  /**
   * @example
   * 4e5eea71-f326-450c-8849-49515473ef64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
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

