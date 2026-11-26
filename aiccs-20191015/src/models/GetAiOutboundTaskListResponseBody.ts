// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The outbound call concurrency.
   * 
   * > This parameter is specific to automatic outbound calls.
   * 
   * @example
   * 1
   */
  concurrentRate?: number;
  /**
   * @remarks
   * The end time for task creation. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1615083365000
   */
  createTime?: number;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * Real estate sales
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
   * The task completion rate.
   * 
   * @example
   * 0.7
   */
  finishRate?: number;
  /**
   * @remarks
   * The skill group ID for predictive outbound calls or the IVR ID for automatic outbound calls.
   * 
   * @example
   * 2468****
   */
  handlerId?: number;
  /**
   * @remarks
   * The skill group name or IVR name.
   * 
   * @example
   * Hotline skill group
   */
  handlerName?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * xxxx outbound call task
   */
  name?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **0**: not started
   * - **1**: in progress
   * - **2**: paused by the system
   * - **3**: paused manually
   * - **4**: completed
   * - **5**: terminated
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The task status description.
   * 
   * @example
   * Not started
   */
  statusDesc?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1763****
   */
  taskId?: number;
  /**
   * @remarks
   * The total number of tasks.
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
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Indicates whether a next page exists. Valid values:
   * 
   * - **true**: yes
   * - **false**: no
   * 
   * @example
   * false
   */
  hasNextPage?: boolean;
  /**
   * @remarks
   * The task information.
   */
  list?: GetAiOutboundTaskListResponseBodyDataList[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The task list.
   */
  data?: GetAiOutboundTaskListResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - **true**: successful
   * - **false**: failed
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

