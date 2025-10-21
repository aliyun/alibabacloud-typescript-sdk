// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchContentAsyncDetectResponseBodyData extends $dara.Model {
  /**
   * @example
   * 19657954336
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

export class BatchContentAsyncDetectResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  data?: BatchContentAsyncDetectResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * 9736C44E-F718-566B-821F-710216aAAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****F68692
   */
  requestId?: string;
  /**
   * @example
   * True
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
      data: BatchContentAsyncDetectResponseBodyData,
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

