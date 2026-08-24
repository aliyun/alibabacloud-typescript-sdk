// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocParserJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * JobNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified job does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The failure reason. This parameter has a value only when Status is failed.
   * 
   * @example
   * Failed Message
   */
  failureMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A30D0930-xxxx-xxxx-xxxx-C2C661CC8B58
   */
  requestId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **init**: Created and being prepared.
   * 
   * - **pending**: Queued and waiting to be scheduled.
   * 
   * - **running**: Being processed and parsed.
   * 
   * - **success**: Completed. You can call DescribeDocParserJobResult to obtain the result.
   * 
   * - **failed**: Failed. The reason is provided in FailureMessage.
   * 
   * - **cancelled**: Cancelled.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      failureMessage: 'FailureMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      failureMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      status: 'string',
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

