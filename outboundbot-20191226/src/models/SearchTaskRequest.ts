// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the call.
   * 
   * @example
   * 1646582400000
   */
  actualTimeGte?: number;
  /**
   * @remarks
   * The end time of the call.
   * 
   * @example
   * 1643126399000
   */
  actualTimeLte?: number;
  /**
   * @remarks
   * The minimum call duration for the search, in milliseconds.
   * 
   * @example
   * 12341155
   */
  callDurationGte?: number;
  /**
   * @remarks
   * The maximum call duration for the search, in milliseconds.
   * 
   * @example
   * 12341155
   */
  callDurationLte?: number;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 15126426342
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 051085500215
   */
  callingNumber?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d481cebe-0bb6-4d13-9649-42ce5074fb75
   */
  instanceId?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * 3a30ae7c-27b2-4305-9444-7185ced9d51f
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The name of the job group.
   * 
   * @example
   * ChinaLifePCHospitalizationInsuranceRenewal_20220301_134130
   */
  jobGroupNameQuery?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 11994321-e6bc-47bb-8b1c-8eef8f2f768b
   */
  jobId?: string;
  /**
   * @remarks
   * The job statuses. Separate multiple statuses with commas (,). If this field is not empty, it overwrites jobStatusList. Valid values:
   * 
   * - Scheduling: The job is being scheduled.
   * - Executing: The job is being executed.
   * - Succeeded: The job is finished and the called party is reached.
   * - Paused: The job is stopped.
   * - Failed: The job is finished but the called party is not reached.
   * - Cancelled: The job is canceled.
   * 
   * @example
   * Succeeded
   */
  jobStatusStringList?: string;
  /**
   * @remarks
   * The filter conditions for call labels.
   * 
   * > You can only filter by labels that are configured with specific enumerated label values, which means labels configured with specific values in large language model scenarios.
   */
  labelsJson?: string[];
  /**
   * @remarks
   * The other IDs.
   * 
   * **This includes the following IDs:**
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
   * The page number.
   * 
   * > Page numbers for this API operation start from 0 by default.
   * 
   * @example
   * 2
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * > If this parameter is left empty, the default value is 10.
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
   * The minimum ringing duration for the search.
   * 
   * @example
   * 60
   */
  recordingDurationLte?: number;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * China Life P&C
   */
  scriptNameQuery?: string;
  /**
   * @remarks
   * The sort field. Default value: actualTime.
   * 
   * @example
   * actualTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - asc: Ascending order.
   * 
   * - desc: Descending order. This is the default value.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * > This parameter must be specified together with the TaskCreateTimeLte parameter. Otherwise, it does not take effect.
   * 
   * @example
   * 1646792941
   */
  taskCreateTimeGte?: number;
  /**
   * @remarks
   * The end time of the task.
   * > This parameter must be specified together with the TaskCreateTimeGte parameter. Otherwise, it does not take effect.
   * 
   * @example
   * 1646792941
   */
  taskCreateTimeLte?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 744b27f3-437f-4a8c-a181-f668e492fd24
   */
  taskId?: string;
  /**
   * @remarks
   * The call statuses. Separate multiple statuses with commas (,). Valid values:
   * (Note: The **Succeeded** status is subdivided into specific causes. The **Succeeded**: 1 (Connected) status is not displayed. All subsequent returned values are specific subdivided cause types.)
   * 
   * - **Executing**: 0 (Dialing).
   * - **Succeeded**: 1 (Connected).
   * - **NoAnswer**: 2 (Not connected - No answer).
   * - **NotExist**: 3 (Not connected - Nonexistent number).
   * - **Busy**: 4 (Not connected - Busy).
   * - **Cancelled**: 5 (Not called - Task stopped).
   * - **Failed**: 6 (Failed).
   * - **NotConnected**: 7 (Not connected - Unreachable).
   * - **PoweredOff**: 8 (Not connected - Powered off).
   * - **OutOfService**: 9 (Not connected - Suspended).
   * - **InArrears**: 10 (Not connected - Overdue payment).
   * - **EmptyNumber**: 11 (Not called - Nonexistent number, no call).
   * - **PerDayCallCountLimit**: 12 (Not called - Daily limit exceeded).
   * - **ContactBlockList**: 13 (Not called - Blacklisted).
   * - **CallerNotRegistered**: 14 (Not called - Calling number not registered).
   * - **Terminated**: 15 (Not called - Terminated).
   * - **VerificationCancelled**: 16 (Not called - Canceled due to pre-call verification failure).
   * - **OutOfServiceNoCall**: 17 (Not called - Suspended, no call).
   * - **InArrearsNoCall**: 18 (Not called - Overdue payment, no call).
   * - **CallingNumberNotExist**: 19 (Not called - Calling number does not exist).
   * - **SucceededFinish**: 20 (Connected - Finished normally).
   * - **SucceededChatbotHangUpAfterNoAnswer**: 21 (Connected - Bot hung up after unrecognized intent).
   * - **SucceededChatbotHangUpAfterSilence**: 22 (Connected - Hung up due to silence timeout).
   * - **SucceededClientHangUpAfterNoAnswer**: 23 (Connected - User hung up after unrecognized intent).
   * - **SucceededClientHangUp**: 24 (Connected - User hung up without reason).
   * - **SucceededTransferByIntent**: 25 (Connected - Transferred to agent due to matched intent).
   * - **SucceededTransferAfterNoAnswer**: 26 (Connected - Transferred to agent after unrecognized intent).
   * - **SucceededInoInterAction**: 27 (Connected - No interaction on the user side).
   * - **SucceededError**: 28 (Connected - Interrupted due to system exception).
   * - **SucceededSpecialInterceptVoiceAssistant**: 29 (Connected - Special interception - Voice assistant).
   * - **SucceededSpecialInterceptExtensionNumberTransfer**: 30 (Connected - Special interception - Extension number transfer).
   * - **SucceededSpecialInterceptCustomSpecialIntercept**: 31 (Connected - Special interception - Custom interception).
   * - **HighRiskSipCode**: 32 (Not called - High risk, no call).
   * 
   * @example
   * Executing
   */
  taskStatusStringList?: string;
  /**
   * @remarks
   * The user ID, which is the unique identifier of the user.
   * 
   * > This field is passed when you upload an outbound call list.
   * > - If the list is uploaded in JSON format, the user ID is the value of referenceId.
   * > - If the list is uploaded in an Excel file, the user ID is the value of contactId.
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

