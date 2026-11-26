// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoResponseBodyDataOutputTags extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag.
   * 
   * @example
   * 9ca2*****************************
   */
  id?: string;
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * Evaluate the customer\"s interest in the car model and likelihood of purchase
   */
  outputTagDescription?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * Customer intent level
   */
  outputTagName?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class QueryConversationDetailInfoResponseBodyDataVariables extends $dara.Model {
  /**
   * @remarks
   * The ID of the variable.
   * 
   * @example
   * 22
   */
  id?: string;
  /**
   * @remarks
   * The key of the variable.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the variable is required. Valid values:
   * 
   * - true: yes
   * 
   * - false: no
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * The source of the variable.
   * 
   * @example
   * Sample value
   */
  source?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * John Doe
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
   * - CALL_FORWARDING: call forwarding
   * - INCOMING_CALL_BARRED: incoming calls barred
   * - CALL_REJECTED: call rejected
   * - ANSWERED: answered
   * - USER_BUSY: user busy
   * - POWERED_OFF: powered off
   * - NO_USER_RESPONSE: no user response
   * - OPERATOR_BLOCK: blocked by the carrier
   * - OTHERS: other statuses
   * - SUSPEND: suspended
   * - CANCEL: canceled by the caller
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
   *     "content": "111 Hello, age 222, male. I am the official consultant of ** Automobile. We have launched a new model **; ** is now on the market, starting at ** 10,000 yuan, with * units sold in ** minutes. Would you like to learn more?",
   *     "role": "assistant"
   *   },
   *   {
   *     "content": "<Customer interrupts> Hey, who are you?",
   *     "role": "user"
   *   },
   *   {
   *     "content": "<Customer interrupts> Say that again.",
   *     "role": "user"
   *   },
   *   {
   *     "content": "Hey, I didn\"t catch that.",
   *     "role": "user"
   *   },
   *   {
   *     "content": "What are you saying?",
   *     "role": "user"
   *   },
   *   {
   *     "content": "Hello,",
   *     "role": "assistant"
   *   },
   *   {
   *     "content": "I am the sales service consultant at the ** Automobile headquarters.",
   *     "role": "assistant"
   *   },
   *   {
   *     "content": "We recently launched a new car, **. Would you like to know if you are interested in this model?",
   *     "role": "assistant"
   *   },
   *   {
   *     "content": "<Customer interrupts> Hey, then who am I?",
   *     "role": "user"
   *   },
   *   {
   *     "content": "What are you talking about?",
   *     "role": "user"
   *   },
   *   {
   *     "content": "Sorry to bother you, Mr. 111.",
   *     "role": "assistant"
   *   },
   *   {
   *     "content": "Have a great day! Goodbye!",
   *     "role": "assistant"
   *   }
   * ]
   */
  conversationRecord?: string;
  /**
   * @remarks
   * The duration of the call. The value is 0 if the call is not connected. Unit: seconds.
   * 
   * @example
   * 16
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
   * Sample value
   */
  encryptionType?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * Canceled by the caller
   */
  failedReason?: string;
  /**
   * @remarks
   * The party that hung up. Valid values:
   * 
   * - **0**: user
   * - **1**: chatbot
   * 
   * @example
   * User
   */
  hangupDirection?: string;
  /**
   * @remarks
   * The primary intent.
   * 
   * @example
   * D
   */
  majorIntent?: string;
  /**
   * @remarks
   * The external business transaction ID. You can use a unique ID to associate business data.
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
   * The time when the call was answered. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1754617273000
   */
  pickUpTime?: number;
  /**
   * @remarks
   * The download URL of the recording file. This field is returned only after the recording file is generated.
   * 
   * @example
   * https://********
   */
  recordingFileDownloadUrl?: string;
  /**
   * @remarks
   * The time when the call ended. The value is a timestamp in milliseconds.
   * 
   * @example
   * 98
   */
  releaseTime?: number;
  /**
   * @remarks
   * The time when the call started. The value is a timestamp in milliseconds.
   * 
   * @example
   * 123123123123123
   */
  startCallTime?: number;
  /**
   * @remarks
   * The call status code. For more information, see [Call status codes](https://help.aliyun.com/document_detail/112804.html) of Voice Messaging.
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
   * The list of call variables. These are the call variables associated with the call task that you created.
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
   * The details of the access denial.
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
   * Success
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
   * Indicates whether the operation was successful. Valid values:
   * - **true**: yes
   * - **false**: no
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

