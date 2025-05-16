// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherEnglishParaphraseChatMessageResponseBody extends $dara.Model {
  /**
   * @example
   * how
   */
  content?: string;
  /**
   * @example
   * message
   */
  event?: string;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      event: 'event',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      event: 'string',
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

