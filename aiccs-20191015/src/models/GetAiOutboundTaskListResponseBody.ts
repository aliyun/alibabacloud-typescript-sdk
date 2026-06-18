// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Concurrent outbound calls.
   * 
   * > Parameter specific to auto dialing.
   * 
   * @example
   * 1
   */
  concurrentRate?: number;
  /**
   * @remarks
   * The deadline for job creation. UNIX timestamp format, in milliseconds.
   * 
   * @example
   * 1615083365000
   */
  createTime?: number;
  /**
   * @remarks
   * Job description.
   * 
   * @example
   * 房产销售
   */
  description?: string;
  /**
   * @remarks
   * The number of completed tasks.
   * 
   * @example
   * 70
   */
  finishCount?: number;
  /**
   * @remarks
   * Job completion rate.
   * 
   * @example
   * 0.7
   */
  finishRate?: number;
  /**
   * @remarks
   * Skill group ID (for predictive dialing) or IVR ID (for auto dialing).
   * 
   * @example
   * 2468****
   */
  handlerId?: number;
  /**
   * @remarks
   * Skill group name or IVR name.
   * 
   * @example
   * 热线技能组
   */
  handlerName?: string;
  /**
   * @remarks
   * Job name.
   * 
   * @example
   * xxxx外呼任务
   */
  name?: string;
  /**
   * @remarks
   * Task Status. Valid values:
   * 
   * - **0**: Not started.
   * - **1**: In progress.
   * - **2**: System paused.
   * - **3**: Manually paused.
   * - **4**: Completed.
   * - **5**: Stopped.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Task status description.
   * 
   * @example
   * 未开始
   */
  statusDesc?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 1763****
   */
  taskId?: number;
  /**
   * @remarks
   * Total number of jobs.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      createTime: 'CreateTime',
      description: 'Description',
      finishCount: 'FinishCount',
      finishRate: 'FinishRate',
      handlerId: 'HandlerId',
      handlerName: 'HandlerName',
      name: 'Name',
      status: 'Status',
      statusDesc: 'StatusDesc',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      createTime: 'number',
      description: 'string',
      finishCount: 'number',
      finishRate: 'number',
      handlerId: 'number',
      handlerName: 'string',
      name: 'string',
      status: 'number',
      statusDesc: 'string',
      taskId: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Indicates whether there is a next page. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  hasNextPage?: boolean;
  /**
   * @remarks
   * Job information.
   */
  list?: GetAiOutboundTaskListResponseBodyDataList[];
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of data entries.
   * 
   * @example
   * 10
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasNextPage: 'HasNextPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasNextPage: 'boolean',
      list: { 'type': 'array', 'itemType': GetAiOutboundTaskListResponseBodyDataList },
      pageSize: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Job list.
   */
  data?: GetAiOutboundTaskListResponseBodyData;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
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
      code: 'string',
      data: GetAiOutboundTaskListResponseBodyData,
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

