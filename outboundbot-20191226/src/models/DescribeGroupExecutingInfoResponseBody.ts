// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupExecutingInfoResponseBodyExecutingInfoJobsProgress extends $dara.Model {
  /**
   * @remarks
   * Number of canceled tasks
   * 
   * @example
   * 5
   */
  cancelledNum?: number;
  /**
   * @remarks
   * Number of executing jobs
   * 
   * @example
   * 5
   */
  executingNum?: number;
  /**
   * @remarks
   * Number of failed tasks
   * 
   * @example
   * 5
   */
  failedNum?: number;
  /**
   * @remarks
   * Number of paused tasks
   * 
   * @example
   * 5
   */
  pausedNum?: number;
  /**
   * @remarks
   * Number of tasks being scheduled
   * 
   * @example
   * 5
   */
  schedulingNum?: number;
  /**
   * @remarks
   * Total number of completed tasks
   * 
   * @example
   * 5
   */
  totalCompletedNum?: number;
  /**
   * @remarks
   * Total number of jobs
   * 
   * @example
   * 5
   */
  totalJobs?: number;
  /**
   * @remarks
   * Number of unanswered calls
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
   * Average talk time
   * 
   * @example
   * 258
   */
  avgTalkTime?: number;
  /**
   * @remarks
   * Number of failed calls
   * 
   * @example
   * 5
   */
  callFailedNum?: number;
  /**
   * @remarks
   * Number of outbound calls
   * 
   * @example
   * 5
   */
  callNum?: number;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * xxx
   */
  creatorName?: string;
  /**
   * @remarks
   * Call duration distribution
   * 
   * @example
   * {"max":"40","1":"1","total":"40","min":"40"}
   */
  durationDistribution?: string;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 1640087774563
   */
  endTime?: number;
  /**
   * @remarks
   * Number of completed executions
   * 
   * @example
   * 5
   */
  finishedNum?: number;
  /**
   * @remarks
   * Number of calls hung up by customers
   * 
   * @example
   * 5
   */
  hangUpByClientNum?: number;
  /**
   * @remarks
   * Execution progress
   * 
   * @example
   * {}
   */
  jobsProgress?: DescribeGroupExecutingInfoResponseBodyExecutingInfoJobsProgress;
  /**
   * @remarks
   * Number of calls with no interaction
   * 
   * @example
   * 1
   */
  noInteractionNum?: number;
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 1640087774563
   */
  startTime?: number;
  /**
   * @remarks
   * Distribution of conversation rounds
   * 
   * - total: total number of conversation rounds involved
   * 
   * - number: specific round number
   * 
   * > * Example: {"total":"5","5":"1"} means 5 conversation rounds were involved, and 1 call had 5 user turns.
   * 
   * @example
   * {"total":"5","5":"4"}
   */
  talkTurnsDistribution?: string;
  /**
   * @remarks
   * Intent recognition
   * 
   * @example
   * 5
   */
  transferByIntentNum?: number;
  /**
   * @remarks
   * No answer
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
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Execution information
   * 
   * @example
   * {}
   */
  executingInfo?: DescribeGroupExecutingInfoResponseBodyExecutingInfo;
  /**
   * @remarks
   * Task group ID
   * 
   * @example
   * b24d321a-2a74-4dd1-a0ba-4ab09cef6652
   */
  groupId?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * c46001bc-3ead-4bfd-9a69-4b5b66a4a3f4
   */
  instanceId?: string;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded
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

