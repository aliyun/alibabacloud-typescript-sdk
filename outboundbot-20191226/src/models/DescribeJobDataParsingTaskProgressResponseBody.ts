// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobDataParsingTaskProgressResponseBodyProgress extends $dara.Model {
  /**
   * @remarks
   * Error code for a failed parsing task.
   * 
   * @example
   * Permission.JobStatus
   */
  failErrorCode?: string;
  /**
   * @remarks
   * Reason for failure.
   * 
   * @example
   * CreateCorpus
   */
  failReason?: string;
  /**
   * @remarks
   * Download URL for the file that lists parsing failures. This field is deprecated.
   * 
   * @example
   * xxxx
   */
  feedbackUrl?: string;
  /**
   * @remarks
   * Number of jobs processed so far.
   * 
   * @example
   * 2
   */
  handledJobCount?: number;
  /**
   * @remarks
   * Status of the job.
   * 
   * - Pending: The job is waiting to start.
   * 
   * - InProgress: The job is running.
   * 
   * - Finished: The job completed successfully.
   * 
   * - PartialFinished: The job completed partially.
   * 
   * - Failed: The job failed.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * Total number of jobs in the task.
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
   * Response code.
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
   * Response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Parsing progress.
   * 
   * @example
   * {}
   */
  progress?: DescribeJobDataParsingTaskProgressResponseBodyProgress;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded.
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

