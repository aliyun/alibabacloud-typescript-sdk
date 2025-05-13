// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InterruptLogstashTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned. If the API operation is successfully called, this parameter is not returned.
   * 
   * @example
   * .
   */
  code?: string;
  /**
   * @remarks
   * The error message returned. If the API operation is successfully called, this parameter is not returned.
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
   * Indicates whether the task is suspended. Valid values:
   * 
   * *   true
   * *   false
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

