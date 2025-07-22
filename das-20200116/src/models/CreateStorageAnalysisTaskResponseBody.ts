// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task is created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  createTaskSuccess?: boolean;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * unknown error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 910f83f4b96df0524ddc5749f61539f8
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTaskSuccess: 'CreateTaskSuccess',
      errorMessage: 'ErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTaskSuccess: 'boolean',
      errorMessage: 'string',
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

export class CreateStorageAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateStorageAnalysisTaskResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request is successful, **Successful** is returned. Otherwise, an error message such as an error code is returned.
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
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      code: 'number',
      data: CreateStorageAnalysisTaskResponseBodyData,
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

