// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendConsoleMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the console message to be sent. You can obtain the ID from the return value of the message creation operation or the query result of DescribeConsoleMessages. Each call supports only one message ID, and the message must belong to the current Alibaba Cloud account. Only messages in the Published state can be sent.
   * 
   * This parameter is required.
   * 
   * @example
   * msg-123456
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

