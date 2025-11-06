// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskInfoHistoryResponseBodyCurrentPageCursor extends $dara.Model {
  /**
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @example
   * 2017-11-01 17:22:51
   */
  createTime?: string;
  /**
   * @example
   * 1509528171000
   */
  createTimeLong?: number;
  /**
   * @example
   * aa634d3f-927e-4d17-9d2c-test
   */
  taskNo?: string;
  /**
   * @example
   * 1
   */
  taskNum?: number;
  /**
   * @example
   * COMPLETE
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
  /**
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @example
   * 2017-10-27 13:07:07
   */
  createTime?: string;
  /**
   * @example
   * 1509080827000
   */
  createTimeLong?: number;
  /**
   * @example
   * 8f112aa1-98be-48c3-82f8-test
   */
  taskNo?: string;
  /**
   * @example
   * 15
   */
  taskNum?: number;
  /**
   * @example
   * COMPLETE
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
  /**
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @example
   * 2017-11-01 17:22:51
   */
  createTime?: string;
  /**
   * @example
   * 1509528171000
   */
  createTimeLong?: number;
  /**
   * @example
   * aa634d3f-927e-4d17-9d2c-test
   */
  taskNo?: string;
  /**
   * @example
   * 1
   */
  taskNum?: number;
  /**
   * @example
   * COMPLETE
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
  /**
   * @example
   * 127.0.0.1
   */
  clientip?: string;
  /**
   * @example
   * 2017-11-01 17:19:47
   */
  createTime?: string;
  /**
   * @example
   * 1509527987000
   */
  createTimeLong?: number;
  /**
   * @example
   * f9baa3d5-33b9-4c81-8847-test
   */
  taskNo?: string;
  /**
   * @example
   * 15
   */
  taskNum?: number;
  /**
   * @example
   * COMPLETE
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
  /**
   * @example
   * 2
   */
  pageSize?: number;
  prePageCursor?: QueryTaskInfoHistoryResponseBodyPrePageCursor;
  /**
   * @example
   * EB3FCCBA-CA1F-4D31-9F34-test
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

