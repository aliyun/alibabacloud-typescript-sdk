// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlLogTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1681363254423
   */
  createTime?: number;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1608888296000
   */
  end?: number;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * @example
   * pc-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Export_test
   */
  name?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1596177993000
   */
  start?: number;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   **INIT**: The task is to be scheduled.
   * *   **RUNNING**: The task is running.
   * *   **FAILED**: The task failed.
   * *   **CANCELED**: The task is canceled.
   * *   **COMPLETED**: The task is complete.
   * 
   * >  You can view the result of a task that is in the **COMPLETED** state.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 54f8041743ca3a9ac5cb9342d050527c
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      end: 'End',
      instanceId: 'InstanceId',
      name: 'Name',
      start: 'Start',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      end: 'number',
      instanceId: 'string',
      name: 'string',
      start: 'number',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlLogTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateSqlLogTaskResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, error information such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83D9D59B-057A-54A9-BFF9-CF2B42F05645
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
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
      data: CreateSqlLogTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

