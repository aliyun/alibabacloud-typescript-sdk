// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFormationInstsByTaskIDResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2023-05-15T07:24:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The execution duration of the most recent task.
   * 
   * @example
   * 8
   */
  lastTaskInstCostTime?: string;
  /**
   * @remarks
   * The instance ID of the most recent task.
   * 
   * @example
   * 1223
   */
  lastTaskInstID?: string;
  /**
   * @remarks
   * The error message of the most recent task.
   * 
   * @example
   * error
   */
  lastTaskInstMessage?: string;
  /**
   * @remarks
   * The instance status of the most recent node.
   * 
   * @example
   * FINISH
   */
  lastTaskInstState?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * NORMAL
   */
  scheduleState?: string;
  /**
   * @remarks
   * The schema ID assigned to the instance by the system.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The task source. Valid values:
   * - **system**: system.
   * - **custom**: custom.
   * 
   * @example
   * shareScreen
   */
  sourceType?: string;
  /**
   * @remarks
   * The synchronization time, accurate to milliseconds. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-01-20t10:01:01z
   */
  syncTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 10
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * doc_test_daily
   */
  taskName?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * Update\\"\\"
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastTaskInstCostTime: 'LastTaskInstCostTime',
      lastTaskInstID: 'LastTaskInstID',
      lastTaskInstMessage: 'LastTaskInstMessage',
      lastTaskInstState: 'LastTaskInstState',
      scheduleState: 'ScheduleState',
      schema: 'Schema',
      sourceType: 'SourceType',
      syncTime: 'SyncTime',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastTaskInstCostTime: 'string',
      lastTaskInstID: 'string',
      lastTaskInstMessage: 'string',
      lastTaskInstState: 'string',
      scheduleState: 'string',
      schema: 'string',
      sourceType: 'string',
      syncTime: 'string',
      taskId: 'string',
      taskName: 'string',
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

export class QueryFormationInstsByTaskIDResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned task list.
   */
  data?: QueryFormationInstsByTaskIDResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The task list.
   */
  items?: { [key: string]: any }[];
  /**
   * @remarks
   * The response message. OK is returned if the request was successful.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryFormationInstsByTaskIDResponseBodyData },
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

