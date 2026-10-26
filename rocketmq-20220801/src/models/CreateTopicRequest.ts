// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the lite topic, in minutes.
   * Valid values: 30 to 720.
   * Default value: -1, which indicates the topic never expires.
   * 
   * @example
   * 60
   */
  liteTopicExpiration?: number;
  /**
   * @remarks
   * The maximum transactions per second (TPS) for sending messages.
   * 
   * @example
   * 1500
   */
  maxSendTps?: number;
  /**
   * @remarks
   * The message type of the topic to be created.
   * 
   * >Notice: The type of the topic must be the same as the type of messages sent to the topic. For example, if you create a topic of the ordered message type, the topic can be used only to send and receive ordered messages, not other types of messages.
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The remarks of the topic to be created.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      liteTopicExpiration: 'liteTopicExpiration',
      maxSendTps: 'maxSendTps',
      messageType: 'messageType',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liteTopicExpiration: 'number',
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

