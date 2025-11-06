// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSendTraceByMsgIdResponseBodyDataVoList extends $dara.Model {
  code?: string;
  exchange?: string;
  instanceId?: string;
  messageBodyLength?: string;
  messagePropertiesMap?: { [key: string]: any };
  queueMsgIdMap?: { [key: string]: any };
  remoteAddress?: string;
  routingKey?: string;
  sendErrorInfo?: string;
  timeStamp?: string;
  userId?: string;
  vhost?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      exchange: 'Exchange',
      instanceId: 'InstanceId',
      messageBodyLength: 'MessageBodyLength',
      messagePropertiesMap: 'MessagePropertiesMap',
      queueMsgIdMap: 'QueueMsgIdMap',
      remoteAddress: 'RemoteAddress',
      routingKey: 'RoutingKey',
      sendErrorInfo: 'SendErrorInfo',
      timeStamp: 'TimeStamp',
      userId: 'UserId',
      vhost: 'Vhost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      exchange: 'string',
      instanceId: 'string',
      messageBodyLength: 'string',
      messagePropertiesMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      queueMsgIdMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      remoteAddress: 'string',
      routingKey: 'string',
      sendErrorInfo: 'string',
      timeStamp: 'string',
      userId: 'string',
      vhost: 'string',
    };
  }

  validate() {
    if(this.messagePropertiesMap) {
      $dara.Model.validateMap(this.messagePropertiesMap);
    }
    if(this.queueMsgIdMap) {
      $dara.Model.validateMap(this.queueMsgIdMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSendTraceByMsgIdResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  voList?: GetSendTraceByMsgIdResponseBodyDataVoList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      voList: 'VoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      voList: { 'type': 'array', 'itemType': GetSendTraceByMsgIdResponseBodyDataVoList },
    };
  }

  validate() {
    if(Array.isArray(this.voList)) {
      $dara.Model.validateArray(this.voList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSendTraceByMsgIdResponseBody extends $dara.Model {
  code?: number;
  data?: GetSendTraceByMsgIdResponseBodyData;
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
      data: GetSendTraceByMsgIdResponseBodyData,
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

