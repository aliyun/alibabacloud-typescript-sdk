// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBatchTaskListResponseBodyDataTaskInfo extends $dara.Model {
  clientip?: string;
  createTime?: string;
  taskNo?: string;
  taskNum?: number;
  taskStatus?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      taskNo: 'string',
      taskNum: 'number',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchTaskListResponseBodyData extends $dara.Model {
  taskInfo?: QueryBatchTaskListResponseBodyDataTaskInfo[];
  static names(): { [key: string]: string } {
    return {
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskInfo: { 'type': 'array', 'itemType': QueryBatchTaskListResponseBodyDataTaskInfo },
    };
  }

  validate() {
    if(Array.isArray(this.taskInfo)) {
      $dara.Model.validateArray(this.taskInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchTaskListResponseBody extends $dara.Model {
  currentPageNum?: number;
  data?: QueryBatchTaskListResponseBodyData;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryBatchTaskListResponseBodyData,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
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

