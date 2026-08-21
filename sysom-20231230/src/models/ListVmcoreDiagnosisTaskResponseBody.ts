// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVmcoreDiagnosisTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task creation time.
   * 
   * @example
   * 2025-12-02T17:36:12
   */
  createdAt?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message
   */
  errorMsg?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * bbe94a98-4192-4172-b856-95777e0a55d7
   */
  taskId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * running
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * vmcore
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      errorMsg: 'errorMsg',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      errorMsg: 'string',
      taskId: 'string',
      taskStatus: 'string',
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

export class ListVmcoreDiagnosisTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListVmcoreDiagnosisTaskResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the error message of the request.
   * 
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListVmcoreDiagnosisTaskResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
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

