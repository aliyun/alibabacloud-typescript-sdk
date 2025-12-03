// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVmcoreDiagnosisTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2025-12-02T17:36:12
   */
  createdAt?: string;
  /**
   * @example
   * error message
   */
  errorMsg?: string;
  /**
   * @example
   * bbe94a98-4192-4172-b856-95777e0a55d7
   */
  taskId?: string;
  /**
   * @example
   * running
   */
  taskStatus?: string;
  /**
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
   * @example
   * Success
   */
  code?: string;
  data?: ListVmcoreDiagnosisTaskResponseBodyData[];
  /**
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

