// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageByMessageIdResponseBodyDataVoList extends $dara.Model {
  appId?: string;
  body?: string;
  clusterId?: string;
  contentEncoding?: string;
  contentType?: string;
  correlationId?: string;
  deliveryMode?: number;
  exchangeName?: string;
  expiration?: string;
  headers?: string;
  immediate?: boolean;
  mandatory?: boolean;
  messageId?: string;
  priority?: number;
  processToken?: string;
  reconsumeTimes?: number;
  replyTo?: string;
  routingKey?: string;
  storeTimestamp?: number;
  timestamp?: number;
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      body: 'Body',
      clusterId: 'ClusterId',
      contentEncoding: 'ContentEncoding',
      contentType: 'ContentType',
      correlationId: 'CorrelationId',
      deliveryMode: 'DeliveryMode',
      exchangeName: 'ExchangeName',
      expiration: 'Expiration',
      headers: 'Headers',
      immediate: 'Immediate',
      mandatory: 'Mandatory',
      messageId: 'MessageId',
      priority: 'Priority',
      processToken: 'ProcessToken',
      reconsumeTimes: 'ReconsumeTimes',
      replyTo: 'ReplyTo',
      routingKey: 'RoutingKey',
      storeTimestamp: 'StoreTimestamp',
      timestamp: 'Timestamp',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      body: 'string',
      clusterId: 'string',
      contentEncoding: 'string',
      contentType: 'string',
      correlationId: 'string',
      deliveryMode: 'number',
      exchangeName: 'string',
      expiration: 'string',
      headers: 'string',
      immediate: 'boolean',
      mandatory: 'boolean',
      messageId: 'string',
      priority: 'number',
      processToken: 'string',
      reconsumeTimes: 'number',
      replyTo: 'string',
      routingKey: 'string',
      storeTimestamp: 'number',
      timestamp: 'number',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageByMessageIdResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  taskId?: string;
  totalCount?: number;
  voList?: QueryMessageByMessageIdResponseBodyDataVoList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
      voList: 'VoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      taskId: 'string',
      totalCount: 'number',
      voList: { 'type': 'array', 'itemType': QueryMessageByMessageIdResponseBodyDataVoList },
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

export class QueryMessageByMessageIdResponseBody extends $dara.Model {
  code?: number;
  data?: QueryMessageByMessageIdResponseBodyData;
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
      data: QueryMessageByMessageIdResponseBodyData,
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

