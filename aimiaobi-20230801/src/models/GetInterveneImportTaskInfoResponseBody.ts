// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterveneImportTaskInfoResponseBodyDataStatus extends $dara.Model {
  /**
   * @example
   * success
   */
  msg?: string;
  /**
   * @example
   * 80
   */
  percentage?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 41405255
   */
  taskId?: string;
  /**
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
   * @example
   * 0
   */
  code?: string;
  data?: GetInterveneImportTaskInfoResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
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

