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
   * Specifies whether the call is hung up due to unrecognized intent.
   * 
   * @example
   * false
   */
  hasHangUpByRejectionFilter?: boolean;
  /**
   * @remarks
   * Specifies whether the call flow is completed.
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
   * - Scheduling: Scheduling.
   * - Executing: Executing.
   * - Succeeded: Completed - Reached.
   * - Paused: Paused.
   * - Failed: Completed - Not reached.
   * - Cancelled: Canceled - Manual intervention.
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
   * The number of entries per page.
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
   * The call status. Separate multiple values with commas, such as ["Executing","Succeeded"].
   * Valid values:
   * (Note: The **Succeeded** status is subdivided into specific causes. The general **Succeeded**: 1 (Connected) status is not returned. All returned values are specific subdivided causes.)
   * 
   * - **Executing**: 0 (Dialing).
   * - **Succeeded**: 1 (Connected).
   * - **NoAnswer**: 2 (Not connected - no answer).
   * - **NotExist**: 3 (Not connected - nonexistent number).
   * - **Busy**: 4 (Not connected - busy).
   * - **Cancelled**: 5 (Not dialed - task stopped).
   * - **Failed**: 6 (Failed).
   * - **NotConnected**: 7 (Not connected - unreachable).
   * - **PoweredOff**: 8 (Not connected - powered off).
   * - **OutOfService**: 9 (Not connected - callee out of service).
   * - **InArrears**: 10 (Not connected - callee has overdue payments).
   * - **EmptyNumber**: 11 (Not dialed - nonexistent number, not dialed).
   * - **PerDayCallCountLimit**: 12 (Not dialed - daily limit exceeded).
   * - **ContactBlockList**: 13 (Not dialed - blacklisted).
   * - **CallerNotRegistered**: 14 (Not dialed - caller number not registered).
   * - **Terminated**: 15 (Not dialed - terminated).
   * - **VerificationCancelled**: 16 (Not dialed - canceled due to pre-call verification failure).
   * - **OutOfServiceNoCall**: 17 (Not dialed - callee out of service, not dialed).
   * - **InArrearsNoCall**: 18 (Not dialed - callee has overdue payments, not dialed).
   * - **CallingNumberNotExist**: 19 (Not dialed - caller number does not exist).
   * - **SucceededFinish**: 20 (Connected - normal completion).
   * - **SucceededChatbotHangUpAfterNoAnswer**: 21 (Connected - robot hung up after intent not recognized).
   * - **SucceededChatbotHangUpAfterSilence**: 22 (Connected - hung up due to silence timeout).
   * - **SucceededClientHangUpAfterNoAnswer**: 23 (Connected - user hung up after intent not recognized).
   * - **SucceededClientHangUp**: 24 (Connected - user hung up without reason).
   * - **SucceededTransferByIntent**: 25 (Connected - transferred to a human agent due to matched intent).
   * - **SucceededTransferAfterNoAnswer**: 26 (Connected - transferred to a human agent after intent not recognized).
   * - **SucceededInoInterAction**: 27 (Connected - no interaction from the user).
   * - **SucceededError**: 28 (Connected - interrupted by a system exception).
   * - **SucceededSpecialInterceptVoiceAssistant**: 29 (Connected - special interception - voice assistant).
   * - **SucceededSpecialInterceptExtensionNumberTransfer**: 30 (Connected - special interception - extension number transfer).
   * - **SucceededSpecialInterceptCustomSpecialIntercept**: 31 (Connected - special interception - custom interception).
   * - **HighRiskSipCode**: 32 (Not dialed - high risk, not dialed).
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

