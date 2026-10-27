// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupExecutingInfoResponseBodyExecutingInfoJobsProgress extends $dara.Model {
  /**
   * @remarks
   * The number of canceled jobs.
   * 
   * @example
   * 5
   */
  cancelledNum?: number;
  /**
   * @remarks
   * The number of executing jobs.
   * 
   * @example
   * 5
   */
  executingNum?: number;
  /**
   * @remarks
   * The number of failed jobs.
   * 
   * @example
   * 5
   */
  failedNum?: number;
  /**
   * @remarks
   * The number of paused jobs.
   * 
   * @example
   * 5
   */
  pausedNum?: number;
  /**
   * @remarks
   * The number of jobs being scheduled.
   * 
   * @example
   * 5
   */
  schedulingNum?: number;
  /**
   * @remarks
   * The total number of completed jobs.
   * 
   * @example
   * 5
   */
  totalCompletedNum?: number;
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 5
   */
  totalJobs?: number;
  /**
   * @remarks
   * The total number of unanswered calls.
   * 
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
  /**
   * @remarks
   * The average call duration.
   * 
   * @example
   * 258
   */
  avgTalkTime?: number;
  /**
   * @remarks
   * The number of failed calls.
   * 
   * @example
   * 5
   */
  callFailedNum?: number;
  /**
   * @remarks
   * The number of outbound calls.
   * 
   * @example
   * 5
   */
  callNum?: number;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * xxx
   */
  creatorName?: string;
  /**
   * @remarks
   * The distribution of call durations.
   * 
   * @example
   * {"max":"40","1":"1","total":"40","min":"40"}
   */
  durationDistribution?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640087774563
   */
  endTime?: number;
  /**
   * @remarks
   * The number of completed jobs.
   * 
   * @example
   * 5
   */
  finishedNum?: number;
  /**
   * @remarks
   * The number of customer-initiated hang-ups.
   * 
   * @example
   * 5
   */
  hangUpByClientNum?: number;
  /**
   * @remarks
   * The execution progress.
   * 
   * @example
   * {}
   */
  jobsProgress?: DescribeGroupExecutingInfoResponseBodyExecutingInfoJobsProgress;
  /**
   * @remarks
   * The number of calls with no interaction.
   * 
   * @example
   * 1
   */
  noInteractionNum?: number;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640087774563
   */
  startTime?: number;
  /**
   * @remarks
   * The distribution of talk turns.
   * 
   * - total: The total number of talk turns involved.
   * - Number: The corresponding turn count.
   * 
   * > - Example: {"total":"5","5":"1"} indicates that the total number of talk turns involved is 5, and there is 1 call with 5 user turns.
   * 
   * @example
   * {"total":"5","5":"4"}
   */
  talkTurnsDistribution?: string;
  /**
   * @remarks
   * The number of intent recognitions.
   * 
   * @example
   * 5
   */
  transferByIntentNum?: number;
  /**
   * @remarks
   * The number of unanswered calls.
   * 
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
   * @remarks
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The execution information.
   * 
   * @example
   * {}
   */
  executingInfo?: DescribeGroupExecutingInfoResponseBodyExecutingInfo;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * b24d321a-2a74-4dd1-a0ba-4ab09cef6652
   */
  groupId?: string;
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
   * The instance ID.
   * 
   * @example
   * c46001bc-3ead-4bfd-9a69-4b5b66a4a3f4
   */
  instanceId?: string;
  /**
   * @remarks
   * The API response message.
   * 
   * @example
   * Success
   */
  message?: string;
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
   * Indicates whether the request is successful.
   * 
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

