// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskDetailHistoryResponseBodyCurrentPageCursor extends $dara.Model {
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  errorMsg?: string;
  /**
   * @example
   * S1234456789
   */
  instanceId?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-2342
   */
  taskDetailNo?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * EXECUTE_SUCCESS
   */
  taskStatus?: string;
  /**
   * @example
   * 2
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
  taskType?: string;
  taskTypeDescription?: string;
  /**
   * @example
   * 0
   */
  tryCount?: number;
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
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

export class QueryTaskDetailHistoryResponseBodyNextPageCursor extends $dara.Model {
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  errorMsg?: string;
  /**
   * @example
   * S1234567890
   */
  instanceId?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-2424
   */
  taskDetailNo?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * EXECUTE_FAILURE
   */
  taskStatus?: string;
  /**
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
  taskType?: string;
  taskTypeDescription?: string;
  /**
   * @example
   * 5
   */
  tryCount?: number;
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
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

export class QueryTaskDetailHistoryResponseBodyObjects extends $dara.Model {
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  errorMsg?: string;
  /**
   * @example
   * S123456789
   */
  instanceId?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-4234
   */
  taskDetailNo?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * EXECUTE_FAILURE
   */
  taskStatus?: string;
  /**
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
  taskType?: string;
  taskTypeDescription?: string;
  /**
   * @example
   * 5
   */
  tryCount?: number;
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
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

export class QueryTaskDetailHistoryResponseBodyPrePageCursor extends $dara.Model {
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  errorMsg?: string;
  /**
   * @example
   * S123456789
   */
  instanceId?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-123
   */
  taskDetailNo?: string;
  /**
   * @example
   * 75addb07-28a3-450e-b5ec-test
   */
  taskNo?: string;
  /**
   * @example
   * EXECUTE_FAILURE
   */
  taskStatus?: string;
  /**
   * @example
   * 3
   */
  taskStatusCode?: number;
  /**
   * @example
   * CHG_DNS
   */
  taskType?: string;
  taskTypeDescription?: string;
  /**
   * @example
   * 5
   */
  tryCount?: number;
  /**
   * @example
   * 2019-07-30 00:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      taskDetailNo: 'TaskDetailNo',
      taskNo: 'TaskNo',
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

export class QueryTaskDetailHistoryResponseBody extends $dara.Model {
  currentPageCursor?: QueryTaskDetailHistoryResponseBodyCurrentPageCursor;
  nextPageCursor?: QueryTaskDetailHistoryResponseBodyNextPageCursor;
  objects?: QueryTaskDetailHistoryResponseBodyObjects[];
  /**
   * @example
   * 2
   */
  pageSize?: number;
  prePageCursor?: QueryTaskDetailHistoryResponseBodyPrePageCursor;
  /**
   * @example
   * 548CAE74-88F8-402F-8C12-97E747389C51
   */
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
      currentPageCursor: QueryTaskDetailHistoryResponseBodyCurrentPageCursor,
      nextPageCursor: QueryTaskDetailHistoryResponseBodyNextPageCursor,
      objects: { 'type': 'array', 'itemType': QueryTaskDetailHistoryResponseBodyObjects },
      pageSize: 'number',
      prePageCursor: QueryTaskDetailHistoryResponseBodyPrePageCursor,
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

