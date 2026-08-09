// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobsWithResultRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the call end time.
   * 
   * @example
   * 1579055783000
   */
  endActualTimeFilter?: number;
  /**
   * @remarks
   * Specifies whether the call is answered.
   * 
   * @example
   * true
   */
  hasAnsweredFilter?: boolean;
  /**
   * @remarks
   * Specifies whether the call is hung up due to rejection.
   * 
   * @example
   * false
   */
  hasHangUpByRejectionFilter?: boolean;
  /**
   * @remarks
   * Specifies whether the call has reached the end of the flow.
   * 
   * @example
   * true
   */
  hasReachedEndOfFlowFilter?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9d53cd72-4050-4419-8c17-acc0bf158147
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of job failure reasons.
   * 
   * @example
   * ["NoAnswer"]
   */
  jobFailureReasonsFilter?: string;
  /**
   * @remarks
   * The ID of the job group.
   * 
   * This parameter is required.
   * 
   * @example
   * ad16fc35-d824-4102-a606-2be51c1aa6dd
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The job status filter. Valid values:
   * - Scheduling: Scheduling in progress.
   * - Executing: Executing in progress.
   * - Succeeded: Ended - Reached.
   * - Paused: Paused.
   * - Failed: Ended - Not reached.
   * - Cancelled: Cancelled - Manual intervention.
   * 
   * @example
   * Succeeded
   */
  jobStatusFilter?: string;
  /**
   * @remarks
   * The label-based filter condition for calls.
   * 
   * >This condition supports filtering only by labels that have specific enumerated label values configured, that is, labels with specific label values configured in large language model scenarios.
   */
  labelsJson?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The search content. You can search by phone number.
   * 
   * @example
   * 1882020****
   */
  queryText?: string;
  /**
   * @remarks
   * The filter condition for the call start time.
   * 
   * @example
   * 1579055782000
   */
  startActualTimeFilter?: number;
  /**
   * @remarks
   * The call status. Example: ["Executing","Succeeded"]. Separate multiple values with commas.
   * 
   * Valid values:
   * 
   * (Note: The **Succeeded** status has been subdivided into specific reasons. The general **Succeeded**: 1 (Connected) status is no longer returned. Instead, specific sub-reason types are returned.)
   * 
   * - **Executing**: 0 (Calling).
   * - **Succeeded**: 1 (Connected).
   * - **NoAnswer**: 2 (Not connected - No answer).
   * - **NotExist**: 3 (Not connected - Nonexistent number).
   * - **Busy**: 4 (Not connected - Busy).
   * - **Cancelled**: 5 (Not dialed - Task stopped).
   * - **Failed**: 6 (Failed).
   * - **NotConnected**: 7 (Not connected - Unreachable).
   * - **PoweredOff**: 8 (Not connected - Powered off).
   * - **OutOfService**: 9 (Not connected - Callee out of service).
   * - **InArrears**: 10 (Not connected - Callee has overdue payment).
   * - **EmptyNumber**: 11 (Not dialed - Nonexistent number, no outbound call).
   * - **PerDayCallCountLimit**: 12 (Not dialed - Daily limit exceeded).
   * - **ContactBlockList**: 13 (Not dialed - Blacklisted).
   * - **CallerNotRegistered**: 14 (Not dialed - Caller number not registered).
   * - **Terminated**: 15 (Not dialed - Terminated).
   * - **VerificationCancelled**: 16 (Not dialed - Pre-call verification failed, cancelled).
   * - **OutOfServiceNoCall**: 17 (Not dialed - Callee out of service, no outbound call).
   * - **InArrearsNoCall**: 18 (Not dialed - Callee has overdue payment, no outbound call).
   * - **CallingNumberNotExist**: 19 (Not dialed - Caller number does not exist).
   * - **SucceededFinish**: 20 (Connected - Normal completion).
   * - **SucceededChatbotHangUpAfterNoAnswer**: 21 (Connected - Robot hung up after no recognition).
   * - **SucceededChatbotHangUpAfterSilence**: 22 (Connected - Hung up due to silence timeout).
   * - **SucceededClientHangUpAfterNoAnswer**: 23 (Connected - User hung up after no recognition).
   * - **SucceededClientHangUp**: 24 (Connected - User hung up without reason).
   * - **SucceededTransferByIntent**: 25 (Connected - Transferred to agent by intent match).
   * - **SucceededTransferAfterNoAnswer**: 26 (Connected - Transferred to agent after no recognition).
   * - **SucceededInoInterAction**: 27 (Connected - No interaction from user).
   * - **SucceededError**: 28 (Connected - System exception interruption).
   * - **SucceededSpecialInterceptVoiceAssistant**: 29 (Connected - Special intercept - Voice assistant).
   * - **SucceededSpecialInterceptExtensionNumberTransfer**: 30 (Connected - Special intercept - Extension number transfer).
   * - **SucceededSpecialInterceptCustomSpecialIntercept**: 31 (Connected - Special intercept - Custom intercept).
   * - **HighRiskSipCode**: 32 (Not dialed - High risk, no outbound call).
   * 
   * @example
   * ["Executing"]
   */
  taskStatusFilter?: string;
  static names(): { [key: string]: string } {
    return {
      endActualTimeFilter: 'EndActualTimeFilter',
      hasAnsweredFilter: 'HasAnsweredFilter',
      hasHangUpByRejectionFilter: 'HasHangUpByRejectionFilter',
      hasReachedEndOfFlowFilter: 'HasReachedEndOfFlowFilter',
      instanceId: 'InstanceId',
      jobFailureReasonsFilter: 'JobFailureReasonsFilter',
      jobGroupId: 'JobGroupId',
      jobStatusFilter: 'JobStatusFilter',
      labelsJson: 'LabelsJson',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryText: 'QueryText',
      startActualTimeFilter: 'StartActualTimeFilter',
      taskStatusFilter: 'TaskStatusFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endActualTimeFilter: 'number',
      hasAnsweredFilter: 'boolean',
      hasHangUpByRejectionFilter: 'boolean',
      hasReachedEndOfFlowFilter: 'boolean',
      instanceId: 'string',
      jobFailureReasonsFilter: 'string',
      jobGroupId: 'string',
      jobStatusFilter: 'string',
      labelsJson: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      queryText: 'string',
      startActualTimeFilter: 'number',
      taskStatusFilter: 'string',
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

