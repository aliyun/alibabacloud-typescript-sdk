// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobsWithResultRequest extends $dara.Model {
  /**
   * @remarks
   * Filters for calls that ended on or before the specified time. Specify the time as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1579055783000
   */
  endActualTimeFilter?: number;
  /**
   * @remarks
   * Filters jobs by whether the call was answered.
   * 
   * @example
   * true
   */
  hasAnsweredFilter?: boolean;
  /**
   * @remarks
   * Filters jobs by whether the call was disconnected due to a rejection.
   * 
   * @example
   * false
   */
  hasHangUpByRejectionFilter?: boolean;
  /**
   * @remarks
   * Filters jobs by whether the call flow was completed.
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
   * The job failure reasons to filter by.
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
   * The job status to filter by. Valid values:
   * 
   * - `Scheduling`: The job is scheduled and awaiting execution.
   * 
   * - `Executing`: The job is in progress.
   * 
   * - `Succeeded`: The job is completed and the contact was reached.
   * 
   * - `Paused`: The job is paused.
   * 
   * - `Failed`: The job completed but failed to reach the contact.
   * 
   * - `Cancelled`: The job was canceled by a user.
   * 
   * @example
   * Succeeded
   */
  jobStatusFilter?: string;
  /**
   * @remarks
   * The filter conditions for calls, based on their labels.
   * 
   * > This filter applies only to labels that are configured with a predefined set of values (enumerated values). These labels are typically used in large model scenarios.
   */
  labelsJson?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * >Notice: 
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * >Notice: This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search query for a specific job, such as the contact\\"s phone number.
   * 
   * @example
   * 1882020****
   */
  queryText?: string;
  /**
   * @remarks
   * Filters for calls that started on or after the specified time. Specify the time as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1579055782000
   */
  startActualTimeFilter?: number;
  /**
   * @remarks
   * The call statuses to filter by. You can specify multiple statuses as a JSON array of strings, such as `["Executing", "Succeeded"]`.
   * Valid values:
   * (Note: The **Succeeded** status is subdivided into more specific reasons. The general **Succeeded** (1: Connected) status is no longer returned. Instead, one of the more specific sub-statuses is returned.)
   * 
   * - **Executing** (0): The call is being placed.
   * 
   * - **Succeeded** (1): The call was connected.
   * 
   * - **NoAnswer** (2): Not connected - No answer.
   * 
   * - **NotExist** (3): Not connected - The dialed number does not exist.
   * 
   * - **Busy** (4): Not connected - The line was busy.
   * 
   * - **Cancelled** (5): Not placed - The job was stopped before the call could be dialed.
   * 
   * - **Failed** (6): The call failed.
   * 
   * - **NotConnected** (7): Not connected - The call could not be connected.
   * 
   * - **PoweredOff** (8): Not connected - The recipient\\"s phone was powered off.
   * 
   * - **OutOfService** (9): Not connected - The recipient\\"s number is out of service.
   * 
   * - **InArrears** (10): Not connected - The recipient\\"s account is in arrears.
   * 
   * - **EmptyNumber** (11): Not placed - The number was identified as an empty number and was not dialed.
   * 
   * - **PerDayCallCountLimit** (12): Not placed - The daily call limit was reached.
   * 
   * - **ContactBlockList** (13): Not placed - The number is on a blocklist.
   * 
   * - **CallerNotRegistered** (14): Not placed - The calling number is not registered.
   * 
   * - **Terminated** (15): Not placed - The call was terminated.
   * 
   * - **VerificationCancelled** (16): Not placed - Canceled after failing a pre-call verification.
   * 
   * - **OutOfServiceNoCall** (17): Not placed - The number is out of service and was not dialed.
   * 
   * - **InArrearsNoCall** (18): Not placed - The recipient is in arrears and was not dialed.
   * 
   * - **CallingNumberNotExist** (19): Not placed - The calling number does not exist.
   * 
   * - **SucceededFinish** (20): Connected - The call completed normally.
   * 
   * - **SucceededChatbotHangUpAfterNoAnswer** (21): Connected - The chatbot hung up after a rejection.
   * 
   * - **SucceededChatbotHangUpAfterSilence** (22): Connected - The chatbot hung up due to a silence timeout.
   * 
   * - **SucceededClientHangUpAfterNoAnswer** (23): Connected - The user hung up after a rejection.
   * 
   * - **SucceededClientHangUp** (24): Connected - The user hung up for no specific reason.
   * 
   * - **SucceededTransferByIntent** (25): Connected - The call was transferred to an agent based on user intent.
   * 
   * - **SucceededTransferAfterNoAnswer** (26): Connected - The call was transferred to an agent after a rejection.
   * 
   * - **SucceededInoInterAction** (27): Connected - No interaction from the user.
   * 
   * - **SucceededError** (28): Connected - The call was interrupted by a system error.
   * 
   * - **SucceededSpecialInterceptVoiceAssistant** (29): Connected - Intercepted by a voice assistant.
   * 
   * - **SucceededSpecialInterceptExtensionNumberTransfer** (30): Connected - Intercepted for an extension number transfer.
   * 
   * - **SucceededSpecialInterceptCustomSpecialIntercept** (31): Connected - Intercepted by a custom rule.
   * 
   * - **HighRiskSipCode** (32): Not placed - High-risk SIP code.
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

