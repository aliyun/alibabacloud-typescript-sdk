// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceResponseBodyDataBrokerInfoOperations extends $dara.Model {
  /**
   * @remarks
   * Operation time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  operateTime?: string;
  /**
   * @remarks
   * Operation type.
   * 
   * @example
   * ADD
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      operateTime: 'operateTime',
      operateType: 'operateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateTime: 'string',
      operateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataBrokerInfo extends $dara.Model {
  /**
   * @remarks
   * Delay status.
   * 
   * @example
   * SUCCESS
   */
  delayStatus?: string;
  /**
   * @remarks
   * Operation list.
   */
  operations?: GetTraceResponseBodyDataBrokerInfoOperations[];
  /**
   * @remarks
   * Preset delivery time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  presetDelayTime?: string;
  /**
   * @remarks
   * Withdraw scheduled message request result
   * 
   * @example
   * RECALL_OK
   */
  recallResult?: string;
  static names(): { [key: string]: string } {
    return {
      delayStatus: 'delayStatus',
      operations: 'operations',
      presetDelayTime: 'presetDelayTime',
      recallResult: 'recallResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayStatus: 'string',
      operations: { 'type': 'array', 'itemType': GetTraceResponseBodyDataBrokerInfoOperations },
      presetDelayTime: 'string',
      recallResult: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfosDeadLetterInfo extends $dara.Model {
  /**
   * @remarks
   * MessageId.
   * 
   * @example
   * 7F000001001F7A4F0F29463F0376047D
   */
  messageId?: string;
  /**
   * @remarks
   * Arrival time in the dead letter queue.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  toDlqTime?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * Register_Sync
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'messageId',
      toDlqTime: 'toDlqTime',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      toDlqTime: 'string',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfosRecordsOperations extends $dara.Model {
  /**
   * @remarks
   * Whether it is a dead letter message.
   * 
   * @example
   * true
   */
  deadMessage?: boolean;
  /**
   * @remarks
   * Invisible time, milliseconds.
   * 
   * @example
   * 100
   */
  invisibleTime?: number;
  /**
   * @remarks
   * Operation time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  operateTime?: string;
  /**
   * @remarks
   * Operation type.
   * 
   * @example
   * ADD
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      deadMessage: 'deadMessage',
      invisibleTime: 'invisibleTime',
      operateTime: 'operateTime',
      operateType: 'operateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadMessage: 'boolean',
      invisibleTime: 'number',
      operateTime: 'string',
      operateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfosRecords extends $dara.Model {
  /**
   * @remarks
   * Client host.
   * 
   * @example
   * xx.xx.xx.xx
   */
  clientHost?: string;
  /**
   * @remarks
   * Consume status.
   * 
   * @example
   * SUCCESS
   */
  consumeStatus?: string;
  /**
   * @remarks
   * Whether to consume fifo.
   * 
   * @example
   * true
   */
  fifoEnable?: boolean;
  /**
   * @remarks
   * Operation list.
   */
  operations?: GetTraceResponseBodyDataConsumerInfosRecordsOperations[];
  /**
   * @remarks
   * POP_CK
   * 
   * @example
   * 123
   */
  popCk?: string;
  /**
   * @remarks
   * Consumer name.
   * 
   * @example
   * test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientHost: 'clientHost',
      consumeStatus: 'consumeStatus',
      fifoEnable: 'fifoEnable',
      operations: 'operations',
      popCk: 'popCk',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientHost: 'string',
      consumeStatus: 'string',
      fifoEnable: 'boolean',
      operations: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfosRecordsOperations },
      popCk: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfos extends $dara.Model {
  /**
   * @remarks
   * Consume status.
   * 
   * @example
   * SUCCESS
   */
  consumeStatus?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * GID_inspector_group
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * Dead letter info.
   */
  deadLetterInfo?: GetTraceResponseBodyDataConsumerInfosDeadLetterInfo;
  /**
   * @remarks
   * Whether it is a dead letter message.
   * 
   * @example
   * true
   */
  deadMessage?: boolean;
  /**
   * @remarks
   * Consumer record list.
   */
  records?: GetTraceResponseBodyDataConsumerInfosRecords[];
  static names(): { [key: string]: string } {
    return {
      consumeStatus: 'consumeStatus',
      consumerGroupId: 'consumerGroupId',
      deadLetterInfo: 'deadLetterInfo',
      deadMessage: 'deadMessage',
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeStatus: 'string',
      consumerGroupId: 'string',
      deadLetterInfo: GetTraceResponseBodyDataConsumerInfosDeadLetterInfo,
      deadMessage: 'boolean',
      records: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfosRecords },
    };
  }

  validate() {
    if(this.deadLetterInfo && typeof (this.deadLetterInfo as any).validate === 'function') {
      (this.deadLetterInfo as any).validate();
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetTraceResponseBodyDataProducerInfoRecords extends $dara.Model {
  /**
   * @remarks
   * Arrive time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  arriveTime?: string;
  /**
   * @remarks
   * Client host.
   * 
   * @example
   * xx.xx.xx.xx
   */
  clientHost?: string;
  /**
   * @remarks
   * Dead-letter queue message ID.
   * 
   * @example
   * 0A79275A00207A4F0F2916C92F9A0B94
   */
  dlqOriginMessageId?: string;
  /**
   * @remarks
   * Dead-letter queue topic.
   * 
   * @example
   * test_topic
   */
  dlqOriginTopic?: string;
  /**
   * @remarks
   * Message source.
   * 
   * @example
   * CONSOLE
   */
  messageSource?: string;
  /**
   * @remarks
   * Producer duration.
   * 
   * @example
   * 100
   */
  produceDuration?: number;
  /**
   * @remarks
   * Producer status.
   * 
   * @example
   * SUCCESS
   */
  produceStatus?: string;
  /**
   * @remarks
   * Producer time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  produceTime?: string;
  /**
   * @remarks
   * The time when the scheduled message withdrawal request was initiated
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  recallTime?: string;
  /**
   * @remarks
   * Producer name.
   * 
   * @example
   * xxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      arriveTime: 'arriveTime',
      clientHost: 'clientHost',
      dlqOriginMessageId: 'dlqOriginMessageId',
      dlqOriginTopic: 'dlqOriginTopic',
      messageSource: 'messageSource',
      produceDuration: 'produceDuration',
      produceStatus: 'produceStatus',
      produceTime: 'produceTime',
      recallTime: 'recallTime',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arriveTime: 'string',
      clientHost: 'string',
      dlqOriginMessageId: 'string',
      dlqOriginTopic: 'string',
      messageSource: 'string',
      produceDuration: 'number',
      produceStatus: 'string',
      produceTime: 'string',
      recallTime: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataProducerInfo extends $dara.Model {
  /**
   * @remarks
   * The production records.
   */
  records?: GetTraceResponseBodyDataProducerInfoRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetTraceResponseBodyDataProducerInfoRecords },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The broker trace.
   */
  brokerInfo?: GetTraceResponseBodyDataBrokerInfo;
  /**
   * @remarks
   * Consumer trace info.
   */
  consumerInfos?: GetTraceResponseBodyDataConsumerInfos[];
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
   * The message information.
   */
  messageInfo?: GetTraceResponseBodyDataMessageInfo;
  /**
   * @remarks
   * The producer trace.
   */
  producerInfo?: GetTraceResponseBodyDataProducerInfo;
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
   * The topic name.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      brokerInfo: 'brokerInfo',
      consumerInfos: 'consumerInfos',
      instanceId: 'instanceId',
      messageInfo: 'messageInfo',
      producerInfo: 'producerInfo',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerInfo: GetTraceResponseBodyDataBrokerInfo,
      consumerInfos: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfos },
      instanceId: 'string',
      messageInfo: GetTraceResponseBodyDataMessageInfo,
      producerInfo: GetTraceResponseBodyDataProducerInfo,
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    if(this.brokerInfo && typeof (this.brokerInfo as any).validate === 'function') {
      (this.brokerInfo as any).validate();
    }
    if(Array.isArray(this.consumerInfos)) {
      $dara.Model.validateArray(this.consumerInfos);
    }
    if(this.messageInfo && typeof (this.messageInfo as any).validate === 'function') {
      (this.messageInfo as any).validate();
    }
    if(this.producerInfo && typeof (this.producerInfo as any).validate === 'function') {
      (this.producerInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetTraceResponseBodyData;
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
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * 7779A8FC-1BCD-5A1D-A603-C4A9BD8ADC49
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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
      data: GetTraceResponseBodyData,
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

