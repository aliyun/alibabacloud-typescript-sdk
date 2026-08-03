// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduleTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 调用成功
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
  /**
   * @remarks
   * ID of the successfully created job
   * 
   * @example
   * 1234567
   */
  result?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

