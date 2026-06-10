// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTaskResponseBodyLabels extends $dara.Model {
  /**
   * @remarks
   * Label name
   * 
   * @example
   * 是否满意
   */
  name?: string;
  /**
   * @remarks
   * List of label values
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
   * Label name
   * 
   * @example
   * 是否满意
   */
  k?: string;
  /**
   * @remarks
   * Matched label value
   * 
   * @example
   * 是
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
   * Actual execution time
   * 
   * @example
   * 1643436089677
   */
  actualTime?: number;
  /**
   * @remarks
   * Call duration, in milliseconds
   * 
   * @example
   * 46000
   */
  callDuration?: number;
  /**
   * @remarks
   * Call duration
   * 
   * @example
   * 47″
   */
  callDurationDisplay?: string;
  /**
   * @remarks
   * Called number
   * 
   * @example
   * 15205879599
   */
  calledNumber?: string;
  /**
   * @remarks
   * Calling number
   * 
   * @example
   * 02152739269
   */
  callingNumber?: string;
  /**
   * @remarks
   * Exception details
   * 
   * @example
   * [{"code":"OutboundCallError.SipCodeError", "params":[{"key":"SipCode","value":"500"}]}]
   */
  dialException?: string;
  /**
   * @remarks
   * Exception codes shown on the remarks page
   */
  dialExceptionCodes?: string[];
  /**
   * @remarks
   * Exception details
   * 
   * @example
   * ["OutboundCallError.SipTrunkError"]
   */
  dialExceptionOld?: string;
  /**
   * @remarks
   * Indicates whether the called party answered
   * 
   * @example
   * true
   */
  hasAnswered?: boolean;
  /**
   * @remarks
   * Indicates whether the call ended due to rejection
   * 
   * @example
   * true
   */
  hasHangUpByRejection?: boolean;
  /**
   * @remarks
   * Indicates whether the last audio playback completed before hangup
   * 
   * @example
   * true
   */
  hasLastPlaybackCompleted?: boolean;
  /**
   * @remarks
   * Indicates whether the conversation ended
   * 
   * @example
   * true
   */
  hasReachedEndOfFlow?: boolean;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 73df6283-26b2-402d-bad0-ffa489923ea1
   */
  instanceId?: string;
  /**
   * @remarks
   * Job group ID
   * 
   * @example
   * 37db3113-ad34-4ba3-b930-468f016bbf95
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Job group name
   * 
   * @example
   * 85成新（有笔记划线）2021_11_14_18_00_51
   */
  jobGroupName?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * 6203248e-e652-4ef8-a1eb-586ed7b54dc2
   */
  jobId?: string;
  /**
   * @remarks
   * Job status
   * 
   * - 0: Scheduling
   * 
   * - 1: Executing
   * 
   * - 2: Succeeded
   * 
   * - 3: Paused
   * 
   * - 4: Failed
   * 
   * - 5: Cancelled
   * 
   * @example
   * 0
   */
  jobStatus?: number;
  /**
   * @remarks
   * Display text for job status
   * 
   * - 0: Scheduling
   * 
   * - 1: Executing
   * 
   * - 2: Succeeded
   * 
   * - 3: Paused
   * 
   * - 4: Failed
   * 
   * - 5: Cancelled
   * 
   * @example
   * 调度中
   */
  jobStatusName?: string;
  /**
   * @remarks
   * Job status
   * 
   * - Scheduling (0)
   * 
   * - Executing (1)
   * 
   * - Completed—Reached (2)
   * 
   * - Paused (3)
   * 
   * - Failed—Line busy (4)
   * 
   * - Cancelled (5)
   * 
   * @example
   * Scheduling
   */
  jobStatusString?: string;
  /**
   * @remarks
   * Labels matched for this outbound call
   */
  labels?: SearchTaskResponseBodySearchTaskInfoListLabels[];
  /**
   * @remarks
   * Ringing duration, in seconds
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * Scenario name
   * 
   * @example
   * 慢病线索
   */
  scriptName?: string;
  /**
   * @remarks
   * Task creation time
   * 
   * @example
   * 1646792941
   */
  taskCreateTime?: number;
  /**
   * @remarks
   * Reason why the task ended
   * 
   * - FINISHED(1,"Normal completion")
   * 
   * - CHATBOT_HANGUP_AFTER_NOANSWER(2, "Robot hangup after rejection")
   * 
   * - CHATBOT_HANGUP_AFTER_SILENCE(3, "Robot hangup after silence timeout")
   * 
   * - CLIENT_HANGUP_AFTER_NOANSWER(4, "Client hangup after rejection")
   * 
   * - CLIENT_HANGUP(5, "Client hangup without reason")
   * 
   * - TRANSFER_BY_INTENT(6, "Transfer to agent based on intent match")
   * 
   * - TRANSFER_AFTER_NOANSWER(7, "Transfer to agent after rejection")
   * 
   * - INO_INTERACTION(8, "No interaction from client side")
   * 
   * - ERROR(9, "System error interrupted")
   * 
   * - SPECIAL_INTERCEPT_VOICE_ASSISTANT(10, "Intercepted by voice assistant")
   * 
   * - SPECIAL_INTERCEPT_EXTENSION_NUMBER_TRANSFER(11, "Intercepted by extension transfer")
   * 
   * @example
   * OutOfService
   */
  taskEndReason?: number;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 479aea04-3a92-4ac3-935d-c8798c667850
   */
  taskId?: string;
  /**
   * @remarks
   * Valid values:
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
   * @example
   * 0
   */
  taskStatus?: number;
  /**
   * @remarks
   * Display text for task status
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
   * @example
   * 正在拨打
   */
  taskStatusName?: string;
  /**
   * @remarks
   * Task status
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
  taskStatusString?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 12334134
   */
  userId?: string;
  /**
   * @remarks
   * Username
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
   * Request status code
   * 
   * @example
   * OK
   */
  code?: string;
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
   * Labels available for filtering.
   * 
   * > Displays all labels with enumeration values in this job group.
   */
  labels?: SearchTaskResponseBodyLabels[];
  /**
   * @remarks
   * Response message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 0
   */
  pageIndex?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * List of tasks
   * 
   * @example
   * []
   */
  searchTaskInfoList?: SearchTaskResponseBodySearchTaskInfoList[];
  /**
   * @remarks
   * Indicates whether the request succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * Complete list of label keys
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

