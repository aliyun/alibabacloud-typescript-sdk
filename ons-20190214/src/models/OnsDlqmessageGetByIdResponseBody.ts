// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsDLQMessageGetByIdResponseBodyDataPropertyListMessageProperty extends $dara.Model {
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

export class OnsDLQMessageGetByIdResponseBodyDataPropertyList extends $dara.Model {
  messageProperty?: OnsDLQMessageGetByIdResponseBodyDataPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsDLQMessageGetByIdResponseBodyDataPropertyListMessageProperty },
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

export class OnsDLQMessageGetByIdResponseBodyData extends $dara.Model {
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
   * The timestamp that indicates the point in time when the message was generated. Unit: milliseconds.
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
   * The ID of the dead-letter message.
   * 
   * @example
   * 0BC16699165C03B925DB8A404E2D****
   */
  msgId?: string;
  propertyList?: OnsDLQMessageGetByIdResponseBodyDataPropertyList;
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
   * The size of the message. Unit: KB.
   * 
   * @example
   * 407
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
      propertyList: OnsDLQMessageGetByIdResponseBodyDataPropertyList,
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

export class OnsDLQMessageGetByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsDLQMessageGetByIdResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID.
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
      data: OnsDLQMessageGetByIdResponseBodyData,
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

