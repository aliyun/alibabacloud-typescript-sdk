// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoNewResponseBodyDataOutputTags extends $dara.Model {
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 12
   */
  id?: string;
  /**
   * @remarks
   * The tag description.
   * 
   * @example
   * Evaluate the customer\\"s interest in the model and purchase likelihood.
   */
  outputTagDescription?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Customer intent level.
   */
  outputTagName?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ["High (very positive, high probability of conversion)"]
   */
  outputTagValue?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      outputTagDescription: 'OutputTagDescription',
      outputTagName: 'OutputTagName',
      outputTagValue: 'OutputTagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      outputTagDescription: 'string',
      outputTagName: 'string',
      outputTagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationDetailInfoNewResponseBodyDataVariables extends $dara.Model {
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The variable key.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * user name
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the variable is required.
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * source
   */
  source?: string;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * mike
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      name: 'Name',
      required: 'Required',
      source: 'Source',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      name: 'string',
      required: 'boolean',
      source: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationDetailInfoNewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The batch ID.
   * 
   * @example
   * 1234******
   */
  batchId?: string;
  /**
   * @example
   * 68
   */
  branchId?: number;
  /**
   * @remarks
   * The unique ID of the call.
   * 
   * @example
   * 123*******^213******
   */
  callId?: string;
  /**
   * @remarks
   * The call result. Valid values:
   * - CALL_FORWARDING: Call forwarding.
   * - INCOMING_CALL_BARRED: Incoming call barred.
   * - CALL_REJECTED: Call rejected.
   * - ANSWERED: User answered.
   * - USER_BUSY: Callee busy.
   * - POWERED_OFF: Powered off.
   * - NO_USER_RESPONSE: Out of service area.
   * - OPERATOR_BLOCK: Operator blocked.
   * - OTHERS: Other status.
   * - SUSPEND: Service suspended.
   * - CANCEL: Caller canceled.
   * - INVALID_NUMBER: Invalid number.
   * - UNAVAILABLE: Temporarily unavailable.
   * - NETWORK_BUSY: Network busy.
   * - NO_ANSWER: No answer.
   * 
   * @example
   * ANSWERED
   */
  callResult?: string;
  /**
   * @remarks
   * The callee number.
   * 
   * @example
   * 130********
   */
  calledPhone?: string;
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 0571*******
   */
  callerPhone?: string;
  /**
   * @remarks
   * The chat record information. The structure is a JSON array, sorted in chronological order. The format is as follows:
   * ```json
   * [
   *     {
   *         "content":"Chat content",
   *         "role":"Role",//Valid values: user, assistant (robot)
   *     }
   * ]
   * ```
   * 
   * @example
   * [
   *   {
   *     "content": "111Hello, age 222, gender male, I am the official consultant of ** Auto, we have a new model **; ** is now available, starting at ** yuan, ** minutes to break * units, would you like to learn more?",
   *     "role": "assistant"
   *   },
   *   {
   *     "content": "<Customer interruption> Hey, who are you?",
   *     "role": "user"
   *   },
   *   {
   *     "content": "<Customer interruption> Say that again.",
   *     "role": "user"
   *   }]
   */
  conversationRecord?: string;
  /**
   * @remarks
   * The number of conversation turns.
   * 
   * @example
   * 23
   */
  conversationTurnCount?: number;
  /**
   * @remarks
   * The task detail ID.
   * 
   * @example
   * 1234*******
   */
  detailId?: string;
  /**
   * @remarks
   * The call duration in seconds. The value is 0 if the call is not connected.
   * 
   * @example
   * 30
   */
  duration?: number;
  /**
   * @example
   * 28
   */
  encryptionType?: number;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * Actively canceled.
   */
  failedReason?: string;
  /**
   * @remarks
   * The hangup direction. Valid values:
   * 
   * - **0**: User.
   * - **1**: Robot.
   * 
   * @example
   * 0
   */
  hangupDirection?: string;
  /**
   * @remarks
   * The import time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 43
   */
  importedTime?: number;
  /**
   * @remarks
   * The major intent.
   * 
   * @example
   * A
   */
  majorIntent?: string;
  /**
   * @remarks
   * The variable information used at runtime, stored in this field as key-value pairs.
   * 
   * @example
   * {
   *   "date": "666",
   *   "phoneNumber": "777",
   *   "distance": "555",
   *   "mendian": "444",
   *   "sex": "male",
   *   "name": "111",
   *   "age": "222"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The external business serial number. You can use a unique ID for business association.
   * 
   * @example
   * 123***
   */
  outId?: string;
  /**
   * @remarks
   * The output tag information.
   */
  outputTags?: QueryConversationDetailInfoNewResponseBodyDataOutputTags[];
  /**
   * @remarks
   * The time when the call was answered. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 12349732441
   */
  pickUpTime?: number;
  /**
   * @remarks
   * The download URL of the recording file. This field is available only after a recording file is generated.
   * 
   * @example
   * recording.oss.file
   */
  recordingFileDownloadUrl?: string;
  /**
   * @remarks
   * The time when the call ended. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 7
   */
  releaseTime?: number;
  /**
   * @remarks
   * The time when the call started. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1286987391
   */
  startCallTime?: number;
  /**
   * @remarks
   * The agent status.
   * 
   * @example
   * 72
   */
  status?: number;
  /**
   * @remarks
   * The call status code. For more information, see [Call status codes](https://help.aliyun.com/document_detail/112804.html) in Voice Messaging.
   * 
   * @example
   * 200005
   */
  statusCode?: string;
  /**
   * @remarks
   * The call status information returned by the carrier.
   * 
   * @example
   * Call ended (dual call)
   */
  statusMsg?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 138************
   */
  taskId?: string;
  /**
   * @remarks
   * The call variable information.
   */
  variables?: QueryConversationDetailInfoNewResponseBodyDataVariables[];
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      branchId: 'BranchId',
      callId: 'CallId',
      callResult: 'CallResult',
      calledPhone: 'CalledPhone',
      callerPhone: 'CallerPhone',
      conversationRecord: 'ConversationRecord',
      conversationTurnCount: 'ConversationTurnCount',
      detailId: 'DetailId',
      duration: 'Duration',
      encryptionType: 'EncryptionType',
      failedReason: 'FailedReason',
      hangupDirection: 'HangupDirection',
      importedTime: 'ImportedTime',
      majorIntent: 'MajorIntent',
      options: 'Options',
      outId: 'OutId',
      outputTags: 'OutputTags',
      pickUpTime: 'PickUpTime',
      recordingFileDownloadUrl: 'RecordingFileDownloadUrl',
      releaseTime: 'ReleaseTime',
      startCallTime: 'StartCallTime',
      status: 'Status',
      statusCode: 'StatusCode',
      statusMsg: 'StatusMsg',
      taskId: 'TaskId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      branchId: 'number',
      callId: 'string',
      callResult: 'string',
      calledPhone: 'string',
      callerPhone: 'string',
      conversationRecord: 'string',
      conversationTurnCount: 'number',
      detailId: 'string',
      duration: 'number',
      encryptionType: 'number',
      failedReason: 'string',
      hangupDirection: 'string',
      importedTime: 'number',
      majorIntent: 'string',
      options: 'string',
      outId: 'string',
      outputTags: { 'type': 'array', 'itemType': QueryConversationDetailInfoNewResponseBodyDataOutputTags },
      pickUpTime: 'number',
      recordingFileDownloadUrl: 'string',
      releaseTime: 'number',
      startCallTime: 'number',
      status: 'number',
      statusCode: 'string',
      statusMsg: 'string',
      taskId: 'string',
      variables: { 'type': 'array', 'itemType': QueryConversationDetailInfoNewResponseBodyDataVariables },
    };
  }

  validate() {
    if(Array.isArray(this.outputTags)) {
      $dara.Model.validateArray(this.outputTags);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationDetailInfoNewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason for access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned result data.
   */
  data?: QueryConversationDetailInfoNewResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryConversationDetailInfoNewResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

