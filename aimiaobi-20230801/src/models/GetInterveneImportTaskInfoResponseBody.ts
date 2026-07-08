// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterveneImportTaskInfoResponseBodyDataStatus extends $dara.Model {
  /**
   * @remarks
   * The information about the task.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The completion percentage.
   * 
   * @example
   * 80
   */
  percentage?: number;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 41405255
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * ft-task-20190101m8rnK
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      percentage: 'Percentage',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      percentage: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneImportTaskInfoResponseBodyData extends $dara.Model {
  code?: number;
  /**
   * @remarks
   * The status information of the task.
   */
  status?: GetInterveneImportTaskInfoResponseBodyDataStatus;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      status: GetInterveneImportTaskInfoResponseBodyDataStatus,
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneImportTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetInterveneImportTaskInfoResponseBodyData;
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
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of \\`true\\` indicates success, and a value of \\`false\\` indicates failure.
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
      data: GetInterveneImportTaskInfoResponseBodyData,
      httpStatusCode: 'number',
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

