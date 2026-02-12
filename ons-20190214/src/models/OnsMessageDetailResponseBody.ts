// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsMessageDetailResponseBodyDataPropertyList extends $dara.Model {
  /**
   * @remarks
   * The name of the attribute. Valid values:
   * 
   * *   **TRACE_ON**: indicates whether the trace of the message exists.
   * *   **MSG_REGION**: The region ID of the instance to which the topic belongs.
   * *   **__MESSAGE_DECODED_TIME**: The time when the message was decoded.
   * *   **__BORNHOST**: The IP address of the producer client.
   * *   **UNIQ_KEY**: The ID of the message.
   * 
   * For information about the terms that are used in ApsaraMQ for RocketMQ, see [Terms](https://help.aliyun.com/document_detail/29533.html).
   * 
   * @example
   * cn-hangzhou
   */
  name?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * @example
   * MSG_REGION
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The string that is obtained after the message body is encrypted by using the Base 64 algorithm.
   * 
   * @example
   * aGVsbG8=
   */
  body?: string;
  /**
   * @remarks
   * The cyclic redundancy check (CRC) value of the message body.
   * 
   * @example
   * 907060870
   */
  bodyCRC?: number;
  /**
   * @remarks
   * The information about the message body.
   * 
   * @example
   * hello
   */
  bodyStr?: string;
  /**
   * @remarks
   * The producer instance that generated the message.
   * 
   * @example
   * ``42.120.**.**``:64646
   */
  bornHost?: string;
  /**
   * @remarks
   * The timestamp that indicates the point in time when the message was generated. Unit: milliseconds.
   * 
   * @example
   * 1570761026630
   */
  bornTimestamp?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ Instance.
   * 
   * @example
   * MQ_INST_184681981******_BXig0x6A
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1E0578FE110F18B4AAC235C05F2*****
   */
  msgId?: string;
  /**
   * @remarks
   * The attributes of the message.
   */
  propertyList?: OnsMessageDetailResponseBodyDataPropertyList[];
  /**
   * @remarks
   * The number of retries that ApsaraMQ for RocketMQ performed to send the message to consumers.
   * 
   * @example
   * 0
   */
  reconsumeTimes?: number;
  /**
   * @remarks
   * The ApsaraMQ for RocketMQ broker that stores the message.
   * 
   * @example
   * 11.220.***.***:10911
   */
  storeHost?: string;
  /**
   * @remarks
   * The size of the message. Unit: KB.
   * 
   * @example
   * 2
   */
  storeSize?: number;
  /**
   * @remarks
   * The timestamp that indicates the point in time when the ApsaraMQ for RocketMQ broker stored the message. Unit: milliseconds.
   * 
   * @example
   * 1570761026708
   */
  storeTimestamp?: number;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      bodyCRC: 'BodyCRC',
      bodyStr: 'BodyStr',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      bodyCRC: 'number',
      bodyStr: 'string',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: { 'type': 'array', 'itemType': OnsMessageDetailResponseBodyDataPropertyList },
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyList)) {
      $dara.Model.validateArray(this.propertyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsMessageDetailResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * EAE5BE23-37A1-4354-94D6-E44AE17E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsMessageDetailResponseBodyData,
      requestId: 'string',
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

