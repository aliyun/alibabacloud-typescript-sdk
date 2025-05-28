// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessagesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Message body.
   * 
   * @example
   * {}
   */
  body?: string;
  /**
   * @remarks
   * Message body size.
   * 
   * @example
   * 100
   */
  bodySize?: number;
  /**
   * @remarks
   * The client on which messages are produced.
   * 
   * @example
   * xx.xx.xx.xx
   */
  bornHost?: string;
  /**
   * @remarks
   * Message born time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  bornTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The message group. This parameter is returned only for ordered messages.
   * 
   * @example
   * xx
   */
  messageGroup?: string;
  /**
   * @remarks
   * Message Id.
   * 
   * @example
   * 7F000001000114B4340C5ABF94500079
   */
  messageId?: string;
  /**
   * @remarks
   * Message keys.
   */
  messageKeys?: string[];
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
   * Message type.
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The broker on which messages are stored.
   * 
   * @example
   * xx.xx.xx.xx
   */
  storeHost?: string;
  /**
   * @remarks
   * Message store time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  storeTime?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  /**
   * @remarks
   * Message user properties.
   */
  userProperties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      bodySize: 'bodySize',
      bornHost: 'bornHost',
      bornTime: 'bornTime',
      instanceId: 'instanceId',
      messageGroup: 'messageGroup',
      messageId: 'messageId',
      messageKeys: 'messageKeys',
      messageTag: 'messageTag',
      messageType: 'messageType',
      regionId: 'regionId',
      storeHost: 'storeHost',
      storeTime: 'storeTime',
      topicName: 'topicName',
      userProperties: 'userProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      bodySize: 'number',
      bornHost: 'string',
      bornTime: 'string',
      instanceId: 'string',
      messageGroup: 'string',
      messageId: 'string',
      messageKeys: { 'type': 'array', 'itemType': 'string' },
      messageTag: 'string',
      messageType: 'string',
      regionId: 'string',
      storeHost: 'string',
      storeTime: 'string',
      topicName: 'string',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.messageKeys)) {
      $dara.Model.validateArray(this.messageKeys);
    }
    if(this.userProperties) {
      $dara.Model.validateMap(this.userProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

