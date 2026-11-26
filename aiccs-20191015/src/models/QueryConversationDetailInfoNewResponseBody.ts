// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoNewResponseBodyDataFrozenSkills extends $dara.Model {
  /**
   * @remarks
   * The load mode.
   * 
   * @example
   * PRELOAD / ON_DEMAND
   */
  loadMode?: string;
  /**
   * @remarks
   * The skill business ID.
   * 
   * @example
   * 111111
   */
  skillId?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * Name
   */
  skillName?: string;
  /**
   * @remarks
   * The frozen skill version.
   * 
   * @example
   * V3-Test
   */
  skillVersion?: string;
  /**
   * @remarks
   * The version policy.
   * 
   * @example
   * PINNED / FOLLOW_CURRENT
   */
  versionPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      loadMode: 'LoadMode',
      skillId: 'SkillId',
      skillName: 'SkillName',
      skillVersion: 'SkillVersion',
      versionPolicy: 'VersionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadMode: 'string',
      skillId: 'string',
      skillName: 'string',
      skillVersion: 'string',
      versionPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * Evaluate the customer\"s interest in the vehicle model and purchase likelihood
   */
  outputTagDescription?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Customer intent level
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
   * Specifies whether the variable is required.
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
   * @remarks
   * The branch ID.
   * 
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
   * - CALL_FORWARDING: call forwarding
   * - INCOMING_CALL_BARRED: incoming call barred
   * - CALL_REJECTED: call rejected
   * - ANSWERED: answered
   * - USER_BUSY: callee busy
   * - POWERED_OFF: powered off
   * - NO_USER_RESPONSE: out of service area
   * - OPERATOR_BLOCK: blocked by carrier
   * - OTHERS: other statuses
   * - SUSPEND: suspended
   * - CANCEL: canceled by caller
   * - INVALID_NUMBER: invalid number
   * - UNAVAILABLE: temporarily unavailable
   * - NETWORK_BUSY: network busy
   * - NO_ANSWER: no answer
   * 
   * @example
   * ANSWERED
   */
  callResult?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 130********
   */
  calledPhone?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 0571*******
   */
  callerPhone?: string;
  /**
   * @remarks
   * The chat record information. The structure is a JSON array. The chat records are sorted in chronological order. Details:
   * ```json
   * [
   *     {
   *         "content":"Chat content",
   *         "role":"Role",//Valid values: user (user), assistant (chatbot)
   *     }
   * ]
   * ```
   * 
   * @example
   * [
   *   {
   *     "content": "Hello 111, age 222, male. I am the official consultant for ** Motors. We have launched a new model, **; it is now on the market with a starting price of ** ten thousand yuan, and * units were sold in ** minutes. Would you like to know more?",
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
   * The call duration. The value is 0 if the call is not connected. Unit: seconds.
   * 
   * @example
   * 30
   */
  duration?: number;
  /**
   * @remarks
   * The encryption method. Valid values:
   * - 0: no encryption
   * - 1: MD5
   * - 2: SHA256
   * - 3: SM3
   * 
   * @example
   * 28
   */
  encryptionType?: number;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * Manually canceled
   */
  failedReason?: string;
  /**
   * @remarks
   * The list of frozen skill snapshots at the start of the call.
   */
  frozenSkills?: QueryConversationDetailInfoNewResponseBodyDataFrozenSkills[];
  /**
   * @remarks
   * The hang-up direction. Valid values:
   * 
   * - **0**: user
   * - **1**: chatbot
   * 
   * @example
   * 0
   */
  hangupDirection?: string;
  /**
   * @remarks
   * The import time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 43
   */
  importedTime?: number;
  /**
   * @remarks
   * The primary intent.
   * 
   * @example
   * A
   */
  majorIntent?: string;
  /**
   * @remarks
   * The variable information used at runtime. The information is stored in this field as key-value pairs.
   * 
   * @example
   * {
   *   "date": "666",
   *   "phoneNumber": "777",
   *   "distance": "555",
   *   "mendian": "444",
   *   "sex": "Male",
   *   "name": "111",
   *   "age": "222"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The business transaction ID passed from external systems. You can use a unique ID to associate business data.
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
   * The time when the call was answered. The value is a timestamp in milliseconds.
   * 
   * @example
   * 12349732441
   */
  pickUpTime?: number;
  /**
   * @remarks
   * The download URL of the recording file. This field is returned only after the recording file is generated.
   * 
   * @example
   * recording.oss.file
   */
  recordingFileDownloadUrl?: string;
  /**
   * @remarks
   * The time when the call ended. The value is a timestamp in milliseconds.
   * 
   * @example
   * 7
   */
  releaseTime?: number;
  /**
   * @remarks
   * The time when the call started. The value is a timestamp in milliseconds.
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
   * The call status message returned by the carrier.
   * 
   * @example
   * Call ended (two-way call)
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
      frozenSkills: 'FrozenSkills',
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
      frozenSkills: { 'type': 'array', 'itemType': QueryConversationDetailInfoNewResponseBodyDataFrozenSkills },
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
    if(Array.isArray(this.frozenSkills)) {
      $dara.Model.validateArray(this.frozenSkills);
    }
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
   * The detailed reasons for access denial.
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
   * The response data.
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
   * Specifies whether the operation was called successfully. Valid values:
   * - **true**: success
   * - **false**: failure
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

