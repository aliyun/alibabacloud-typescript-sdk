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
   * Specifies whether the call was answered.
   * 
   * @example
   * true
   */
  hasAnsweredFilter?: boolean;
  /**
   * @remarks
   * Specifies whether the call was hung up due to rejection.
   * 
   * @example
   * false
   */
  hasHangUpByRejectionFilter?: boolean;
  /**
   * @remarks
   * Specifies whether the call reached the end of the flow.
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
   * - Scheduling: scheduling.
   * - Executing: executing.
   * - Succeeded: ended - reached.
   * - Paused: paused.
   * - Failed: ended - not reached.
   * - Cancelled: cancelled - manual intervention.
   * 
   * @example
   * Succeeded
   */
  jobStatusFilter?: string;
  /**
   * @remarks
   * The filter condition for labels associated with calls.
   * 
   * > This condition only supports filtering by labels that have specific enumerated label values configured, that is, labels with specific label values configured in large language model scenarios.
   */
  labelsJson?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * >Notice: This parameter is required.</notice>
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * >Notice: This parameter is required.</notice>
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
   * The call status, such as ["Executing","Succeeded"]. Separate multiple values with commas (,).
   * 
   * Valid values:
   * 
   * (Note: The **Succeeded** status has been subdivided into specific reasons. The **Succeeded**: 1 (answered) status is no longer returned. Instead, specific sub-reason types are returned.)
   * 
   * - **Executing**: 0 (dialing).
   * - **Succeeded**: 1 (answered).
   * - **NoAnswer**: 2 (not answered - no one picked up).
   * - **NotExist**: 3 (not answered - nonexistent number).
   * - **Busy**: 4 (not answered - busy).
   * - **Cancelled**: 5 (not dialed - task stopped).
   * - **Failed**: 6 (failed).
   * - **NotConnected**: 7 (not answered - unreachable).
   * - **PoweredOff**: 8 (not answered - powered off).
   * - **OutOfService**: 9 (not answered - callee out of service).
   * - **InArrears**: 10 (not answered - callee has overdue payment).
   * - **EmptyNumber**: 11 (not dialed - nonexistent number, no outbound call).
   * - **PerDayCallCountLimit**: 12 (not dialed - daily limit exceeded).
   * - **ContactBlockList**: 13 (not dialed - blacklisted).
   * - **CallerNotRegistered**: 14 (not dialed - caller number not registered).
   * - **Terminated**: 15 (not dialed - terminated).
   * - **VerificationCancelled**: 16 (not dialed - cancelled due to pre-call verification failure).
   * - **OutOfServiceNoCall**: 17 (not dialed - callee out of service, no outbound call).
   * - **InArrearsNoCall**: 18 (not dialed - callee has overdue payment, no outbound call).
   * - **CallingNumberNotExist**: 19 (not dialed - caller number does not exist).
   * - **SucceededFinish**: 20 (answered - completed normally).
   * - **SucceededChatbotHangUpAfterNoAnswer**: 21 (answered - robot hung up after rejection).
   * - **SucceededChatbotHangUpAfterSilence**: 22 (answered - hung up due to silence timeout).
   * - **SucceededClientHangUpAfterNoAnswer**: 23 (answered - user hung up after rejection).
   * - **SucceededClientHangUp**: 24 (answered - user hung up without reason).
   * - **SucceededTransferByIntent**: 25 (answered - transferred to agent by intent).
   * - **SucceededTransferAfterNoAnswer**: 26 (answered - transferred to agent after rejection).
   * - **SucceededInoInterAction**: 27 (answered - no interaction from user side).
   * - **SucceededError**: 28 (answered - interrupted by system error).
   * - **SucceededSpecialInterceptVoiceAssistant**: 29 (answered - special interception - voice assistant).
   * - **SucceededSpecialInterceptExtensionNumberTransfer**: 30 (answered - special interception - extension number transfer).
   * - **SucceededSpecialInterceptCustomSpecialIntercept**: 31 (answered - special interception - custom interception).
   * - **HighRiskSipCode**: 32 (not dialed - high risk, no outbound call).
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

