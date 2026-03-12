// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class QueryBatchTaskDetailListResponseBodyDataTaskDetail extends $dara.Model {
  domainName?: string;
  errorMsg?: string;
  taskNo?: string;
  taskStatus?: string;
  taskType?: string;
  tryCount?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      taskNo: 'TaskNo',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      errorMsg: 'string',
      taskNo: 'string',
      taskStatus: 'string',
      taskType: 'string',
      tryCount: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchTaskDetailListResponseBodyData extends $dara.Model {
  taskDetail?: QueryBatchTaskDetailListResponseBodyDataTaskDetail[];
  static names(): { [key: string]: string } {
    return {
      taskDetail: 'TaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskDetail: { 'type': 'array', 'itemType': QueryBatchTaskDetailListResponseBodyDataTaskDetail },
    };
  }

  validate() {
    if(Array.isArray(this.taskDetail)) {
      $dara.Model.validateArray(this.taskDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchTaskDetailListResponseBody extends $dara.Model {
  currentPageNum?: number;
  data?: QueryBatchTaskDetailListResponseBodyData;
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
      data: QueryBatchTaskDetailListResponseBodyData,
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

