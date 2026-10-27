// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTaskResponseBodyLabels extends $dara.Model {
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * Satisfied
   */
  name?: string;
  /**
   * @remarks
   * The list of label values.
   */
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.valueList)) {
      $dara.Model.validateArray(this.valueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTaskResponseBodySearchTaskInfoListLabels extends $dara.Model {
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * Satisfied
   */
  k?: string;
  /**
   * @remarks
   * The matched label value.
   * 
   * @example
   * Yes
   */
  v?: string;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
      v: 'V',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'string',
      v: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTaskResponseBodySearchTaskInfoList extends $dara.Model {
  /**
   * @remarks
   * The actual execution time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1643436089677
   */
  actualTime?: number;
  /**
   * @remarks
   * The call duration, in milliseconds.
   * 
   * @example
   * 46000
   */
  callDuration?: number;
  /**
   * @remarks
   * The call duration.
   * 
   * @example
   * 47″
   */
  callDurationDisplay?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 15205879599
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 02152739269
   */
  callingNumber?: string;
  /**
   * @remarks
   * The exception information.
   * 
   * @example
   * [{"code":"OutboundCallError.SipCodeError", "params":[{"key":"SipCode","value":"500"}]}]
   */
  dialException?: string;
  /**
   * @remarks
   * The field used for displaying remarks on the page.
   */
  dialExceptionCodes?: string[];
  /**
   * @remarks
   * The exception information.
   * 
   * @example
   * ["OutboundCallError.SipTrunkError"]
   */
  dialExceptionOld?: string;
  /**
   * @remarks
   * Indicates whether the call is answered.
   * 
   * @example
   * true
   */
  hasAnswered?: boolean;
  /**
   * @remarks
   * Indicates whether the call is hung up due to unrecognized intent.
   * 
   * @example
   * true
   */
  hasHangUpByRejection?: boolean;
  /**
   * @remarks
   * Indicates whether the last sentence is fully played before hanging up.
   * 
   * @example
   * true
   */
  hasLastPlaybackCompleted?: boolean;
  /**
   * @remarks
   * Indicates whether the dialogue is completed.
   * 
   * @example
   * true
   */
  hasReachedEndOfFlow?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 73df6283-26b2-402d-bad0-ffa489923ea1
   */
  instanceId?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * 37db3113-ad34-4ba3-b930-468f016bbf95
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The name of the job group.
   * 
   * @example
   * 85% new (with notes and underlines) 2021_11_14_18_00_51
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 6203248e-e652-4ef8-a1eb-586ed7b54dc2
   */
  jobId?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - 0: Scheduling.
   * - 1: Executing.
   * - 2: Succeeded (Reached).
   * - 3: Paused.
   * - 4: Failed (Not connected - Busy).
   * - 5: Cancelled.
   * 
   * @example
   * 0
   */
  jobStatus?: number;
  /**
   * @remarks
   * The display content of the job status. Valid values:
   * 
   * - 0: Scheduling.
   * - 1: Executing.
   * - 2: Succeeded (Reached).
   * - 3: Paused.
   * - 4: Failed (Not connected - Busy).
   * - 5: Cancelled.
   * 
   * @example
   * Scheduling
   */
  jobStatusName?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - Scheduling: Scheduling (0).
   * - Executing: Executing (1).
   * - Succeeded: Reached (2).
   * - Paused: Paused (3).
   * - Failed: Not connected - Busy (4).
   * - Cancelled: Cancelled (5).
   * 
   * @example
   * Scheduling
   */
  jobStatusString?: string;
  /**
   * @remarks
   * The label hit status of the current outbound call.
   */
  labels?: SearchTaskResponseBodySearchTaskInfoListLabels[];
  /**
   * @remarks
   * The ringing duration, in seconds.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * Chronic disease leads
   */
  scriptName?: string;
  /**
   * @remarks
   * The task creation time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1646792941
   */
  taskCreateTime?: number;
  /**
   * @remarks
   * The reason why the task ended. Valid values:
   * - FINISHED (1): The task completed normally.
   * - CHATBOT_HANGUP_AFTER_NOANSWER (2): The robot hung up after an unrecognized intent.
   * - CHATBOT_HANGUP_AFTER_SILENCE (3): The robot hung up due to a silence timeout.
   * - CLIENT_HANGUP_AFTER_NOANSWER (4): The user hung up after an unrecognized intent.
   * - CLIENT_HANGUP (5): The user hung up without a specific reason.
   * - TRANSFER_BY_INTENT (6): The call was transferred to an agent due to a matched intent.
   * - TRANSFER_AFTER_NOANSWER (7): The call was transferred to an agent after an unrecognized intent.
   * - INO_INTERACTION (8): No interaction occurred on the user side.
   * - ERROR (9): The task was interrupted by a system exception.
   * - SPECIAL_INTERCEPT_VOICE_ASSISTANT (10): The call was intercepted by the voice assistant.
   * - SPECIAL_INTERCEPT_EXTENSION_NUMBER_TRANSFER (11): The call was intercepted during extension number transfer.
   * 
   * @example
   * OutOfService
   */
  taskEndReason?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 479aea04-3a92-4ac3-935d-c8798c667850
   */
  taskId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * (Note: The **Succeeded** status is subdivided into specific causes. The general **Succeeded**: 1 (Connected) status is not displayed. Instead, specific subdivided causes are returned.)
   * 
   * - **Executing**: 0 (Dialing).
   * - **Succeeded**: 1 (Connected).
   * - **NoAnswer**: 2 (Not connected - No answer).
   * - **NotExist**: 3 (Not connected - Nonexistent number).
   * - **Busy**: 4 (Not connected - Busy).
   * - **Cancelled**: 5 (Not dialed - Task stopped).
   * - **Failed**: 6 (Failed).
   * - **NotConnected**: 7 (Not connected - Unreachable).
   * - **PoweredOff**: 8 (Not connected - Powered off).
   * - **OutOfService**: 9 (Not connected - Suspended).
   * - **InArrears**: 10 (Not connected - Overdue payment).
   * - **EmptyNumber**: 11 (Not dialed - Nonexistent number, not dialed).
   * - **PerDayCallCountLimit**: 12 (Not dialed - Daily limit exceeded).
   * - **ContactBlockList**: 13 (Not dialed - Blacklisted).
   * - **CallerNotRegistered**: 14 (Not dialed - Caller number not registered).
   * - **Terminated**: 15 (Not dialed - Terminated).
   * - **VerificationCancelled**: 16 (Not dialed - Canceled due to pre-call verification failure).
   * - **OutOfServiceNoCall**: 17 (Not dialed - Callee suspended, not dialed).
   * - **InArrearsNoCall**: 18 (Not dialed - Callee has overdue payment, not dialed).
   * - **CallingNumberNotExist**: 19 (Not dialed - Caller number does not exist).
   * - **SucceededFinish**: 20 (Connected - Normal completion).
   * - **SucceededChatbotHangUpAfterNoAnswer**: 21 (Connected - Robot hung up after unrecognized intent).
   * - **SucceededChatbotHangUpAfterSilence**: 22 (Connected - Hung up due to silence timeout).
   * - **SucceededClientHangUpAfterNoAnswer**: 23 (Connected - User hung up after unrecognized intent).
   * - **SucceededClientHangUp**: 24 (Connected - User hung up without reason).
   * - **SucceededTransferByIntent**: 25 (Connected - Transferred to agent due to matched intent).
   * - **SucceededTransferAfterNoAnswer**: 26 (Connected - Transferred to agent after unrecognized intent).
   * - **SucceededInoInterAction**: 27 (Connected - No interaction on user side).
   * - **SucceededError**: 28 (Connected - Interrupted by system exception).
   * - **SucceededSpecialInterceptVoiceAssistant**: 29 (Connected - Special interception - Voice assistant).
   * - **SucceededSpecialInterceptExtensionNumberTransfer**: 30 (Connected - Special interception - Extension number transfer).
   * 
   * @example
   * 0
   */
  taskStatus?: number;
  /**
   * @remarks
   * The display content of the call status. Valid values:
   * (Note: The **Succeeded** status is subdivided into specific causes. The general **Succeeded**: 1 (Connected) status is not displayed. Instead, specific subdivided causes are returned.)
   * 
   * - **Executing**: 0 (Dialing).
   * - **Succeeded**: 1 (Connected).
   * - **NoAnswer**: 2 (Not connected - No answer).
   * - **NotExist**: 3 (Not connected - Nonexistent number).
   * - **Busy**: 4 (Not connected - Busy).
   * - **Cancelled**: 5 (Not dialed - Task stopped).
   * - **Failed**: 6 (Failed).
   * - **NotConnected**: 7 (Not connected - Unreachable).
   * - **PoweredOff**: 8 (Not connected - Powered off).
   * - **OutOfService**: 9 (Not connected - Suspended).
   * - **InArrears**: 10 (Not connected - Overdue payment).
   * - **EmptyNumber**: 11 (Not dialed - Nonexistent number, not dialed).
   * - **PerDayCallCountLimit**: 12 (Not dialed - Daily limit exceeded).
   * - **ContactBlockList**: 13 (Not dialed - Blacklisted).
   * - **CallerNotRegistered**: 14 (Not dialed - Caller number not registered).
   * - **Terminated**: 15 (Not dialed - Terminated).
   * - **VerificationCancelled**: 16 (Not dialed - Canceled due to pre-call verification failure).
   * - **OutOfServiceNoCall**: 17 (Not dialed - Callee suspended, not dialed).
   * - **InArrearsNoCall**: 18 (Not dialed - Callee has overdue payment, not dialed).
   * - **CallingNumberNotExist**: 19 (Not dialed - Caller number does not exist).
   * - **SucceededFinish**: 20 (Connected - Normal completion).
   * - **SucceededChatbotHangUpAfterNoAnswer**: 21 (Connected - Robot hung up after unrecognized intent).
   * - **SucceededChatbotHangUpAfterSilence**: 22 (Connected - Hung up due to silence timeout).
   * - **SucceededClientHangUpAfterNoAnswer**: 23 (Connected - User hung up after unrecognized intent).
   * - **SucceededClientHangUp**: 24 (Connected - User hung up without reason).
   * - **SucceededTransferByIntent**: 25 (Connected - Transferred to agent due to matched intent).
   * - **SucceededTransferAfterNoAnswer**: 26 (Connected - Transferred to agent after unrecognized intent).
   * - **SucceededInoInterAction**: 27 (Connected - No interaction on user side).
   * - **SucceededError**: 28 (Connected - Interrupted by system exception).
   * - **SucceededSpecialInterceptVoiceAssistant**: 29 (Connected - Special interception - Voice assistant).
   * - **SucceededSpecialInterceptExtensionNumberTransfer**: 30 (Connected - Special interception - Extension number transfer).
   * 
   * @example
   * Dialing
   */
  taskStatusName?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * (Note: The **Succeeded** status is subdivided into specific causes. The general **Succeeded**: 1 (Connected) status is not displayed. Instead, specific subdivided causes are returned.)
   * 
   * - **Executing**: 0 (Dialing).
   * - **Succeeded**: 1 (Connected).
   * - **NoAnswer**: 2 (Not connected - No answer).
   * - **NotExist**: 3 (Not connected - Nonexistent number).
   * - **Busy**: 4 (Not connected - Busy).
   * - **Cancelled**: 5 (Not dialed - Task stopped).
   * - **Failed**: 6 (Failed).
   * - **NotConnected**: 7 (Not connected - Unreachable).
   * - **PoweredOff**: 8 (Not connected - Powered off).
   * - **OutOfService**: 9 (Not connected - Suspended).
   * - **InArrears**: 10 (Not connected - Overdue payment).
   * - **EmptyNumber**: 11 (Not dialed - Nonexistent number, not dialed).
   * - **PerDayCallCountLimit**: 12 (Not dialed - Daily limit exceeded).
   * - **ContactBlockList**: 13 (Not dialed - Blacklisted).
   * - **CallerNotRegistered**: 14 (Not dialed - Caller number not registered).
   * - **Terminated**: 15 (Not dialed - Terminated).
   * - **VerificationCancelled**: 16 (Not dialed - Canceled due to pre-call verification failure).
   * - **OutOfServiceNoCall**: 17 (Not dialed - Callee suspended, not dialed).
   * - **InArrearsNoCall**: 18 (Not dialed - Callee has overdue payment, not dialed).
   * - **CallingNumberNotExist**: 19 (Not dialed - Caller number does not exist).
   * - **SucceededFinish**: 20 (Connected - Normal completion).
   * - **SucceededChatbotHangUpAfterNoAnswer**: 21 (Connected - Robot hung up after unrecognized intent).
   * - **SucceededChatbotHangUpAfterSilence**: 22 (Connected - Hung up due to silence timeout).
   * - **SucceededClientHangUpAfterNoAnswer**: 23 (Connected - User hung up after unrecognized intent).
   * - **SucceededClientHangUp**: 24 (Connected - User hung up without reason).
   * - **SucceededTransferByIntent**: 25 (Connected - Transferred to agent due to matched intent).
   * - **SucceededTransferAfterNoAnswer**: 26 (Connected - Transferred to agent after unrecognized intent).
   * - **SucceededInoInterAction**: 27 (Connected - No interaction on user side).
   * - **SucceededError**: 28 (Connected - Interrupted by system exception).
   * - **SucceededSpecialInterceptVoiceAssistant**: 29 (Connected - Special interception - Voice assistant).
   * - **SucceededSpecialInterceptExtensionNumberTransfer**: 30 (Connected - Special interception - Extension number transfer).
   * - **SucceededSpecialInterceptCustomSpecialIntercept**: 31 (Connected - Special interception - Custom interception).
   * - **HighRiskSipCode**: 32 (Not dialed - High risk, not dialed).
   * 
   * @example
   * Executing
   */
  taskStatusString?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12334134
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      callDuration: 'CallDuration',
      callDurationDisplay: 'CallDurationDisplay',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      dialException: 'DialException',
      dialExceptionCodes: 'DialExceptionCodes',
      dialExceptionOld: 'DialExceptionOld',
      hasAnswered: 'HasAnswered',
      hasHangUpByRejection: 'HasHangUpByRejection',
      hasLastPlaybackCompleted: 'HasLastPlaybackCompleted',
      hasReachedEndOfFlow: 'HasReachedEndOfFlow',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      jobStatusName: 'JobStatusName',
      jobStatusString: 'JobStatusString',
      labels: 'Labels',
      recordingDuration: 'RecordingDuration',
      scriptName: 'ScriptName',
      taskCreateTime: 'TaskCreateTime',
      taskEndReason: 'TaskEndReason',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      taskStatusName: 'TaskStatusName',
      taskStatusString: 'TaskStatusString',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      callDuration: 'number',
      callDurationDisplay: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      dialException: 'string',
      dialExceptionCodes: { 'type': 'array', 'itemType': 'string' },
      dialExceptionOld: 'string',
      hasAnswered: 'boolean',
      hasHangUpByRejection: 'boolean',
      hasLastPlaybackCompleted: 'boolean',
      hasReachedEndOfFlow: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      jobId: 'string',
      jobStatus: 'number',
      jobStatusName: 'string',
      jobStatusString: 'string',
      labels: { 'type': 'array', 'itemType': SearchTaskResponseBodySearchTaskInfoListLabels },
      recordingDuration: 'number',
      scriptName: 'string',
      taskCreateTime: 'number',
      taskEndReason: 'number',
      taskId: 'string',
      taskStatus: 'number',
      taskStatusName: 'string',
      taskStatusString: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialExceptionCodes)) {
      $dara.Model.validateArray(this.dialExceptionCodes);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
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
   * The label information that can be used as filter conditions.
   * 
   * > Displays all label information with enumerated values in this job group.
   */
  labels?: SearchTaskResponseBodyLabels[];
  /**
   * @remarks
   * The message returned by the API operation.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The page number.
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
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
   * 
   * @example
   * []
   */
  searchTaskInfoList?: SearchTaskResponseBodySearchTaskInfoList[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * The full set of label name keys.
   */
  variableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      labels: 'Labels',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      searchTaskInfoList: 'SearchTaskInfoList',
      success: 'Success',
      total: 'Total',
      variableNames: 'VariableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      labels: { 'type': 'array', 'itemType': SearchTaskResponseBodyLabels },
      message: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      searchTaskInfoList: { 'type': 'array', 'itemType': SearchTaskResponseBodySearchTaskInfoList },
      success: 'boolean',
      total: 'number',
      variableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.searchTaskInfoList)) {
      $dara.Model.validateArray(this.searchTaskInfoList);
    }
    if(Array.isArray(this.variableNames)) {
      $dara.Model.validateArray(this.variableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

