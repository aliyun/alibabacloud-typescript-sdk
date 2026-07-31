// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFormationTasksByTypeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-07-08 17:05:25
   */
  createTime?: string;
  /**
   * @remarks
   * The execution duration of the most recent task.
   * 
   * @example
   * 2
   */
  lastTaskInstCostTime?: string;
  /**
   * @remarks
   * The instance ID of the most recent task.
   * 
   * @example
   * 46872
   */
  lastTaskInstID?: string;
  /**
   * @remarks
   * The error message of the most recent task.
   * 
   * @example
   * xxx
   */
  lastTaskInstMessage?: string;
  /**
   * @remarks
   * The instance status of the most recent node.
   * 
   * @example
   * SUCCESS
   */
  lastTaskInstState?: string;
  /**
   * @remarks
   * The scheduling status.
   * 
   * @example
   * STOP
   */
  scheduleState?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * sales_db
   */
  schema?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * OSSWAREHOUSE
   */
  sourceType?: string;
  /**
   * @remarks
   * The scheduling frequency.
   * 
   * @example
   * {\\"cron\\":\\"\\",\\"type\\":\\"run_on_demand\\"}
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
   */
  taskName?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * CRAWLER
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

export class QueryFormationTasksByTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task list.
   */
  data?: QueryFormationTasksByTypeResponseBodyData[];
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
   * The response message. OK is returned if the call was successful.
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
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryFormationTasksByTypeResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

