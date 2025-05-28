// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceResponseBodyDataMessageInfo extends $dara.Model {
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
   * Message born host.
   * 
   * @example
   * x.x.x.x
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
   * rmq-cn-u0t2ygjq505
   */
  instanceId?: string;
  /**
   * @remarks
   * Message grpup.
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
   * 0A79275A00207A4F0F2916C92F9A0B94
   */
  messageId?: string;
  /**
   * @remarks
   * Message keys.
   */
  messageKeys?: string[];
  /**
   * @remarks
   * Message tag.
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
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Message store host.
   * 
   * @example
   * x.x.x.x
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
   * The topic name.
   * 
   * @example
   * Topic_normal_inspector
   */
  topicName?: string;
  /**
   * @remarks
   * Message transaction id.
   * 
   * @example
   * xx
   */
  transactionId?: string;
  /**
   * @remarks
   * Message user properties.
   */
  userProperties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
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
      transactionId: 'transactionId',
      userProperties: 'userProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
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
      transactionId: 'string',
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

