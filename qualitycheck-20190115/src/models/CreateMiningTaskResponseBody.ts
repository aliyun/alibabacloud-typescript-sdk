// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMiningTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 7C1DEF5F-2C18-4D36-99C6-8C27*****
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

export class CreateMiningTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. A value of **200** indicates success. Any other value indicates failure. Use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response data
   */
  data?: CreateMiningTaskResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Error details if the call failed. Returns successful if the call succeeded.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded
   * 
   * @example
   * true
   */
  success?: string;
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
      data: CreateMiningTaskResponseBodyData,
      httpStatusCode: 'string',
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

