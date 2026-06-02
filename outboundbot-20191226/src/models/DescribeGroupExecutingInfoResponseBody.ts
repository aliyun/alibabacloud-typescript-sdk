// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupExecutingInfoResponseBodyExecutingInfoJobsProgress extends $dara.Model {
  /**
   * @example
   * 5
   */
  cancelledNum?: number;
  /**
   * @example
   * 5
   */
  executingNum?: number;
  /**
   * @example
   * 5
   */
  failedNum?: number;
  /**
   * @example
   * 5
   */
  pausedNum?: number;
  /**
   * @example
   * 5
   */
  schedulingNum?: number;
  /**
   * @example
   * 5
   */
  totalCompletedNum?: number;
  /**
   * @example
   * 5
   */
  totalJobs?: number;
  /**
   * @example
   * 5
   */
  totalNotAnsweredNum?: number;
  static names(): { [key: string]: string } {
    return {
      cancelledNum: 'CancelledNum',
      executingNum: 'ExecutingNum',
      failedNum: 'FailedNum',
      pausedNum: 'PausedNum',
      schedulingNum: 'SchedulingNum',
      totalCompletedNum: 'TotalCompletedNum',
      totalJobs: 'TotalJobs',
      totalNotAnsweredNum: 'TotalNotAnsweredNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledNum: 'number',
      executingNum: 'number',
      failedNum: 'number',
      pausedNum: 'number',
      schedulingNum: 'number',
      totalCompletedNum: 'number',
      totalJobs: 'number',
      totalNotAnsweredNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupExecutingInfoResponseBodyExecutingInfo extends $dara.Model {
  avgTalkTime?: number;
  /**
   * @example
   * 5
   */
  callFailedNum?: number;
  /**
   * @example
   * 5
   */
  callNum?: number;
  /**
   * @example
   * xxx
   */
  creatorName?: string;
  durationDistribution?: string;
  /**
   * @example
   * 1640087774563
   */
  endTime?: number;
  /**
   * @example
   * 5
   */
  finishedNum?: number;
  /**
   * @example
   * 5
   */
  hangUpByClientNum?: number;
  /**
   * @example
   * {}
   */
  jobsProgress?: DescribeGroupExecutingInfoResponseBodyExecutingInfoJobsProgress;
  noInteractionNum?: number;
  /**
   * @example
   * 1640087774563
   */
  startTime?: number;
  talkTurnsDistribution?: string;
  /**
   * @example
   * 5
   */
  transferByIntentNum?: number;
  /**
   * @example
   * 5
   */
  transferByNoAnswer?: number;
  static names(): { [key: string]: string } {
    return {
      avgTalkTime: 'AvgTalkTime',
      callFailedNum: 'CallFailedNum',
      callNum: 'CallNum',
      creatorName: 'CreatorName',
      durationDistribution: 'DurationDistribution',
      endTime: 'EndTime',
      finishedNum: 'FinishedNum',
      hangUpByClientNum: 'HangUpByClientNum',
      jobsProgress: 'JobsProgress',
      noInteractionNum: 'NoInteractionNum',
      startTime: 'StartTime',
      talkTurnsDistribution: 'TalkTurnsDistribution',
      transferByIntentNum: 'TransferByIntentNum',
      transferByNoAnswer: 'TransferByNoAnswer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgTalkTime: 'number',
      callFailedNum: 'number',
      callNum: 'number',
      creatorName: 'string',
      durationDistribution: 'string',
      endTime: 'number',
      finishedNum: 'number',
      hangUpByClientNum: 'number',
      jobsProgress: DescribeGroupExecutingInfoResponseBodyExecutingInfoJobsProgress,
      noInteractionNum: 'number',
      startTime: 'number',
      talkTurnsDistribution: 'string',
      transferByIntentNum: 'number',
      transferByNoAnswer: 'number',
    };
  }

  validate() {
    if(this.jobsProgress && typeof (this.jobsProgress as any).validate === 'function') {
      (this.jobsProgress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupExecutingInfoResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * {}
   */
  executingInfo?: DescribeGroupExecutingInfoResponseBodyExecutingInfo;
  /**
   * @example
   * b24d321a-2a74-4dd1-a0ba-4ab09cef6652
   */
  groupId?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * c46001bc-3ead-4bfd-9a69-4b5b66a4a3f4
   */
  instanceId?: string;
  /**
   * @example
   * Success
   */
  message?: string;
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
      executingInfo: 'ExecutingInfo',
      groupId: 'GroupId',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      executingInfo: DescribeGroupExecutingInfoResponseBodyExecutingInfo,
      groupId: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.executingInfo && typeof (this.executingInfo as any).validate === 'function') {
      (this.executingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

