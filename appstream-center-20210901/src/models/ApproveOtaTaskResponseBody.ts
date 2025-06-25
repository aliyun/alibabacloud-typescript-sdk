// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveOtaTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result. If the request was successful, `success` is returned. If the request failed, an error message is returned.
   * 
   * @example
   * OtaTask.Running
   */
  code?: string;
  /**
   * @remarks
   * The error message. If the value of `Code` is `success`, this parameter is not returned.
   * 
   * @example
   * The task is running and cannot be sumitted.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

