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
   * @example
   * abc
   */
  liteTopicName?: string;
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
      liteTopicName: 'liteTopicName',
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
      liteTopicName: 'string',
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

export class GetMessageDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetMessageDetailResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FAEBD71F-E839-52F9-BD7B-8F1290525841
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMessageDetailResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

