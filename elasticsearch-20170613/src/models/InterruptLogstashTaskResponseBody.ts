// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InterruptLogstashTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is not returned for successful calls.
   * 
   * @example
   * .
   */
  code?: string;
  /**
   * @remarks
   * The error message. This parameter is not returned for successful calls.
   * 
   * @example
   * .
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FA05123-745C-42FD-A69B-AFF48EF9****
   */
  requestId?: string;
  /**
   * @remarks
   * The result. Valid values:
   * 
   * - true: The task is suspended successfully.
   * - false: The task fails to be suspended.
   * 
   * @example
   * true
   */
  result?: boolean;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

