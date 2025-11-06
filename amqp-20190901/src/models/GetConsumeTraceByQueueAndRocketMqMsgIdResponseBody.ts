// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumeTraceByQueueAndRocketMqMsgIdResponseBodyData extends $dara.Model {
  autoAckTag?: string;
  clientAddress?: string;
  code?: string;
  consumeType?: string;
  consumerTag?: string;
  currentStatus?: string;
  deliveryErrorInfo?: string;
  deliveryTag?: string;
  dlqQueueMsgIdMap?: { [key: string]: any };
  reason?: string;
  showAckIcon?: boolean;
  timeStamp?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoAckTag: 'AutoAckTag',
      clientAddress: 'ClientAddress',
      code: 'Code',
      consumeType: 'ConsumeType',
      consumerTag: 'ConsumerTag',
      currentStatus: 'CurrentStatus',
      deliveryErrorInfo: 'DeliveryErrorInfo',
      deliveryTag: 'DeliveryTag',
      dlqQueueMsgIdMap: 'DlqQueueMsgIdMap',
      reason: 'Reason',
      showAckIcon: 'ShowAckIcon',
      timeStamp: 'TimeStamp',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAckTag: 'string',
      clientAddress: 'string',
      code: 'string',
      consumeType: 'string',
      consumerTag: 'string',
      currentStatus: 'string',
      deliveryErrorInfo: 'string',
      deliveryTag: 'string',
      dlqQueueMsgIdMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      reason: 'string',
      showAckIcon: 'boolean',
      timeStamp: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.dlqQueueMsgIdMap) {
      $dara.Model.validateMap(this.dlqQueueMsgIdMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumeTraceByQueueAndRocketMqMsgIdResponseBody extends $dara.Model {
  code?: number;
  data?: GetConsumeTraceByQueueAndRocketMqMsgIdResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetConsumeTraceByQueueAndRocketMqMsgIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

