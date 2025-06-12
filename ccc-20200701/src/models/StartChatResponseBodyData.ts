// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartChatResponseBodyData extends $dara.Model {
  /**
   * @example
   * $23086709$EAUNIT
   */
  chatConversationId?: string;
  /**
   * @example
   * chat-525523618219921408
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      chatConversationId: 'ChatConversationId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConversationId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

