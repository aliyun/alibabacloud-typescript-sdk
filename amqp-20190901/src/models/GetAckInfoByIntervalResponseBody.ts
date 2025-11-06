// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAckInfoByIntervalResponseBodyDataVoList extends $dara.Model {
  action?: string;
  channelId?: string;
  connectionId?: string;
  deliveryTag?: number;
  queueName?: string;
  rocketMqMsgId?: string;
  rt?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      channelId: 'ChannelId',
      connectionId: 'ConnectionId',
      deliveryTag: 'DeliveryTag',
      queueName: 'QueueName',
      rocketMqMsgId: 'RocketMqMsgId',
      rt: 'Rt',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      channelId: 'string',
      connectionId: 'string',
      deliveryTag: 'number',
      queueName: 'string',
      rocketMqMsgId: 'string',
      rt: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAckInfoByIntervalResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  voList?: GetAckInfoByIntervalResponseBodyDataVoList[];
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
      voList: { 'type': 'array', 'itemType': GetAckInfoByIntervalResponseBodyDataVoList },
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

export class GetAckInfoByIntervalResponseBody extends $dara.Model {
  code?: number;
  data?: GetAckInfoByIntervalResponseBodyData;
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
      data: GetAckInfoByIntervalResponseBodyData,
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

