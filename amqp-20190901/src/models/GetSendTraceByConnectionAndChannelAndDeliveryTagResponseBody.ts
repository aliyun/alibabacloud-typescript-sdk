// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSendTraceByConnectionAndChannelAndDeliveryTagResponseBodyData extends $dara.Model {
  code?: string;
  delay?: string;
  exchange?: string;
  expiration?: string;
  messageId?: string;
  queueMsgIdMap?: { [key: string]: any };
  remoteAddress?: string;
  routingKey?: string;
  sendErrorInfo?: string;
  timeStamp?: string;
  userId?: string;
  vhost?: string;
  XDelay?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      delay: 'Delay',
      exchange: 'Exchange',
      expiration: 'Expiration',
      messageId: 'MessageId',
      queueMsgIdMap: 'QueueMsgIdMap',
      remoteAddress: 'RemoteAddress',
      routingKey: 'RoutingKey',
      sendErrorInfo: 'SendErrorInfo',
      timeStamp: 'TimeStamp',
      userId: 'UserId',
      vhost: 'Vhost',
      XDelay: 'XDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      delay: 'string',
      exchange: 'string',
      expiration: 'string',
      messageId: 'string',
      queueMsgIdMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      remoteAddress: 'string',
      routingKey: 'string',
      sendErrorInfo: 'string',
      timeStamp: 'string',
      userId: 'string',
      vhost: 'string',
      XDelay: 'string',
    };
  }

  validate() {
    if(this.queueMsgIdMap) {
      $dara.Model.validateMap(this.queueMsgIdMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSendTraceByConnectionAndChannelAndDeliveryTagResponseBody extends $dara.Model {
  code?: number;
  data?: GetSendTraceByConnectionAndChannelAndDeliveryTagResponseBodyData;
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
      data: GetSendTraceByConnectionAndChannelAndDeliveryTagResponseBodyData,
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

