// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsMessageGetByMsgIdResponseBodyDataPropertyListMessageProperty extends $dara.Model {
  name?: string;
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

export class OnsMessageGetByMsgIdResponseBodyDataPropertyList extends $dara.Model {
  messageProperty?: OnsMessageGetByMsgIdResponseBodyDataPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsMessageGetByMsgIdResponseBodyDataPropertyListMessageProperty },
    };
  }

  validate() {
    if(Array.isArray(this.messageProperty)) {
      $dara.Model.validateArray(this.messageProperty);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cyclic redundancy check (CRC) value of the message body.
   * 
   * @example
   * 914112295
   */
  bodyCRC?: number;
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
   * The timestamp that indicates when the message was produced.
   * 
   * @example
   * 1570761026630
   */
  bornTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1E0578FE110F18B4AAC235C0C8460BA2
   */
  msgId?: string;
  propertyList?: OnsMessageGetByMsgIdResponseBodyDataPropertyList;
  /**
   * @remarks
   * The number of retries that were performed to send the message to consumers.
   * 
   * @example
   * 1
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
   * The size of the message.
   * 
   * @example
   * 407
   */
  storeSize?: number;
  /**
   * @remarks
   * The timestamp that indicates when the ApsaraMQ for RocketMQ broker stored the message.
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
      bodyCRC: 'BodyCRC',
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
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsMessageGetByMsgIdResponseBodyDataPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  validate() {
    if(this.propertyList && typeof (this.propertyList as any).validate === 'function') {
      (this.propertyList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsMessageGetByMsgIdResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
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
      data: OnsMessageGetByMsgIdResponseBodyData,
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

