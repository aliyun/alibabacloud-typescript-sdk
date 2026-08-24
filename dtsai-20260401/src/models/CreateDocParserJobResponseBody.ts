// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocParserJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The parameter is not valid.
   */
  errorMessage?: string;
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
   * The document parsing task ID.
   * 
   * @example
   * job_abc123
   */
  jobId?: string;
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
   * The result data.
   */
  result?: string;
  /**
   * @remarks
   * The result type.
   */
  resultType?: string;
  /**
   * @remarks
   * The result URL.
   */
  resultUrl?: string;
  /**
   * @remarks
   * The status information.
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
      httpStatusCode: 'HttpStatusCode',
      jobId: 'JobId',
      requestId: 'RequestId',
      result: 'Result',
      resultType: 'ResultType',
      resultUrl: 'ResultUrl',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      jobId: 'string',
      requestId: 'string',
      result: 'string',
      resultType: 'string',
      resultUrl: 'string',
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

