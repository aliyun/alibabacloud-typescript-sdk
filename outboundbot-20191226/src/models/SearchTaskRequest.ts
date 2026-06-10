// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Call start time
   * 
   * @example
   * 1646582400000
   */
  actualTimeGte?: number;
  /**
   * @remarks
   * Call end time
   * 
   * @example
   * 1643126399000
   */
  actualTimeLte?: number;
  /**
   * @remarks
   * Minimum call duration, in milliseconds
   * 
   * @example
   * 12341155
   */
  callDurationGte?: number;
  /**
   * @remarks
   * Maximum call duration, in milliseconds
   * 
   * @example
   * 12341155
   */
  callDurationLte?: number;
  /**
   * @remarks
   * Called number
   * 
   * @example
   * 15126426342
   */
  calledNumber?: string;
  /**
   * @remarks
   * Calling number
   * 
   * @example
   * 051085500215
   */
  callingNumber?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * d481cebe-0bb6-4d13-9649-42ce5074fb75
   */
  instanceId?: string;
  /**
   * @remarks
   * Job group ID
   * 
   * @example
   * 3a30ae7c-27b2-4305-9444-7185ced9d51f
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Job group name
   * 
   * @example
   * 国寿财住院保续保_20220301_134130
   */
  jobGroupNameQuery?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * 11994321-e6bc-47bb-8b1c-8eef8f2f768b
   */
  jobId?: string;
  /**
   * @remarks
   * Job status. Separate multiple statuses with commas. If you specify this parameter, it overrides jobStatusList.
   * 
   * - Scheduling: The job is being scheduled.
   * 
   * - Executing: The job is running.
   * 
   * - Succeeded: The job completed successfully.
   * 
   * - Paused: The job was paused.
   * 
   * - Failed: The job failed.
   * 
   * - Cancelled: The job was cancelled.
   * 
   * @example
   * Succeeded
   */
  jobStatusStringList?: string;
  /**
   * @remarks
   * Label-based filter condition for calls
   * 
   * > You can only use labels that have specific enumeration values. For example, labels configured with specific values in Large Language Model (LLM) scenarios.
   */
  labelsJson?: string[];
  /**
   * @remarks
   * Other ID
   * 
   * **Valid values include the following:**
   * 
   * - sessionID
   * 
   * - taskid
   * 
   * - jobid
   * 
   * @example
   * AVD-2021-39685
   */
  otherId?: string;
  /**
   * @remarks
   * Page number
   * 
   * > The first page is 0.
   * 
   * @example
   * 2
   */
  pageIndex?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * > If you omit this parameter, the default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Minimum ring duration, in seconds
   * 
   * @example
   * 10
   */
  recordingDurationGte?: number;
  /**
   * @remarks
   * The minimum ringing duration for the search.
   * 
   * @example
   * 60
   */
  recordingDurationLte?: number;
  /**
   * @remarks
   * Scenario name
   * 
   * @example
   * 国寿财
   */
  scriptNameQuery?: string;
  /**
   * @remarks
   * Sort field. Default value: actualTime
   * 
   * @example
   * actualTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Sort order. Valid values:
   * 
   * - asc (ascending)
   * 
   * - desc (descending). Default value.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * Start time of the task
   * 
   * > You must specify both TaskCreateTimeGte and TaskCreateTimeLte. If you omit either, the filter does not work.
   * 
   * @example
   * 1646792941
   */
  taskCreateTimeGte?: number;
  /**
   * @remarks
   * End time of the task
   * 
   * > You must specify both TaskCreateTimeGte and TaskCreateTimeLte. If you omit either, the filter does not work.
   * 
   * @example
   * 1646792941
   */
  taskCreateTimeLte?: number;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 744b27f3-437f-4a8c-a181-f668e492fd24
   */
  taskId?: string;
  /**
   * @remarks
   * Call status. Separate multiple statuses with commas.
   * 
   * - **Executing**: 0 (Calling).
   * 
   * - **Succeeded**: 1 (Connected).
   * 
   * - **NoAnswer**: 2 (No answer).
   * 
   * - **NotExist**: 3 (Nonexistent number).
   * 
   * - **Busy**: 4 (Line busy).
   * 
   * - **Cancelled**: 5 (Call canceled due to job stop).
   * 
   * - **Failed**: 6 (Call failed).
   * 
   * - **NotConnected**: 7 (Cannot connect).
   * 
   * - **PoweredOff**: 8 (Phone powered off).
   * 
   * - **OutOfService**: 9 (Called number out of service).
   * 
   * - **InArrears**: 10 (Called number overdue payment).
   * 
   * - **EmptyNumber**: 11 (Empty number, no outbound call).
   * 
   * - **PerDayCallCountLimit**: 12 (Daily call limit exceeded).
   * 
   * - **ContactBlockList**: 13 (Blacklisted).
   * 
   * - **CallerNotRegistered**: 14 (Caller number not registered).
   * 
   * - **Terminated**: 15 (Call terminated).
   * 
   * - **VerificationCancelled**: 16 (Call canceled due to pre-call validation failure).
   * 
   * - **OutOfServiceNoCall**: 17 (Called number out of service, no outbound call).
   * 
   * - **InArrearsNoCall**: 18 (Called number overdue payment, no outbound call).
   * 
   * - **CallingNumberNotExist**: 19 (Caller number does not exist).
   * 
   * - **SucceededFinish**: 20 (Connected and ended normally).
   * 
   * - **SucceededChatbotHangUpAfterNoAnswer**: 21 (Connected and robot hung up after rejection).
   * 
   * - **SucceededChatbotHangUpAfterSilence**: 22 (Connected and robot hung up after silence timeout).
   * 
   * - **SucceededClientHangUpAfterNoAnswer**: 23 (Connected and client hung up after rejection).
   * 
   * - **SucceededClientHangUp**: 24 (Connected and client hung up without reason).
   * 
   * - **SucceededTransferByIntent**: 25 (Connected and transferred to agent based on intent match).
   * 
   * - **SucceededTransferAfterNoAnswer**: 26 (Connected and transferred to agent after rejection).
   * 
   * - **SucceededInoInterAction**: 27 (Connected and no interaction from client side).
   * 
   * - **SucceededError**: 28 (Connected but system error interrupted).
   * 
   * - **SucceededSpecialInterceptVoiceAssistant**: 29 (Connected but intercepted by voice assistant).
   * 
   * - **SucceededSpecialInterceptExtensionNumberTransfer**: 30 (Connected but intercepted by extension transfer).
   * 
   * - **SucceededSpecialInterceptCustomSpecialIntercept**: 31 (Connected but intercepted by custom rule).
   * 
   * - **HighRiskSipCode**: 32 (High-risk SIP code, no outbound call).
   * 
   * @example
   * Executing
   */
  taskStatusStringList?: string;
  /**
   * @remarks
   * User ID. A unique identifier for a user.
   * 
   * > This field is passed when you upload an outbound call list.
   * >
   * > - If you upload the list in JSON format, the user ID is the value of referenceId.
   * >
   * > - If you upload the list as an Excel file, the user ID is the value of contactId.
   * 
   * @example
   * C01
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
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupNameQuery: 'JobGroupNameQuery',
      jobId: 'JobId',
      jobStatusStringList: 'JobStatusStringList',
      labelsJson: 'LabelsJson',
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
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupNameQuery: 'string',
      jobId: 'string',
      jobStatusStringList: 'string',
      labelsJson: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.labelsJson)) {
      $dara.Model.validateArray(this.labelsJson);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

