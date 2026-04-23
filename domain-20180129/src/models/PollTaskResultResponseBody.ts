// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PollTaskResultResponseBodyDataTaskDetail extends $dara.Model {
  createTime?: string;
  domainName?: string;
  errorMsg?: string;
  instanceId?: string;
  taskDetailNo?: string;
  taskNo?: string;
  taskResult?: string;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeDescription?: string;
  tryCount?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeDescription: 'TaskTypeDescription',
      tryCount: 'TryCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      errorMsg: 'string',
      instanceId: 'string',
      taskDetailNo: 'string',
      taskNo: 'string',
      taskResult: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeDescription: 'string',
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

export class PollTaskResultResponseBodyData extends $dara.Model {
  taskDetail?: PollTaskResultResponseBodyDataTaskDetail[];
  static names(): { [key: string]: string } {
    return {
      taskDetail: 'TaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskDetail: { 'type': 'array', 'itemType': PollTaskResultResponseBodyDataTaskDetail },
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

export class PollTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: PollTaskResultResponseBodyData;
  /**
   * @example
   * false
   */
  nextPage?: boolean;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * E879DC07-38EE-4408-9F33-73B30CD965CD
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalItemNum?: number;
  /**
   * @example
   * 10
   */
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
      data: PollTaskResultResponseBodyData,
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

