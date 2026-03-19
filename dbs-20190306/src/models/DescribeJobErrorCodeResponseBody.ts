// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobErrorCodeResponseBodyItem extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * failed
   */
  errorCode?: string;
  /**
   * @remarks
   * The standardized error message.
   * 
   * @example
   * Describe preCheck progress failed.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the full backup or restore job.
   * 
   * @example
   * r1iv62ud****
   */
  jobId?: string;
  /**
   * @remarks
   * The state of the job.
   * 
   * @example
   * init
   */
  jobState?: string;
  /**
   * @remarks
   * The internal job type ID in DBS.
   * 
   * @example
   * testId
   */
  jobType?: string;
  /**
   * @remarks
   * The language of the error message.
   * 
   * @example
   * en
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      jobState: 'JobState',
      jobType: 'JobType',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      jobState: 'string',
      jobType: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobErrorCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
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
   * The details of the error code.
   */
  item?: DescribeJobErrorCodeResponseBodyItem;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1FC2F86D-AFF4-4ED9-BB25-ADDE196CB2B5
   */
  requestId?: string;
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
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      item: 'Item',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      item: DescribeJobErrorCodeResponseBodyItem,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.item && typeof (this.item as any).validate === 'function') {
      (this.item as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

