// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMessagesFeedbacksRequest extends $dara.Model {
  content?: string;
  /**
   * @example
   * yy9rkn6q-js75-0dka-0cc2-6b5o86uj****
   */
  messageId?: string;
  /**
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

