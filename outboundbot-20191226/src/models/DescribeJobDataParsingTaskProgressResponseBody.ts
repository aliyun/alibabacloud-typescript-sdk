// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobDataParsingTaskProgressResponseBodyProgress extends $dara.Model {
  /**
   * @example
   * Permission.JobStatus
   */
  failErrorCode?: string;
  /**
   * @example
   * CreateCorpus
   */
  failReason?: string;
  feedbackUrl?: string;
  /**
   * @example
   * 2
   */
  handledJobCount?: number;
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * {}
   */
  progress?: DescribeJobDataParsingTaskProgressResponseBodyProgress;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
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

