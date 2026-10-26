// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SteerAgentConversationResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  accepted?: boolean;
  /**
   * @example
   * msg-20260819-0001
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      accepted: 'accepted',
      messageId: 'messageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accepted: 'boolean',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

