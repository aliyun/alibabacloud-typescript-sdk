// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskInfoHistoryResponseBodyCurrentPageCursor extends $dara.Model {
  clientip?: string;
  createTime?: string;
  createTimeLong?: number;
  taskNo?: string;
  taskNum?: number;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyNextPageCursor extends $dara.Model {
  clientip?: string;
  createTime?: string;
  createTimeLong?: number;
  taskNo?: string;
  taskNum?: number;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyObjects extends $dara.Model {
  clientip?: string;
  createTime?: string;
  createTimeLong?: number;
  taskNo?: string;
  taskNum?: number;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBodyPrePageCursor extends $dara.Model {
  clientip?: string;
  createTime?: string;
  createTimeLong?: number;
  taskNo?: string;
  taskNum?: number;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      createTimeLong: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskInfoHistoryResponseBody extends $dara.Model {
  currentPageCursor?: QueryTaskInfoHistoryResponseBodyCurrentPageCursor;
  nextPageCursor?: QueryTaskInfoHistoryResponseBodyNextPageCursor;
  objects?: QueryTaskInfoHistoryResponseBodyObjects[];
  pageSize?: number;
  prePageCursor?: QueryTaskInfoHistoryResponseBodyPrePageCursor;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPageCursor: 'CurrentPageCursor',
      nextPageCursor: 'NextPageCursor',
      objects: 'Objects',
      pageSize: 'PageSize',
      prePageCursor: 'PrePageCursor',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageCursor: QueryTaskInfoHistoryResponseBodyCurrentPageCursor,
      nextPageCursor: QueryTaskInfoHistoryResponseBodyNextPageCursor,
      objects: { 'type': 'array', 'itemType': QueryTaskInfoHistoryResponseBodyObjects },
      pageSize: 'number',
      prePageCursor: QueryTaskInfoHistoryResponseBodyPrePageCursor,
      requestId: 'string',
    };
  }

  validate() {
    if(this.currentPageCursor && typeof (this.currentPageCursor as any).validate === 'function') {
      (this.currentPageCursor as any).validate();
    }
    if(this.nextPageCursor && typeof (this.nextPageCursor as any).validate === 'function') {
      (this.nextPageCursor as any).validate();
    }
    if(Array.isArray(this.objects)) {
      $dara.Model.validateArray(this.objects);
    }
    if(this.prePageCursor && typeof (this.prePageCursor as any).validate === 'function') {
      (this.prePageCursor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

