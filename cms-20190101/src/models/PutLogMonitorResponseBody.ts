// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutLogMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
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
   * The returned message.
   * 
   * *   If the request was successful, `successful` is returned.
   * *   If the request failed, an error message is returned. Example: `alias of aggreate must be set value.`
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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

