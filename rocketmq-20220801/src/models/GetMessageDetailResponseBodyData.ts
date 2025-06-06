// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The message body.
   * 
   * @example
   * {}
   */
  body?: string;
  /**
   * @remarks
   * The size of the message body.
   * 
   * @example
   * 123
   */
  bodySize?: number;
  /**
   * @remarks
   * The client on which the message was produced.
   * 
   * @example
   * xxx.xx.xxx.xx
   */
  bornHost?: string;
  /**
   * @remarks
   * The time when the message was generated.
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
   * The sharding key. This parameter is returned only for ordered messages.
   * 
   * @example
   * xx
   */
  messageGroup?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 01BE87E485F0C7808C04543CAF00000001
   */
  messageId?: string;
  /**
   * @remarks
   * The message keys.
   */
  messageKeys?: string[];
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * xx
   */
  messageTag?: string;
  /**
   * @remarks
   * The message type.
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
   * The broker on which the message was stored.
   * 
   * @example
   * xxx.xx.xxx.xx
   */
  storeHost?: string;
  /**
   * @remarks
   * The time when the message was stored.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  storeTime?: string;
  /**
   * @remarks
   * The default system attributes.
   */
  systemProperties?: { [key: string]: string };
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  /**
   * @remarks
   * The user attributes.
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
      systemProperties: 'systemProperties',
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
      systemProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      topicName: 'string',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.messageKeys)) {
      $dara.Model.validateArray(this.messageKeys);
    }
    if(this.systemProperties) {
      $dara.Model.validateMap(this.systemProperties);
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

