// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocParserJobResultResponseBody extends $dara.Model {
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
   * The document parsing result. The format is determined by the OutputFormat parameter specified in the CreateDocParserJob request.
   * 
   * @example
   * # Document Title
   */
  result?: string;
  /**
   * @remarks
   * The result format.
   */
  resultType?: string;
  /**
   * @remarks
   * oss url
   */
  resultUrl?: string;
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
      requestId: 'RequestId',
      result: 'Result',
      resultType: 'ResultType',
      resultUrl: 'ResultUrl',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      result: 'string',
      resultType: 'string',
      resultUrl: 'string',
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

