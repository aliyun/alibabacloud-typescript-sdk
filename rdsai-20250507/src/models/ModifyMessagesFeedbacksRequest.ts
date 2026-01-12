// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMessagesFeedbacksRequest extends $dara.Model {
  /**
   * @remarks
   * The rating of the message.
   * 
   * Valid values:
   * 
   * *   like
   * *   dislike
   */
  content?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **ModifyMessagesFeedbacks**.
   * 
   * @example
   * yy9rkn6q-js75-0dka-0cc2-6b5o86uj****
   */
  messageId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * like
   */
  rating?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      messageId: 'MessageId',
      rating: 'Rating',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      messageId: 'string',
      rating: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

