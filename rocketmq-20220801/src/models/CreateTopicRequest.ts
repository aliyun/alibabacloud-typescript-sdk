// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum TPS for message sending.
   * 
   * @example
   * 1500
   */
  maxSendTps?: number;
  /**
   * @remarks
   * The type of messages in the topic that you want to create.
   * 
   * Valid values:
   * 
   * *   TRANSACTION: transactional messages
   * *   FIFO: ordered messages
   * *   DELAY: scheduled or delayed messages
   * *   NORMAL: normal messages
   * 
   * >  The type of messages in the topic must be the same as the type of messages that you want to send. For example, if you create a topic whose message type is ordered messages, you can use the topic to send and receive only ordered messages.
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The description of the topic that you want to create.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      maxSendTps: 'maxSendTps',
      messageType: 'messageType',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSendTps: 'number',
      messageType: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

