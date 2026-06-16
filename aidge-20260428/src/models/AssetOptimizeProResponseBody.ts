// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssetOptimizeProResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID, which is used to query the processing result by calling QueryAsyncTaskResult.
   * 
   * @example
   * 8080345d-b28a-9e2e-9ad7-370f8e236949
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class AssetOptimizeProResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The value "success" is returned for a successful call.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The result data of the asynchronous task submission, which contains the asynchronous task ID.
   */
  data?: AssetOptimizeProResponseBodyData;
  /**
   * @remarks
   * The error message. The value "Success" is returned for a successful call.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which uniquely identifies the API call.
   * 
   * @example
   * 4FCCA90A-A7A4-1D37-88C3-C17549886E70
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure.
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
      code: 'string',
      data: AssetOptimizeProResponseBodyData,
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

