// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Q&A session ID, used to record multiple Q&A sessions of the same user.
   * 
   * @example
   * 596ac39c-8855-4128-bad7-78aebeff48fc
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

