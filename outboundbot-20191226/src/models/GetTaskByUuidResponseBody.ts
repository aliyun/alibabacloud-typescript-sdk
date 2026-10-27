// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskByUuidResponseBodyTaskConversations extends $dara.Model {
  /**
   * @remarks
   * The instruction. Valid values:
   * - BeginDialogue: starts the conversation.
   * - Dialogue: indicates a conversation.
   * - AbortDialogue: aborts the conversation.
   * - SilenceTimeout: indicates a silence timeout.
   * - CollectedNumber: indicates a collected number.
   * - EndDialogue: ends the conversation.
   * - Broadcast: indicates an opening remark.
   * - HangUp: hangs up the call.
   * - Authorize: grants authorization.
   * - TransferToAgent: transfers the call to an agent.
   * - TransferToIVR: transfers the call to an IVR.
   * - RedirectToPage: redirects to a page.
   * - CollectNumber: collects a number.
   * - WaitOnAsyncTask: waits for an asynchronous task.
   * - Error: indicates an error.
   * 
   * @example
   * Broadcast
   */
  action?: string;
  /**
   * @remarks
   * The conversation text.
   * 
   * @example
   * Hello, I am **customer service
   */
  script?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * fd279983-93b9-b13b-9a34-64e5df473225
   */
  sequenceId?: string;
  /**
   * @remarks
   * The speaker of the conversation. Valid values: Robot and Contact.
   * 
   * @example
   * Robot
   */
  speaker?: string;
  /**
   * @remarks
   * The time when the summary was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1579068424883
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      script: 'Script',
      sequenceId: 'SequenceId',
      speaker: 'Speaker',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      script: 'string',
      sequenceId: 'string',
      speaker: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskByUuidResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The actual execution time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640090211434
   */
  actualTime?: number;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  callId?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 13777777777
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 057190294
   */
  callingNumber?: string;
  /**
   * @remarks
   * The list of conversation information.
   */
  conversations?: GetTaskByUuidResponseBodyTaskConversations[];
  /**
   * @remarks
   * The end reason. Valid values:
   * - FINISHED: normal completion.
   * - CHATBOT_HANGUP_AFTER_NOANSWER: the robot hangs up after unrecognized input.
   * - CHATBOT_HANGUP_AFTER_SILENCE: the robot hangs up after a silence timeout.
   * - CLIENT_HANGUP_AFTER_NOANSWER: the user hangs up after unrecognized input.
   * - CLIENT_HANGUP: the user hangs up without a reason.
   * - TRANSFER_BY_INTENT: the call is transferred to a human agent due to intent matching.
   * - TRANSFER_AFTER_NOANSWER: the call is transferred to a human agent after unrecognized input.
   * - INO_INTERACTION: no interaction from the user.
   * - ERROR: the system is interrupted due to an exception.
   * - SPECIAL_INTERCEPT_VOICE_ASSISTANT: intercepted due to special circumstances - voice assistant.
   * - SPECIAL_INTERCEPT_EXTENSION_NUMBER_TRANSFER: intercepted due to special circumstances - extension number transfer.
   * 
   * >Notice: The data type of this parameter is String. The returned value is an enumerated value such as FINISHED.</notice>
   * 
   * @example
   * FINISHED
   */
  endReason?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640090211434
   */
  endTime?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  instanceId?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  jobId?: string;
  /**
   * @remarks
   * **[Deprecated]** The planned execution time of the task. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640090211434
   */
  plannedTime?: number;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      conversations: 'Conversations',
      endReason: 'EndReason',
      endTime: 'EndTime',
      id: 'Id',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      plannedTime: 'PlannedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      conversations: { 'type': 'array', 'itemType': GetTaskByUuidResponseBodyTaskConversations },
      endReason: 'string',
      endTime: 'number',
      id: 'string',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      plannedTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conversations)) {
      $dara.Model.validateArray(this.conversations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskByUuidResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
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
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
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
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The task information.
   * 
   * @example
   * {}
   */
  task?: GetTaskByUuidResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      task: GetTaskByUuidResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

