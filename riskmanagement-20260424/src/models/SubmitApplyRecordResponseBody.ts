// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitApplyRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * - **200**: Succeeded.
   * - **Other (400, 500)**: Failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The submission result.
   * 
   * - **true**: Submitted.
   * - **false**: Submission failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B57D35D-9DAC-5393-AE39-07697E37C2E7
   */
  requestId?: string;
  /**
   * @remarks
   * The call status.
   * 
   * - **true**: Succeeded.
   * - **false**: Failed.
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

