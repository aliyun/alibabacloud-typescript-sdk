// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueueErrorByTaskIdResponseBodyDataVoListQueueErrorDO extends $dara.Model {
  autoDelete?: boolean;
  durable?: boolean;
  errorMessage?: number;
  queueName?: string;
  taskId?: number;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      autoDelete: 'AutoDelete',
      durable: 'Durable',
      errorMessage: 'ErrorMessage',
      queueName: 'QueueName',
      taskId: 'TaskId',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDelete: 'boolean',
      durable: 'boolean',
      errorMessage: 'number',
      queueName: 'string',
      taskId: 'number',
      vhostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueErrorByTaskIdResponseBodyDataVoList extends $dara.Model {
  queueErrorDO?: GetQueueErrorByTaskIdResponseBodyDataVoListQueueErrorDO[];
  static names(): { [key: string]: string } {
    return {
      queueErrorDO: 'QueueErrorDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueErrorDO: { 'type': 'array', 'itemType': GetQueueErrorByTaskIdResponseBodyDataVoListQueueErrorDO },
    };
  }

  validate() {
    if(Array.isArray(this.queueErrorDO)) {
      $dara.Model.validateArray(this.queueErrorDO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueErrorByTaskIdResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  voList?: GetQueueErrorByTaskIdResponseBodyDataVoList;
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
      voList: GetQueueErrorByTaskIdResponseBodyDataVoList,
    };
  }

  validate() {
    if(this.voList && typeof (this.voList as any).validate === 'function') {
      (this.voList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueErrorByTaskIdResponseBody extends $dara.Model {
  code?: number;
  data?: GetQueueErrorByTaskIdResponseBodyData;
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
      data: GetQueueErrorByTaskIdResponseBodyData,
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

