// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskListResponseBodyDataTaskInfo extends $dara.Model {
  clientip?: string;
  createTime?: string;
  taskBizType?: string;
  taskCancelStatus?: string;
  taskCancelStatusCode?: number;
  taskNo?: string;
  taskNum?: number;
  taskResult?: string;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  taskTypeCode?: number;
  taskTypeDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientip: 'Clientip',
      createTime: 'CreateTime',
      taskBizType: 'TaskBizType',
      taskCancelStatus: 'TaskCancelStatus',
      taskCancelStatusCode: 'TaskCancelStatusCode',
      taskNo: 'TaskNo',
      taskNum: 'TaskNum',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
      taskTypeCode: 'TaskTypeCode',
      taskTypeDescription: 'TaskTypeDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientip: 'string',
      createTime: 'string',
      taskBizType: 'string',
      taskCancelStatus: 'string',
      taskCancelStatusCode: 'number',
      taskNo: 'string',
      taskNum: 'number',
      taskResult: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
      taskTypeCode: 'number',
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

export class QueryTaskListResponseBodyData extends $dara.Model {
  taskInfo?: QueryTaskListResponseBodyDataTaskInfo[];
  static names(): { [key: string]: string } {
    return {
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskInfo: { 'type': 'array', 'itemType': QueryTaskListResponseBodyDataTaskInfo },
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

export class QueryTaskListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: QueryTaskListResponseBodyData;
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * 8D7D294A-8E99-481F-B64C-017EFC793059
   */
  requestId?: string;
  /**
   * @example
   * 43
   */
  totalItemNum?: number;
  /**
   * @example
   * 22
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
      data: QueryTaskListResponseBodyData,
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

