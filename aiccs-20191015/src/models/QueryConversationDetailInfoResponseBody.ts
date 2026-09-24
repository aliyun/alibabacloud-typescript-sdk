// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoResponseBodyDataOutputTags extends $dara.Model {
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 9ca2*****************************
   */
  id?: string;
  /**
   * @remarks
   * The tag description.
   * 
   * @example
   * Evaluate the customer\\"s interest in the vehicle model and purchase likelihood
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
   * ["High (very positive, high conversion probability)"]
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

export class QueryConversationDetailInfoResponseBodyDataVariables extends $dara.Model {
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 22
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
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the variable is required. Valid values:
   * 
   * - true: Required.
   * 
   * - false: Not required.
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * The variable source.
   * 
   * @example
   * Sample value
   */
  source?: string;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * John
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

export class QueryConversationDetailInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the call.
   * 
   * @example
   * 1231231231213^11231231231
   */
  callId?: string;
  /**
   * @remarks
   * The call result. Valid values:
   * - CALL_FORWARDING: Call forwarding.
   * - INCOMING_CALL_BARRED: Incoming call barred.
   * - CALL_REJECTED: Call rejected.
   * - ANSWERED: Answered by user.
   * - USER_BUSY: Callee busy.
   * - POWERED_OFF: Powered off.
   * - NO_USER_RESPONSE: Out of service area.
   * - OPERATOR_BLOCK: Blocked by carrier.
   * - OTHERS: Other status.
   * - SUSPEND: Service suspended.
   * - CANCEL: Canceled by caller.
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
   * 186******
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
   * The chat record information. The structure is a JSON array, and the chat records are sorted in chronological order. The format is as follows:
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
   *     "content": "111您好，年龄222，性别男，我这边是**汽车的官方顾问，我们新出了一款车型为**；**已经上市了，售价**万元起，**分钟破*台，您看要不了解一下？",
   *     "role": "assistant"
   *   },
   *   {
   *     "content": "<客户打断>哎，你是谁？",
   *     "role": "user"
   *   },
   *   {
   *     "content": "<客户打断>你再说一遍。",
   *     "role": "user"
   *   },
   *   {
   *     "content": "哎，我没听清。",
   *     "role": "user"
   *   },
   *   {
   *     "content": "你在说什么？",
   *     "role": "user"
   *   },
   *   {
   *     "content": "您好，",
   *     "role": "assistant"
   *   },
   *   {
   *     "content": "我是**汽车总部销售服务顾问。",
   *     "role": "assistant"
   *   },
   *   {
   *     "content": "我们最近推出了一款新车**，想了解一下您是否对这款车型感兴趣？",
   *     "role": "assistant"
   *   },
   *   {
   *     "content": "<客户打断>哎，那我是谁？",
   *     "role": "user"
   *   },
   *   {
   *     "content": "你在说什么呢？",
   *     "role": "user"
   *   },
   *   {
   *     "content": "抱歉打扰了，111先生。",
   *     "role": "assistant"
   *   },
   *   {
   *     "content": "祝您生活愉快！再见！",
   *     "role": "assistant"
   *   }
   * ]
   */
  conversationRecord?: string;
  /**
   * @remarks
   * The call duration, in seconds. The value is 0 if the call is not connected.
   * 
   * @example
   * 16
   */
  duration?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  encryptionType?: string;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * Actively canceled
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
   * User
   */
  hangupDirection?: string;
  /**
   * @remarks
   * The major intent.
   * 
   * @example
   * D
   */
  majorIntent?: string;
  /**
   * @remarks
   * The external business serial number. You can use a unique ID for business association.
   * 
   * @example
   * bb3bc32d-54b8-49c4-80d3-61583417d22e
   */
  outId?: string;
  /**
   * @remarks
   * The list of output tags.
   */
  outputTags?: QueryConversationDetailInfoResponseBodyDataOutputTags[];
  /**
   * @remarks
   * The time when the call was answered. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1754617273000
   */
  pickUpTime?: number;
  /**
   * @remarks
   * The download URL of the recording file. This field is available only after a recording file is generated.
   * 
   * @example
   * https://********
   */
  recordingFileDownloadUrl?: string;
  /**
   * @remarks
   * The time when the call ended. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 98
   */
  releaseTime?: number;
  /**
   * @remarks
   * The time when the call started. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 123123123123123
   */
  startCallTime?: number;
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
   * The list of call variables. These are the call variables associated with the call task you created.
   */
  variables?: QueryConversationDetailInfoResponseBodyDataVariables[];
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callResult: 'CallResult',
      calledPhone: 'CalledPhone',
      callerPhone: 'CallerPhone',
      conversationRecord: 'ConversationRecord',
      duration: 'Duration',
      encryptionType: 'EncryptionType',
      failedReason: 'FailedReason',
      hangupDirection: 'HangupDirection',
      majorIntent: 'MajorIntent',
      outId: 'OutId',
      outputTags: 'OutputTags',
      pickUpTime: 'PickUpTime',
      recordingFileDownloadUrl: 'RecordingFileDownloadUrl',
      releaseTime: 'ReleaseTime',
      startCallTime: 'StartCallTime',
      statusCode: 'StatusCode',
      statusMsg: 'StatusMsg',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callResult: 'string',
      calledPhone: 'string',
      callerPhone: 'string',
      conversationRecord: 'string',
      duration: 'number',
      encryptionType: 'string',
      failedReason: 'string',
      hangupDirection: 'string',
      majorIntent: 'string',
      outId: 'string',
      outputTags: { 'type': 'array', 'itemType': QueryConversationDetailInfoResponseBodyDataOutputTags },
      pickUpTime: 'number',
      recordingFileDownloadUrl: 'string',
      releaseTime: 'number',
      startCallTime: 'number',
      statusCode: 'string',
      statusMsg: 'string',
      variables: { 'type': 'array', 'itemType': QueryConversationDetailInfoResponseBodyDataVariables },
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

export class QueryConversationDetailInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied details.
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
   * The returned data.
   */
  data?: QueryConversationDetailInfoResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2051E18-FF3F-5C08-8D24-6F150D2AF757
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
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
      data: QueryConversationDetailInfoResponseBodyData,
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

