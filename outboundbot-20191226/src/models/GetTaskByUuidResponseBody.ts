// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskByUuidResponseBodyTaskConversations extends $dara.Model {
  /**
   * @remarks
   * Action type
   * 
   * - Dialogue: Dialogue
   * 
   * - AbortDialogue: Abort a dialogue
   * 
   * - SilenceTimeout: Silence timeout
   * 
   * - CollectedNumber: Collected number
   * 
   * - EndDialogue: End a dialogue
   * 
   * - Broadcast: Greeting message
   * 
   * - HangUp: Hang up
   * 
   * - Authorize: Authorization
   * 
   * - TransferToAgent: Transfer to an agent
   * 
   * - TransferToIVR: Transfer to an IVR system
   * 
   * - RedirectToPage: Redirect to a page
   * 
   * - CollectNumber: Collect a number
   * 
   * - WaitOnAsyncTask: Wait for an asynchronous task
   * 
   * - Error: Error
   * 
   * @example
   * Broadcast
   */
  action?: string;
  /**
   * @remarks
   * Conversation text.
   * 
   * @example
   * 你好，我是**客服
   */
  script?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * fd279983-93b9-b13b-9a34-64e5df473225
   */
  sequenceId?: string;
  /**
   * @remarks
   * Who spoke in the conversation. Valid values: Robot or Contact.
   * 
   * @example
   * Robot
   */
  speaker?: string;
  /**
   * @remarks
   * Timestamp when the summary was created.
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
   * Actual execution time
   * 
   * @example
   * 1640090211434
   */
  actualTime?: number;
  /**
   * @remarks
   * Call ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  callId?: string;
  /**
   * @remarks
   * Callee number
   * 
   * @example
   * 13777777777
   */
  calledNumber?: string;
  /**
   * @remarks
   * Caller number
   * 
   * @example
   * 057190294
   */
  callingNumber?: string;
  /**
   * @remarks
   * List of conversations
   */
  conversations?: GetTaskByUuidResponseBodyTaskConversations[];
  /**
   * @remarks
   * Reason the task ended
   * 
   * - FINISHED: Task completed normally
   * 
   * - CHATBOT_HANGUP_AFTER_NOANSWER: Bot hung up after no answer
   * 
   * - CHATBOT_HANGUP_AFTER_SILENCE: Bot hung up after silence timeout
   * 
   * - CLIENT_HANGUP_AFTER_NOANSWER: Client hung up after no answer
   * 
   * - CLIENT_HANGUP: Client hung up without reason
   * 
   * - TRANSFER_BY_INTENT: Transferred to agent after intent match
   * 
   * - TRANSFER_AFTER_NOANSWER: Transferred to agent after no answer
   * 
   * - INO_INTERACTION: No interaction from client
   * 
   * - ERROR: System error interrupted the task
   * 
   * - SPECIAL_INTERCEPT_VOICE_ASSISTANT: Intercepted due to voice assistant
   * 
   * - SPECIAL_INTERCEPT_EXTENSION_NUMBER_TRANSFER: Intercepted due to extension number transfer
   * 
   * >Notice: 
   * 
   * This parameter is a string that returns an enumeration value such as FINISHED.
   * 
   * @example
   * FINISHED
   */
  endReason?: string;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 1640090211434
   */
  endTime?: number;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 2
   */
  id?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  instanceId?: string;
  /**
   * @remarks
   * Job group ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  jobId?: string;
  /**
   * @remarks
   * Planned execution time (deprecated)
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
   * API status code
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
   * Response message
   * 
   * @example
   * Success
   */
  message?: string;
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
   * Indicates whether the request succeeded
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Task information
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

