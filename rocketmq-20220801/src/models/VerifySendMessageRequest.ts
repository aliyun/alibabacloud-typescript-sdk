// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifySendMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery time for a delayed message, specified as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1773718320000
   */
  deliveryTimeStamp?: number;
  /**
   * @remarks
   * The name of the Lite Message Queue topic.
   * 
   * @example
   * abc
   */
  liteTopicName?: string;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the message group. This parameter applies only to ordered messages. Messages with the same group ID are consumed in the order they are sent.
   * 
   * @example
   * testMessageGroup
   */
  messageGroup?: string;
  /**
   * @remarks
   * The business key.
   * 
   * @example
   * xx
   */
  messageKey?: string;
  /**
   * @remarks
   * The message tag.
   * 
   * @example
   * xx
   */
  messageTag?: string;
  /**
   * @remarks
   * The user-defined properties of the message.
   * 
   * @example
   * {"test":"test"}
   */
  userProperties?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      deliveryTimeStamp: 'deliveryTimeStamp',
      liteTopicName: 'liteTopicName',
      message: 'message',
      messageGroup: 'messageGroup',
      messageKey: 'messageKey',
      messageTag: 'messageTag',
      userProperties: 'userProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryTimeStamp: 'number',
      liteTopicName: 'string',
      message: 'string',
      messageGroup: 'string',
      messageKey: 'string',
      messageTag: 'string',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.userProperties) {
      $dara.Model.validateMap(this.userProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

