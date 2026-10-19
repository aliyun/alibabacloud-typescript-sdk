// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAifgResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The diagnostic result.
   * 
   * @example
   * success
   */
  result?: any;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * user-service
   */
  serviceName?: string;
  /**
   * @remarks
   * The status of the root data.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The time when the data was created.
   * 
   * @example
   * 2023-01-01T00:00:00Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The unique task ID.
   * 
   * @example
   * 1234567890
   */
  taskId?: string;
  /**
   * @remarks
   * The training task ID.
   * 
   * @example
   * task-as2993fsx
   */
  traceTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      serviceName: 'serviceName',
      status: 'status',
      submitTime: 'submitTime',
      taskId: 'taskId',
      traceTaskId: 'traceTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'any',
      serviceName: 'string',
      status: 'string',
      submitTime: 'string',
      taskId: 'string',
      traceTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAifgResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The data details.
   */
  data?: GetAifgResultResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * "Execution succeeded"
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 1234567890
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAifgResultResponseBodyData,
      message: 'string',
      requestId: 'string',
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

