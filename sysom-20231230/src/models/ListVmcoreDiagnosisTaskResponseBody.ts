// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVmcoreDiagnosisTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Job creation time
   * 
   * @example
   * 2025-12-02T17:36:12
   */
  createdAt?: string;
  /**
   * @remarks
   * error message
   * 
   * @example
   * error message
   */
  errorMsg?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * bbe94a98-4192-4172-b856-95777e0a55d7
   */
  taskId?: string;
  /**
   * @remarks
   * Task Status
   * 
   * @example
   * running
   */
  taskStatus?: string;
  /**
   * @remarks
   * Task Type
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
   * Status code  
   * - `code == Success` indicates successful authorization;  
   * - Other status codes indicate failed authorization. When authorization fails, view the `message` field to obtain detailed error message;
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   */
  data?: ListVmcoreDiagnosisTaskResponseBodyData[];
  /**
   * @remarks
   * error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
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
   * Total number of jobs
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

