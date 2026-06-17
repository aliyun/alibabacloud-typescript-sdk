// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutLogMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the log monitoring metric.
   * 
   * @example
   * 16****
   */
  logId?: string;
  /**
   * @remarks
   * The returned message. Results:
   * 
   * - If the operation is successful, `successful` is returned.
   * 
   * - If the operation fails, an error message is returned, such as `alias of aggreate must be set value.`.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91561287-0802-5F9C-9BDE-404C50D41B06
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * - true: The operation is successful.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logId: 'LogId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logId: 'string',
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

