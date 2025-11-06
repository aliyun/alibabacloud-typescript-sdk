// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueueConsumersResponseBodyDataVoList extends $dara.Model {
  clientAddress?: string;
  consumerTag?: string;
  gmtCreate?: number;
  static names(): { [key: string]: string } {
    return {
      clientAddress: 'ClientAddress',
      consumerTag: 'ConsumerTag',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAddress: 'string',
      consumerTag: 'string',
      gmtCreate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueConsumersResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  taskId?: string;
  totalCount?: number;
  voList?: GetQueueConsumersResponseBodyDataVoList[];
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
      voList: { 'type': 'array', 'itemType': GetQueueConsumersResponseBodyDataVoList },
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

export class GetQueueConsumersResponseBody extends $dara.Model {
  code?: number;
  data?: GetQueueConsumersResponseBodyData;
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
      data: GetQueueConsumersResponseBodyData,
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

