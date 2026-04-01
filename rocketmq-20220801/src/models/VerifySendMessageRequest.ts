// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifySendMessageRequest extends $dara.Model {
  /**
   * @example
   * 1773718320000
   */
  deliveryTimeStamp?: number;
  /**
   * @example
   * abc
   */
  liteTopicName?: string;
  /**
   * @remarks
   * The message body.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * testMessageGroup
   */
  messageGroup?: string;
  /**
   * @remarks
   * The message key.
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

