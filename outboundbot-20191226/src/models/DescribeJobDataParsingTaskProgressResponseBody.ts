// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobDataParsingTaskProgressResponseBodyProgress extends $dara.Model {
  /**
   * @remarks
   * The error code for the failure.
   * 
   * @example
   * Permission.JobStatus
   */
  failErrorCode?: string;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * CreateCorpus
   */
  failReason?: string;
  /**
   * @remarks
   * The download URL of the parsing failure record file. [Deprecated]
   * 
   * @example
   * xxxx
   */
  feedbackUrl?: string;
  /**
   * @remarks
   * The number of jobs being processed.
   * 
   * @example
   * 2
   */
  handledJobCount?: number;
  /**
   * @remarks
   * The job status. Valid values:
   * - Pending: pending.
   * - InProgress: in progress.
   * - Finished: finished.
   * - PartialFinished: partially finished.
   * - Failed: failed.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 3
   */
  totalJobCount?: number;
  static names(): { [key: string]: string } {
    return {
      failErrorCode: 'FailErrorCode',
      failReason: 'FailReason',
      feedbackUrl: 'FeedbackUrl',
      handledJobCount: 'HandledJobCount',
      status: 'Status',
      totalJobCount: 'TotalJobCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failErrorCode: 'string',
      failReason: 'string',
      feedbackUrl: 'string',
      handledJobCount: 'number',
      status: 'string',
      totalJobCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobDataParsingTaskProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
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
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The progress information.
   * 
   * @example
   * {}
   */
  progress?: DescribeJobDataParsingTaskProgressResponseBodyProgress;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
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
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      progress: 'Progress',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      progress: DescribeJobDataParsingTaskProgressResponseBodyProgress,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.progress && typeof (this.progress as any).validate === 'function') {
      (this.progress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

