// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobDataParsingTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * ID of the uploaded job data parsing task.
   * 
   * > Use this value as the JobDataParsingTaskId parameter in DescribeJobDataParsingTaskProgress.
   * 
   * @example
   * d004cfd2-6a81-491c-83c6-cbe186620c95
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * API message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobDataParsingTaskId: 'string',
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

