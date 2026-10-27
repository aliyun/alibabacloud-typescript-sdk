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
   * Specifies whether the flow is completed.
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
   * - Scheduling: scheduling
   * - Executing: executing
   * - Succeeded: finished and reached
   * - Paused: paused
   * - Failed: finished but not reached
   * - Cancelled: cancelled due to manual intervention
   * 
   * @example
   * Succeeded
   */
  jobStatusFilter?: string;
  /**
   * @remarks
   * The filter condition for call labels.
   * 
   * >This condition can only filter by labels that are configured with specific enumerated label values, which means labels configured with specific label values in large language model scenarios.
   */
  labelsJson?: string[];
  /**
   * @remarks
   * The page number.
   * >Notice: This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * >Notice: This parameter is required.
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
   * The call status. Multiple values are separated by commas. Example: ["Executing","Succeeded"]. Valid values:
   * (Note: The **Succeeded** status is subdivided into specific causes. The **Succeeded**: 1 (answered) status is not displayed. All subsequent returned values are specific subdivided cause types.)
   * 
   * - **Executing**: 0 (dialing)
   * - **Succeeded**: 1 (answered)
   * - **NoAnswer**: 2 (not answered - no answer)
   * - **NotExist**: 3 (not answered - nonexistent number)
   * - **Busy**: 4 (not answered - busy)
   * - **Cancelled**: 5 (not called - task stopped)
   * - **Failed**: 6 (failed)
   * - **NotConnected**: 7 (not answered - unreachable)
   * - **PoweredOff**: 8 (not answered - powered off)
   * - **OutOfService**: 9 (not answered - callee suspended)
   * - **InArrears**: 10 (not answered - callee overdue payment)
   * - **EmptyNumber**: 11 (not called - nonexistent number not called)
   * - **PerDayCallCountLimit**: 12 (not called - daily limit exceeded)
   * - **ContactBlockList**: 13 (not called - blacklist)
   * - **CallerNotRegistered**: 14 (not called - caller number not registered)
   * - **Terminated**: 15 (not called - terminated)
   * - **VerificationCancelled**: 16 (not called - cancelled due to pre-call verification failure)
   * - **OutOfServiceNoCall**: 17 (not called - callee suspended and not called)
   * - **InArrearsNoCall**: 18 (not called - callee overdue payment and not called)
   * - **CallingNumberNotExist**: 19 (not called - caller number does not exist)
   * - **SucceededFinish**: 20 (answered - normally completed)
   * - **SucceededChatbotHangUpAfterNoAnswer**: 21 (answered - robot hangs up after rejection)
   * - **SucceededChatbotHangUpAfterSilence**: 22 (answered - hangs up due to silence timeout)
   * - **SucceededClientHangUpAfterNoAnswer**: 23 (answered - user hangs up after rejection)
   * - **SucceededClientHangUp**: 24 (answered - user hangs up without reason)
   * - **SucceededTransferByIntent**: 25 (answered - transferred to agent due to intent match)
   * - **SucceededTransferAfterNoAnswer**: 26 (answered - transferred to agent after rejection)
   * - **SucceededInoInterAction**: 27 (answered - no interaction from user)
   * - **SucceededError**: 28 (answered - interrupted by system exception)
   * - **SucceededSpecialInterceptVoiceAssistant**: 29 (answered - special case interception - voice assistant)
   * - **SucceededSpecialInterceptExtensionNumberTransfer**: 30 (answered - special case interception - extension number transfer)
   * - **SucceededSpecialInterceptCustomSpecialIntercept**: 31 (answered - special case interception - custom interception)
   * - **HighRiskSipCode**: 32 (not called - high risk and not called)
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

