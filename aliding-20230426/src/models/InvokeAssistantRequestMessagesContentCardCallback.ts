// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAssistantRequestMessagesContentCardCallback extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliding_messageId123
   */
  relatedMessageId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      relatedMessageId: 'relatedMessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      relatedMessageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

