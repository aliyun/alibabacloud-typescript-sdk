// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The start time for the dial time search, inclusive.
   * 
   * @example
   * 1646496000000
   */
  actualTimeGte?: number;
  /**
   * @remarks
   * The end time for the dial time search, inclusive.
   * 
   * @example
   * 1646582400000
   */
  actualTimeLte?: number;
  /**
   * @remarks
   * The minimum call duration for the search, in milliseconds.
   * 
   * @example
   * 1000
   */
  callDurationGte?: number;
  /**
   * @remarks
   * The maximum call duration for the search, in milliseconds.
   * 
   * @example
   * 2000
   */
  callDurationLte?: number;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 11111111111
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 187********
   */
  callingNumber?: string;
  /**
   * @remarks
   * Specifies whether the call was answered.
   * 
   * @example
   * true
   */
  hasAnswered?: boolean;
  /**
   * @remarks
   * Specifies whether the call was hung up due to rejection.
   * 
   * @example
   * true
   */
  hasHangUpByRejection?: boolean;
  /**
   * @remarks
   * Specifies whether the conversation reached the end of the flow.
   * 
   * @example
   * true
   */
  hasReachedEndOfFlow?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1dcb09c5-d5db-4397-bf65-db854463beea
   */
  instanceId?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * cb731aee-0a5b-4c2b-924c-d9e82eb1d8d7
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * Test_20220217_160147
   */
  jobGroupNameQuery?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 82097dd5-54df-475f-beba-eec8f4b7a3e1
   */
  jobId?: string;
  /**
   * @remarks
   * The job statuses. Separate multiple values with commas. Valid values:
   * - Scheduling: The job is being scheduled.
   * - Executing: The job is being executed.
   * - Succeeded: The job is completed and the user is reached.
   * - Paused: The job is stopped.
   * - Failed: The job is completed but the user is not reached.
   * - Cancelled: The job is canceled.
   * 
   * @example
   * Succeeded
   */
  jobStatusStringList?: string;
  /**
   * @remarks
   * The other ID.
   * 
   * @example
   * 64ebe700-91b4-49cb-b457-0b7c0b598a86
   */
  otherId?: string;
  /**
   * @remarks
   * The page number. Pages start from 0.
   * 
   * @example
   * 0
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The minimum ringing duration for the search.
   * 
   * @example
   * 10
   */
  recordingDurationGte?: number;
  /**
   * @remarks
   * The maximum ringing duration for the search.
   * 
   * @example
   * 20
   */
  recordingDurationLte?: number;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * Test
   */
  scriptNameQuery?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - asc: ascending order.
   * 
   * - desc: descending order. This is the default value.
   * 
   * @example
   * actualTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort type. asr indicates ascending order, and desc indicates descending order.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The start time for the task creation time search.
   * 
   * @example
   * 1646496000000
   */
  taskCreateTimeGte?: number;
  /**
   * @remarks
   * The end time for the task creation time search.
   * 
   * @example
   * 1646582400000
   */
  taskCreateTimeLte?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 64ebe700-91b4-49cb-b457-0b7c0b598a86
   */
  taskId?: string;
  /**
   * @remarks
   * The call statuses. Separate multiple values with commas. Note: The Succeeded status is subdivided into specific causes. The general Succeeded: 1 (Connected) status is not displayed. All returned values are specific subdivided cause types. Valid values:
   * 
   * - Executing: 0 (dialing).
   * - Succeeded: 1 (connected).
   * - NoAnswer: 2 (not connected - no answer).
   * - NotExist: 3 (not connected - nonexistent number).
   * - Busy: 4 (not connected - busy).
   * - Cancelled: 5 (not called - task stopped).
   * - Failed: 6 (failed).
   * - NotConnected: 7 (not connected - unreachable).
   * - PoweredOff: 8 (not connected - powered off).
   * - OutOfService: 9 (not connected - out of service).
   * - InArrears: 10 (not connected - overdue payment).
   * - EmptyNumber: 11 (not called - nonexistent number, no call).
   * - PerDayCallCountLimit: 12 (not called - daily call limit exceeded).
   * - ContactBlockList: 13 (not called - on blocklist).
   * - CallerNotRegistered: 14 (not called - calling number not registered).
   * - Terminated: 15 (not called - terminated).
   * - VerificationCancelled: 16 (not called - canceled due to pre-call verification failure).
   * - OutOfServiceNoCall: 17 (not called - out of service, no call).
   * - InArrearsNoCall: 18 (not called - overdue payment, no call).
   * - CallingNumberNotExist: 19 (not called - calling number does not exist).
   * - SucceededFinish: 20 (connected - completed normally).
   * - SucceededChatbotHangUpAfterNoAnswer: 21 (connected - chatbot hung up after unrecognized response).
   * - SucceededChatbotHangUpAfterSilence: 22 (connected - hung up due to silence timeout).
   * - SucceededClientHangUpAfterNoAnswer: 23 (connected - user hung up after unrecognized response).
   * - SucceededClientHangUp: 24 (connected - user hung up without reason).
   * - SucceededTransferByIntent: 25 (connected - transferred to agent due to intent match).
   * - SucceededTransferAfterNoAnswer: 26 (connected - transferred to agent after unrecognized response).
   * - SucceededInoInterAction: 27 (connected - no user interaction).
   * - SucceededError: 28 (connected - interrupted by system error).
   * - SucceededSpecialInterceptVoiceAssistant: 29 (connected - intercepted due to special condition: voice assistant).
   * - SucceededSpecialInterceptExtensionNumberTransfer: 30 (connected - intercepted due to special condition: extension transfer).
   * 
   * @example
   * Succeeded,Failed
   */
  taskStatusStringList?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 82097dd5-54df-475f-beba-eec8f4b7a3e1
   */
  userIdMatch?: string;
  static names(): { [key: string]: string } {
    return {
      actualTimeGte: 'ActualTimeGte',
      actualTimeLte: 'ActualTimeLte',
      callDurationGte: 'CallDurationGte',
      callDurationLte: 'CallDurationLte',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      hasAnswered: 'HasAnswered',
      hasHangUpByRejection: 'HasHangUpByRejection',
      hasReachedEndOfFlow: 'HasReachedEndOfFlow',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupNameQuery: 'JobGroupNameQuery',
      jobId: 'JobId',
      jobStatusStringList: 'JobStatusStringList',
      otherId: 'OtherId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      recordingDurationGte: 'RecordingDurationGte',
      recordingDurationLte: 'RecordingDurationLte',
      scriptNameQuery: 'ScriptNameQuery',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      taskCreateTimeGte: 'TaskCreateTimeGte',
      taskCreateTimeLte: 'TaskCreateTimeLte',
      taskId: 'TaskId',
      taskStatusStringList: 'TaskStatusStringList',
      userIdMatch: 'UserIdMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTimeGte: 'number',
      actualTimeLte: 'number',
      callDurationGte: 'number',
      callDurationLte: 'number',
      calledNumber: 'string',
      callingNumber: 'string',
      hasAnswered: 'boolean',
      hasHangUpByRejection: 'boolean',
      hasReachedEndOfFlow: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupNameQuery: 'string',
      jobId: 'string',
      jobStatusStringList: 'string',
      otherId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      recordingDurationGte: 'number',
      recordingDurationLte: 'number',
      scriptNameQuery: 'string',
      sortBy: 'string',
      sortOrder: 'string',
      taskCreateTimeGte: 'number',
      taskCreateTimeLte: 'number',
      taskId: 'string',
      taskStatusStringList: 'string',
      userIdMatch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

